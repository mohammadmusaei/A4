
export interface IResponse<T> {
  pageCount: number;
  pageNo: number;
  exception: any;
  total: number;
  data: Array<T>;
}
