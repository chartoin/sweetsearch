$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */
  
 //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  /* var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas);

  var salesChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Electronics",
        fillColor: "rgb(210, 214, 222)",
        strokeColor: "rgb(210, 214, 222)",
        pointColor: "rgb(210, 214, 222)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgb(220,220,220)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Digital Goods",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true
  };

  //Create the line chart
  salesChart.Line(salesChartData, salesChartOptions); */

  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------
  
  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas);
  var PieData = [
    {
      value: 475,
      color: "#f56954",
      highlight: "#f56954",
      label: "Positive"
    },
    {
      value: 500,
      color: "#00a65a",
      highlight: "#00a65a",
      label: "Negative"
    },
    {
      value: 50,
      color: "#f39c12",
      highlight: "#f39c12",
      label: "Neutral"
    },
  ];
  var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%> users"
  };
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart.Doughnut(PieData, pieOptions);
  //-----------------
  //- END PIE CHART -
  //-----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
  $('#world-map-markers').vectorMap({
    map: 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: 'rgba(210, 214, 222, 1)',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      },
      hover: {
        "fill-opacity": 0.7,
        cursor: 'pointer'
      },
      selected: {
        fill: 'yellow'
      },
      selectedHover: {
      }
    },
    markerStyle: {
      initial: {
        fill: '#00a65a',
        stroke: '#111'
      }
    },
    markers: [
      {latLng: [41.90, 12.45], name: 'OneForAll'},
      {latLng: [43.73, 7.41], name: '#NommeSuisUnion'},
      {latLng: [43.93, 12.46], name: 'Stay Strong'},
      {latLng: [47.14, 9.52], name: 'Places safe?'},
      {latLng: [49.11, 11.06], name: 'help Needed'},
      {latLng: [17.3, -62.73], name: 'We shall prevail PorteOeuvrte'},
      {latLng: [42.90, 12.45], name: 'Vatican City is closed'},
      {latLng: [44.73, 6.41], name: ' Sending thoughts and prayers to those in Paris #PrayForParis!'},
      {latLng: [-0.52, 134.93], name: 'We are United!'},
      {latLng: [43.93, 12.46], name: 'PorteOeuvrte'},
      {latLng: [47.14, 9.52], name: 'Hospital Info:-'},
      {latLng: [54.05, 14.75], name: 'We are strong!'},
      {latLng: [49.16, 24.23], name: 'Missing People'},
      {latLng: [42.16, 10.55], name: 'EnaureTe Maud'},
      {latLng: [49.11, 16.85], name: 'Terror in Paris'},
      {latLng: [17.3, -62.73], name: 'Go into the night'},
      {latLng: [3.2, 73.22], name: 'Relief Materials?'},
      {latLng: [8.2, 79.22], name: 'Indians for Paris'},
      {latLng: [35.88, 14.5], name: 'At a stadium? #Paris'},
      {latLng: [-4.61, 55.45], name: 'Helping Hands'},
      {latLng: [7.35, 134.46], name: 'Angered at Paris Attacks'},
      {latLng: [42.5, 1.51], name: 'Terrorism is blatant'},
      {latLng: [-20.01, 134.98], name: 'Australia Feels.'},
      {latLng: [1.3, 103.8], name: 'We live to fight another day'},
      {latLng: [35.3, -100.38], name: 'Washington sends love. #SaveParis'},
      {latLng: [32.3, -90.38], name: 'Be safe #with you'},
      {latLng: [39.3, -120.38], name: '#JeSuisHuman'},
      {latLng: [5.3, -79.43], name: 'Whatever happened to the world?'},
      {latLng: [1.3, -52.38], name: 'Prayers and more prayers'},
      {latLng: [15.3, -20.38], name: 'Disgusted #Paris'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Feeling disheartened'},
      {latLng: [0.33, 6.73], name: 'We are made of sterner stuff'}
    ]
  });

  /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */

  //-----------------
  //- SPARKLINE BAR -
  //-----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'bar',
      height: $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  //-----------------
  //- SPARKLINE PIE -
  //-----------------
  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'pie',
      height: $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  });

  //------------------
  //- SPARKLINE LINE -
  //------------------
  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'line',
      height: $this.data('height') ? $this.data('height') : '90',
      width: '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
  
  //------------------
  //- D3 - CLoud -
  //------------------
  
  /* var d3 = require("d3"),
  cloud = require("../");

  var fill = d3.scale.category20();
	
  var layout = cloud()
	  .size([500, 500])
	  .words([
	    "Hello", "world", "normally", "you", "want", "more", "words",
	    "than", "this"].map(function(d) {
	    return {text: d, size: 10 + Math.random() * 90, test: "haha"};
	  }))
	  .padding(5)
	  .rotate(function() { return ~~(Math.random() * 2) * 90; })
	  .font("Impact")
	  .fontSize(function(d) { return d.size; })
	  .on("end", draw);
	
	layout.start();
	
	function draw(words) {
	d3.select("#cloudChart").append("svg")
	    .attr("width", layout.size()[0])
	    .attr("height", layout.size()[1])
	  .append("g")
	    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
	  .selectAll("text")
	    .data(words)
	  .enter().append("text")
	    .style("font-size", function(d) { return d.size + "px"; })
	    .style("font-family", "Impact")
	    .style("fill", function(d, i) { return fill(i); })
	    .attr("text-anchor", "middle")
	    .attr("transform", function(d) {
	      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
	    })
	    .text(function(d) { return d.text; });
	}
	
	  // Get context with jQuery - using jQuery's .get() method.
	  var salesChartCanvas = $("#cloudChart").get(0).getContext("2d");
	  // This will get the first returned node in the jQuery collection.
	  var salesChart = new Chart(salesChartCanvas);
	
	  var salesChartData = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	      {
	        label: "Electronics",
	        fillColor: "rgb(210, 214, 222)",
	        strokeColor: "rgb(210, 214, 222)",
	        pointColor: "rgb(210, 214, 222)",
	        pointStrokeColor: "#c1c7d1",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgb(220,220,220)",
	        data: [65, 59, 80, 81, 56, 55, 40]
	      },
	      {
	        label: "Digital Goods",
	        fillColor: "rgba(60,141,188,0.9)",
	        strokeColor: "rgba(60,141,188,0.8)",
	        pointColor: "#3b8bba",
	        pointStrokeColor: "rgba(60,141,188,1)",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgba(60,141,188,1)",
	        data: [28, 48, 40, 19, 86, 27, 90]
	      }
	    ]
	  };
	
	  var salesChartOptions = {
	    //Boolean - If we should show the scale at all
	    showScale: true,
	    //Boolean - Whether grid lines are shown across the chart
	    scaleShowGridLines: false,
	    //String - Colour of the grid lines
	    scaleGridLineColor: "rgba(0,0,0,.05)",
	    //Number - Width of the grid lines
	    scaleGridLineWidth: 1,
	    //Boolean - Whether to show horizontal lines (except X axis)
	    scaleShowHorizontalLines: true,
	    //Boolean - Whether to show vertical lines (except Y axis)
	    scaleShowVerticalLines: true,
	    //Boolean - Whether the line is curved between points
	    bezierCurve: true,
	    //Number - Tension of the bezier curve between points
	    bezierCurveTension: 0.3,
	    //Boolean - Whether to show a dot for each point
	    pointDot: false,
	    //Number - Radius of each point dot in pixels
	    pointDotRadius: 4,
	    //Number - Pixel width of point dot stroke
	    pointDotStrokeWidth: 1,
	    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	    pointHitDetectionRadius: 20,
	    //Boolean - Whether to show a stroke for datasets
	    datasetStroke: true,
	    //Number - Pixel width of dataset stroke
	    datasetStrokeWidth: 2,
	    //Boolean - Whether to fill the dataset with a color
	    datasetFill: true,
	    //String - A legend template
	    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
	    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	    maintainAspectRatio: true,
	    //Boolean - whether to make the chart responsive to window resizing
	    responsive: true
	  }; */
  
	  $('.tweetDateRangePicker').daterangepicker({
	      ranges: {
	          'Today': [moment(), moment()],
	          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	          'This Month': [moment().startOf('month'), moment().endOf('month')],
	          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	       }
	   });
  
  // Modal - Pop-Over for User
  
  $('.person-title').click(function() {
	  $('#userModalContent').modal('toggle');
  });
  
  // Modal - Pop-Over for Topics
  
  $('.topic-title').click(function() {
	  $('#topicsModalContent').modal('toggle');
  });
  
  // Modal - Pop-Over for Map
  
  $('.jvectormap-element').click(function() {
	  $('#mapModalContent').modal('toggle');
  });
  
  $('#search-btn').click(function() {
	  $('#searchContent').fadeIn();
  });
  
  $(function(){
	    $('.products-list').slimScroll({
	        height: '315px'
	    });
	});
  
});
