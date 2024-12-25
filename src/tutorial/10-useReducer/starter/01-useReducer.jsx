import React, { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_LIST } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
};

// const CLEAR_LIST = "clearList";
// const RESET_LIST = "resetList";
// const REMOVE_LIST = "remmoveItem";

// const reducer = (state, action) => {
//   if (action.type === CLEAR_LIST) {
//     return { ...state, people: [] };
//   }
//   if (action.type === RESET_LIST) {
//     return { ...state, people: data };
//   }
//   if (action.type === REMOVE_LIST) {
//     let newPeople = state.people.filter((item) => item.id != action.payload.id);
//     // console.log(action);
//     return { ...state, people: newPeople };
//     // return state;
//   }
//   throw new Error(`No Matching "${action.type}" - action type`);
// };

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_LIST, payload: { id } });
  };
  const clearItems = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const reset = () => {
    dispatch({ type: RESET_LIST });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={state.people?.length === 0 ? reset : clearItems}
      >
        {state.people?.length === 0 ? `reset` : `clear items`}
      </button>
    </div>
  );
};

export default ReducerBasics;
