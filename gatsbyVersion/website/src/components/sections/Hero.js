// import React, { useState } from 'react';
import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
// import Modal from '../elements/Modal';
import { Link } from 'gatsby';
import something from './../../assets/images/desenvolvaprojetos.png';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  //const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Os melhores <span className="text-color-primary">Profissionais</span> começam aqui.
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Venha participar do primeiro ambiente de desenvolvimento universitário do Brasil
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Link to="/forcompanies" style={{margin:'10px'}}>
                    <Button color="dark" wideMobile>
                      Acessar Desafios
                    </Button>
                  </Link>
                  <Link to="/userpage" style={{margin:'10px'}}>
                    <Button color="primary" wideMobile>
                      Como funciona?
                    </Button>
                  </Link>
                    
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
            {/* <a
              //data-video="https://player.vimeo.com/video/174002812"
              //href="#0"
              //aria-controls="video-modal"
              // onClick={openModal}
            > */}
              <Image
                className="has-shadow"
                src={something}
                alt="Opening"
                width={800}
                height={400} />
            {/* </a> */}
          </div>
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;