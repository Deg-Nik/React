import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount((countPlus) => {
      return countPlus + 1;
    });
  };
  const onMinus = () => {
    setCount((countMinus) => {
      return countMinus - 1;
    });
  };
  const onResset = () => {
    setCount((countResset) => {
      return (countResset = 0);
    });
  };

  return (
    <div className="feedback_wrapper">
      <div className="count">
        <p>{count}</p>
      </div>

      <div className="button_container">
        <div className="button_control">
          <Button name="Like" onClick={onPlus} />
        </div>

        <div className="button_control">
          <Button 
            name="Dislike" 
            onClick={onMinus}
            backgroundColor="black" 
          />
        </div>

        <div className="button_control">
          <Button
            name="Reset Results"
            onClick={onResset}
            backgroundColor="red"
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
