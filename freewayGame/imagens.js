let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo
let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemEstrada = loadImage("images/estrada.png")
  imagemAtor = loadImage("images/ator-1.png")
  imagemCarro = loadImage("images/carro-1.png")
  imagemCarro2 = loadImage("images/carro-2.png")
  imagemCarro3 = loadImage("images/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  somTrilha = loadSound("sons/trilha.mp3")
  somPonto = loadSound("sons/pontos.wav")
  somColisao = loadSound("sons/colidiu.mp3")

}