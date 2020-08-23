import React from "react";
import {Link} from 'react-router-dom';

export default function Hospitals({ hospitals }) {
  const { divStyle, avatar, ulStyle, linkStyle} = styles;
  return (
    <div>
      <ul style={ulStyle}>
            <li>
          <Link to="/doctorlist" style={linkStyle}>
            <div style={divStyle}>
              <i style={avatar} class="large material-icons">
                local_hospital
              </i>
              <div>
                <h6>Hospital Santa Luzia1</h6>
                <h6>Av. Leopoldino, 432</h6>
              </div>
            </div>
          </Link>
        </li>
        <li>
        <Link to="/doctorlist" style={linkStyle}>
          <div style={divStyle}>
            <i style={avatar} class="large material-icons">
              local_hospital
            </i>
            <div>
              <h6>Hospital Santa Luzia2</h6>
              <h6>Av. Leopoldino, 431</h6>
            </div>
          </div>
          </Link>
        </li>
        <li>
        <Link to="/doctorlist" style={linkStyle}>
          <div style={divStyle}>
            <i style={avatar} class="large material-icons">
              local_hospital
            </i>
            <div>
              <h6>Hospital Santa Luzia3</h6>
              <h6>Av. Leopoldino, 430</h6>
            </div>
          </div>
          </Link>
        </li>
        <li>
        <Link to="/doctorlist" style={linkStyle}>
          <div style={divStyle}>
            <i style={avatar} class="large material-icons">
              local_hospital
            </i>
            <div>
              <h6>Hospital Santa Luzia3</h6>
              <h6>Av. Leopoldino, 430</h6>
            </div>
          </div>
          </Link>
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
  },
  linkStyle: {
      color: "black",
  },
};
