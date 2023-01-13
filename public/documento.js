import {
  emitirTextoEditor,
  selecionarDocumento,
} from './socket-front-documento.js';

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.querySelector('#editor-texto');
const tituloDocumento = document.querySelector('#titulo-documento');

selecionarDocumento(nomeDocumento);

tituloDocumento.textContent =
  `Documento ${nomeDocumento}` || 'Documento sem título';

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor({
    texto: textoEditor.value,
    nomeDocumento,
  });
});

export function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}
