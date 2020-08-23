import React from "react";
import Img from '../../img/avatar.jpg';

export default function Doctors() {
  const { divStyle, avatar, ulStyle, box} = styles;
  return (
    <div>
      <ul style={ulStyle}>
            <li>
            <div style={divStyle}>
                <img style={avatar} src={Img} alt="médico" />
              <div>
                <h6>Dr. Vinicius Fernandes</h6>
                <h6>Oftalmologista</h6>
                <i class="material-icons">create</i>
                <i class="material-icons">check_circle</i>
              </div>
            </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dr. Matheus Brito</h6>
              <h6>Ginecologista</h6>
              <i class="material-icons">create</i>
              <i class="material-icons">cancel</i>
            </div>
          </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dr. Pedro Fernandes</h6>
              <h6>Fisioterapeuta</h6>
              <i class="material-icons">create</i>
              <i class="material-icons">check_circle</i>
            </div>
          </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div>
              <h6>Dra. Livia Brunelle</h6>
              <h6>Oftalmologista</h6>
              <i class="material-icons">create</i>
              <i class="material-icons">cancel</i>
            </div>
          </div>
        </li>
        <li>
          <div style={divStyle}>
          <img style={avatar} src={Img} alt="médico" />
            <div style={box}>
              <div>
              <h6>Dr. Vinicius Bizina</h6>
              <h6>Pediatra</h6>
              </div>
              <div>
              <i class="material-icons">create</i>
              <i class="material-icons">check_circle</i>
              </div>
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
};