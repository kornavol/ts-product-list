export const toArrwithUniqItems = (data: any) => {
  let set = new Set();
  data.forEach((item: any) => {
    set.add(item.title);
  });
  const array: any = Array.from(set);
  return array;
};
