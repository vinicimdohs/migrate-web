import React from "react";
import Img from "../../img/veia.jpg";
import Img2 from "../../img/logotipo.png";
import {Form, Box, DivStyle} from "./styled";

export default function Login() {
  return (
    <div>
      <Box>
        <Form>
          <img src={Img2} alt="Especialist" />
          <h5>Logar no Especialist</h5>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <a class="waves-effect waves-light btn blue">Cadastro</a>
          <div>
            <a href="">Esqueceu sua senha?</a> <a class="waves-effect waves-light btn blue">Cadastrar-se</a>
          </div>
        </Form>
      </Box>
      <Box>
        <DivStyle>
          <img src={Img} alt="mulherComMedico" />
          <div className="center">
            <div></div>
            <h6>
              Consultar a disponibilidade e os horarios dos médicos de sua
              cidade nunca foi tão fácil como agora com o <b>Especialist</b>!
              Cadastre-se já e tenha o conforto de fazer isso tranquilo dentro
              da sua casa!
            </h6>
            <div></div>
          </div>
        </DivStyle>
      </Box>
    </div>
  );
}