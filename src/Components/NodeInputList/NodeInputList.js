import React, {Component} from 'react';

import NodeInputListItem from './NodeInputListItem/NodeInputListItem';

export default class NodeInputList extends Component {

	onMouseUp(i) {
		this.props.onCompleteConnector(i);
	}
	
	render() {
		let i = 0;

		return (
			<div className="nodeInputWrapper">
				<ul className="nodeInputList">
					{this.props.items.map((item) => {
						return (
							<NodeInputListItem onMouseUp={(i)=>this.onMouseUp(i)} key={i} index={i++} item={item} />
						)
					})}
				</ul>
			</div>
		);
	}
}
