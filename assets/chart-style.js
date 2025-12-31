(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('chart-style', {
        "color": [
            "#ee8f1b",
            "#0f65d1",
            "#05a045",
            "#e64a19"
        ],
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#2A2A22"
            },
            "subtextStyle": {
                "color": "#575848"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#d9dac9"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#eb5454",
                "color0": "#47b262",
                "borderColor": "#eb5454",
                "borderColor0": "#47b262",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#d9dac9"
            },
            "lineStyle": {
                "width": 1,
                "color": "#d9dac9"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#ee8f1b",
                "#0f65d1",
                "#05a045",
                "#e64a19"
            ],
            "label": {
                "color": "#d9dac9"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#2A2A22"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d9dac9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#2A2A22"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d9dac9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#2A2A22"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d9dac9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#2A2A22"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#2A2A22"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d9dac9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#2A2A22"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#2A2A22"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#2A2A22"
            },
            "left": "center",
            "right": "auto",
            "top": 0,
            "bottom": 10
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#d9dac9",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#d9dac9",
                    "width": 1
                }
            },
            "textStyle": {
                "color": "#2A2A22"
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#DAE1F5",
                "width": 2
            },
            "itemStyle": {
                "color": "#A4B1D7",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#A4B1D7",
                "borderColor": "#A4B1D7",
                "borderWidth": 1
            },
            "checkpointStyle": {
                "color": "#316bf3",
                "borderColor": "#fff"
            },
            "label": {
                "color": "#A4B1D7"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#FFF"
                },
                "controlStyle": {
                    "color": "#A4B1D7",
                    "borderColor": "#A4B1D7",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#A4B1D7"
                }
            }
        },
        "visualMap": {
            "color": [
                "#d17b0f",
                "#f3be53",
                "#f8d796"
            ]
        },
        "markPoint": {
            "label": {
                "color": "#d9dac9"
            },
            "emphasis": {
                "label": {
                    "color": "#d9dac9"
                }
            }
        },
        "grid": {
            "left": "10%",
            "right": "10%",
            "top": 60,
            "bottom": 70
        }
    });
}));
