import { SectionTecnologias } from './style'
import { Tecnologia } from './Tecnologia'
  
import css from "../../images/css.png"
import html from "../../images/html.png"
import javascript from "../../images/javascript.png"
import node from "../../images/node.png"
import react from "../../images/react.png"
import git from "../../images/github.png"
 

export const Tecnologias: React.FC = ()=>{
  function CriaTecnologias(img:string,tecnologia:string, descricao:string){
    return { img, tecnologia, descricao }
  }
  const tecnologias = [
    CriaTecnologias(react,"react","uma biblioteca javascript que ajuda na criação de sites com interfaces reativas ao usuario"),
    CriaTecnologias(javascript,"javascript","uma das maiores linguagens de programação do mundo tem tem como objetivo criação de paginas dinamicas"),
    CriaTecnologias(node,"node","utilizado para criação de apis utilizando javascript como linguagem de programação"),
    CriaTecnologias(git,"git","sistema de controle de verções usado para desenvolver softweres"),
    CriaTecnologias(css,"css","uma tecnologia para estilização de paginas web"),
    CriaTecnologias(html,"html","linguagem de marcação utilizada para criação de paginas web"),
  ]
  return (
    <SectionTecnologias>
      <div className="container">
        <h2>VEJA AQUI ALGUMAS TECNOLOGIAS QUE TRABALHO</h2>

        <main>
          {tecnologias.map(tec => <Tecnologia key={tec.tecnologia} img={tec.img} tecnologia={tec.tecnologia} descricao={tec.descricao}/>)}
        </main>
      </div>
    </SectionTecnologias>
  )
}
