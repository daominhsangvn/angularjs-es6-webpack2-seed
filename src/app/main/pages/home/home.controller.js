export default class Controller {
  /*@ngInject*/
  constructor($scope, TopNavService) {
    this._topNavService = TopNavService;

    this._topNavService.pageTitle('Home');

    this.lineData = [{
      data: [
        [0, this.getRandomArbitrary()],
        [1, this.getRandomArbitrary()],
        [2, this.getRandomArbitrary()],
        [3, this.getRandomArbitrary()],
        [4, this.getRandomArbitrary()],
        [5, this.getRandomArbitrary()],
        [6, this.getRandomArbitrary()],
        [7, this.getRandomArbitrary()],
        [8, this.getRandomArbitrary()],
        [9, this.getRandomArbitrary()],
        [10, this.getRandomArbitrary()],
        [11, this.getRandomArbitrary()],
        [12, this.getRandomArbitrary()],
        [13, this.getRandomArbitrary()],
        [14, this.getRandomArbitrary()],
        [15, this.getRandomArbitrary()],
        [16, this.getRandomArbitrary()],
        [17, this.getRandomArbitrary()],
        [18, this.getRandomArbitrary()],
        [19, this.getRandomArbitrary()],
        [20, this.getRandomArbitrary()]
      ],
      color: '#7fc35c'
    }];

    this.lineConfig = {
      series: {
        lines: {
          show: false, // hide original line to use splines
          lineWidth: 0 // hide original line to use splines
        },
        splines: {
          show: true,
          lineWidth: 1,
          fill: 0.5
        }
      },
      grid: {
        borderWidth: 1,
        color: 'rgba(0,0,0,0.04)'
      },
      yaxis: {
        color: 'rgba(0,0,0,0.04)'
      },
      xaxis: {
        mode: 'categories'
      }
    };

    this.barData = [{
      data: [
        [0, this.getRandomArbitrary()],
        [1, this.getRandomArbitrary()],
        [2, this.getRandomArbitrary()],
        [3, this.getRandomArbitrary()],
        [4, this.getRandomArbitrary()],
        [5, this.getRandomArbitrary()],
        [6, this.getRandomArbitrary()],
        [7, this.getRandomArbitrary()],
        [8, this.getRandomArbitrary()]
      ],
      bars: {
        show: true,
        align: 'center',
        fill: true,
        lineWidth: 0,
        fillColor: '#f0c54c'
      }
    }];

    this.barConfig = {
      grid: {
        borderWidth: 0,
        aboveData: true
      },
      yaxis: {
        color: 'rgba(0,0,0,0.02)'
      },
      xaxis: {
        mode: 'categories',
        tickLength: 0,
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'inherit'
      }
    };

    this.vectorMapConfig = {
      map: 'world_en',
      backgroundColor: 'transparent',
      zoomOnScroll: false,
      zoomButtons: false,
      strokeWidth: 1,
      regionStyle: {
        initial: {
          fill: 'rgb(230, 230, 230)',
          'fill-opacity': 1
        },
        hover: {
          'fill-opacity': 0.3
        }
      },
      series: {
        regions: [{
          values: {
            'US-NC': '#4c7ff0',
            'US-TX': '#7fc35c',
            'US-NV': '#d26d54',
            'US-AL': '#4cc3f0'
          },
          attribute: 'fill'
        }]
      },
      markerStyle: {
        initial: {
          fill: '#4c7ff0',
          stroke: '#4c7ff0',
          'fill-opacity': 1,
          'stroke-width': 5,
          'stroke-opacity': 0.3,
          r: 4
        },
        hover: {
          r: 6,
          stroke: '#4c7ff0',
          'stroke-width': 6
        },
        selected: {
          fill: '#4c7ff0'
        }
      }
    };

    this.easyPieChart = {
      size: 120,
      lineWidth: 6,
      barColor: '#7fc35c',
      trackColor: 'rgba(0,0,0,0)',
      lineCap: 'round',
      easing: 'easeOutBounce',
      scaleColor: false,
      // onStep: function onStep(from, to, percent) {
      //   // $(this.el).find('.percent').text(Math.round(percent));
      // }
    };
  }

  getRandomArbitrary() {
    return Math.round(Math.random() * 100);
  }
}
