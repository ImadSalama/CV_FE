import React, { useState, useEffect } from "react";
import "./ReviewForm.css";
import { FaStar } from "react-icons/fa";
import { review } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userReviewReducer } from "../../../reducers/userReducers";
import { getUserInfo } from "../../../helpers";
import { message as antMessage } from "antd";

const stars = Array(5).fill(0);

function ReviewForm(props) {
  // useEffect(() => {}, [props.history, userContactInfo]);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const [messageApi, contextHolder] = antMessage.useMessage();

  const [messages, setMessages] = useState("");

  const userReview = useSelector((state) => state.userReview);
  const { userReviewInfo, loading, error } = userReview;
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [userInfo] = useState(() => getUserInfo());

  // const dispatch = useDispatch();
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(review(messages));

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const {
      user: { email },
    } = userInfo;
    dispatch(
      review(currentValue, message, email, (err = false) => {
        if (err) {
          messageApi.open({
            type: "error",
            content: "Something Went Wrong!",
          });
          return;
        }
        messageApi.open({
          type: "success",
          content: "Thanks For Your Feeback!",
        });
      })
    );
    setMessage("");
    setCurrentValue(0);
  };

  useEffect(() => {}, [props.history, userReviewInfo]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      {contextHolder}
      <h2> Add your Feedback now </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <textarea
        placeholder="Add your Feedback now"
        style={styles.textarea}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <button
        onClick={submitHandler}
        style={styles.button}
        disabled={!message || !currentValue}
      >
        Submit
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default ReviewForm;
