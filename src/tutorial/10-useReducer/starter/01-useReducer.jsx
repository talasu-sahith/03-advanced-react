import React, { useReducer } from "react";
import { data, people } from "../../../data";

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === "clearList") {
    return { ...state, people: [] };
  }
  if (action.type === "resetList") {
    return { ...state, people: data };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearItems = () => {
    dispatch({ type: "clearList" });
  };
  const reset = () => {
    dispatch({ type: "resetsLists" });
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
