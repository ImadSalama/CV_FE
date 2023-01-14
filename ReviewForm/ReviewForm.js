import react ,{ useState } from "react";
import './ReviewForm.css';
import { FaStar } from "react-icons/fa";
import { review } from "../../../actions/userActions";
import {  message } from "antd";
import { useDispatch, useSelector } from "react-redux";


  

  useEffect(() => {}, [props.history, userContactInfo]);
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function ReviewForm(props) {
  const [messageApi, contextHolder] = message.useMessage();

  const [messages, setMessages] = useState("");

  const userReview = useSelector((state) => state.userReview);
  const { userReviewInfo, loading, error } = userReview;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(review(messages));

    messageApi.open({
      type: "success",
      content: "The message has been sent successfully",
    });
  };

  useEffect(() => {}, [props.history, userReviewInfo]);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
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
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="Add your Feedback now"
        style={styles.textarea}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={submitHandler}
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default ReviewForm;