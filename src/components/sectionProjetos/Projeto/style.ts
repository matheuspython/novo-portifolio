import styled from "styled-components";
import media from "styled-media-query";


export const SectionProjeto = styled.article`
  margin: 5px;
  height: 350px;
  width: 100%;
  max-width: 300px;
  border: 1px solid ${theme => theme.theme.colors.text};
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  justify-content: space-between;
  border-radius: 12px;
    img{
      width: 180px;
    height: 180px;
    border-radius: 50%;
    transition: .4s;
    object-fit: cover;
      &:hover{
        width: 100%;
      border-radius: 12px;
      }
    }
    p{
      width: 100%;
    }
    a{ 
      line-height: 35px;
      height: 35px;
      width: 180px;
      display: inline-block;
      color: white;
      border-radius: 25px;
      background-color: rgb(32, 67, 182);
      transition: .4s;
      text-decoration: none;
      font-size: 16px;
      &:hover{
        background-color: rgb(71, 103, 207);
        letter-spacing: 1.5px;
        font-weight: bold;
      }
    }
    ${media.lessThan("medium")`
    max-width: 100%;
    img{
      width: 250px;
      height: 250px;
  `}

`