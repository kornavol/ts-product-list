import { csv } from "d3";
import doc from "../products.csv";

export default async function csvConverter(key ) {
  let currentCSV;
  switch (key) {
    case 'products':
      currentCSV = doc;
      break;

    default:
      currentCSV = doc;
      break;
  }
  const result = await csv(currentCSV);
  return result;
}
