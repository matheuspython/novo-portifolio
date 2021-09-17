import React from 'react'
import {SectionProjeto} from './style'

interface PropsTecnologia{
  img:string
  descricao:string
  link:string
}

export const Projeto:React.FC<PropsTecnologia> = ({img, descricao, link}) =>{
  return (
    <SectionProjeto>
      <img src={img} alt={link} />
      <p>{descricao}</p>
      <a title={`link para ${link}`} href={`https://${link}`}>link</a>
    </SectionProjeto>
  )
}