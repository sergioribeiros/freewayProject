let yCarros = [40, 96, 150, 210, 270, 318]
let xCarros = [580, 580, 580, 580, 580, 580]
let velocidadeCarros = [3.2, 2.2, 4, 5, 3.4, 2.3]
let comprimentoCarro = 55;
let alturaCarro = 40;
    
function mostraCarro(){
  for(i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}
//Movimentos
function movimentaCarro(){
  for(i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
}
function loopCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
       xCarros[i] = 580;
    }
  }
}
function passouTodaTela(xCarro){
  return xCarro < -50;
}
