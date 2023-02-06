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
  // errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messagesError, setMessagesError] = useState("");

  const userContact = useSelector((state) => state.userContact);
  const { userContactInfo, loading, error } = userContact;

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is Required");
    }

    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailError("Enter a Valid Email");
    }

    return (
      !!email &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );
  };

  const validateName = () => {
    if (!name) {
      setNameError("Name is Required");
    }
    return !!name;
  };

  const validateMessage = () => {
    if (!messages) {
      setMessagesError("Message is Required");
    }

    return !!messages;
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidMessage = validateMessage();

    if (!isValidEmail || !isValidMessage || !isValidName) {
      return;
    }

    dispatch(
      contact(email, name, messages, (err = false) => {
        if (err) {
          messageApi.open({
            type: "error",
            content: "Something Went Wrong!",
          });
          return;
        }
        messageApi.open({
          type: "success",
          content: "Your Message was sent successfully!",
        });
      })
    );
    setEmail("");
    setMessages("");
    setName("");
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
      <Form
        className="contactFormAndImg"
        {...layout}
        style={{ fontFamily: "AvenirTextBlack" }}
      >
        {/* <img
          className="mb-5 pb-5 pic"
          width="80%"
          height="300px"
          src={contactimg}
        /> */}

        <Item>
          <Form.Item
            validateStatus={emailError ? "error" : ""}
            help={emailError}
            wrapperCol={{
              xl: 24,
            }}
          >
            {/* <i class="fa-solid fa-envelopes"></i> */}
            <Input
              type="email"
              className="px-5 col-xl-12 Email"
              placeholder=" Email Address"
              size="large"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </Form.Item>
        </Item>
        <Item>
          {/* <div className="px-4 py-2" /> */}
          <Form.Item
            validateStatus={nameError ? "error" : ""}
            help={nameError}
            wrapperCol={{
              xl: 24,
            }}
          >
            <Input
              type="text"
              className="px-5 Name"
              placeholder="Name"
              size="large"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </Form.Item>
        </Item>
        {/* <Item>
          <Input type="text" placeholder="Enter Subject Here" size="large" />
        </Item> */}
        <Item>
          <Form.Item
            validateStatus={messagesError ? "error" : ""}
            help={messagesError}
            style={{ width: "100%" }}
            wrapperCol={{
              xl: 24,
            }}
          >
            <Input
              className="px-5 Messages"
              type="text"
              placeholder="Let us know how we can help you!"
              size="large"
              style={{ height: 120 }}
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
              required
            />
          </Form.Item>
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
