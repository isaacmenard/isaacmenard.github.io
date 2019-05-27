// Build the chart
Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Votre poubelle :'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'embalages papier/carton',
      y: 14
    }, {
      name: 'embalages en verre',
      y: 10
    }, {
      name: 'embalages en plastiques',
      y: 26
    }, {
      name: 'embalages métaliques',
      y: 4
    }, {
      name: 'Journaux, magazines et prospéctus',
      y: 9
    }, {
      name: 'Déchets putrécibles',
      y: 16
    }, {
      name: 'Divers',
      y: 26
    }]
  }]
});