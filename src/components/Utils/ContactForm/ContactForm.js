import React from "react";
import { Form, Input } from "antd";
import Item from "antd/lib/list/Item";
import "./ContactForm.css";

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

const ContactForm = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#fafbfc",
      }}
    >
      <h1
        className="text-center pt-5 pb-3"
        style={{ fontFamily: "RobotoHeading" }}
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
          />
          <div className="px-4 py-2" />
          <Input type="text" className="px-5" placeholder="Name" size="large" />
        </Item>
        <Item>
          <Input type="text" placeholder="Enter Subject Here" size="large" />
        </Item>
        <Item>
          <Input
            className="mb-2"
            type="text"
            placeholder="Let us know how we can help you!"
            size="large"
            style={{ height: 120 }}
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
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
