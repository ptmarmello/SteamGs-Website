import styled, { css } from 'styled-components';
import Navbar from '../Navbar';
import styles from './MainSection.module.css';
import webconfig from '../../data/webConfig.json';

const MainButton = styled.button`
  width: 200px;
  height: 56px;
  border-radius: 20px;
  margin: 10px 10px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  ${props => props.left && css`
    background-color: #5658DD;
    &:hover{
      background-color: #151719;
      color: white;
      transform: scale(1.05);
    }
    &:active{
      background-color: #fff;
      color: black;
      transform: scale(1);
    }
  `};

  ${props => props.right && css`
    background-color: #fff;
    /* color: white; */
    &:hover{
      background-color: #151719;
      color: white;
      transform: scale(1.05);
    }
    &:active{
      transform: scale(1);
    }
  `};

  ${props => props.submit && css`
    height: 40px;
    width: 120px;
    border-radius: 5px;
    position: absolute;
  `}

`;

export default function MainSection({config}) {
  
  return (
    <>
      {config.withNav.onOff===1 && <Navbar/>}
      <section className={styles.mainSection}>
          <div className={styles.sectionDiv}>
            <h1>Os melhores <span>Profissionais</span> começam aqui!</h1>
            <h2>{config.h2.text}</h2>
            <p>{config.p.text}</p>
          </div>
          {config.isButton.onOff===1 && 
            <div className={styles.sectionContainer}>
                <div className={styles.sideContainer}>
                    <MainButton left>{config.buttonLeft.text}</MainButton>
                    <MainButton right>{config.buttonRight.text}</MainButton>
                </div>
            </div>
          }
      </section>
    </>
  )
}
