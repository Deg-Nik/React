import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [count, setLikes] = useState(0);
  const [count1, setDislikes] = useState(0);

  const onLike = () => {
    setLikes((countPlus) => {
      return countPlus + 1;
    });
  };
  const onDislike = () => {
    setDislikes((countMinus) => {
      return countMinus + 1;
    });
  };
  const onResset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback_container">
      <div className="like_content">
        <div className="like_dislike">
          <Button name="Like" onClick={onLike} />
          <p className="count">{count}</p>
        </div>

        <div className="like_dislike">
          <Button name="Dislike" onClick={onDislike} backgroundColor="black" />
          <p className="count">{count1}</p>
        </div>
      </div>
      <div className="resset">
        <Button name="Reset Results" onClick={onResset} backgroundColor="red" />
      </div>
    </div>
  );
}

export default Feedback;
