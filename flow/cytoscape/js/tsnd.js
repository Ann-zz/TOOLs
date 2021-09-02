var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,
  style: [
          {
            selector: 'node',
            style: {
              "content": "data(name)",
              "width": 14,
              "height": 14,
              "font-size": "8px",
              "text-valign": "center",
              "background-color": "red",
              "color": "#fff",
              

            }
          },
          {
            selector:'edge',
            style:{
              'label': 'data(name)', 
              'curve-style': 'bezier',
              'target-arrow-shape': 'triangle',//箭头显示
              'width': 0.5,
              'line-color': '#fa5560',
              'color': 'blue',
              'font-size': '4px',
              'target-arrow-color': '#fa5560',
              'text-transform':'lowercase',
              'text-wrap':'wrap',
              'arrow-scale':0.4, //箭头大小
              'line-dash-pattern': [3, 3],
              'edge-distances': 'node-position',
            }
          },
          {
             "selector": ".nodeblue",
             "style": {
               "background-color": "#007bff",
              "text-outline-color": "#007bff",
             }
           },
          {
            "selector": "edge.taxidashed",//虚线
            "style": {
              "curve-style": "taxi", //分段点模型位置
              "taxi-direction": "downward",
              "taxi-turn": 10,
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              "taxi-turn-min-distance": 5,
              'line-style':'dashed',
              'taxi-radius': 0.5
            }
          },
          // segment-distances一系列值，为每段指定垂直于从源到目标形成的直线的距离。-20 20 -20.
          // segment-weights：一系列的值，权重段沿着一条线从一个源点到另一个目标点的值，例如，0.25 0.5 0.75。值通常在[0，1]上，0指向源节点，1指向目标节点-但也可以使用更大或更小的值。
           {
            "selector": "edge.segments", //折点直线
            "style": {
              "curve-style": "segments",
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              "segment-distances": [ 25,25,22,27,22,27,22,27,22,25,25 ],
              "segment-weights": [0,0.75,0.775,0.8,0.825,0.85,0.875,0.9,0.925,0.95,1],
            }
          }, {
            "selector": "edge.topsegments", //折点直线
            "style": {
              "curve-style": "segments",
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              "segment-distances": [-26.832815729997474],
              "segment-weights": [0.20000000000000007],
            }
          }, {
            "selector": "edge.topltopsegments", //折点直线
            "style": {
              "curve-style": "segments",
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              "segment-distances": [ -30,-30  ],
              "segment-weights": [-0,1],
            }
          }, {
            "selector": "edge.bottomsegments", //折点直线
            "style": {
              "curve-style": "segments",
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              "segment-distances":  [ 19.95,17.46, 22.78,  18.35,  23.67,19.24,22.61,24.38],
              "segment-weights": [0.778,0.801, 0.808,  0.836,0.843, 0.87,0.881,0.95],
            }
          }, {
            "selector": "edge.segments45", //折点直线
            "style": {
              "curve-style": "segments",
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              'source-endpoint': '45deg',
              "segment-distances": [ 18.57646284711146],//20
              "segment-weights": [ 0.3698876404494381],//0.35
              'line-style':'dashed'
            }
          }, {
            "selector": "edge.segments34", //折点直线
            "style": {
              "curve-style": "segments",
              'line-color': '#007bff',
              'target-arrow-color': '#007bff',
              "segment-distances": [ -16.64 ],
              "segment-weights": [0.3],
              'line-style':'dashed'
            }
          }
        ],
  elements: {
      nodes: [ 
        { data: { id: 'a1',name: '01' },position: {x: 0, y: 100} ,locked:true}, //locked锁定时节点的位置是不可变的,grabbable是否可以通过用户
        { data: { id: 'a2' ,name: '02' },position: {x: 40, y:100}  ,locked:true},
        { data: { id: 'a3' ,name: '03' },position: {x: 60, y:70} ,locked:true,classes:'nodeblue' },
        { data: { id: 'a4',name: '04' },position: {x:80, y:100} ,locked:true },
        { data: { id: 'a5' ,name: '05'},position: {x:120, y:125} ,locked:true ,classes:'nodeblue'},
         { data: { id: 'a6',name: '06' },position: {x:150, y:100}  ,locked:true},
        { data: { id: 'a7',name: '07' },position: {x:190, y:100} ,locked:true },
        { data: { id: 'a8',name: '08' },position: {x: 230, y:100}  ,locked:true},
        { data: { id: 'a9' ,name: '09'},position: {x: 280, y:100} ,locked:true },
        { data: { id: 'a10',name: '10' },position: {x: 320, y:100} ,locked:true },
        { data: { id: 'a11',name: '11' },position: {x: 360, y:100} ,locked:true },
        { data: { id: 'a12',name: '12' },position: {x: 410, y:100} ,locked:true },
        { data: { id: 'a13',name: '13' },position: {x: 460, y:100} ,locked:true },
      ],

      edges: [
        { data: { id: 'a1a2',name: '1-2',  source: 'a1', target: 'a2'}},
        { data: { id: 'a2a4',name: '2-4',  source: 'a2', target: 'a4'} },
        { data: { id: 'a4a6',name: '4-6',  source: 'a4', target: 'a6'} },
        { data: { id: 'a6a7',name: '6-7',  source: 'a6', target: 'a7'} },
        { data: { id: 'a7a8',name: '7-8',  source: 'a7', target: 'a8'},classes:'main' },
        { data: { id: 'a8a9',name: '8-9',  source: 'a8', target: 'a9'} },
        { data: { id: 'a9a10',name: '9-10',  source: 'a9', target: 'a10'} },
        { data: { id: 'a10a11',name: '10-11',  source: 'a10', target: 'a11'} },
        { data: { id: 'a11a12',name: '11-12',  source: 'a11', target: 'a12'} },
        { data: { id: 'a12a13',name: '12-13',  source: 'a12', target: 'a13'} },
        { data: { id: 'a1a3',name: '1-3',  source: 'a1', target: 'a3'}  ,classes:'topsegments' },
        { data: { id: 'a3a4',name: '3-4',  source: 'a3', target: 'a4'}  ,classes:'segments34' },
        { data: { id: 'a1a4',name: '1-4',  source: 'a1', target: 'a4'}  ,classes:'segments' },
        { data: { id: 'a4a5',name: '4-5',  source: 'a4', target: 'a5'}  ,classes:'segments45' },
        { data: { id: 'a5a8',name: '5-8',  source: 'a5', target: 'a8'}  ,classes:'bottomsegments' },
        { data: { id: 'a6a10',name: '6-10',  source: 'a6', target: 'a10'}  ,classes:'topltopsegments' },
 
      ]
    },

  layout: {
   name: 'cose', // 算法的不同展示方法
    
  }

});
