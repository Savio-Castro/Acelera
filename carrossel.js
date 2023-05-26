const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const videoIndex = img.length; // Índice da imagem do vídeo

let imagem_atual = 0;
let ultima_imagem = img.length - 1;
let tamanho_imagem = 600;
let primeira_imagem = 0;

function direita() {
  if (imagem_atual === videoIndex) {
    // Reproduzir o vídeo
    console.log("Reproduzindo o vídeo");
    // Aqui você pode adicionar a lógica para reproduzir o vídeo, como alterar a exibição ou iniciar a reprodução do elemento de vídeo
  } else {
    imagem_atual++;
    if (imagem_atual > ultima_imagem) {
      imagem_atual = videoIndex; // Define como índice do vídeo
    }
    imgs.style.transform = `translateX(${imagem_atual * -tamanho_imagem}px)`;
  }
}

function esquerda() {
  if (imagem_atual === videoIndex) {
    imagem_atual = primeira_imagem; // Retorna para a primeira imagem
  } else if (imagem_atual === primeira_imagem) {
    imagem_atual = ultima_imagem; // Define como última imagem
  } else {
    imagem_atual--;
  }

  imgs.style.transform = `translateX(${imagem_atual * -tamanho_imagem}px)`;
}
