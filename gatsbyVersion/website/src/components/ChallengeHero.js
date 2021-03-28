// import React, { useState } from 'react';
import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ButtonGroup from './elements/ButtonGroup';
import Button from './elements/Button';
// import Image from './elements/Image';
// import Modal from '../elements/Modal';
import { Link } from 'gatsby';
// import something from './../assets/images/desenvolvaprojetos.png';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const ChallengeHero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  usingData,
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
        <div className={innerClasses} style={{paddingBottom:'20px', paddingTop:'50px'}}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="0">
                {usingData.title}
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="0">
                {usingData.description}
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="0">
                {usingData.tags !== null && 
                   <ButtonGroup>
                       {usingData.tags.map(items => {
                           return(
                            <Link to={`/${items}`} style={{margin:'10px'}}>
                                <Button color="primary" wideMobile style={{textTransform:'capitalize'}}>
                                    {items}
                                </Button>
                          </Link>
                           );
                       })}
                   </ButtonGroup>
                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ChallengeHero.propTypes = propTypes;
ChallengeHero.defaultProps = defaultProps;

export default ChallengeHero;