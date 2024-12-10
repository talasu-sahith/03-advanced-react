import { people } from "../../../data";
import Person from "./Person";
const List = () => {
  console.log(people);
  return (
    <>
      <h2>People data</h2>
      {people.map((item) => {
        return <Person {...item} key={item.id} />;
      })}
    </>
  );
};

export default List;
