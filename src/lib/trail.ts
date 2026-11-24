/** Layout of the journey trail: stops per row, and spacing (x in percent of the width, y in pixels). */
export const TRAIL = { COLS: 4, DX: 25, DY: 76, TOP: 40 } as const;

/** Where the nth stop sits: rows run left to right, then right to left, like a road winding down a hillside. */
export const trailPoint = (n: number): { x: number; y: number } => {
  const { COLS, DX, DY, TOP } = TRAIL;
  const row = Math.floor(n / COLS);
  const col = n % COLS;
  return { x: (row % 2 ? COLS - 1 - col : col) * DX + DX / 2, y: TOP + row * DY };
};
