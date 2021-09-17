import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  h1{
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`