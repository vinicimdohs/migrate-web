import React from "react";
import {Link} from 'react-router-dom';
import Img from '../../img/avatar.jpg';

export default function Doctors({ doctors }) {
  const { divStyle, avatar, ulStyle, linkStyle} = styles;
  return (
    <div>
      <ul style={ulStyle}>
            <li>
            <div style={divStyle}>
                <img style={avatar} src={Img} alt="médico" />
              <div>
                <h6>Dr. Vinicius Fernandes</h6>
                <h6>Oftalmologista</h6>
                <Link to="/">Editar</Link>
                <Link to="/">Adicionar aos Ativos</Link>
              </div>
            </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dr. Matheus Brito</h6>
              <h6>Ginecologista</h6>
              <Link to="/">Editar</Link>
              <Link to="/">Adicionar aos Ativos</Link>
            </div>
          </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dr. Pedro Fernandes</h6>
              <h6>Fisioterapeuta</h6>
              <Link to="/">Editar</Link>
              <Link to="/">Adicionar aos Ativos</Link>
            </div>
          </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dra. Livia Brunelle</h6>
              <h6>Oftalmologista</h6>
              <Link to="/">Editar</Link>
              <Link to="/">Adicionar aos Ativos</Link>
            </div>
          </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dr. Vinicius Bizina</h6>
              <h6>Pediatra</h6>
              <Link to="/">Editar</Link>
              <Link to="/">Adicionar aos Ativos</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  ulStyle: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
  divStyle: {
    backgroundColor: "#5EA9B5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0px",
    borderRadius: "50px",
  },
  avatar: {
    marginLeft: "20px",
    borderRadius: "50%",
    height: "80px",
    width: "80px",
  },
  linkStyle: {
      color: "black",
  },
};