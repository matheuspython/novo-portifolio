import React from 'react'
import {SectionTop}from './style'

import linkedin from "../../images/github.png"
import github from "../../images/linkedin.png"

export const Section: React.FC = ()=>{
  return (
    <SectionTop>
      <div className="container">
        <div className="eu">
        <img className="my-img" src="https://github.com/matheuspython.png" alt="minha imagem" />
            <div className="text-wraper-box">
                <h2>MATHEUS F. SOUZA</h2>
                <p>programador focado no front end(parte visual do site) você pode ver alguns de meus projetos no GitHub</p>
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