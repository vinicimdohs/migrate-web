import React from "react";
import {Link} from "react-router-dom";

import { Box, Container1, Container2, Line } from "./styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import Avatar from "../../img/avatar.jpg";
import Hospitals from "../../components/Hospitals/Hospitals";

export default function Pacient() {
  return (
    <div>
      <Box>
        <Container1>
          <Link to="/" class="waves-effect waves-light btn blue"><i class="material-icons">exit_to_app</i> Sair</Link>
          <div className="center">
          <img src={Avatar} alt="usuario" />
          <h4>Matheus Brito</h4>
          </div>
        </Container1>
        <Container2>
          <div>
            <SearchBar description="Pesquisar Hospitais" />
          </div>
          <Line></Line>
          <h6>Lista de Hospitais</h6>
          <Hospitals />
        </Container2>
      </Box>
    </div>
  );
}
