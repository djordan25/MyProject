import React, { Component } from "react";
import Layout from "./Components/Layout/Layout"
import ReactNodeGraph from "./Components/NodeGraph/NodeGraph";
import "./App.css";
var exampleGraph = {
  nodes: [
    {
      nid: 1,
      type: "Data",
      x: 100,
      y: 100,
      fields: {
        in: [],
        out: [{name: "output"}]
      }
    },
    {
      nid: 14,
      type: "f(x)",
      x: 400,
      y: 400,
      fields: {
        in: [
          { name: "input" }
        ],
        out: []
      }
    }
    // {"nid":23,"type":"Scene","x":1216,"y":217,"fields":{"in":[{"name":"children"},{"name":"position"},{"name":"rotation"},{"name":"scale"},{"name":"doubleSided"},{"name":"visible"},{"name":"castShadow"},{"name":"receiveShadow"}],"out":[{"name":"out"}]}},
    // {"nid":35,"type":"Merge","x":948,"y":217,"fields":{"in":[{"name":"in0"},{"name":"in1"},{"name":"in2"},{"name":"in3"},{"name":"in4"},{"name":"in5"}],"out":[{"name":"out"}]}},
    // {"nid":45,"type":"Color","x":950,"y":484,"fields":{"in":[{"name":"rgb"},{"name":"r"},{"name":"g"},{"name":"b"}],"out":[{"name":"rgb"},{"name":"r"},{"name":"g"},{"name":"b"}]}},
    // {"nid":55,"type":"Vector3","x":279,"y":503,"fields":{"in":[{"name":"xyz"},{"name":"x"},{"name":"y"},{"name":"z"}],"out":[{"name":"xyz"},{"name":"x"},{"name":"y"},{"name":"z"}]}},
    // {"nid":65,"type":"ThreeMesh","x":707,"y":192,"fields":{"in":[{"name":"children"},{"name":"position"},{"name":"rotation"},{"name":"scale"},{"name":"doubleSided"},{"name":"visible"},{"name":"castShadow"},{"name":"receiveShadow"},{"name":"geometry"},{"name":"material"},{"name":"overdraw"}],"out":[{"name":"out"}]}},
    // {"nid":79,"type":"Timer","x":89,"y":82,"fields":{"in":[{"name":"reset"},{"name":"pause"},{"name":"max"}],"out":[{"name":"out"}]}},
    // {"nid":84,"type":"MathMult","x":284,"y":82,"fields":{"in":[{"name":"in"},{"name":"factor"}],"out":[{"name":"out"}]}},
    // {"nid":89,"type":"Vector3","x":486,"y":188,"fields":{"in":[{"name":"xyz"},{"name":"x"},{"name":"y"},{"name":"z"}],"out":[{"name":"xyz"},{"name":"x"},{"name":"y"},{"name":"z"}]}}
  ],
  connections: [
    { from_node: 1, from: "output", to_node: 14, to: "input" }
    // {"from_node":14,"from":"out","to_node":1,"to":"camera"},
    // {"from_node":14,"from":"out","to_node":35,"to":"in5"},
    // {"from_node":35,"from":"out","to_node":23,"to":"children"},
    // {"from_node":45,"from":"rgb","to_node":1,"to":"bg_color"},
    // {"from_node":55,"from":"xyz","to_node":14,"to":"position"},
    // {"from_node":65,"from":"out","to_node":35,"to":"in0"},
    // {"from_node":79,"from":"out","to_node":84,"to":"in"},
    // {"from_node":89,"from":"xyz","to_node":65,"to":"rotation"},
    // {"from_node":84,"from":"out","to_node":89,"to":"y"}
  ]
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = exampleGraph;
  }

  onNewConnector(fromNode, fromPin, toNode, toPin) {
    let connections = [
      ...this.state.connections,
      {
        from_node: fromNode,
        from: fromPin,
        to_node: toNode,
        to: toPin
      }
    ];

    this.setState({ connections: connections });
  }

  onRemoveConnector(connector) {
    let connections = [...this.state.connections];
    connections = connections.filter(connection => {
      return connection !== connector;
    });

    this.setState({ connections: connections });
  }

  onNodeMove(nid, pos) {
    console.log("end move : " + nid, pos);
  }

  onNodeStartMove(nid) {
    console.log("start move : " + nid);
  }

  handleNodeSelect(nid) {
    console.log("node selected : " + nid);
  }

  handleNodeDeselect(nid) {
    console.log("node deselected : " + nid);
  }

  render() {
    return (
      <Layout>
      <ReactNodeGraph
        data={this.state}
        onNodeMove={(nid, pos) => this.onNodeMove(nid, pos)}
        onNodeStartMove={nid => this.onNodeStartMove(nid)}
        onNewConnector={(n1, o, n2, i) => this.onNewConnector(n1, o, n2, i)}
        onRemoveConnector={connector => this.onRemoveConnector(connector)}
        onNodeSelect={nid => {
          this.handleNodeSelect(nid);
        }}
        onNodeDeselect={nid => {
          this.handleNodeDeselect(nid);
        }}
      />
      </Layout>
    );
  }
}
export default App;
