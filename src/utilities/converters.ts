export const toArrwithUniqItems = (data: any) => {
  // console.log('data', data);
  let set = new Set();
  data.forEach((item: any) => {
    set.add(item.title);
  });
  const array: any = Array.from(set);

  //   console.log('array', array);

  return array;
};
