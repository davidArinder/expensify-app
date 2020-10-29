// Filters reducer
import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"), // defaults to start of month
  endDate: moment().endOf("month"), // defaults to end of month
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "EDIT_DESCRIPTION":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
