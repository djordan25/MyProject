import React from 'react';
import classes from './NodeInputListItem.module.scss';
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default class NodeInputListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	onMouseUp(e) {
		e.stopPropagation();
		e.preventDefault();

		this.props.onMouseUp(this.props.index);
	}

	onMouseOver() {
		this.setState({ hover: true });
	}

	onMouseOut() {
		this.setState({ hover: false });
	}

	noop(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	render() {
		let { name } = this.props.item;
		let { hover } = this.state;
		let iClasses = [classes.i];
		// if (hover) {
		// 	iClasses.push("hover");
		// }
		return (

			<li>
				<a className={classes.a} onClick={(e) => this.noop(e)} onMouseUp={(e) => this.onMouseUp(e)} href="#">
					<i className={iClasses.join(" ")}
						onMouseOver={() => { this.onMouseOver() }}
						onMouseOut={() => { this.onMouseOut() }}
					>
						<AddCircleIcon style={{ fontSize: 16 }} /></i>
					{name}
				</a>
			</li>
		);
	}
}
