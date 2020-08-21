import React from "react";
import Img from "../img/veia.jpg";

export default function Description() {
  const {imgStyle, lineStyle, containerStyle, textStyle} = styles;
    return (
      <div style={containerStyle}>
        <img style={imgStyle} src={Img} alt="mulherComMedico"/>
        <div className="center">
        <div style={lineStyle}></div>
        <h6>
          Consultar a disponibilidade e os horarios dos médicos de sua cidade
          nunca foi tão fácil como agora com o <b>Especialist</b>! Cadastre-se já e
          tenha o conforto de fazer isso tranquilo dentro da sua casa!
        </h6>
        <div style={lineStyle}></div>
        </div>
      </div>
  );
}

const styles = {
    containerStyle: {
        textAlign: "center",
        marginLeft: "20px",
        width: "730px",
    },
    imgStyle: {
        borderRadius: "50px",
        margin: "30px",
    },
    lineStyle: {
        width: "99%",
        height: "3px",
        backgroundColor: "#2D2C2C",
    },
}