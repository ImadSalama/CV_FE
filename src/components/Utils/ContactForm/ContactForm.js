import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import Item from "antd/lib/list/Item";
import { contact } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import "./ContactForm.css";

function ContactForm(props) {
  const [messageApi, contextHolder] = message.useMessage();

  const layout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 10 },
      md: { span: 8 },
      lg: { span: 8 },
      xl: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 },
      md: { span: 12 },
      lg: { span: 12 },
      xl: { span: 10 },
    },
  };
  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const userContact = useSelector((state) => state.userContact);
  const { userContactInfo, loading, error } = userContact;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contact(email, name, messages));

    messageApi.open({
      type: "success",
      content: "The message has been sent successfully",
    });
  };

  useEffect(() => {}, [props.history, userContactInfo]);
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#fafbfc",
      }}
    >
      {contextHolder}

      <h1
        className="text-center pt-5 pb-3"
        style={{ fontFamily: "RobotoHeading" }}
        id="contactForm"
      >
        Contact Form
      </h1>
      <Form {...layout} style={{ fontFamily: "AvenirTextBlack" }}>
        <Item>
          <Input
            type="text"
            className="px-5"
            placeholder="Email Address"
            size="large"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="px-4 py-2" />
          <Input
            type="text"
            className="px-5"
            placeholder="Name"
            size="large"
            onChange={(e) => setName(e.target.value)}
          />
        </Item>
        {/* <Item>
          <Input type="text" placeholder="Enter Subject Here" size="large" />
        </Item> */}
        <Item>
          <Input
            className="mb-2"
            type="text"
            placeholder="Let us know how we can help you!"
            size="large"
            style={{ height: 120 }}
            onChange={(e) => setMessages(e.target.value)}
          />
        </Item>
      </Form>
      <div className="text-center">
        <button
          type="button"
          style={{
            backgroundColor: "#0a2c66",
            color: "white",
            width: "170px",
            height: "35px",
            fontSize: "12px",
            borderRadius: "2px",
            fontFamily: "AvenirTextBlack",
          }}
          onClick={submitHandler}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
