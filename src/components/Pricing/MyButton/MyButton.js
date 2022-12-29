import { Button } from "antd";
import React, { useState } from "react";

const MyButton = (props) => {
  const [width] = useState(props.width);
  const [height] = useState(props.height);
  const [color] = useState(props.color);
  const [bgColor] = useState(props.bgColor);
  const [content] = useState(props.content);

  return (
    <Button
      style={{
        height: height,
        width: width,
        color: color,
        backgroundColor: bgColor,
      }}
    >
      {content}
    </Button>
  );
};
export default MyButton;
