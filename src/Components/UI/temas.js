import {
    fundoClaro,
    conteudoClaro,
    textoFundoClaro,
    fundoEscuro,
    conteudoEscuro,
    textoFundoEscuro
} from './variaveis';

export const temaClaro = {
    bg: fundoClaro,
    item: conteudoClaro,
    text: textoFundoClaro,
    filter: undefined,
}

export const temaEscuro = {
    bg: fundoEscuro,
    item: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
}