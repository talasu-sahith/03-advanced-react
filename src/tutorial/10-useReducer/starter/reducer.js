import { CLEAR_LIST, RESET_LIST, REMOVE_LIST } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_LIST) {
    let newPeople = state.people.filter((item) => item.id != action.payload.id);
    // console.log(action);
    return { ...state, people: newPeople };
    // return state;
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
