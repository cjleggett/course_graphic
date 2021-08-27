var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "height" : 80.0,
      "shape" : "rectangle",
      "border-width" : 2.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "border-color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "width" : 150.0,
      "text-wrap": "wrap",
      "text-max-width": 150.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "background-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "border-opacity" : 1.0,
      "font-size" : 15,
      "content" : "data(code_name)",
    }
  }, {
    "selector" : "node[semester = 'Fall']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[semester = 'Spring']",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '142' ]",
    "css" : {
      "color" : "rgb(255,255,255)",
      "content" : "CS50",
      "font-family" : ".SFNS-Bold",
      "font-weight" : "normal",
      "background-color" : "rgb(0,0,0)",
      "font-size" : 40
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "line-style" : "solid",
      "opacity" : 1.0,
      "width" : 2.5,
      "source-arrow-shape" : "none",
      "content" : "",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)",
      "font-size" : 10,
      "source-arrow-color" : "rgb(64,64,64)",
      "target-arrow-shape" : "triangle",
      "target-arrow-color" : "rgb(64,64,64)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]