import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import NodeInputList from '../../NodeInputList/NodeInputList';
import NodeOutputList from '../../NodeOutputList/NodeOutputList';
import Draggable from 'react-draggable';
import classes from './FunctionNode.module.scss';
import { types, isNumber } from 'util';
// todo create different node types

// -- node with digit inputs
// -- node represents function add/subtract
// -- output node - only displays

class FunctionNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleDragStart(event, ui) {
    this.props.onNodeStart(this.props.nid, ui);
  }

  handleDragStop(event, ui) {
    this.props.onNodeStop(this.props.nid, { x: ui.x, y: ui.y });
  }

  handleDrag(event, ui) {
    this.props.onNodeMove(this.props.index, { x: ui.x, y: ui.y });
  }
  handleValueChange(evt) {
    this.props.onNodeValueChanged(this.props.index, Number(evt.target.value));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selected !== nextState.selected || this.props.nodeValue !== nextProps.nodeValue;
  }

  onStartConnector(index) {
    this.props.onStartConnector(this.props.nid, index);
  }

  onCompleteConnector(index) {
    this.props.onCompleteConnector(this.props.nid, index);
  }

  handleClick(e) {
    this.setState({ selected: true });
    if (this.props.onNodeSelect) {
      this.props.onNodeSelect(this.props.nid);
    }
  }

  handleClickOutside() {
    let { selected } = this.state;
    if (this.props.onNodeDeselect && selected) {
      this.props.onNodeDeselect(this.props.nid);
    }
    this.setState({ selected: false });
  }


  render() {
    let { selected } = this.state;

    let nodeClass = [classes.node];
    if (selected) {
      nodeClass.push(classes.selected);
    }

    return (
      <div onDoubleClick={(e) => { this.handleClick(e) }}>
        <Draggable
          defaultPosition={{ x: this.props.pos.x, y: this.props.pos.y }}
          handle={"." + classes.nodeHeader}
          onStart={(event, ui) => this.handleDragStart(event, ui)}
          onStop={(event, ui) => this.handleDragStop(event, ui)}
          onDrag={(event, ui) => this.handleDrag(event, ui)}>
          <section className={nodeClass.join(' ')} style={{ zIndex: 1010 }}>
            <header className={classes.nodeHeader}>
              <span className={classes.nodeTitle}>{this.props.title}</span>
            </header>
            <div className={classes.nodeContent}>
              <NodeInputList items={this.props.inputs} onCompleteConnector={(index) => this.onCompleteConnector(index)} />
              <NodeOutputList items={this.props.outputs} onStartConnector={(index) => this.onStartConnector(index)} />
            </div>
          </section>
        </Draggable>
      </div>
    );
  }
}

export default onClickOutside(FunctionNode);