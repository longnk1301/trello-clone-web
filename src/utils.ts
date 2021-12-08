export const mapOrder = (array: any[], order: any[], key: string) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));

  return array;
};
