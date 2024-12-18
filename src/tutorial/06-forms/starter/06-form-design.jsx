import { useState } from "react";
const frameworks = ["react", "angular", "vue", "express"];
const FormDesign = () => {
  const [name, setName] = useState("");
  const [shipping, setShipping] = useState(false);
  const [frameWork, setFrameWork] = useState("react");
  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFrameWork = (e) => {
    setFrameWork(e.target.value);
  };
  return (
    <div>
      <h2>Form Design</h2>
      <form className="form">
        <div>
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          ></input>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label className="form-label" htmlFor="framework">
            FrameWork
          </label>
          <select
            name="framework"
            id="framework"
            value={frameWork}
            onChange={handleFrameWork}
          >
            {frameworks.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormDesign;
