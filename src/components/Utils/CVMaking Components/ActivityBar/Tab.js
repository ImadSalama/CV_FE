import React, { useState } from "react";
import "./Tab.css";
import { Steps } from "antd";

const { Step } = Steps;

export default function Tab({ current }) {
    // const [current, setCurrent] = useState(0);

    // const onChangeCurrent = (current) => {
    //     setCurrent(current);
    // };

    return (
        <>
            <Steps
                current={current}
                // onChange={onChangeCurrent}
                responsive="true"
                className="antTabs"
                size="small"
                style={{ width: "650px", fontWeight: "bold", fontFamily: "RobotoHeading" }}
            >
                <Step title="Basic Details" />
                <Step title="Work History" />
                <Step title="Education" />
                <Step title="Skills" />
            </Steps>
        </>
    );
}