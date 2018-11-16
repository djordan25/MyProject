import React from 'react';
import classes from './NodeOutputListItem.module.scss';
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
export default class NodeOutputListItem extends React.Component {

	onMouseDown(e) {
		e.stopPropagation();
		e.preventDefault();

		this.props.onMouseDown(this.props.index);
	}

	noop(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	render() {
		return (
			<li className={classes.li} onMouseDown={(e) => this.onMouseDown(e)}>
				<a className={classes.a} href="#" onClick={(e) => this.noop(e)}>
					{this.props.item.name}
					<RemoveCircleIcon style={{ fontSize: 16, marginLeft: "0.5rem" }} />
				</a>
			</li>
		);
	}
}
