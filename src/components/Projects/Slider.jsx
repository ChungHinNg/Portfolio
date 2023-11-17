import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import  P1 from "../pic/p1/4.gif";
import  P2 from "../pic/p2/1.gif";
import  P4 from "../pic/p4/1.gif";
import  P5 from "../pic/p5/7.gif";


let data = [
    {
        img : P1,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project1"
    },
    {
        img : P2,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project2"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project3"
    },
    {
        img : P4,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project4"
    },
    {
        img : P5,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project5"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`