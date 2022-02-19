//variaveis ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let pontuacao = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}
//movimentos
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }if(keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }if(yAtor < -14){
    yAtor = 366
  }if(yAtor >= 367){
    yAtor = 366
  }
}
function verificaColisao(){
    for(let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 5)
        if(colisao){
           posicaoInicial()
          somColisao.play();
         if(pontosMaiorZero()){
          pontuacao -= 1;
          somColisao.play();
      }
    }
  }
}
function posicaoInicial(){
    yAtor = 376;
}
function pontosMaiorZero(){
  return pontuacao > 0
}

//pontuacao
function incluiPontos(){
  textSize(25)
  textAlign(CENTER)
  text(pontuacao, width/3, 27);
  fill(255,165,60)
}

function marcaPontos(){
  if(yAtor < 0){
    incrementaPontuacao();
    posicaoInicial();
  }
}

function incrementaPontuacao(){
  pontuacao = pontuacao + 1;
  somPonto.play()
}