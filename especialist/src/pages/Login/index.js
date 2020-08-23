import React from "react";
import Img from "../../img/veia.jpg";
import Img2 from "../../img/logotipo.png";
import {Form, Box, DivStyle} from "./styled";
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <Box>
        <Form>
          <img src={Img2} alt="Especialist" />
          <h5>Logar no Especialist</h5>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <Link to="/hospital" class="waves-effect waves-light btn blue">Cadastro</Link>
          <div>
            <Link to="/help">Precisa de ajuda?</Link> <Link to="/logon">Crie sua conta no Especialist</Link>
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