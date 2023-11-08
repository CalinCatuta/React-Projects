import Card from "../shared/Card";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isTextEmpty, setIsTextEmpty] = useState(true);

  const { addFeedback, feedbackEdit, updateFeedbackHan } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsTextEmpty(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const textChangeHan = (e) => {
    const newText = e.target.value;
    setText(newText);
    setIsTextEmpty(newText.trim() === "");
  };
  const submiteHan = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    if (feedbackEdit.edit === true) {
      updateFeedbackHan(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
  };

  return (
    <Card>
      <form onSubmit={submiteHan}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            onChange={textChangeHan}
            type="text"
            placeholder="Write a review"
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isTextEmpty}
          >
            Send
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
