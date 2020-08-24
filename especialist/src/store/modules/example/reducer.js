import * as types from '../types';

const initialState = {
    botaoClicado: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.BOTAO_CLICADO_SUCCESS:
            console.log("Sucesso!")
            const newState = {...state};
            newState.botaoClicado = !newState.botaoClicado
            return state;

        case types.BOTAO_CLICADO_FAILURE:
            console.log("Deu Erro!")
            return state;

        case types.BOTAO_CLICADO_REQUEST:
            console.log("Estou fazendo a requisição");
            return state;
        
        default:
            return state;
    }
};