import Api from "./Api";
import { ApiDataModel, FilterModel } from "../models/redux-models";
import constants from "../constant";
const DataService = {
  async loadData(filters: FilterModel) {
    var res = await Api().get("trending", {
      params: {
        api_key: constants.api_key,
        limit: 12,
        offset: filters.offset,
        rating: filters.rating || "",
      },
    });

    return res.data.data;
  },
  async SearchLoadData(filters: FilterModel) {
    console.log(filters.q);

    var res = await Api().get("search", {
      params: {
        api_key: constants.api_key,
        q: filters.q,
        limit: 12,
        offset: filters.offset,
        rating: filters.rating || "",
      },
    });

    return res.data.data;
  },
};

export default DataService;
