import React from 'react';
import { Col, Row, Checkbox } from 'antd'
import TextArea from './../../../components/Utils/CVMaking Components/TextArea/TextArea';
import DateField from './../../../components/Utils/CVMaking Components/DateField/DateField';
import { useMediaQuery } from 'react-responsive'
import InputField from './../../../components/Utils/CVMaking Components/InputFields/InputField';

const WorkFields = ({ checkBox = false, onClick }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isMobile = useMediaQuery({ maxWidth: 600 })

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <Row justify="center" style={{ marginTop: "5%" }}>
                <Col span={11}>
                    <InputField
                        placeholder="Job TItle"
                        suffix={true}
                        type="text"
                    />
                </Col>

                <Col span={2}>
                </Col>
                <Col span={11}>
                    <InputField
                        placeholder="Employer"
                        suffix={true}
                        type="text" />
                </Col>


                <Col style={{ marginTop: "7%" }} span={11}>
                    <InputField placeholder="City"
                        type="text" />
                </Col>
                <Col span={2}>
                </Col>
                <Col style={{ marginTop: "7%" }} span={11}>
                    <InputField placeholder="State/Province"
                        type="text" />
                </Col>

                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                    <DateField placeholder="Start Date" />
                </Col>
                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={2}>
                </Col>
                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                    <DateField placeholder="End Date" />
                </Col>

                {checkBox && <Col offset={isTabletOrMobile ? isMobile ? 12 : 15 : 17} span={isTabletOrMobile ? isMobile ? 12 : 9 : 6}>
                    <Checkbox style={{ color: "red", }} onChange={onChange}>I currently work here</Checkbox>
                </Col>}
            </Row>

            <Row>



                <Col style={{ marginTop: "5%" }} span={24}>
                    <TextArea placeholder="Add Description" suffix textArea={true} minRows={3}></TextArea>
                </Col>
                <Col offset={23} span={1} onClick={onClick} style={{ cursor: "pointer", position: "relative", right: isMobile ? "-15px" : "-50px", top: "-50px" }} span={1}><i class="far fa-trash-alt"></i></Col>

            </Row>

        </>
    );
}

export default WorkFields;