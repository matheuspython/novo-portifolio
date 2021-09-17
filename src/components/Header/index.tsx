import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {shade} from 'polished'
import Switch from 'react-switch'

import {Container} from './style'

interface Props {
  toggleTheme(): void
}

export const Header: React.FC<Props> = ({toggleTheme}) =>{
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>

      <h1>Matheus Programador</h1>

      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  )
}