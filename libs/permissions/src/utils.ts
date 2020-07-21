export const shallowObjectClone = (o: Record<string, any>): any =>
  Object.assign({}, o);
export const shallowArrayClone = (a: string[]): string[] =>
  Object.assign([], a);
export const popParent = (abilities) => {
  const parent = abilities['parent'];
  delete abilities['parent'];
  return parent;
};
