$(document).ready(function () {
  var ctx = document.getElementById("averageRating");
  var averageRating = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label: "Average",
          data: [4.2, 4.6],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxResponses = document.getElementById("npsResponses");
  var npsResponses = new Chart(ctxResponses, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label: "Responses",
          data: [75, 93],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 100,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxProud = document.getElementById("npsProud");
  var npsProud = new Chart(ctxProud, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label: "I am proud to work at FullStack Labs",
          data: [4.43, 4.6],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxRespected = document.getElementById("npsRespected");
  var npsRespected = new Chart(ctxRespected, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label: "I feel respected and valued by my coworkers",
          data: [4.52, 4.7],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxManager = document.getElementById("npsManager");
  var npsManager = new Chart(ctxManager, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label: "My manager is a great role model for employees",
          data: [4.43, 4.6],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxProcess = document.getElementById("npsProcess");
  var npsProcess = new Chart(ctxProcess, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label:
            "FullStackss systems and processes help me get my work done effectively",
          data: [3.84, 4.2],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxSuccess = document.getElementById("npsSuccess");
  var npsSuccess = new Chart(ctxSuccess, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label: "I know what I need to do to be successful in my role",
          data: [4.43, 4.5],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxPriorities = document.getElementById("npsPriorities");
  var npsPriorities = new Chart(ctxPriorities, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label:
            "Day-to-day decisions here demonstrate that quality and improvement are top prioritites",
          data: [4.39, 4.6],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxOpportunities = document.getElementById("npsOpportunities");
  var npsOpportunities = new Chart(ctxOpportunities, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label:
            "I believe there are good career oportunities for me at FullStack Labs",
          data: [3.6, 4.1],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxRecommend = document.getElementById("npsRecommend");
  var npsRecommend = new Chart(ctxRecommend, {
    type: "bar",
    data: {
      labels: ["2020 - Q2"],
      datasets: [
        {
          label: "I would recommend FullStack Labs as a great place to work",
          data: [4.09],
          backgroundColor: ["rgba(44, 106, 250, 100)"],
          borderColor: ["rgba(44, 106, 250, 100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxComp = document.getElementById("npsComp");
  var npsComp = new Chart(ctxComp, {
    type: "bar",
    data: {
      labels: ["2021 - Q1"],
      datasets: [
        {
          label: "I feel my compensation is competitive with the market",
          data: [3.9],
          backgroundColor: ["rgba(24, 204, 85,100)"],
          borderColor: ["rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxRec = document.getElementById("npsRec");
  var npsRec = new Chart(ctxRec, {
    type: "bar",
    data: {
      labels: ["2021 - Q1"],
      datasets: [
        {
          label:
            "How likely are you to recommend FullStack Labs as a place to work to your family, friends, or former coworkers?",
          data: [8.7],
          backgroundColor: ["rgba(24, 204, 85,100)"],
          borderColor: ["rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 10,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxStillWorking = document.getElementById("npsStillWorking");
  var npsStillWorking = new Chart(ctxStillWorking, {
    type: "bar",
    data: {
      labels: ["2020 - Q2", "2021 - Q1"],
      datasets: [
        {
          label:
            "I see myself still working at FullStack Labs in one year time",
          data: [3.63, 4.3],
          backgroundColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderColor: ["rgba(44, 106, 250, 100)", "rgba(24, 204, 85,100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxInformed = document.getElementById("npsInformed");
  var npsInformed = new Chart(ctxInformed, {
    type: "bar",
    data: {
      labels: ["2020 - Q2"],
      datasets: [
        {
          label:
            "The leaders at FullStack Labs keep people informed at what is happening",
          data: [4.49],
          backgroundColor: ["rgba(44, 106, 250, 100)"],
          borderColor: ["rgba(44, 106, 250, 100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxVision = document.getElementById("npsVision");
  var npsVision = new Chart(ctxVision, {
    type: "bar",
    data: {
      labels: ["2020 - Q2"],
      datasets: [
        {
          label:
            "The leaders at FullStack Labs have communicated a vision that motivates me",
          data: [4.08],
          backgroundColor: ["rgba(44, 106, 250, 100)"],
          borderColor: ["rgba(44, 106, 250, 100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxAccess = document.getElementById("npsAccess");
  var npsAccess = new Chart(ctxAccess, {
    type: "bar",
    data: {
      labels: ["2020 - Q2"],
      datasets: [
        {
          label: "I have access to the things I need to do my job well",
          data: [4.35],
          backgroundColor: ["rgba(44, 106, 250, 100)"],
          borderColor: ["rgba(44, 106, 250, 100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });

  var ctxFeelRespect = document.getElementById("npsFeelRespect");
  var npsFeelRespect = new Chart(ctxFeelRespect, {
    type: "bar",
    data: {
      labels: ["2020 - Q2"],
      datasets: [
        {
          label: "I feel respected and valued by my manager",
          data: [4.35],
          backgroundColor: ["rgba(44, 106, 250, 100)"],
          borderColor: ["rgba(44, 106, 250, 100)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    },
  });
});

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function ($) {
  "use strict";

  $.fn.counterUp = function (options) {
    // Defaults
    var settings = $.extend(
      {
        time: 400,
        delay: 15,
      },
      options
    );

    return this.each(function () {
      // Store the object
      var $this = $(this);
      var $settings = settings;
      var origValue = $this.text();

      var counterUpper = function () {
        var nums = [];
        var divisions = $settings.time / $settings.delay;
        var num = origValue;
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, "");
        var isInt = /^[0-9]+$/.test(num);
        var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        var decimalPlaces = isFloat ? (num.split(".")[1] || []).length : 0;

        // Generate list of incremental numbers to display
        for (var i = divisions; i >= 1; i--) {
          // Preserve as int if input was int
          var newNum = parseInt((num / divisions) * i);

          // Preserve float if input was float
          if (isFloat) {
            newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces);
          }

          // Preserve commas if input had commas
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum
                .toString()
                .replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
            }
          }

          nums.unshift(newNum);
        }

        $this.data("counterup-nums", nums);
        $this.text("0");

        // Updates the number until we're done
        var f = function () {
          $this.text($this.data("counterup-nums").shift());
          if ($this.data("counterup-nums").length) {
            setTimeout($this.data("counterup-func"), $settings.delay);
          } else {
            delete $this.data("counterup-nums");
            $this.data("counterup-nums", null);
            $this.data("counterup-func", null);
          }
        };
        $this.data("counterup-func", f);

        // Start the count up
        setTimeout($this.data("counterup-func"), $settings.delay);
      };

      // Perform counts when the element gets into view
      $this.waypoint(counterUpper, { offset: "100%", triggerOnce: true });
    });
  };
})(jQuery);
$(window).on("load", function () {
  if ($.fn.counterUp) {
    $(".nps-card-text--highlight").counterUp({
      delay: 10, // the delay time in ms
      time: 1000, // the speed time in ms
    });
  }
});
