import React from "react";
import Automation from "../assets/automation.png";
import RPA from "../assets/robotic-process-automation.png";
import Consultation from "../assets/consultation.png";

const Services = () => {
  const workInfoData = [
    {
      image: Automation,
      title: "AI-Driven Automations",
      text: "Elevate operational efficiency and streamline processes with custom AI automation tailored to your business needs.",
    },
    {
      image: RPA,
      title: "Robotic Process Automation",
      text: "Harness the power of robotics to  improve accuracy, and free up your workforce for more strategic initiatives. ",
    },
    {
      image: Consultation,
      title: "AI & Robotics Consultation",
      text: "Leverage our expertise to develop AI that drive innovation and revolutionize your industry.",
    },
  ];
  return (
    <div className="service-section-wrapper">
      <div className="service-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">Revolutionize Your Industry with AI and Robotics</h1>
        <p className="primary-text">
        Unleash the transformative power of AI and robotics to redefine your industry, driving unprecedented innovation and efficiency.
        </p>
      </div>
      <div className="service-section-bottom ">
        {workInfoData.map((data) => (
          <div className="service-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;