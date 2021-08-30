import styled, { css } from 'styled-components';
import formStyle from './Form.module.css';

const MainButton = styled.button`
  width: 200px;
  height: 56px;
  border-radius: 20px;
  margin: 10px 10px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  ${props => props.right && css`
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

  ${props => props.left && css`
    /* background-color: #5658DD; */
    &:hover{
      background-color: #5658DD;
      transform: scale(1.05);
    }
    &:active{
      background-color: #151719;
      color: white;
      transform: scale(1);
    }
  `};

  ${props => props.submit && css`
    height: 40px;
    width: 120px;
    border-radius: 5px;
    /* position: absolute; */
  `}

`;

export default function Forms() {
    return (
    <section className={formStyle.formSection}>
        <img alt="Alguma imagem boa" src="https://via.placeholder.com/1080"/>
        <form className={formStyle.form} onSubmit={(e) => {e.preventDefault()}} >
            <div className={formStyle.formRow}>
                <label htmlFor="email-input-field"
                    className={formStyle.inputLabel}>
                    <input onChange={(e) => {
                        console.log(e.target.value)
                    }}
                        className={formStyle.input}
                        autoComplete="off"
                        type="email"
                        id="email-input-field"
                        placeholder="Enter email to register free"
                        aria-label="Your email address"/>
                  <MainButton submit>
                      Enviar
                  </MainButton>
                </label>
            </div>


            {/* <div className={formStyle.formRow}>
                <label
                    htmlFor="email-input-field"
                    className={formStyle.inputLabel}>
                    <input
                    className={formStyle.input}
                    autoComplete="off"
                    type="email"
                    id="email-input-field"
                    onChange={event => {console.log(event.target.value)}}
                    placeholder="Enter email to register free"
                    aria-label="Your email address"
                    required/>
                </label>
                <button
                    type="submit"
                    className={formStyle.submit}>
                    Register
                </button>
            </div> */}
        </form>
    </section>
  )
}
