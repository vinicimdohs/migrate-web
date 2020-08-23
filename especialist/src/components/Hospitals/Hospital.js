import React from 'react';

export default function Hospitals({hospital}) {
    const {name, picture, rua, number} = hospital;
    return (
        <div>
            <div>
                <img src={picture} alt={name} />
            </div>
            <div>
                <h6>{name}</h6>
                <h6>{rua}, </h6><h6>{number}</h6>
            </div>
        </div>
    );
}
