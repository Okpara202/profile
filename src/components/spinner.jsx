import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "40% auto",
  borderColor: "blue",
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}></button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;