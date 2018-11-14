import React, { Component } from 'react';

export default class SVGComponent extends Component {
  render() {
      if(!this.props.children[0][0].props.start.x){
          debugger;
      }
    return <svg style={{position:'absolute', zIndex:9000}} {...this.props} ref="svg">{this.props.children}</svg>;
  }
}