const dscc = window.dscc;

function drawChart(data) {
  const rawData = data.tables.DEFAULT.map(row => ({
    id: row[1],
    parentId: row[0]
  }));

  const chart = new d3.OrgChart()
    .container("#chart")
    .data(rawData)
    .nodeWidth((d) => 120)
    .nodeHeight((d) => 60)
    .childrenMargin((d) => 20)
    .compact(true)
    .initialZoom(0.7)
    .render();
}

// Listen to data from Looker Studio
dscc.subscribeToData(drawChart, { transform: dscc.tableTransform });