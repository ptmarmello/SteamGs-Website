import React from "react"
import '../safe/styles/Global.css';
import '../assets/scss/style.scss';
import App from "../safe/layouts/AppLayout";
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Hero from "../components/sections/Hero";
import Navbar from "../components/Navbar";
// import Image from '../components/elements/Image';
// import something from '../assets/images/desenvolvaprojetos.png';
// import MainContainer from "../components/MainContainer";
// import Navbar from "../components/Navbar";
// import rocketblue from '../../static/assets/images/rocketblue.jpg';
// import styled from 'styled-components';

// const DivContainer = styled.div`
//   width: 90%;
//   height: 100%;
//   max-height:80vh;

//   margin: 0 auto;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
// `;


export default function Home() {
  return(
    <App>
      <Navbar />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </App>
  );
}
