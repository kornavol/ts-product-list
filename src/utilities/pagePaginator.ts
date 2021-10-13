const pagePaginator = (limit:number, activePage:number,  data:any): any => {
  let startIndex:number = activePage - 1;
  let lastIndex:number = activePage + limit-1;

  if (startIndex < 0) {
    startIndex = 0;
  }

  const currList = data.slice(startIndex, lastIndex);

  return  currList
};
export default pagePaginator