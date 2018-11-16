import React, { Component } from "react";
import Node from "../Node/Node";
import ConstantNode from '../Node/ConstantNode/ConstantNode';
import ResultNode from '../Node/ResultNode/ResultNode';
import FunctionNode from '../Node/FunctionNode/FunctionNode';
import classes from './NodeGraph.module.scss';
import Button from '@material-ui/core/Button';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Spline from "../Spline/Spline";
import SVGComponent from "../SVGComponent/SVGComponent";

import {
  computeOutOffsetByIndex,
  computeInOffsetByIndex
} from "../../Utilities/util";

class NodeGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      source: [],
      dragging: false,
      isSimulating: false,
      simulation: {}
    };

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }

  onMouseUp(e) {
    this.setState({ dragging: false });
  }

  onMouseMove(e) {
    e.stopPropagation();
    e.preventDefault();

    const {
      svgComponent: {
        refs: { svg }
      }
    } = this.refs;

    //Get svg element position to substract offset top and left
    const svgRect = svg.getBoundingClientRect();

    this.setState({
      mousePos: {
        x: e.pageX - svgRect.left,
        y: e.pageY - svgRect.top
      }
    });
  }

  handleNodeStart(nid) {
    this.props.onNodeStartMove(nid);
  }

  handleNodeStop(nid, pos) {
    this.props.onNodeMove(nid, pos);
  }

  handleNodeMove(index, pos) {
    let d = this.state.data;

    d.nodes[index].x = pos.x;
    d.nodes[index].y = pos.y;

    this.setState({ data: d });
  }
  handleNodeValueChange = (index, val) => {
    let d = this.state.data;

    d.nodes[index].nodeValue = val;

    this.setState({ data: d });

  }
  handleStartConnector(nid, outputIndex) {
    this.setState({ dragging: true, source: [nid, outputIndex] });
  }

  handleCompleteConnector(nid, inputIndex) {
    if (this.state.dragging) {
      let nodes = this.state.data.nodes;
      let fromNode = this.getNodebyId(nodes, this.state.source[0]);
      let fromPinName = fromNode.fields.out[this.state.source[1]].name;
      let toNode = this.getNodebyId(nodes, nid);
      let toPinName = toNode.fields.in[inputIndex].name;
      if (!this.state.data.connections.some(k => { return k.to_node === toNode.nid && k.to === toPinName })) {
        this.props.onNewConnector(
          fromNode.nid,
          fromPinName,
          toNode.nid,
          toPinName
        );
      }
    }
    this.setState({ dragging: false });
  }

  handleRemoveConnector(connector) {
    if (this.props.onRemoveConnector) {
      this.props.onRemoveConnector(connector);
    }
  }

  handleNodeSelect(nid) {
    if (this.props.onNodeSelect) {
      this.props.onNodeSelect(nid);
    }
  }

  handleNodeDeselect(nid) {
    if (this.props.onNodeDeselect) {
      this.props.onNodeDeselect(nid);
    }
  }

  computePinIndexfromLabel(pins, pinLabel) {
    let reval = 0;

    for (let pin of pins) {
      if (pin.name === pinLabel) {
        return reval;
      } else {
        reval++;
      }
    }
  }

  getNodebyId(nodes, nid) {
    let reval = 0;

    for (let node of nodes) {
      if (node.nid === nid) {
        return nodes[reval];
      } else {
        reval++;
      }
    }
  }

  handleSimulate = (evt) => {
    // create copy of current nodes and connectors
    console.log("simulating...")

    var nodes = this.state.data.nodes;
    var connections = this.state.data.connections;

    var funcNodes = nodes.filter(k => k.type === 'Function');
    var rsltNode = nodes.filter(k => k.type === 'Result')[0];

    //console.log(funcNodes);
    // check for valid inputs
    var allNodesHaveInputs = true;
    funcNodes.forEach(node => {
      node.fields.in.forEach(input => {
        if (!connections.some(conn => conn.to_node === node.nid && conn.to === input.name)) {
          console.log("Node: " + node.name + " missing input value on '" + input.name + "'");
          allNodesHaveInputs = false;
        }
      })
    });


    if (!connections.some(conn => conn.to_node === rsltNode.nid && conn.to === rsltNode.fields.in[0].name)) {
      console.log("Node: " + rsltNode.name + " missing input value on '" + rsltNode.fields.in[0].name + "'");
      allNodesHaveInputs = false;
    }

    if (!allNodesHaveInputs) {
      return;
    }


    // search through tree and find all of type="function" and where all inputs are satisfied by data sources (ie constants)
    while (funcNodes.some(k => !k.nodeValue)) {

      // get which nodes to execute
      var toExecNodes = {};
      funcNodes.forEach(node => {
        node.fields.in.forEach(input => {
          var inConn = connections.filter(conn => conn.to_node === node.nid && conn.to === input.name);
          var from_node = nodes.filter(k => k.nid === inConn[0].from_node)[0];
          // if this is a constant or a function that has already been evaled then save for execution
          if (from_node.type === "Constant" || (from_node.type === "Function" && !!from_node.nodeValue)) {
            if (!toExecNodes[node.nid]) {
              toExecNodes[node.nid] = { node: node, inputs: [from_node.nodeValue] };

            } else {
              toExecNodes[node.nid].inputs.push(from_node.nodeValue);
            }
          }
        })
      })

      console.log("toExecNodes:", toExecNodes);
      // execute
      var nodeIds = Object.keys(toExecNodes);
      for (var idx = 0; idx < nodeIds.length; idx++) {
        var id = nodeIds[idx];
        var node = toExecNodes[id].node;
        var inputs = toExecNodes[id].inputs;
        node.nodeValue = node.body(...inputs);
        console.log("Evaled Node:", node);
      }

    }

    var rsltConn = connections.filter(conn => conn.to_node === rsltNode.nid && rsltNode.fields.in[0].name === conn.to)[0];

    var lastNode = nodes.filter(node => node.nid === rsltConn.from_node)[0];
    let d = this.state.data;

    rsltNode.nodeValue = lastNode.nodeValue;

    d.nodes = nodes;
    d.connections = connections;

    this.setState({ data: d });

    // save results of those functions then loop through tree again and find all nodes who's inputs are satisfied
    // either by constants or previously evaled functions


  }

  render() {
    let nodes = this.state.data.nodes;
    let connectors = this.state.data.connections;
    let { mousePos, dragging } = this.state;

    let i = 0;
    let newConnector = null;

    if (dragging) {
      let sourceNode = this.getNodebyId(nodes, this.state.source[0]);
      let connectorStart = computeOutOffsetByIndex(
        sourceNode.x,
        sourceNode.y,
        this.state.source[1],
        sourceNode.type
      );
      let connectorEnd = { x: this.state.mousePos.x, y: this.state.mousePos.y };

      newConnector = <Spline start={connectorStart} end={connectorEnd} />;
    }

    let splineIndex = 0;

    return (
      <div className={dragging ? "dragging" : ""}>
        {nodes.map(node => {
          switch (node.type) {
            case "Constant":
              return (

                <ConstantNode
                  index={i++}
                  nid={node.nid}
                  title={node.name ? node.name : node.type}
                  inputs={node.fields.in}
                  outputs={node.fields.out}
                  nodeValue={node.nodeValue}
                  onNodeValueChanged={this.handleNodeValueChange}
                  pos={{ x: node.x, y: node.y }}
                  key={node.nid}
                  onNodeStart={nid => this.handleNodeStart(nid)}
                  onNodeStop={(nid, pos) => this.handleNodeStop(nid, pos)}
                  onNodeMove={(index, pos) => this.handleNodeMove(index, pos)}
                  onStartConnector={(nid, outputIndex) =>
                    this.handleStartConnector(nid, outputIndex)
                  }
                  onCompleteConnector={(nid, inputIndex) =>
                    this.handleCompleteConnector(nid, inputIndex)
                  }
                  onNodeSelect={nid => {
                    this.handleNodeSelect(nid);
                  }}
                  onNodeDeselect={nid => {
                    this.handleNodeDeselect(nid);
                  }}
                />
              );
              break;
            case "Function":
              return (
                <FunctionNode
                  index={i++}
                  nid={node.nid}
                  title={node.name ? node.name : node.type}
                  inputs={node.fields.in}
                  outputs={node.fields.out}
                  pos={{ x: node.x, y: node.y }}
                  key={node.nid}
                  onNodeStart={nid => this.handleNodeStart(nid)}
                  onNodeStop={(nid, pos) => this.handleNodeStop(nid, pos)}
                  onNodeMove={(index, pos) => this.handleNodeMove(index, pos)}
                  onStartConnector={(nid, outputIndex) =>
                    this.handleStartConnector(nid, outputIndex)
                  }
                  onCompleteConnector={(nid, inputIndex) =>
                    this.handleCompleteConnector(nid, inputIndex)
                  }
                  onNodeSelect={nid => {
                    this.handleNodeSelect(nid);
                  }}
                  onNodeDeselect={nid => {
                    this.handleNodeDeselect(nid);
                  }}
                />
              );
              break;
            case "Result":
              return (
                <ResultNode
                  index={i++}
                  nid={node.nid}
                  title={node.name ? node.name : node.type}
                  inputs={node.fields.in}
                  outputs={node.fields.out}
                  nodeValue={node.nodeValue}
                  pos={{ x: node.x, y: node.y }}
                  key={node.nid}
                  onNodeStart={nid => this.handleNodeStart(nid)}
                  onNodeStop={(nid, pos) => this.handleNodeStop(nid, pos)}
                  onNodeMove={(index, pos) => this.handleNodeMove(index, pos)}
                  onStartConnector={(nid, outputIndex) =>
                    this.handleStartConnector(nid, outputIndex)
                  }
                  onCompleteConnector={(nid, inputIndex) =>
                    this.handleCompleteConnector(nid, inputIndex)
                  }
                  onNodeSelect={nid => {
                    this.handleNodeSelect(nid);
                  }}
                  onNodeDeselect={nid => {
                    this.handleNodeDeselect(nid);
                  }}
                />
              );
              break;
            default:
              return (
                <Node
                  index={i++}
                  nid={node.nid}
                  title={node.name ? node.name : node.type}
                  inputs={node.fields.in}
                  outputs={node.fields.out}
                  pos={{ x: node.x, y: node.y }}
                  key={node.nid}
                  onNodeStart={nid => this.handleNodeStart(nid)}
                  onNodeStop={(nid, pos) => this.handleNodeStop(nid, pos)}
                  onNodeMove={(index, pos) => this.handleNodeMove(index, pos)}
                  onStartConnector={(nid, outputIndex) =>
                    this.handleStartConnector(nid, outputIndex)
                  }
                  onCompleteConnector={(nid, inputIndex) =>
                    this.handleCompleteConnector(nid, inputIndex)
                  }
                  onNodeSelect={nid => {
                    this.handleNodeSelect(nid);
                  }}
                  onNodeDeselect={nid => {
                    this.handleNodeDeselect(nid);
                  }}
                />
              );
              break;
          }

        })}

        {/* render our connectors */}

        <SVGComponent height="100vh" width="100vw" ref="svgComponent">
          {connectors.map(connector => {
            let fromNode = this.getNodebyId(nodes, connector.from_node);
            let toNode = this.getNodebyId(nodes, connector.to_node);

            let splinestart = computeOutOffsetByIndex(
              fromNode.x,
              fromNode.y,
              this.computePinIndexfromLabel(fromNode.fields.out, connector.from),
              fromNode.type
            );
            if (isNaN(splinestart.x) || !splinestart) {
              debugger;
            }
            let splineend = computeInOffsetByIndex(
              toNode.x,
              toNode.y,
              this.computePinIndexfromLabel(toNode.fields.in, connector.to)
            );

            return (
              <Spline
                start={splinestart}
                end={splineend}
                key={splineIndex++}
                mousePos={mousePos}
                onRemove={() => {
                  this.handleRemoveConnector(connector);
                }}
              />
            );
          })}
          {newConnector}
        </SVGComponent>
        <div className={classes.bottomMenu}>
          <Button variant="extendedFab"
            color="secondary"
            style={{ color: "#ffffff" }}
            aria-label="Simulate"
            onClick={this.handleSimulate}
          >
            <PlayCircleOutline style={{ fontSize: 45, fontWeight: "bold" }} />
          </Button>
        </div>

      </div>
    );
  }
}

export default NodeGraph;
