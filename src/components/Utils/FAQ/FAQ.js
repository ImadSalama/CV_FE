import React, { Component } from "react";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./FAQ.css";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const qstn1 = `Is my data secure?`;
const qstn2 = `Is my Resume also available for download in word?`;
const qstn3 = `Can I edit my Resume?`;
const qstn4 = `Can I hide an item on my Resume?`;
const qstn5 = `Does it cost money to use Carrer CV?`;

const ans1 = `
Certainly, your data will be safe, we have complete confidentiality on this subject, so rest assured.
`;

const ans2 = `
Oh! No, you can only download a PDF file
`;

const ans3 = `
Yes, you can edit it whenever you want.
`;

const ans4 = `
Yes, you can hide what you want and show what you want, it's up to you.
`;

const ans5 = `
There is a small amount to be paid, and you have the option to use our site monthly or quarterly.
`;

const genExtra = () => (
  <PlusOutlined
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

export default class FAQ extends Component {
  render() {
    return (
      <>
        <Collapse
          defaultActiveKey={[""]}
          bordered={false}
          onChange={callback}
        >
          <Panel header={qstn1} key="1" extra={genExtra()} showArrow={false}>
            <div>{ans1}</div>
          </Panel>
          <Panel header={qstn2} key="2" extra={genExtra()} showArrow={false}>
            <div>{ans2}</div>
          </Panel>
          <Panel header={qstn3} key="3" extra={genExtra()} showArrow={false}>
            <div>{ans3}</div>
          </Panel>
          <Panel header={qstn4} key="4" extra={genExtra()} showArrow={false}>
            <div>{ans4}</div>
          </Panel>
          <Panel header={qstn5} key="5" extra={genExtra()} showArrow={false}>
            <div>{ans5}</div>
          </Panel>
        </Collapse>
      </>
    );
  }
}
