import React from 'react'
import {Link} from "react-router-dom";

import Doctors from '../../components/Doctors/Doctors';
import {Title, Box, Container, Line} from "./styled";
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Hospital() {
    return (
        <div>
            <Title>
            <Link to="/" class="waves-effect waves-light btn blue"><i class="material-icons">exit_to_app</i> Sair</Link>
                <h2>Hospital São Lorenço</h2>
            </Title>
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
                    <div>
                    <h4>Todos os Médicos</h4>
                    <Link to="/">Adicionar Médico</Link>
                    </div>
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
    )
}
