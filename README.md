# Growing Tomorrow: Sustainable Farming in Australia

An interactive data visualisation exploring Australia's agricultural land use, water and soil management, greenhouse gas emissions, and the challenges farmers face in adopting sustainable practices.

Created for **FIT3179 Data Visualisation, Assignment 2**, Monash University, Semester 2, 2026.

## Project overview

The visualisation asks: **Is Australian farming becoming more sustainable?**

Twelve charts guide readers through four connected themes:

1. **Farming Landscape:** Agricultural land uses and changes over a decade.
2. **Water Conservation:** Irrigation patterns, management practices and water sources.
3. **Soil Management:** Reported practices and changes in soil organic carbon.
4. **Environmental Sustainability:** Emissions trends, their sources, farmers' awareness and barriers to action.

The conclusion brings these findings together. The page distinguishes reported practices and future intentions from measured environmental outcomes.

## Charts

| No. | Subject | Visualisation | Specification |
| --- | --- | --- | --- |
| 1 | Australia's agricultural land footprint | Treemap | [chart1_land_use_treemap.vg.json](js/chart1_land_use_treemap.vg.json) |
| 2 | Changes in agricultural land use | Waterfall chart | [chart2_land_use_waterfall.vg.json](js/chart2_land_use_waterfall.vg.json) |
| 3 | Irrigation water use by state | Proportional-symbol map | [chart3_irrigation_water_map.vl.json](js/chart3_irrigation_water_map.vl.json) |
| 4 | Irrigation across farming activities | Parallel coordinates | [chart4_irrigation_activity_parallel_coordinates.vl.json](js/chart4_irrigation_activity_parallel_coordinates.vl.json) |
| 5 | Adoption of water-management practices | Paired choropleth maps | [chart5_water_practices.vl.json](js/chart5_water_practices.vl.json) |
| 6 | Water obtained from different sources | Multi-line chart | [chart6_water_sources.vl.json](js/chart6_water_sources.vl.json) |
| 7 | Soil-management practices by industry | Heatmap | [chart7_soil_management_heatmap.vl.json](js/chart7_soil_management_heatmap.vl.json) |
| 8 | Changes in agricultural soil carbon | Hexagonal map and linked national trend | [chart8_soil_carbon.vl.json](js/chart8_soil_carbon.vl.json) |
| 9 | Agricultural emissions by greenhouse gas | Stacked area chart | [chart9_agricultural_emissions_trend.vl.json](js/chart9_agricultural_emissions_trend.vl.json) |
| 10 | Farming activities contributing to emissions | Sankey diagram | [chart10_emissions_sankey.vg.json](js/chart10_emissions_sankey.vg.json) |
| 11 | Emissions awareness and management intentions | Horizontal lollipop chart | [chart11_emissions_awareness.vl.json](js/chart11_emissions_awareness.vl.json) |
| 12 | Reported barriers to reducing emissions | Three interactive waffle charts | [chart12_emissions_barriers.vl.json](js/chart12_emissions_barriers.vl.json) |

## View locally

Run a local HTTP server from this project directory. For example, with Python installed:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. Alternatively, serve `index.html` through a local development server such as VS Code Live Server.

Use an HTTP server instead of opening the HTML directly: chart specifications and datasets are loaded through browser requests. Internet access is required for the Vega libraries, Google Fonts and externally hosted map boundaries. No build step or Python data-processing packages are required to view the website.

## Interactions

- Use the overview cards or floating navigation to jump between sections and the conclusion.
- Hover over marks for exact values and contextual information.
- Open question-mark icons for definitions; keyboard users can focus and activate the controls.
- Compare selected irrigation years in Chart 3.
- Compare soil-carbon years and explore regions, zoom and pan in Chart 8.
- Highlight gases and inspect individual years in Chart 9.
- Change the financial year and inspect activities, gases and flows in Chart 10.
- Select a farming population to update all three waffles in Chart 12.

The page uses alternating chart-and-insight columns on desktop and stacked content on smaller screens.

## Files

```text
index.html     Page content, navigation and chart integration
styles.css     Shared theme, layouts and chart-specific styles
js/            Twelve Vega/Vega-Lite specifications and the Sankey helper
data/         Processed CSV/GeoJSON datasets and retained validation metadata
README.md      Project overview and usage information
```

The `data/` directory contains the final files used by the website. Original raw downloads and processing scripts are not included. Regenerating the processed datasets would require obtaining the original sources and recreating the preparation workflow.

## Data sources and interpretation

- **ABARES:** Land use of Australia 2010–11 to 2020–21, Version 7.1; the 2021 natural resource management and drought-resilience survey; and the 2023–24 emissions and natural resource management survey.
- **Australian Bureau of Statistics:** Water Use on Australian Farms releases covering 2015–16 to 2020–21.
- **Zhao, Xie, Zhang and Peng (2021):** Modelled global topsoil organic carbon stocks, used for the 2010–2018 agricultural soil-carbon analysis.
- **Australian greenhouse gas inventory:** Australian National Greenhouse Accounts, National Inventory Report 2024 and Australia's 2026 Common Reporting Tables.
- **Bureau of Meteorology:** Climate reports supporting the drought context.
- **Map boundaries:** Australian state GeoJSON repositories acknowledged in the website's reference list.

Source links appear below the charts. Full APA 7 references are provided in the page's **Sources and Authorship** section.

Important distinctions when interpreting the charts:

- Dataset years and survey populations differ. The 2021 and 2023–24 surveys are not combined into a direct adoption trend.
- Practice-adoption percentages do not measure water savings, healthier soil or avoided emissions.
- Chart 8 uses modelled topsoil carbon estimates and a fixed 2020–21 agricultural land classification. Changes cannot be attributed solely to farming practices.
- Chart 11's planned activities include natural-resource management, not exclusively emissions reduction.
- Chart 12's barriers may overlap. Each waffle represents a separate percentage; one square is one percentage point, not one actual farm.

## Code reference

The FIT3179 teaching example was consulted to check the symbol-map specification structure and Vega-Embed setup:

FIT3179. (n.d.). *Vega-Lite: 2_symbol_map* [Source code]. GitHub. https://github.com/FIT3179/Vega-Lite/tree/main/2_symbol_map

The website uses Vega 5, Vega-Lite 5 and Vega-Embed 6, loaded through a CDN. The typography uses DM Serif Display and Lato through Google Fonts.

## Authorship

| Detail | Information |
| --- | --- |
| Author | Sheron Tan Mei Yi |
| Student ID | 35395842 |
| Unit | FIT3179 Data Visualisation, Monash University |
| Studio session | Thursday, 4PM - 6PM |
| Last updated | 28 October 2026 |

## AI acknowledgement

ChatGPT was used to help identify relevant data sources, extract and organise important information into usable CSV files, and improve spelling, grammar and clarity of written content. It was also used to obtain feedback on the visualisations, particularly their layout, readability and storytelling, to guide further improvements.
