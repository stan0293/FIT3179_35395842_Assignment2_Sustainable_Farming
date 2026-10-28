/* Chart 10 only: financial-year control and viewport-aware definition help. */
function setupChart10Sankey(element, result) {
  const card = element.closest(".chart10-layout");
  const slider = card.querySelector("#chart10-year");
  const output = card.querySelector("#chart10-year-value");
  // Trim unused canvas space without shrinking the flows or changing their scale.
  function trimChartSpace() {
    const svg = element.querySelector("svg");
    if (!svg) return;
    const nodes = result.view.data("sourceNodeData").concat(result.view.data("gasNodeData"));
    const bottom = Math.max(...nodes.map((node) => node.nodeBottom));
    const bounds = svg.viewBox.baseVal;
    const height = Math.ceil(bottom + 40);
    svg.setAttribute("viewBox", [bounds.x, bounds.y, bounds.width, height].join(" "));
    svg.setAttribute("height", height);
  }
  function showYear(year) {
    const label = year - 1 + "\u2013" + String(year).slice(2);
    output.textContent = label;
    slider.setAttribute("aria-valuetext", label);
  }
  slider.addEventListener("input", function () {
    const year = Number(slider.value);
    showYear(year);
    result.view.signal("selectedYear", year).runAsync().then(trimChartSpace);
  });
  result.view.addSignalListener("selectedYear", function (name, year) {
    slider.value = year;
    showYear(year);
  });
  showYear(Number(slider.value));
  trimChartSpace();
  const help = card.querySelector(".chart10-help");
  const panel = help.querySelector(".agriculture-definitions");
  function positionIcon() {
    const heading = Array.from(element.querySelectorAll("svg text")).find(
      (text) => text.textContent === "Agricultural activities",
    );
    if (!heading) return;
    const wrapper = help.parentElement;
    const bounds = wrapper.getBoundingClientRect();
    const label = heading.getBoundingClientRect();
    const scale = bounds.width / wrapper.offsetWidth;
    help.style.left = (label.right - bounds.left) / scale + 8 + "px";
    help.style.top = (label.top + label.height / 2 - bounds.top) / scale - 10 + "px";
    help.style.visibility = "visible";
  }
  positionIcon();
  new ResizeObserver(positionIcon).observe(element);
  document.fonts.ready.then(positionIcon);
  function positionHelp() {
    const icon = help.getBoundingClientRect();
    const scale = icon.width / help.offsetWidth;
    const width = Math.min(360 * scale, window.innerWidth - 32);
    const left = Math.max(16, Math.min(icon.left, window.innerWidth - width - 16));
    panel.style.width = width / scale + "px";
    panel.style.left = (left - icon.left) / scale + "px";
    const below = window.innerHeight - icon.bottom - 24;
    const above = icon.top - 24;
    const useAbove = below < 220 && above > below;
    panel.style.top = useAbove ? "auto" : "26px";
    panel.style.bottom = useAbove ? "26px" : "auto";
    panel.style.maxHeight = Math.max(80, useAbove ? above : below) / scale + "px";
  }
  help.addEventListener("pointerenter", positionHelp);
  help.addEventListener("focusin", positionHelp);
  help.addEventListener("toggle", positionHelp);
  help.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      help.open = false;
      help.querySelector("summary").blur();
    }
  });
  window.addEventListener("resize", positionHelp);
  window.addEventListener("scroll", positionHelp, { passive: true });
}
