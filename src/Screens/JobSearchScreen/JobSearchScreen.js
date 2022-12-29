import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import { useMediaQuery } from 'react-responsive'
import JobSearchBanner from "../../components/JobSearch/JobSearchBanner/JobSearchBanner";
import SideBar from "../../components/JobSearch/SideBar/SideBar";
import JobDescriptionCard from "../../components/JobSearch/JobDescriptionCard/JobDescriptionCard";
import JobApplyCard from "../../components/JobSearch/JobApplyCard/JobApplyCard";
import './JobSearchScreen.css'
const JobSearchScreen = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const sidebarDisplay = useMediaQuery({ query: '(max-width: 960px)' })
  const { Sider, Content } = Layout
  const [sideWidth, setSideWidth] = useState("")



  return (
    <>
      <div style={{ fill: "#F1F1F1" }}>
        <div  >
          <JobSearchBanner setWidth={() => { setSideWidth("225px") }} isMobile={isMobile} isTabletOrMobile={isTabletOrMobile} sidebarDisplay={sidebarDisplay} />
        </div>
        <Layout >


          {sidebarDisplay ? <Sider
            className={sideWidth !== "0px" ? "sidenav show" : "sidenav"}
          >
            <SideBar close={true} onClick={() => { setSideWidth("0px") }} />
          </Sider> :
            <Sider
              style={{
                backgroundColor: "white",

              }}
              width={225}
            >
              <SideBar />
            </Sider>
          }


          <Content

          >
            <div >


              <Row >
                <Col style={{ paddingLeft: "5px" }} xl={14} lg={14} md={14} sm={24} xs={24} className="mx-auto">
                  {/* <JobDescriptionCard openCard={openCard} />
        <JobDescriptionCard openCard={openCard} />
        <JobDescriptionCard openCard={openCard} />
        <JobDescriptionCard openCard={openCard} /> */}
                  <div style={{ backgroundColor: "white" }}>
                    <div style={{ paddingTop: "10px" }}>
                      <JobDescriptionCard color="#F1F1F1" />
                      <JobDescriptionCard />
                      <JobDescriptionCard />
                      <JobDescriptionCard />

                    </div></div>
                </Col>
                <Col style={{ paddingLeft: "5px" }} xl={10} lg={10} md={10} sm={24} xs={24} className="mx-auto">
                  <div style={{ backgroundColor: "white" }}>
                    <div style={{ paddingTop: "10px" }}>  <JobApplyCard /></div></div>
                </Col>
              </Row>
            </div>
          </Content></Layout>
      </div>
    </>
  );
};

export default JobSearchScreen;