import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2>Hello There</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log("this is random component");
    // const intID = setInterval(() => {
    //   console.log("Interval");
    // }, 1000);
    // return () => {
    //   clearInterval(intID);
    //   console.log("clean up");
    // };

    const someFunc = () => {
      //some logic
    };
    window.addEventListener("scroll", someFunc);

    return () => window.removeEventListener("scroll", someFunc);
  }, []);
};

export default CleanupFunction;
