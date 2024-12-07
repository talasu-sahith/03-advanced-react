import { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [isboolean, setIsboolean] = useState(true);

  //   useEffect(()=>{
  //     setIsboolean((prev) => {
  // return !prev
  //     })
  //   },[])

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setIsboolean((prev) => !prev)}>
        Click Here
      </button>
      {/* 
      <h4>
        {isboolean ? (
          <div>
            <p>hello World</p>
          </div>
        ) : (
          ""
        )}
      </h4> */}
      {isboolean ? <Alert /> : ""}
    </>
  );
};

const Alert = () => {
  return (
    <>
      <div>
        <p>hello World</p>
      </div>
    </>
  );
};

export default ToggleChallenge;
