import styled from "styled-components";
import media from "styled-media-query";


export const SectionTecnologia = styled.article`
  width: 100%;
  max-width: 250px;
  margin: 5px;
  border: 1px solid ${theme => theme.theme.colors.text};
  padding: 5px;
  border-radius: 15px;
  transition: .4s;

  &:hover{
    padding: 35px;
    transform: rotate(360deg);
    font-size: 19px;
  }

  img{
    width: 100%;
    max-width: 120px;
  }
  h1{
    font-size: 22px;
    text-transform: uppercase;
  }



  ${media.lessThan("medium")`
    max-width:100%;
    &:hover{
      padding: 35px 2%;
      transform: rotate(0);
      font-size: 19px;
      height: 300px;
  }

  `}
`