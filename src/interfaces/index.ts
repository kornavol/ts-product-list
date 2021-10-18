export interface ProductFilter {
    gender:string,
    onSale: boolean
}

export interface FilterParam {
    searchTerm: string;
    filter: ProductFilter;
  }