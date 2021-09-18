import styled from "styled-components";
import media from "styled-media-query";


export const FormSection = styled.section`
  width: 100%;
  padding: 20px 0;
  h4{
    font-size: 30px;
    text-transform: uppercase;
  }
  .container{

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  form{
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     ${media.lessThan("medium")`
    max-width:100%;
    
  `}
      input{

        background-color: /*#918e8e*/${theme => theme.theme.colors.primary};
        width: 98%;   
        border: 0;
        border-radius: 12px;
        margin: 5px;
        height: 35px;
        padding-left: 15px;
        outline: 0;
        font-size: 18px;
        color: ${theme => theme.theme.colors.text};
        &::placeholder {
        color: white;
        }
        ${media.lessThan("medium")`
          height: 50px;
    
  `}

      }
      textarea {
        background-color:${theme => theme.theme.colors.primary};
        resize: none;
        width: 98%;
        font-size: 18px;
        height: 200px;
        border: 0;
        outline: 0;
        color: ${theme => theme.theme.colors.text};
        border-radius: 12px;
        padding: 8px;
        &::placeholder {
        color: white;
        }
      }
      .enviar{
        cursor: pointer;
        background-color: rgb(49, 102, 216);
        color: white;
        text-transform: uppercase;
        transition: .4s;
        &:hover {
         background-color: rgb(35, 72, 151);
        }
      }
  }
  


`