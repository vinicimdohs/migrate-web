import React from "react";
import { Link } from "react-router-dom";

import { Form, Box, Div1, Div2, Div3, DivBtn, Container } from "./styled";

export default function CadastroCliente() {
  return (
    <Box>
      <Form>
        <Div1>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="CNPJ" />
        </Div1>
        <Div2>
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Numero" />
          <input type="text" placeholder="Complemento" />
        </Div2>
        <Div3>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Estado" />
        </Div3>
        <div>
          <input type="text" placeholder="Telefone/Celular" />
        </div>
        <div>
          <input type="text" placeholder="Equipamentos disponíveis" />
        </div>
        <Div1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Confirmar Email" />
        </Div1>
        <Div1>
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
        </Div1>
        <Link to="/" class="waves-effect waves-light btn blue">
          Voltar
        </Link>
        <DivBtn>
          <Link to="/user" class="waves-effect waves-light btn blue">
            Cadastrar
          </Link>
        </DivBtn>
      </Form>
      <Container>
        <h3 className="center">Qual o papel do Hospital?</h3>
        <div></div>
        <h6 className="center">
          O Hospital fornecerá a lista de médicos plantonistas disponíveis!
        </h6>
        <div></div>
      </Container>
    </Box>
  );
}
