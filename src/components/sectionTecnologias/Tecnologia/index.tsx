import React from 'react'
import {SectionTecnologia} from './style'

interface PropsTecs {
  img: string;
  tecnologia: string;
  descricao: string
}

export const Tecnologia: React.FC<PropsTecs> = ({img, tecnologia,descricao})=>{
  return (
    <SectionTecnologia>
      <img src={img} alt={tecnologia} />
      <h1>{tecnologia}</h1>
      <p>{descricao}</p>
    </SectionTecnologia>
  )
}