import React, { Component } from 'react';

import NodeInputListItem from './NodeInputListItem/NodeInputListItem';
import classes from './NodeInputList.module.scss';
export default class NodeInputList extends Component {

	onMouseUp(i) {
		this.props.onCompleteConnector(i);
	}

	render() {
		let i = 0;

		return (
			<div className={classes.nodeInputWrapper}>
				<ul className={classes.nodeInputList}>
					{this.props.items.map((item) => {
						return (
							<NodeInputListItem onMouseUp={(i) => this.onMouseUp(i)} key={i} index={i++} item={item} />
						)
					})}
				</ul>
			</div>
		);
	}
}
