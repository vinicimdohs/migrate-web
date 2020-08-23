import React from 'react'
import {Link} from "react-router-dom";
import DoctorView from '../../components/DoctorView/DoctorView'

export default function DoctorList() {
    return (
        <div>
            <Link style={styles.button} to="/cliente" class="waves-effect waves-light btn blue"><i class="material-icons">arrow_back</i> Voltar</Link>
            <h1 className="center">Lista de Médicos</h1>
            <DoctorView />
        </div>
    )
}

const styles = {
    button: {
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        height: "38px",
        width: "90px",
    }
}