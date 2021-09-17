import styled from "styled-components";
import media from "styled-media-query";

console.log(media)

export const SectionTop = styled.section`
    padding-top: 10vh;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 80vh;
    min-height: 550px;
    .container{
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2%;
      display: flex;
      justify-content: center;
      align-items: center;
      .eu{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;  
        text-align: center;
        ${media.lessThan("medium")`
          margin: 0 auto;
          border-radius: 20px;
          width: 100%;
          height: 400px;
          text-align: center;
          padding: 20px;
        `}

        .my-img{
          margin: 10px auto;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          height: 180px;
          width: 180px;
          }
       p {
        width: 100%;
        max-width: 400px;
        }

      ul{
        list-style-type: none;
        display: flex;
        justify-content: center;
      }

      li {
        margin: 8px 5px ;
      }

      
      }
      
    }

`