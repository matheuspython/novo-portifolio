import React, {useState, useEffect} from 'react'
import {SectionTop}from './style'

import linkedin from "../../images/github.png"
import github from "../../images/linkedin.png"

export const Section: React.FC = ()=>{
  const [opacidade, setOpacidade] = useState('some')
  let [meunome,setMeunome] = useState(' ')
  let [textoSobre, setTextoSobre] = useState(' ')

  const matheus = 'MATHEUS F. SOUZA'
  const marketinSplit = matheus.split('')
 
  const sobreMim = 'sou programador desde os meus 16 anos me interessei muito pela area do desenvolvimento web foi paixão a primeira vista desde então venho estudando para cada dia me tornar um programador e pessoa melhor atualmente sou freelancer veja alguns de meus projetos e skils logo abaixo'
  const marketinSplit2 = sobreMim.split('')
 
  setTimeout(()=>{
    setOpacidade('aparece')
  },1000)
  useEffect(()=> marketinSplit.forEach((letra, i) => { setTimeout(()=>setMeunome(meunome += letra), 150 * i)}),[])
  useEffect(()=> marketinSplit2.forEach((letra, i) => { setTimeout(()=>setTextoSobre(textoSobre += letra), 100 * i)}),[])
  

  return (
    <SectionTop>
      <div className="container">
        <div className={`eu ${opacidade}`}>
        <img className="my-img" src="https://github.com/matheuspython.png" alt="minha imagem" />
            <div className="text-wraper-box">
                <h2>{meunome}</h2>
                <p>{textoSobre}</p>
                <ul>
                    <li>
                        <a title="link para o meu github" target="_blanck" href="https://github.com/matheuspython">
                         <img src={github} width="30" alt="gitHub" />
                        </a>
                    </li>
                    <li className="margin">
                      <a title="link para o meu linkedin" target="_blanck" href="https://www.linkedin.com/in/matheus-souza-b0a8731b8/">
                        <img src={linkedin} width="30" alt="linkedin" />
                      </a>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </SectionTop>
  )
}