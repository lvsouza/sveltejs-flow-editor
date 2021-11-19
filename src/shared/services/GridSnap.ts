
export const gridSnap = (value: number, snap = 1): number => Math.round(value / snap) * snap;