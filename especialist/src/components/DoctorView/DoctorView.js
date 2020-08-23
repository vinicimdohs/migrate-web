import React from "react";

export default function DoctorView(){
    return(
        <div className="container center">
    <table style={styles.table} className="striped">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Médico</th>
                <th style={{ width: "50%" }}>Especialização</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dr. Vinicius Fernandes</td>
                    <td>Oftalmologista</td>
                </tr>
                <tr>
                    <td>Dr. Matheus Brito</td>
                    <td>Ginecologista</td>
                </tr>
                <tr>
                    <td>Dr. Pedro Fernandes</td>
                    <td>Fisioterapeuta</td>
                </tr>
                <tr>
                    <td>Dra. Livia Brunelle</td>
                    <td>Oftalmologista</td>
                </tr>
                <tr>
                    <td>Dr. Vinicius Bizina</td>
                    <td>Pediatra</td>
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tfoot>
          </table>
        </div>
    );
}

const styles = {
    table: {
      margin: '20px',
      padding: '10px',
    },
  };