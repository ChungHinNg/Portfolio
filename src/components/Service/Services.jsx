import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="ProjectColour">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Consult"}
            disc={`Client Consultation and Website Design: Collaborate with clients to define website requirements and design the appearance, layout, and flow. Design tools: Figma, Visio, Canva, etc.
            `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Process"}
            disc={`Content Creation and Optimization: Use various software tools to create and optimize website content. Skilled in HTML, CSS, JavaScript, React, Angular, Java, Node, C#, Python, SQL, Unix/Linux, PHP, adobe creative suite etc.
            `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Maintain"}
            disc={`Testing, Security, and Code Development: Perform tests, security checks, and plan, design, write, modify, integrate, and test website-related code.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
