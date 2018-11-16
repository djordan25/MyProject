/* not bound to style, should be computed */

export function computeInOffsetByIndex(x, y, index) {
	let outx = x + 15;
	let outy = y + 47 + (index * 20);

	return { x: outx, y: outy };
}

export function computeOutOffsetByIndex(x, y, index, type) {

	var xOffset = 260;
	switch (type) {
		case "Function":
			xOffset = 185;
			break;
		case "Constant":
			xOffset = 260;
			break;
		default:
			break;
	}
	let outx = x + xOffset;
	let outy = y + 49 + (index * 22);

	return { x: outx, y: outy };

}