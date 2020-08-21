import React from "react";

export default function Login() {
  const { containerStyle, inputStyle, buttonStyle } = styles;

  return (
    <div>
      <div style={containerStyle}>
        <form>
          <input style={inputStyle} type="text" placeholder="Email" />
          <input style={inputStyle} type="password" placeholder="Senha" />
          <a style={buttonStyle} class="waves-effect waves-light btn blue">Cadastro</a>
          <div>
          <a href="#">Esqueceu sua senha?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  containerStyle: {
    margin: "30px",
    padding: "20px",
    border: "1px solid lightgray",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "550px",
  },
  inputStyle: {
      margin: "10px",
      padding: "10px",
      border: "1px solid lightgray",
      borderRadius: "50px",
      width: "85%",
  },
  buttonStyle: {
      borderRadius: "50px",
      margin: "15px",
  }
};
