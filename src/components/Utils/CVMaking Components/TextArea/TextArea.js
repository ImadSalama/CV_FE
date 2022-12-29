import React, { useState, useEffect } from 'react';
import './../InputFields/InputField.css'
import { StarFilled } from '@ant-design/icons';

import { Input, Tooltip } from 'antd';
const TextArea = ({ placeholder, type, onChange, suffix, textArea, minRows,value, name }) => {
    return (
        <div id="CVMakingInputField">
            <Input.TextArea
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                bordered={false}
                allowClear
                value={value}
                name={name}
                autoSize={{ minRows: minRows, maxRows: minRows }}
                style={textArea ? { paddingBottom: "10%", wordWrap: "break-word" } : {}}
                id="antInputField"
                suffix={suffix ?
                    <Tooltip title="Extra information">
                        <span style={{ fontSize: "20px", color: "#FF0000", fontStyle: "oblique" }}>*</span>
                    </Tooltip> :
                    ""
                }

            />
        </div>
    );
}

export default TextArea;