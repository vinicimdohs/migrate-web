import React, {useState} from "react";
import { Link } from "react-router-dom";

import Doctors from "../../components/Doctors/Doctors";
import { Header, Box, Container, Line, SubTitle } from "./styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import ModalDoctors from "../../components/Modals/ModalDoctors";

export default function Hospital() {
  
  return (
    <div>
      <Header>
        <Link to="/" class="waves-effect waves-light btn blue">
          <i class="material-icons">exit_to_app</i> Sair
        </Link>
        <h2>Hospital São Lorenço</h2>
      </Header>
      <Box>
        <div>
          <h4 className="center">Médicos Ativos</h4>
          <Line></Line>
          <br></br>
          <Container>
            <div>
              <SearchBar description={"Pesquisar Médicos..."} />
            </div>
            <Doctors />
          </Container>
        </div>
        <div>
          <SubTitle>
            <h4 className="center">Todos os Médicos</h4>
            <a class="center">
                Novo Médico<i class="material-icons">add_circle</i>
            </a>
          </SubTitle>
          <Line></Line>
          <br></br>
          <Container>
            <div>
              <SearchBar description={"Pesquisar Médicos..."} />
            </div>
            <Doctors />
          </Container>
        </div>
      </Box>
    </div>
  );
}
