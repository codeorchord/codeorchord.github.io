

AmCharts.makeChart("chartdiv",
{
    "type": "radar",
    "categoryField": "ability",
    "colors": [
        "orange",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000"
    ],
    "startDuration": 2,
    "color": "GREEN",
    "fontSize": 13,
    "handDrawn": true,
    "theme": "patterns",
    "graphs": [
        {
            "balloonText": "[[value]] percentage point",
            "bullet": "round",
            "bulletSize": 9,
            "id": "AmGraph-1",
            "lineAlpha": 1,
            "lineThickness": 2,
            "valueField": "value"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "axisTitleOffset": 20,
            "gridType": "circles",
            "id": "ValueAxis-1",
            "minimum": 0,
            "axisAlpha": 0.54,
            "dashLength": 3,
            "gridAlpha": 0.51
        }
    ],
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [
        {
            "value": "99",
            "ability": "문제 해결 능력"
        },
        {
            "value": "50",
            "ability": "쉽고 단순한 업무에 대한 처리 속도"
        },
        {
            "value": "90",
            "ability": "근태 및 업무 규칙 준수"
        },
        {
            "value": "80",
            "ability": "협업"
        },
        {
            "value": "80",
            "ability": "의사소통"
        },
        {
            "value": "50",
            "ability": "관리 능력(팀 매니징 등)"
        },
        {
            "value": "60",
            "ability": "문서 작성 및 정리 능력"
        },
        {
            "value": "90",
            "ability": "레퍼런스가 없는 업무에 대한 접근 능력"
        }
    ]
}
);
