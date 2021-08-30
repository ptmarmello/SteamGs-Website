import styled, { css } from 'styled-components';
import Navbar from '../Navbar';
import styles from './MainSection.module.css';


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

export default function MainSection() {
  return (
    <>
      <Navbar />
      <section className={styles.mainSection}>
          <div className={styles.sectionDiv}>
            <h1>Os melhores <span>Profissionais</span> começam aqui!</h1>
            <h2>Sua plataforma de experiência profissional</h2>
            <p>Embarque nessa jornada até seu emprego dos sonhos!</p>
          </div>
          <div className={styles.sectionContainer}>
              <div className={styles.sideContainer}>
                  <MainButton left>Vamo que Vamo</MainButton>
                  <MainButton right>Saiba mais</MainButton>
              </div>
          </div>
      </section>
    </>
  )
}
