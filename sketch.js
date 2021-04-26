// LINK DO VIDEO: https://drive.google.com/file/d/1nV8M-QwJ1To_utB71m_Qovbz1TnSVbKn/view?usp=sharing

var c = [ ], f = [ ], d = [ ], e = [ ], p = [ ] // vetores das imagens do personagem e perguntas
var tam1x=200, tam1y=250, lar1x=325 , lar1y=80, tam2y=380, tela=1, fonte; // variáveis menu
var limiteX0 = 0; limiteX700 = 0; limiteY0 = 0; limiteY700 = 0; // limite das cenas
var yc = 620, xc = 250, speed = 7, contfr = 0, player; // limite, velocidade, contador e jogador
var cobX=0, cobY=0, cobPX = 0, cobPY = 0, cobTam = 80, cobPTam = 45, cobInitX, cobInitY, cobra = [ ], cob=1;
var cobraVer = [ ], cobVerX=0, cobVerY=0, cobVer=0, cobVerInitX, cobVerInitY;
var cobraAma = [ ], cobAmaX=0, cobAmaY=0, cobAma=0, cobAmaInitX, cobAmaInitY;
var lobo = [], loboX=0, loboY=0, lb=0, loboInitX, loboInitY, l;
var urso = [], ursoX=0, ursoY=0, ur=0, ursoInitX, ursoInitY, u;
var panda = [], pandaX=0, pandaY=0, pa=0, pandaInitX, pandaInitY, pan;
var polar = [], polarX=0, polarY=0, po=0, polarInitX, polarInitY, pol;
var bauQX0 = 0, bauQX700 = 0, bauQY0 = 0, bauQY700=0 // Variáveis da caixa de pergunta
var xbau = 0, ybau = 0 // variáveis baú
var resp1x = 0, resp2x = 0, respy = 0, resptam = 50, erro = true ;// variáveis repostas
var chave = 0, chaveEspecial = 0, pontos = 0, vidas = 2, vidaFalse, maisVida, gVidaX = 0, gVidaY = 0, maisPontos, gCoinX = 0, gCoinY = 0;
var snowflakes = [], t ; // tempo e vetor dos flocos de neve
var FR = 0, IM = 0, contIM = 0, pergunta;

function preload(){
  bg = loadImage ( 'bg.gif' );
  cred = loadImage ('creditos.png' );
  voltar = loadImage ('voltar.png');
  fmenu = loadImage ('fmenu.jpg');
  eu = loadImage ('eu.jpg');
  desc = loadImage ('desc.jpg');
  tutorial = loadImage ('tutorial1.gif');
  tutorial2 = loadImage ('tutorial2.gif');
  cobra[0] = loadImage ('cobra.gif');
  cobra[1] = loadImage ('cobrad.gif');
  cobra[2] = loadImage ('cobracd.gif');
  cobra[3] = loadImage ('cobrace.gif');
  cobraVer[0] = loadImage ('cobraVer.gif');
  cobraVer[1] = loadImage ('cobradver.gif');
  cobraVer[2] = loadImage ('cobracdVer.gif');
  cobraVer[3] = loadImage ('cobraceVer.gif');
  cobraAma[0] = loadImage ('cobraAma.gif');
  cobraAma[1] = loadImage ('cobradAma.gif');
  cobraAma[2] = loadImage ('cobracdAma.gif');
  cobraAma[3] = loadImage ('cobraceAma.gif');
  cobraParada = loadImage ('cobra2.gif');
  cobraParada2 = loadImage ('cobra2e.gif');
  lobo[0] = loadImage ('loboFrente.gif')
  lobo[1] = loadImage ('loboCostas.gif')
  lobo[2] = loadImage ('loboEsquerda.gif')
  lobo[3] = loadImage ('loboDireita.gif')
  urso[0] = loadImage ('urso1.gif')
  urso[1] = loadImage ('urso2.gif')
  urso[2] = loadImage ('urso3.gif')
  urso[3] = loadImage ('urso4.gif')
  panda[0] = loadImage ('panda1.gif')
  panda[1] = loadImage ('panda2.gif')
  panda[2] = loadImage ('panda4.gif')
  panda[3] = loadImage ('panda3.gif')
  polar[0] = loadImage ('polar1.gif')
  polar[1] = loadImage ('polar2.gif')
  polar[2] = loadImage ('polar3.gif')
  polar[3] = loadImage ('polar4.gif')
  entrada = loadImage ('entrada.gif');
  n1 = loadImage ('n1.jpg');
  n2 = loadImage ('n2.jpg');
  n3 = loadImage ('n3.jpg');
  p1 = loadImage ('p1.jpg');
  p2 = loadImage ('p2.jpg');
  p3 = loadImage ('p3.jpg');
  m1 = loadImage ('m1.jpg');
  m2 = loadImage ('m2.jpg');
  m3 = loadImage ('m3.jpg');
  ee1 = loadImage ('ee1.jpg');
  ee2 = loadImage ('ee2.jpg');
  eee1 = loadImage ('eee1.jpg');
  eee2 = loadImage ('eee2.jpg');
  pe1 = loadImage ('pe1.jpg');
  pe2 = loadImage ('pe2.jpg');
  qe1 = loadImage ('qe1.jpg');
  qe2 = loadImage ('qe2.jpg');
  qe = loadImage ('qe.jpg');
  q1 = loadImage ('q1.jpg');
  q2 = loadImage ('q2.jpg');
  q3 = loadImage ('q3.jpg');
  s1 = loadImage ('s1.jpg');
  s2 = loadImage ('s2.jpg');
  nv1a = loadImage ('nv1a.jpg');
  nv1b = loadImage ('nv1b.jpg');
  nv1c = loadImage ('nv1c.jpg');
  nvp1a = loadImage ('nvp1a.jpg');
  nvp1b = loadImage ('nvp1b.jpg');
  nvesp1 = loadImage ('nvesp1.jpg');
  nvesp2 = loadImage ('nvesp2.jpg');
  nvesp3 = loadImage ('nvesp3.jpg');
  nvdec = loadImage ('nvdec.jpg');
  ndec = loadImage ('ndec.jpg');
  n2a = loadImage ('n2a.jpg');
  n2b = loadImage ('n2b.jpg');
  n2c = loadImage ('n2c.jpg');
  n2pa = loadImage ('n2pa.jpg');
  n2pb = loadImage ('n2pb.jpg')
  tela871 = loadImage ('tela871.jpg')
  tela1651 = loadImage ('tela1651.jpg')
  c[0] = loadImage ('c.png');
  c[1] = loadImage ('ce.png');
  c[2] = loadImage ('c.png');
  c[3] = loadImage ('cd.png');
  f[0] = loadImage ('f.png');
  f[1] = loadImage ('fe.png');
  f[2] = loadImage ('f.png');
  f[3] = loadImage ('fd.png');
  d[0] = loadImage ('d.png');
  d[1] = loadImage ('de.png');
  d[2] = loadImage ('d.png');
  d[3] = loadImage ('dd.png');
  e[0] = loadImage ('e.png');
  e[1] = loadImage ('ee.png');
  e[2] = loadImage ('e.png');
  e[3] = loadImage ('ed.png');
  p[4.1] = loadImage ('./Perguntas/g1.jpg')
  p[4.2] = loadImage ('./Perguntas/g2.jpg')
  p[4.4] = loadImage ('./Perguntas/g3.jpg')
  p[4.7] = loadImage ('./Perguntas/g4.jpg')
  p[5.1] = loadImage ('./Perguntas/g5.jpg')
  p[5.3] = loadImage ('./Perguntas/g6.jpg')
  p[5.7] = loadImage ('./Perguntas/g7.jpg')
  p[6.1] = loadImage ('./Perguntas/g8.jpg')
  p[6.4] = loadImage ('./Perguntas/g9.jpg')
  p[6.8] = loadImage ('./Perguntas/g10.jpg')
  p[7.1] = loadImage ('./Perguntas/g11.jpg')
  p[7.5] = loadImage ('./Perguntas/g12.jpg')
  p[7.9] = loadImage ('./Perguntas/g13.jpg')
  p[8.2] = loadImage ('./Perguntas/g14.jpg')
  p[9] = loadImage ('./Perguntas/g15.jpg')
  p[9.3] = loadImage ('./Perguntas/g16.jpg')
  p[9.6] = loadImage ('./Perguntas/g17.jpg')
  p[9.9] = loadImage ('./Perguntas/g18.jpg')
  p[10.3] = loadImage ('./Perguntas/g19.jpg')
  p[10.6] = loadImage ('./Perguntas/g20.jpg')
  p[11.1] = loadImage ('./Perguntas/g21.jpg')
  p[11.5] = loadImage ('./Perguntas/g22.jpg');
  p[11.8] = loadImage ('./Perguntas/g24.jpg')
  p[12.2] = loadImage ('./Perguntas/g25.jpg')
  p[12.6] = loadImage ('./Perguntas/g26.jpg')
  p[12.9] = loadImage ('./Perguntas/g27.jpg')
  p[13.3] = loadImage ('./Perguntas/g28.jpg')
  p[13.6] = loadImage ('./Perguntas/g29.jpg')
  p[14.1] = loadImage ('./Perguntas/g30.jpg')
  p[14.5] = loadImage ('./Perguntas/g31.jpg')
  p[14.9] = loadImage ('./Perguntas/g32.jpg')
  p[15.2] = loadImage ('./Perguntas/g33.jpg')
  p[15.5] = loadImage ('./Perguntas/g34.jpg')
  p[16] = loadImage ('./Perguntas/g35.jpg')
  p[16.8] = loadImage ('./Perguntas/g36.jpg')
  p[16.9] = loadImage ('./Perguntas/g37.jpg')
  p[17.2] = loadImage ('./Perguntas/g38.jpg')
  p[17.5] = loadImage ('./Perguntas/g39.jpg')
  p[18.1] = loadImage ('./Perguntas/g40.jpg')
  p[12] = loadImage ('./Perguntas/g41.jpg')
  p[18.5] = loadImage ('./Perguntas/g42.jpg')
  p[18.9] = loadImage ('./Perguntas/g43.jpg');
  p[19.2] = loadImage ('./Perguntas/g44.jpg')
  p[19.5] = loadImage ('./Perguntas/g45.jpg')
  p[20] = loadImage ('./Perguntas/g15.jpg')
  p[20.2] = loadImage ('./Perguntas/g14.jpg')
  p[20.5] = loadImage ('./Perguntas/g13.jpg')
  p[21] = loadImage ('./Perguntas/g12.jpg')
  p[21.2] = loadImage ('./Perguntas/g11.jpg')
  p[21.5] = loadImage ('./Perguntas/g10.jpg')
  p[22] = loadImage ('./Perguntas/g20.jpg')
  p[22.2] = loadImage ('./Perguntas/g21.jpg')
  p[22.5] = loadImage ('./Perguntas/g25.jpg')
  p[23] = loadImage ('./Perguntas/g24.jpg')
  p[23.2] = loadImage ('./Perguntas/g21.jpg')
  p[23.5] = loadImage ('./Perguntas/g19.jpg')
  p[24] = loadImage ('./Perguntas/g17.jpg')
  p[24.2] = loadImage ('./Perguntas/g20.jpg')
  p[24.5] = loadImage ('./Perguntas/g22.jpg')
  p[25] = loadImage ('./Perguntas/g24.jpg')
  p[25.2] = loadImage ('./Perguntas/g33.jpg')
  p[25.5] = loadImage ('./Perguntas/g44.jpg')
  p[26] = loadImage ('./Perguntas/g45.jpg')
  p[26.3] = loadImage ('./Perguntas/g46.jpg');
  bauInicio = loadImage ('bauInicio.png');
  proximo = loadImage ('proximo.png');
  insta = loadImage ('insta.png');
  proximo2 = loadImage ('proximo2.png');
  mouseImg = loadImage ('mouseImg.png');
  setasImg = loadImage ('setasImg.png');
  wsadImg = loadImage ('wsadImg.png');
  enterImg = loadImage ('enterImg.png');
  maisCoin = loadImage ('moedas.gif');
  bauInicioAberto = loadImage ('bauInicioAberto.png');
  bau1Fechado = loadImage ('bau1Fechado.gif');
  bau1Aberto = loadImage ('bau1Aberto.gif');
  bau2Fechado = loadImage ('bau2Fechado.gif');
  bau2Aberto = loadImage ('bau2Aberto.gif');
  pah = loadImage ('pa.png');
  errado = loadImage ('errado.png');
  vidaAdd = loadImage ('vidaAdd.png');
  coracao = loadImage ('coracao.gif');
  chave1 = loadImage ('chavePad.gif');
  noChave = loadImage ('noChave.png');
  moeda = loadImage ('moeda.gif');
  fonte = loadFont ('./fonte/fonte.ttf');
  somCobra = loadSound ('./sons/cobra.mp3');
  fim = loadSound ('./sons/fim.wav');
  somVida = loadSound ('./sons/maisVida.wav');
  somCoin = loadSound ('./sons/coin.wav');
  somUrso = loadSound ('./sons/urso.wav');
  somLobo1 = loadSound ('./sons/lobo1.wav')
  somLobo2 = loadSound ('./sons/lobo2.wav')
  somInicial = loadSound ('./sons/TemaEntrada.mp3');
  somOnda = loadSound ('./sons/onda.mp3');
  tema1 = loadSound ('./sons/Tema1.mp3');
  tema2 = loadSound ('./sons/Tema2.mp3');
  tema3 = loadSound ('./sons/Tema3.mp3');
  tema4 = loadSound ('./sons/Tema4.mp3');
  open = loadSound ('./sons/open.wav');
  error = loadSound ('./sons/error.wav');
  porta = loadSound ('./sons/porta.wav');
}

function setup() {
  createCanvas(700, 700);
  player = c[0];
  frameRate(60)
}

function draw() {  
  strokeWeight(0);
  sons();
  
if (tela==1) {
    image(bg,0,0);
  textFont(fonte);
  
  if ( mouseX >= tam1x && mouseX <= tam1x+lar1x && mouseY >= tam1y && mouseY <= tam1y+lar1y) { 
    if (mouseIsPressed) {
      tela=4
    } else {
    strokeWeight(5)
    stroke(230)
    fill ('orange')
    }
  }
  else {
    fill (255, 215, 0)
  }
  rect (tam1x, tam1y, lar1x, lar1y, 20)
  
  strokeWeight(0)
  
  fill ('black')
  textSize(25)
  text("Iniciar Jogo", tam1x+11, tam1y+55);
  
    if ( mouseX >= tam1x && mouseX <= tam1x+lar1x && mouseY >= tam2y && mouseY <= tam2y+lar1y) { 
          if(mouseIsPressed) {
      tela=2
          } else {
      strokeWeight(5)
      stroke(230)
      fill ('orange')
  }
    }
  else {
    fill (255, 215, 0)
  }
  rect (tam1x, tam2y, lar1x, lar1y, 20)
  
  strokeWeight(0)
  fill ('black')
  textSize(25)
  text("Como Jogar", tam1x+40, tam2y+55);
  
  if ( mouseX >= 560 && mouseX <= 635 && mouseY >= 545 && mouseY <= 644) { 
    if (mouseIsPressed) {
      tela=3
    } else {
    strokeWeight(5)
    stroke(230)
    fill ('orange')
    }
  }
  else {
    fill (255, 215, 0)
  }
  circle(600, 585, 75)
  
  strokeWeight(0)
  textSize(13)
  text('Créditos', 555, 645)
  
  image(cred, 575, 560, 50, 50);
}

if (tela==2) {
  image (fmenu, 0, 0);
  if ( keyIsDown(8)) { tela =1 }
  if ( mouseX >= 605 && mouseX <= 675 && mouseY >= 15 && mouseY <= 115) {
    if (mouseIsPressed) {
      tela=1
    } else { 
      strokeWeight(5)
      stroke(230)
      fill('orange');
    } 
  }
    else {
      fill(255, 215, 0)
    }
    
    circle (640, 55, 70)

    strokeWeight(0)
    textSize(12);
    textFont(fonte);
    text ('Voltar', 608, 115)
    image(voltar, 605, 20, 70, 70);
  
  fill(255, 215, 0)
  rect ( 50, 130, 600, 500, 10 )
  textSize(25)
  strokeWeight(2)
  stroke(200)
    textFont(fonte)
  text('Como Jogar', 235, 75)
  
  //  image(desc, 90, 155, 510, 455)
  
  fill(10)
  rect ( 65, 145, 230, 230, 10 )
  
  fill(10)
  rect ( 405, 385, 230, 230, 10 )
  
    image(tutorial, 70, 150, 220, 220)
    image(tutorial2, 410, 390, 220, 220)
  
    fill(10);
    strokeWeight(1)
    stroke(235);
    textSize(12);
    textFont(fonte);
    text ('Pressione as setas\n   ou as teclas\n"W", "S", "A", "D"\n   para mover o\n    personagem.', 365, 200);
  image(setasImg, 380, 285, 85, 75);
  image(wsadImg, 495, 285, 85, 75);
  
    fill(10);
    strokeWeight(1)
    stroke(235);
    textSize(12);
    textFont(fonte);
    text ('Pressione ENTER para\n abrir o baú e mova\n  o cursor do mouse\n  até a cor de sua\n     resposta.', 107, 430);
  image(enterImg, 130, 525, 60, 59);
  image(mouseImg, 245, 519, 60, 67);
  
  if ( mouseX >= 515 && mouseX <= 675 && mouseY >= 645 && mouseY <= 685) {
      strokeWeight(5)
      stroke(255, 215, 0)
      fill(10, 0, 0, 245);
      rect ( 515, 645, 165, 40, 10);
    if ( mouseIsPressed ) { tela = 2.1}
    
    }
  
   fill(255, 215, 0)
    textSize(13);
    textFont(fonte);
  noStroke()
    text ('Descrição', 520, 670)
    image(proximo, 645, 650, 30, 30)
  
  
}
  
if (tela==2.1) {
  image (fmenu, 0, 0);
    if ( keyIsDown(8)) { tela =1 }
  if ( mouseX >= 605 && mouseX <= 675 && mouseY >= 15 && mouseY <= 115) {
    if (mouseIsPressed) {
      tela=1
    } else { 
      strokeWeight(5)
      stroke(230)
      fill('orange');
    } 
  }
    else {
      fill(255, 215, 0)
    }
    
    circle (640, 55, 70)

    strokeWeight(0)
    textSize(12);
    textFont(fonte);
    text ('Voltar', 608, 115)
    image(voltar, 605, 20, 70, 70);
  
  fill(255, 215, 0)
  rect ( 50, 130, 600, 500, 10 )
  textSize(25)
  strokeWeight(2)
  stroke(200)
    textFont(fonte)
  text('Descrição', 235, 75)

    if ( mouseX >= 25 && mouseX <= 204 && mouseY >= 645 && mouseY <= 685) {
      strokeWeight(5)
      stroke(255, 215, 0)
      fill(10, 0, 0, 245);
      rect ( 25, 645, 177, 40, 10);
    if ( mouseIsPressed ) { tela = 2}
    
    }
  noStroke();
  strokeWeight(0);
   fill(255, 215, 0)
    textSize(13);
    textFont(fonte);
    text ('Como Jogar', 68, 675)
    image(proximo2, 30, 650, 30, 30);
  
  fill(10);
  strokeWeight(2)
  stroke(235);
  textSize(15);
  textFont(fonte)
  text('Você tem uma missão a ser cumprida!\n Seu dever é entregar uma carta de\n   paz ao rei que está prestes a\n      declarar guerra!\nPorém, o rei mora no alto do monte\n e sua jornada até lá contará com\n alguns obstáculos pelo caminho e,\n além disso, você encontrará baús\n que contém chaves para acesso às\n    portas que verás no caminho.\n  Para conseguir as chaves, você\n deve pressionar ENTER próximo ao\n    baú e resolver as questões.\nO intuito do jogo é fazer o jogador\n    resolver questões sobre\n       gráficos e tabelas.\nEm cada báu contém uma questão sobre\n           tal assunto.', 95, 155); 
  noStroke();
  
   fill(10);
  strokeWeight(1)
  stroke(200, 0, 0);
  textSize(15);
  textFont(fonte)
  text('HABILIDADE:', 85, 520);
  
    fill(10);
  strokeWeight(2)
  stroke(235);
  textSize(14);
  textFont(fonte)
  text('            Resolver problemas cujos\n dados são apresentados em tabelas\n   de dupla entrada, gráficos de\n         barras ou coluna.', 95, 520);
  
   fill(10);
  strokeWeight(1)
  stroke(200, 0, 0);
  textSize(15);
  textFont(fonte)
  text('NÍVEL:', 85, 610);
  
  fill(10);
  strokeWeight(2)
  stroke(235);
  textSize(14);
  textFont(fonte)
  text('     Matemática do 3º ano.', 110, 610)
  
}
  
if (tela==3) {
  image (fmenu, 0, 0);
  if ( keyIsDown(8)) { tela =1 }
  if ( mouseX >= 605 && mouseX <= 675 && mouseY >= 15 && mouseY <= 115) {
    if (mouseIsPressed) {
      tela=1
    } else { 
      strokeWeight(5)
      stroke(230)
      fill('orange');
    } 
  }
    else {
      fill(255, 215, 0)
    }
    
    circle (640, 55, 70)

    strokeWeight(0)
    textSize(12);
    textFont(fonte)
    text ('Voltar', 608, 115)
    image(voltar, 605, 20, 70, 70);
  
  fill(255, 215, 0)
  rect ( 50, 130, 600, 500, 10 )
  textSize(25)
  strokeWeight(2)
  stroke(200)
    textFont(fonte)
  text('Créditos', 250, 75)
  image(eu, 95, 130, 500, 500)
  
  if ( mouseX >= 225 && mouseX <= 460 && mouseY >= 180 && mouseY <= 480) {
  strokeWeight(3)
  stroke(10)
  fill ('white');
    textFont('helvetica')
  textSize(30)
    textStyle(BOLDITALIC);
  text('@lenilson.sillva', 265, 610)
  image(insta, 210, 577, 50, 50)
  }
    

}
  
if (tela==4) {
  image(entrada,0,0,700,700);
  
  limiteX0 = 150
  limiteX700 = 440
  limiteY0 = 170
  limiteY700 = 620
  
  if ( mouseX >= 605 && mouseX <= 675 && mouseY >= 15 && mouseY <= 115) {
    if (mouseIsPressed) {
      tela=1
    } else { 
      strokeWeight(5)
      stroke(230)
      fill('orange');
    } 
  }
    else {
      fill(255, 215, 0)
    }
    
    circle (640, 55, 70)

    strokeWeight(0)
    textSize(11);
  textFont(fonte)
    text ('Voltar', 615, 115)
    image(voltar, 605, 20, 70, 70);
  
xbau = 300
ybau = 130

  if ( dist( xc, yc, xbau, ybau) < 48 ) {
    image(bauInicioAberto, xbau, ybau, 50, 50)
  } else { image(bauInicio, xbau, ybau, 50, 50)}
  
  if( keyIsPressed) {move();}
    else {move2();}
image(player, xc, yc, 50, 50)
  

  if ( (xc >= 265 && xc <= 325) &&  (yc >= 130 && yc <= 185) ) {
    strokeWeight(3)
    stroke(1)
    fill("yellow")
    rect ( 50, 330, 600, 300, 10 )
    strokeWeight(2)
    fill('red')
    textFont('helvetica')
    textSize(30)
    text('ATENÇÃO!', 290, 50);
    
  fill(10);
  stroke(235);
  textSize(15);
  textFont(fonte)
  text('Você recebeu uma missão! Você deve\n entregar uma carta de paz ao rei\nque está prestes a declarar guerra!\nPorém, o rei mora no alto do monte\n e sua jornada até lá contará com\n alguns obstáculos pelo caminho e,\n além disso, você encontrará baús\n que contém chaves para acesso às\n    portas que verás no caminho.\n  Para conseguir as chaves, você\n deve pressionar ENTER próximo ao\n    baú e resolver as questões.\n            BOA SORTE!', 100, 370); 
  noStroke();
    
      if ( mouseX >= 590 && mouseX <= 640 && mouseY >= 570 && mouseY <= 620) {
    if (mouseIsPressed) {
      tela=4.1
    }
      else { 
      strokeWeight(5)
      stroke(200)
      fill('orange');
    }
  }
    else {
      fill('red')
    }
    rect ( 590, 570, 50, 50, 10 )
    
    fill('white')
    textFont('helvetica')
    textSize(20)
    text('OK', 600, 600)
    
     if ( keyIsDown(13)) {
      tela=4.1
       
      }
     if (tela==4.1) {
        xc=335
        yc=620
        pontos += 500
    }
  }
}
  
if (tela==4.1) {
  image(p1, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  
  loboInitX = 200;
  loboInitY = 450;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 260
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  pandaInitX = 320;
  pandaInitY = 200;
  polarInitX = 260;
  polarInitY = 500;
  cobInitX = 300
  cobInitY = 320
  cobPX = 460
  cobPY = 550
  
  xbau = 335
  ybau = 350
  bau();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
  }
    
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( chave >=1 && yc == 165 ) {tela=4.2}
  if (tela==4.2) {yc=620 ; chave -=1; pontos += 100; erro = true; cobX=0; cobY=0; maisPontos = true}
  
}
  
if (tela==4.2) {
   image(n1, 0,0, 700, 700);
  basico();
   limitePadrao();
  vidasContador();
  cobPX = 200
  cobPY = 300

  cobraStopped();
  
  xbau = 470;
  ybau = 255;
  bau();
  
  gCoinX = 200;
  gCoinY = 245;
  getPontos();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=4.3}
  if (tela==4.3) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==4.3) {
  image(p1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 300
  cobPY = 420
  
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 4.2; yc = 165; pontos -= 50;}
    else {
  if ( chave >=1 && yc == 165 ) {tela=4.4}
  if (tela==4.4) {yc=620 ; chave -=1; pontos += 100; unBug();}
    }
}
  
if (tela==4.4) {
  image(n2, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  basico();
  cobPX = 480
  cobPY = 340
  
  cobraStopped2();
  
  xbau = 310
  ybau = 220
  bau();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) { erro1() }
  opc1();
  }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=4.5}
  if (tela==4.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==4.5) {
  image(p2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 200
  cobInitY = 300
  
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 4.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=4.6}
  if (tela==4.6) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==4.6) {
   image(n2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 440
  cobInitY = 400
  
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=4.7}
  if (tela==4.7) {yc=620; pontos += 50; erro = true; unBug(); maisPontos = true}
  
}
  
if (tela==4.7) {
   image(n3, 0,0, 700, 700);
  basico();
  vidasContador()
   limitePadrao();
  cobPX = 350
  cobPY = 330
  cobInitX = 220
  cobInitY = 310

  cobraRastejando();
  cobraStopped();
  
  
  xbau = 300;
  ybau = 330;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 4.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=4.8}
  if (tela==4.8) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==4.8) {
  image(p3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 370
  cobPY = 450
  
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 4.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=4.9}
  if (tela==4.9) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==4.9) {
   image(n3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 455
  cobInitY = 400
  cobPX = 370
  cobPY = 200
  
  cobraStopped();
  cobraRastejando();
    gCoinX = 400;
  gCoinY = 200;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=5}
  if (tela==5) {yc=620; pontos += 50; erro = true; unBug(); maisPontos = true}
}
  
if (tela==5) {
   image(n2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 220
  cobInitY = 400
  cobPX = 250
  cobPY = 200
  

  
  cobraStopped();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 4.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=5.1}
  if (tela==5.1) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==5.1) {
  image(pe1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 410
  cobPY = 290
  
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
  xbau = 220;
  ybau = 210;
  bau();
  
     if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=5.6}
  if ( (xc >= limiteX700) && (yc > 200) && (yc < 310)) { tela = 5.2}
  if (tela==5.6) {yc=620 ; chave -=1; pontos += 100; unBug(); }
  if (tela==5.2) {yc=620; xc=250; pontos += 100; unBug(); }
    }
}
  
if (tela==5.2) {
   image(ee1, 0,0, 700, 700);
  limiteX0 = 175
  limiteX700 = 350
  limiteY0 = 70
  limiteY700 = 620
  basico();
  vidasContador();
  cobInitX = 220
  cobInitY = 400
  cobPX = 185
  cobPY = 220
  
    gCoinX = 250;
  gCoinY = 255;
  getPontos();

  cobraStopped();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( (xc <= limiteX0) && ( yc < 230) && ( yc > limiteY0) ) {tela=5.3}
  if (tela==5.3) {yc=620; xc = 400; pontos += 50; erro = true; unBug(); maisVida = true;}
}
  
if (tela==5.3) {
   image(ee2, 0,0, 700, 700);
  limiteX0 = 350
  limiteX700 = 475
  limiteY0 = 190
  limiteY700 = 620
  basico();
  vidasContador();
  cobInitX = 420
  cobInitY = 500
  cobPX = 365
  cobPY = 300
  cobVerInitX = 425
  cobVerInitY = 240
  xbau = 475;
  ybau = 145;
  
  cobraStopped();
  cobraRastejando();
  cobraRastejandoVer();
  
   if ((keyCode===13 && chave == 0) && (dist(xc, yc, xbau, ybau) < 70)) {
  bau();
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   } else { (image(pah, 475, 145, 50, 50)) }
  
   if ((keyCode===13 && chave == 1) && (dist(xc, yc, xbau, ybau) < 70)) {
  chaveEspecialContador();
  bau();
   } else { (image(pah, 475, 145, 50, 50)) }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  
  gVidaX = 375
  gVidaY = 360
  getVida();
  
  if ( (xc <= limiteX0) && (yc > limiteY0-30) && (yc < 300) ) {tela=5.4}
  if (tela==5.4) {xc=470; pontos += 50; erro = true; unBug(); }
}
  
if (tela==5.4) {
  image(s1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( (xc >= limiteX700+5) && ( yc < 300) && ( yc > 120)) { tela = 5.3; xc = 350; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=5.5}
  if (tela==5.5) {yc=620 ; pontos += 100; unBug(); maisPontos = true}
    }
}
  
if (tela==5.5) {
  image(p2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 470
  cobPY = 200
  cobVerInitX = 280
  cobVerInitY = 430
  
  cobraRastejandoVer();
  cobraStopped2();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 5.4; yc = 165; pontos -= 50;}
    else {
  if ( chave >=1 && yc == 165 ) {tela=5.6}
  if (tela==5.6) {yc=620 ; chave -=1; pontos += 100; unBug();}
    }
}
  
if (tela==5.6) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 200;
  
  cobraRastejando();
  
  gCoinX = 350;
  gCoinY = 355;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=5.7}
  if (tela==5.7) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==5.7) {
   image(m3, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 310

  cobraRastejando();  
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 5.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=5.8}
  if (tela==5.8) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==5.8) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 5.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=5.9}
  if (tela==5.9) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==5.9) {
  image(q3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 350
  cobPY = 450
  cobVerInitX = 190;
  cobVerInitY = 400;
  
  cobraRastejandoVer();
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 5.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=6}
  if (tela==6) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos = true}
    }
}
  
if (tela==6) {
   image(m3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 200;
  cobPX = 200
  cobPY = 500
  
  gCoinX = 250;
  gCoinY = 400;
  getPontos();
  
  cobraStopped();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=6.1}
  if (tela==6.1) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==6.1) {
   image(m1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 310
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejando(); 
  cobraRastejandoVer();
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=6.2}
  if (tela==6.2) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==6.2) {
  image(q1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 190;
  cobInitY = 350;
  
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 6.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=6.3}
  if (tela==6.3) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==6.3) {
   image(m1, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 200;
  cobInitY = 200;
  
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=6.4}
  if (tela==6.4) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==6.4) {
   image(m2, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoVer();  
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 6.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=6.5}
  if (tela==6.5) {yc=620; pontos += 50; erro = true; unBug(); masiPontos = true}
    }
}
  
if (tela==6.5) {
   image(m3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobPX = 400;
  cobPY = 400
  
  cobraStopped2();
  cobraRastejandoVer();
  
  gCoinX = 400;
  gCoinY = 255;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 6.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=6.6}
  if (tela==6.6) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==6.6) {
  image(q1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 350
  cobPY = 500
  cobInitX = 190;
  cobInitY = 420;
  
  cobraRastejando();
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 6.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=6.7}
  if (tela==6.7) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==6.7) {
   image(m3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobPX = 350;
  cobPY = 200;
  
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=6.8}
  if (tela==6.8) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==6.8) {
  image(q3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 460
  cobPY = 360
  cobVerInitX = 300;
  cobVerInitY = 200;
  
  cobraRastejandoVer();
  cobraStopped2();
  
  xbau = 400;
  ybau = 360;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 6.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=6.9}
  if (tela==6.9) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}

if (tela==6.9) {
   image(m3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 400;
  cobVerInitY = 200;
  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=7}
  if (tela==7) {yc=620; pontos += 50; erro = true; unBug(); maisPontos = true}
  
}
  
if (tela==7) {
   image(m1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 320
  cobInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejando();  
  cobraRastejandoVer();
  
  gCoinX = 250;
  gCoinY = 445;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 6.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=7.1}
  if (tela==7.1) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==7.1) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 400;
  
  cobraRastejando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=7.2}
  if (tela==7.2) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==7.2) {
  image(q2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  
  cobraRastejandoVer();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 7.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=7.3}
  if (tela==7.3) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==7.3) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 400;
  cobVerInitY = 200;
  cobInitX = 300;
  cobInitY = 190;
  cobPX = 460
  cobPY = 580
  
  cobraRastejando();
  cobraRastejandoVer();
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=7.4}
  if (tela==7.4) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==7.4) {
   image(m1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 210
  cobVerInitX = 300
  cobVerInitY = 190

  cobraRastejando();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 7.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=7.5}
  if (tela==7.5) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==7.5) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 400;
  cobPX = 280
  cobPY = 470
  
  cobraStopped()
  cobraRastejando();
  
  xbau = 220;
  ybau = 420;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 7.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=7.6}
  if (tela==7.6) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==7.6) {
  image(q3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  cobInitX = 300
  cobInitY = 250
  
  cobraRastejando();
  cobraRastejandoVer();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 7.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=7.7}
  if (tela==7.7) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==7.7) {
   image(m1, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 200;
  cobPX = 470
  cobPY = 500
  
  cobraStopped2();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=7.8}
  if (tela==7.8) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==7.8) {
   image(m3, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 400
  cobInitY = 200
  cobVerInitX = 200
  cobVerInitY = 500

  cobraRastejando(); 
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 7.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=7.9}
  if (tela==7.9) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==7.9) {
  image(q2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 190;
  cobInitY = 350;
  cobVerInitX = 300;
  cobVerInitY = 230;
  
  cobraRastejandoVer()
  cobraRastejando();
  
  xbau = 400;
  ybau = 220;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 7.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=8}
  if (tela==8) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos = true}
    }
}
  
if (tela==8) {
   image(m3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 400;
  cobVerInitY = 200;
  
  cobraRastejandoVer();

    gCoinX = 210;
  gCoinY = 255;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=8.1}
  if (tela==8.1) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==8.1) {
   image(m1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 320
  cobInitY = 270
  cobVerInitX = 290
  cobVerInitY = 310

  cobraRastejando();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=8.2}
  if (tela==8.2) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==8.2) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 400;
  cobVerInitX = 200;
  cobVerInitY = 300;
  
  cobraRastejandoVer();
  cobraRastejando();
  
  xbau = 260;
  ybau = 340;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 8.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=8.3}
  if (tela==8.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==8.3) {
  image(q1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  
  cobraRastejandoVer();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 8.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=8.4}
  if (tela==8.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==8.4) {
  image(m2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 220;
  cobInitY = 400;
  cobVerInitX = 300;
  cobVerInitY = 430;
  
    gCoinX = 210;
  gCoinY = 255;
  getPontos();
  
  cobraRastejandoVer()
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if (yc == 165 ) {tela=8.5}
  if (tela==8.5) {yc=620 ; pontos += 50; unBug(); }
}
  
if (tela==8.5) {
  image(m1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 220;
  cobInitY = 190;
  cobVerInitX = 200;
  cobVerInitY = 450;
  
  cobraRastejandoVer()
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 8.4; yc = 165; pontos -= 50; unBug();}
    else {
  if (yc == 165 ) {tela=8.6}
  if (tela==8.6) {yc=620 ; pontos += 50; unBug(); maisPontos = true}
    }
}
  
if (tela==8.6) {
  image(m3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 220;
  cobInitY = 400;
  cobVerInitX = 250;
  cobVerInitY = 450;
  
  cobraRastejandoVer()
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 8.5; yc = 165; pontos -= 50; unBug();}
    else {
  if (yc == 165 ) {tela=8.7}
  if (tela==8.7) {yc=620 ; pontos += 50; unBug(); }
    }
}
  
if (tela==8.7) {
  image(qe, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 8.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( (xc <= limiteX0 ) && ( yc > limiteY0) && (yc < 300)) { tela=8.8}
  if (tela==8.8) {xc=400 ; yc = 615; pontos += 50; unBug(); }
  if ( chaveEspecial >=1 && yc == 165 ) {tela=30}
  if (tela==30) {yc=620 ; chaveEspecial -=1; pontos += 300; unBug(); maisVida=true; maisPontos = true;}
    }
}
  
if ( tela==30) {
  image(tela871, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  gVidaX = 280
  gVidaY = 350
  gCoinX = 340
  gCoinY = 340
  
  getVida();
  getPontos();
  
  xbau = 310
  ybau = 400
  bau();
  
    if (keyCode===13 && dist( xc, yc, xbau, ybau) < 70) {
    bauQUp()
    strokeWeight(3)
    stroke(10)
    fill("yellow")
    rect ( bauQX0, bauQY0, bauQX700, bauQY700, 10 )
    strokeWeight(0)
    fill('black')
    textFont(fonte)
    textSize(15)
    text('  Parabéns, você pegou um atalho\n    através da porta especial!', 90, 240)
    }
      
      
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if (yc == 165 ) {tela=9.6}
  if (tela==9.6) {yc=620 ; pontos += 200; unBug(); }
  
}

if (tela==8.8) {
   image(qe1, 0,0, 700, 700);
  limiteX0 = 310
  limiteX700 = 460
  limiteY0 = 80
  limiteY700 = 620
  basico();
  vidasContador();
  cobPX = 460
  cobPY = 235

  cobraStopped2();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
    if ( yc >= 620) { tela = 8.7; yc = 250; xc = 210; pontos -= 50; unBug();}
    else {
  if ( (xc >= limiteX700) && ( yc <= 210) && ( yc => limiteY0) ) {tela=8.9}
  if (tela==8.9) {yc=615; xc = 210; pontos += 50; erro = true; unBug(); }}
}
  
if (tela==8.9) {
   image(qe2, 0,0, 700, 700);
  limiteX0 = 175
  limiteX700 = 280
  limiteY0 = 190
  limiteY700 = 620
  basico();
  vidasContador();
  loboInitX = 195
  loboInitY = 210
  loboAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  if ( yc >= 620) { tela = 8.8; yc = 130; xc = 440; pontos -= 50; unBug();}
  else {
  if ( (xc >= limiteX700) && (yc => limiteY0-30) && (yc <= 300) ) {tela=9}
  if (tela==9) {yc=614; pontos += 50; erro = true; unBug(); }}
}
  
if (tela==9) {
  image(q1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 200;
  
  cobraRastejandoVer();
  
  xbau = 320;
  ybau = 340;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 8.9; yc = 215; xc = 260; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc <= 170 ) {tela=9.1}
  if (tela==9.1) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos = true}
    }
}
  
if (tela==9.1) {
   image(m3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 400;
  cobVerInitY = 200;
  loboInitX = 300
  loboAndando();
  loboInitY = 200
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
  gCoinX = 210;
  gCoinY = 255;
  getPontos();
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=9.2}
  if (tela==9.2) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==9.2) {
   image(m1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 320
  cobInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejando();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 9.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=9.3}
  if (tela==9.3) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==9.3) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 400;
  
  cobraRastejando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 9.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=9.4}
  if (tela==9.4) {yc=620; pontos += 50; erro = true; unBug(); maisPontos = true}
    }
}
  
if (tela==9.4) {
  image(q3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  loboInitX = 400
  loboInitY = 450
  loboAndando();
  cobraRastejandoVer();
  
  gCoinX = 240;
  gCoinY = 305;
  getPontos();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 9.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=9.5}
  if (tela==9.5) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==9.5) {
   image(m1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 320
  cobInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310
  loboInitX = 200
  loboInitY = 400
  loboAndando();
  cobraRastejando();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)

  if ( yc == 165 ) {tela=9.6}
  if (tela==9.6) {yc=620; pontos += 50; erro = true; unBug(); }
}
  
if (tela==9.6) {
   image(m2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 400;
  cobVerInitY = 400;
  
  cobraRastejandoVer();
  
  xbau = 370;
  ybau = 420;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 9.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=9.7}
  if (tela==9.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==9.7) {
  image(q2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  cobInitX = 190;
  cobInitY = 400;
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  
  cobraRastejandoVer();
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 9.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=9.8}
  if (tela==9.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==9.8) {
   image(n2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 200;
  cobAmaInitX = 200
  cobAmaInitY = 350
  
  cobraRastejandoAma();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=9.9}
  if (tela==9.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==9.9) {
   image(n3, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 310
  loboInitX = 200
  loboInitY = 500
  loboAndando();
  cobraRastejando();  
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 9.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=10}
  if (tela==10) {yc=620; pontos += 50; erro = true; unBug(); maisPontos = true}
    }
}
  
if (tela==10) {
   image(n2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
  gCoinX = 400;
  gCoinY =300;
  getPontos();
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 9.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=10.1}
  if (tela==10.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==10.1) {
  image(p3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 350
  cobPY = 450
  cobVerInitX = 190;
  cobVerInitY = 400;
  cobAmaInitX = 200
  cobAmaInitY = 320
  cobraRastejandoAma();
  cobraRastejandoVer();
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 10; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=10.2}
  if (tela==10.2) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==10.2) {
   image(n3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 200;
  cobPX = 200
  cobPY = 500
  
  cobraStopped();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=10.3}
  if (tela==10.3) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==10.3) {
   image(n1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 310
  cobVerInitX = 420
  cobVerInitY = 310
  cobAmaInitX = 200
  cobAmaInitY = 450
  cobraRastejandoAma();
  cobraRastejando(); 
  cobraRastejandoVer();
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 10.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=10.4}
  if (tela==10.4) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==10.4) {
  image(p1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 190;
  cobInitY = 350;
  loboInitX = 400
  loboInitY = 200
  loboAndando();
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 10.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=10.5}
  if (tela==10.5) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==10.5) {
   image(n1, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 200;
  cobInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  loboInitX = 450
  loboInitY = 250
  loboAndando();
  cobraRastejandoAma();
  cobraRastejando();
  
  gCoinX = 210;
  gCoinY = 255;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=10.6}
  if (tela==10.6) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==10.6) {
   image(n2, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobVerInitX = 420
  cobVerInitY = 310
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  cobraRastejandoVer();  
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 10.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=10.7}
  if (tela==10.7) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==10.7) {
  image(n3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobPX = 420;
  cobPY = 400;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraStopped2();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 10.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=10.8}
  if (tela==10.8) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==10.8) {
  image(p1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 350
  cobPY = 500
  cobInitX = 190;
  cobInitY = 420;
  
  cobraRastejando();
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 10.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=10.9}
  if (tela==10.9) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==10.9) {
   image(n2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 400;
  cobVerInitY = 200;
  cobInitX = 300;
  cobInitY = 190;
  cobPX = 460
  cobPY = 580
  
  cobraRastejando();
  cobraRastejandoVer();
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=11}
  if (tela==11) {yc=620; pontos += 50; erro = true; unBug(); maisPontos = true}
  
}
  
if (tela==11) {
   image(n1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 210
  cobAmaInitX = 300
  cobAmaInitY = 190

  cobraRastejando();  
  cobraRastejandoAma();
  
    gCoinX = 400;
  gCoinY = 195;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 10.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=11.1}
  if (tela==11.1) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==11.1) {
   image(n2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 400;
  cobPX = 280
  cobPY = 470
  
  cobraStopped()
  cobraRastejando();
  
  xbau = 220;
  ybau = 420;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 11; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=11.2}
  if (tela==11.2) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==11.2) {
  image(p3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  cobInitX = 300
  cobInitY = 250
  cobAmaInitX = 200
  cobAmaInitY = 320
  loboInitX = 400
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejando();
  cobraRastejandoVer();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 11.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=11.3}
  if (tela==11.3) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==11.3) {
   image(n1, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 400;
  cobInitY = 200;
  cobPX = 470
  cobPY = 500
  cobAmaInitX = 200
  cobAmaInitY = 320
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraStopped2();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=11.4}
  if (tela==11.4) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==11.4) {
   image(n3, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 400
  cobInitY = 200
  cobVerInitX = 200
  cobVerInitY = 500

  cobraRastejando(); 
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 11.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=11.5}
  if (tela==11.5) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==11.5) {
  image(p2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 350;
  cobAmaInitX = 300;
  cobAmaInitY = 230;
  
  cobraRastejandoAma()
  cobraRastejandoVer();
  
  xbau = 400;
  ybau = 220;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 11.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=11.6}
  if (tela==11.6) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==11.6) {
   image(n3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobAmaInitX = 400;
  cobAmaInitY = 200;
  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=11.7}
  if (tela==11.7) {yc=620; pontos += 50; erro = true; unBug(); maisPontos=true}
  
}
  
if (tela==11.7) {
   image(n1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 450
  cobInitY = 270
  cobVerInitX = 260
  cobVerInitY = 310
  cobAmaInitX = 200
  cobAmaInitY = 320
  loboInitX = 320
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejando();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
    gCoinX = 255;
  gCoinY = 320;
  getPontos();
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 11.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=11.8}
  if (tela==11.8) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==11.8) {
   image(n2, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobAmaInitX = 400;
  cobAmaInitY = 400;
  cobVerInitX = 200;
  cobVerInitY = 300;
  
  cobraRastejandoVer();
  cobraRastejandoAma();
  
  xbau = 260;
  ybau = 340;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 11.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=11.9}
  if (tela==11.9) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==11.9) {
  image(p1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  
  cobraRastejandoVer();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 11.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=12}
  if (tela==12) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==12) {
  image(pe2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 410
  cobPY = 290
  cobVerInitX = 200
  cobVerInitY = 400
  cobraRastejandoVer();
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
  xbau = 235;
  ybau = 365;
  bau();
  
     if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
 image(player, xc, yc, 50, 50)
  
  if ( chave >=1 && yc == 165 ) {tela=12.3}
  if ( (xc <= limiteX0) && (yc > 200) && (yc < 310)) { tela = 12.1}
  if (tela==12.3) {yc=620 ; chave -=1; pontos += 100; unBug(); }
  if (tela==12.1) {yc=620; xc=350; pontos += 50; unBug(); }
}
  
if (tela==12.1) {
   image(eee1, 0,0, 700, 700);
  limiteX0 = 310
  limiteX700 = 460
  limiteY0 = 80
  limiteY700 = 620
  basico();
  vidasContador();
  cobPX = 460
  cobPY = 235
  cobAmaInitX = 340
  cobAmaInitY = 190
  cobraStopped2();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( (xc >= limiteX700) && ( yc <= 210) && ( yc => limiteY0) ) {tela=12.2}
  if (tela==12.2) {yc=620; xc = 210; pontos += 50; erro = true; unBug(); }
}
  
if (tela==12.2) {
   image(eee2, 0,0, 700, 700);
  limiteX0 = 175
  limiteX700 = 280
  limiteY0 = 190
  limiteY700 = 620
  basico();
  vidasContador();
  ursoInitX = 195;
  ursoInitY = 210;
  cobInitX = 200
  cobInitY = 270
  cobraRastejando();
  ursoAndando();
  xbau = 180
  ybau = 155
  
     if ((keyCode===13 && chave == 0) && (dist(xc, yc, xbau, ybau) < 70)) {
  bau();
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   } else { (image(pah, 180, 155, 50, 50)) }
  
   if ((keyCode===13 && chave == 1) && (dist(xc, yc, xbau, ybau) < 70)) {
  chaveEspecialContador();
  bau();
   } else { (image(pah, 180, 155, 50, 50)) }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( (xc >= limiteX700) && (yc => limiteY0-30) && (yc <= 300) ) {tela=12.3}
  if (tela==12.3) {yc=420; xc=200; pontos += 50; erro = true; unBug(); }
}
  
if (tela==12.3) {
  image(s2, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( (xc <= limiteX0) && ( yc < 465) && ( yc > 290)) { tela = 12.2; xc = 260; yc = 260; pontos -= 50; unBug();}
    else {
  if ( yc <= 170 ) {tela=12.4}
  if (tela==12.4) {yc=620 ; pontos += 50; unBug(); }
    }
}
  
if (tela==12.4) {
  image(p3, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 400;
  cobInitX = 300
  cobInitY = 250
  loboInitX = 400
  loboInitY = 200
  loboAndando();
  ursoInitX = 200
  ursoInitY = 320
  ursoAndando();
  cobraRastejandoVer();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 12.3; yc = 171; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=12.5}
  if (tela==12.5) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==12.5) {
   image(n3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 200;
loboAndando();
  cobAmaInitX = 200;
  cobAmaInitY = 300;
cobraRastejandoAma();
  
  gCoinX = 355;
  gCoinY = 455;
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=12.6}
  if (tela==12.6) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==12.6) {
   image(n1, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobInitX = 420
  cobInitY = 310
  cobVerInitX = 420
  cobVerInitY = 310
  cobAmaInitX = 200
  cobAmaInitY = 450
  cobraRastejandoAma();
  cobraRastejando(); 
  cobraRastejandoVer();
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 12.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=12.7}
  if (tela==12.7) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==12.7) {
  image(p1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobInitX = 190;
  cobInitY = 350;
  ursoInitX = 400
  ursoInitY = 200
  ursoAndando();
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 12.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=12.8}
  if (tela==12.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==12.8) {
   image(n1, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobInitX = 200;
  cobInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  ursoAndando();
  cobraRastejandoAma();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=12.9}
  if (tela==12.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==12.9) {
   image(n2, 0,0, 700, 700);
  basico();
  vidasContador()
  limitePadrao();
  cobVerInitX = 420
  cobVerInitY = 310
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  cobraRastejandoVer();  
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 12.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=13}
  if (tela==13) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==13) {
  image(n3, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobPX = 420;
  cobPY = 400;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraStopped2();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 620) { tela = 12.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=13.1}
  if (tela==13.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==13.1) {
  image(p1, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  cobPX = 350
  cobPY = 500
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  if ( yc >= 620) { tela = 13; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=13.2}
  if (tela==13.2) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
  snow();
}
  
if (tela==13.2) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 200;
cobraRastejandoAma();
  cobAmaInitX = 200;
  cobAmaInitY = 300;
loboAndando();
  
  gCoinX = 400
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
  snow();
  basico();
  
 image(player, xc, yc, 50, 50)
  
  if ( yc == 165 ) {tela=13.3}
  if (tela==13.3) {yc=620; pontos += 50; erro = true; unBug();} 
}
  
if (tela==13.3) {
   image(nv1b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  loboInitX = 420
  loboInitY = 310
  ursoInitX = 420
  ursoInitY = 310
  cobAmaInitX = 200
  cobAmaInitY = 450
  cobraRastejandoAma();
  ursoAndando(); 
  loboAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 13.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=13.4}
  if (tela==13.4) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==13.4) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 350;
  ursoInitX = 400
  ursoInitY = 280
  ursoAndando();
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 13.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=13.5}
  if (tela==13.5) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==13.5) {
   image(nv1b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  gCoinX = 300
  gCoinY = 255
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=13.6}
  if (tela==13.6) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==13.6) {
   image(nv1c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 420
  cobAmaInitY = 310
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();  
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 13.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=13.7}
  if (tela==13.7) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==13.7) {
  image(nv1c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 13.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=13.8}
  if (tela==13.8) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==13.8) {
  image(nvp1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobPX = 350
  cobPY = 500
  cobraStopped2();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 13.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=13.9}
  if (tela==13.9) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==13.9) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 400;
  cobAmaInitY = 200;
  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=14}
  if (tela==14) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==14) {
   image(nv1b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoAma();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 13.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=14.1}
  if (tela==14.1) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==14.1) {
   image(nv1c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 420;
  loboInitY = 400;
  
  loboAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 14; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=14.2}
  if (tela==14.2) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==14.2) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  ursoInitX = 300;
  ursoInitY = 400;
  
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 14.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=14.3}
  if (tela==14.3) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==14.3) {
   image(nv1b, 0,0, 700, 700);
  basico();
  limitePadrao();
  vidasContador();
  cobAmaInitX = 400;
  cobAmaInitY = 200;
  loboInitX = 300;
  loboInitY = 190;
  ursoInitX = 440
  ursoInitY = 540
  
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
    gCoinX = 210
  gCoinY = 350
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=14.4}
  if (tela==14.4) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==14.4) {
   image(nv1c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  ursoInitX = 420
  ursoInitY = 210
  cobAmaInitX = 300
  cobAmaInitY = 190

  ursoAndando();  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 14.3; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=14.5}
  if (tela==14.5) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==14.5) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420;
  cobAmaInitY = 250;
  loboInitX = 360;
  loboInitY = 270;
  ursoInitX = 460
  ursoInitY = 500
  
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  xbau = 220;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 14.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=14.6}
  if (tela==14.6) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==14.6) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 400;
  loboInitX = 300
  loboInitY = 250
  
  loboAndando();
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 14.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=14.7}
  if (tela==14.7) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==14.7) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 200;
  ursoInitX = 470
  ursoInitY = 500
  
  ursoAndando();
  loboAndando();
  
  gCoinX = 300
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=14.8}
  if (tela==14.8) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==14.8) {
   image(nv1b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  loboInitX = 400
  loboInitY = 200
  ursoInitX = 300
  ursoInitY = 250
  cobVerInitX = 200
  cobVerInitY = 500

  loboAndando(); 
  ursoAndando(); 
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 14.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=14.9}
  if (tela==14.9) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==14.9) {
  image(nvp1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  loboInitX = 190;
  loboInitY = 350;
  ursoInitX = 300;
  ursoInitY = 230;

  ursoAndando();
  loboAndando();
  
  xbau = 400;
  ybau = 220;
  bau();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc >= 620) { tela = 14.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=15}
  if (tela==15) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==15) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 400;
  cobAmaInitY = 200;
  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=15.1}
  if (tela==15.1) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==15.1) {
   image(nv1c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  ursoInitX = 320
  ursoInitY = 270
  cobAmaInitX = 290
  cobAmaInitY = 310

  ursoAndando();  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 15; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=15.2}
  if (tela==15.2) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==15.2) {
   image(nv1b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 400;
  cobAmaInitX = 200;
  cobAmaInitY = 300;
  
  cobraRastejandoAma();
  loboAndando();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 15.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=15.3}
  if (tela==15.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==15.3) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 400;
  
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 15.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=15.4}
  if (tela==15.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==15.4) {
   image(nv1b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  gCoinX = 200
  gCoinY = 400
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=15.5}
  if (tela==15.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==15.5) {
   image(nv1c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 15.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=15.6}
  if (tela==15.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==15.6) {
  image(nv1c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 15.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=15.7}
  if (tela==15.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==15.7) {
  image(nvp1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 15.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=15.8}
  if (tela==15.8) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==15.8) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  loboInitX = 210
  loboInitY = 240
  loboAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
    gCoinX = 430
  gCoinY = 270
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=15.9}
  if (tela==15.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==15.9) {
   image(nv1b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoAma();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 15.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=16}
  if (tela==16) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==16) {
   image(nv1c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  pandaInitY = 210
  pandaAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 15.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=16.1}
  if (tela==16.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==16.1) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  ursoInitX = 250;
  ursoInitY = 400;
  
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 16; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=16.2}
  if (tela==16.2) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==16.2) {
  image(nv1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 220;
  cobAmaInitY = 400;
  cobVerInitX = 300;
  cobVerInitY = 430;
  loboInitX = 230
  loboInitY = 320
  ursoInitX = 290
  ursoInitY = 250
  loboAndando();
  ursoAndando();
  cobraRastejandoVer();
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (yc == 165 ) {tela=16.3}
  if (tela==16.3) {yc=620 ; pontos += 50; unBug(); }
}
  
if (tela==16.3) {
  image(nv1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 290;
  cobAmaInitY = 310;
  cobVerInitX = 320;
  cobVerInitY = 400;
  loboInitX = 350
  loboInitY = 300
  ursoInitX = 220
  ursoInitY = 310
  loboAndando();
  ursoAndando();
  cobraRastejandoVer();
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 16.2; yc = 165; pontos -= 50; unBug();}
    else {
  if (yc == 165 ) {tela=16.4}
  if (tela==16.4) {yc=620 ; pontos += 50; unBug(); }
    }
}
  
if (tela==16.4) {
  image(nv1c, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 220;
  cobAmaInitY = 400;
  ursoInitX = 270
  ursoInitY = 220
  ursoAndando();
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 16.3; yc = 165; pontos -= 50; unBug();}
    else {
  if (yc == 165 ) {tela=16.5}
  if (tela==16.5) {yc=620 ; pontos += 50; unBug(); }
    }
}
  
if (tela==16.5) {
  image(nvesp1, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 16.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( (xc <= limiteX0 ) && ( yc > limiteY0) && (yc < 300)) { tela=16.6}
  if (tela==16.6) {xc=400 ; yc = 615; pontos += 50; unBug(); }
  if ( chaveEspecial >=1 && yc == 165 ) {tela=31}
  if (tela==31) {yc=620 ; chaveEspecial -=1; pontos += 300; unBug(); maisVida=true; maisPontos=true}
    }
}
  
if ( tela==31) {
  image(tela1651, 0,0, 700, 700);
  basico();
  vidasContador();
  limitePadrao();
  gVidaX = 280
  gVidaY = 350
  gCoinX = 340
  gCoinY = 340
  
  getVida();
  getPontos();
  
  xbau = 310
  ybau = 400
  bau();
  
    if (keyCode===13 && dist( xc, yc, xbau, ybau) < 70) {
    bauQUp()
    strokeWeight(3)
    stroke(10)
    fill("yellow")
    rect ( bauQX0, bauQY0, bauQX700, bauQY700, 10 )
    strokeWeight(0)
    fill('black')
    textFont(fonte)
    textSize(15)
    text('  Parabéns, você pegou um atalho\n    através da porta especial!', 90, 240)
    }
      
      
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  snow();
  
  if (yc == 165 ) {tela=17.5}
  if (tela==17.5) {yc=620 ; pontos += 200; unBug(); }
  
}

if (tela==16.6) {
   image(nvesp2, 0,0, 700, 700);
  limiteX0 = 310
  limiteX700 = 460
  limiteY0 = 80
  limiteY700 = 620
  vidasContador();
  cobPX = 460
  cobPY = 235
  cobraStopped2();
  cobAmaInitX = 340;
  cobAmaInitY = 400;
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow()
  basico();
  
    if ( yc >= 620) { tela = 16.5; yc = 250; xc = 210; pontos -= 50; unBug();}
    else {
  if ( (xc >= limiteX700) && ( yc <= 210) && ( yc => limiteY0) ) {tela=16.7}
  if (tela==16.7) {yc=615; xc = 210; pontos += 50; erro = true; unBug(); }}
}
  
if (tela==16.7) {
   image(nvesp3, 0,0, 700, 700);
  limiteX0 = 175
  limiteX700 = 280
  limiteY0 = 190
  limiteY700 = 620
  vidasContador();
  pandaInitX = 195
  pandaInitY = 350
  pandaAndando();
  cobVerInitX = 250;
  cobVerInitY = 430;
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 16.6; yc = 130; xc = 440; pontos -= 50; unBug();}
  else {
  if ( (xc >= limiteX700) && (yc => limiteY0-30) && (yc <= 300) ) {tela=16.8}
  if (tela==16.8) {yc=615; pontos += 50; erro = true; unBug(); }}
}
  
if (tela==16.8) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobVerInitX = 190;
  cobVerInitY = 200;
  xbau = 320;
  ybau = 340;
  bau();
  
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  snow();
  basico();
  
   if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc >= 620) { tela = 16.7; yc = 215; xc = 260; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc <= 170 ) {tela=16.9}
  if (tela==16.9) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==16.9) {
  image(nvp1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobVerInitX = 250
  cobVerInitY = 390 
  cobraRastejandoVer();
  ursoInitX = 420
  ursoInitY = 540
  ursoAndando();
  
  xbau = 400;
  ybau = 220;
  bau();
  
    gCoinX = 400
  gCoinY = 185
  getPontos();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( chave >=1 && yc == 165 ) {tela=17}
  if (tela==17) {yc=620 ; chave -=1; pontos += 100; unBug(); }
}
  
if (tela==17) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 410
  cobAmaInitY = 390
  cobraRastejandoAma();  
  cobVerInitX = 290
  cobVerInitY = 320
  cobraRastejandoVer(); 
  loboInitX = 300
  loboInitY = 300
  loboAndando();
  ursoInitX = 230
  ursoInitY = 230
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=17.1}
  if (tela==17.1) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==17.1) {
   image(nv1c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 370
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  cobVerInitX = 400
  cobVerInitY = 300 
  cobraRastejandoVer(); 
  ursoInitX = 290
  ursoInitY = 480
  ursoAndando();
  pandaInitX = 220
  pandaInitY = 210
  pandaAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 17; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=17.2}
  if (tela==17.2) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==17.2) {
   image(nv1b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
 cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma(); 
  ursoInitX = 400
  ursoInitY = 320
  ursoAndando();
  pandaInitX = 220
  pandaInitY = 400
  pandaAndando();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 17.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=17.3}
  if (tela==17.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==17.3) {
  image(nvp1a, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
 cobAmaInitX = 400
  cobAmaInitY = 250 
  cobraRastejandoAma();  
  cobVerInitX = 220
  cobVerInitY = 370
  cobraRastejandoVer(); 
  loboInitX = 300
  loboInitY = 290
  loboAndando();
  ursoInitX = 410
  ursoInitY = 320
  ursoAndando();
  pandaInitX = 250
  pandaInitY = 220
  pandaAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 17.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=17.4}
  if (tela==17.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==17.4) {
   image(nv1b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
    gCoinX = 410
  gCoinY = 400
  getPontos();
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=17.5}
  if (tela==17.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==17.5) {
   image(nv1c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  pandaInitX = 350
  pandaInitY = 270
  pandaAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 17.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=17.6}
  if (tela==17.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==17.6) {
  image(nv1c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 17.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=17.7}
  if (tela==17.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==17.7) {
  image(nvp1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  ursoInitX = 390
  ursoInitY = 210
  ursoAndando();
  pandaInitX = 230
  pandaInitY = 210
  pandaAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 17.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=17.8}
  if (tela==17.8) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos = true}
    }
}
  
if (tela==17.8) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  pandaInitX = 210
  pandaInitY = 240
  pandaAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
    gCoinX = 450
  gCoinY = 300
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=17.9}
  if (tela==17.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==17.9) {
   image(nv1b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310
  cobInitX = 300
  cobIniY = 200

  cobraRastejandoAma();  
  cobraRastejandoVer();
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 17.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=18}
  if (tela==18) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==18) {
   image(nv1c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 390 
  cobraRastejandoAma();  
  cobVerInitX = 230
  cobVerInitY = 390 
  cobraRastejandoVer(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  ursoInitX = 310
  ursoInitY = 250
  ursoAndando();
  pandaInitX = 220
  pandaInitY = 230
  pandaAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 17.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=18.1}
  if (tela==18.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==18.1) {
  image(nvdec, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  loboInitX = 410
  loboInitY = 290
  
  loboAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
  xbau = 220;
  ybau = 210;
  bau();
  
     if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
 image(player, xc, yc, 50, 50)
  snow();
  basico();
  
  if ( yc >= 620) { tela = 18; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc <= 166 ) {tela=18.4}
  if ( (xc >= limiteX700) && (yc > 200) && (yc < 310)) { tela = 18.2}
  if (tela==18.4) {yc=620 ; chave -=1; pontos += 100; unBug(); }
  if (tela==18.2) {yc=615; xc=250; pontos += 50; unBug(); }
    }
}
  
if (tela==18.2) {
  image(nvp1b, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  ursoInitX = 320
  ursoInitY = 210
  ursoAndando();
  pandaInitX = 280
  pandaInitY = 210
  pandaAndando();
  cobAmaInitX = 200
  cobAmaInitY = 320
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 18.1; yc = 240; xc= 410; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc <= 170 ) {tela=18.3}
  if (tela==18.3) {yc=620 ; chave -=1; pontos += 100; unBug(); maisVida=true; maisPontos=true }}
}
  
if (tela==18.3) {
   image(nv1a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  gVidaX = 400
  gVidaY = 350
  gCoinX = 200
  gCoinY = 400
  getVida();
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=18.5}
  if (tela==18.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}

if (tela==18.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 400;
  cobAmaInitY = 200;
  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=18.5}
  if (tela==18.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==18.5) {
   image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420;
  cobAmaInitY = 250;
  loboInitX = 360;
  loboInitY = 270;
  ursoInitX = 460
  ursoInitY = 500
  
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  xbau = 220;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 18.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=18.6}
  if (tela==18.6) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==18.6) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 18.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=18.7}
  if (tela==18.7) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==18.7) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 340
  cobAmaInitY = 210
  cobraRastejandoAma();
  ursoInitX = 490
  ursoInitY = 400
  ursoAndando();
  pandaInitX = 210;
  pandaInitY = 200;
  pandaAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
    gCoinX = 400
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=18.8}
  if (tela==18.8) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==18.8) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  loboInitX = 400
  loboInitY = 200
  ursoInitX = 300
  ursoInitY = 250
  cobVerInitX = 200
  cobVerInitY = 500

  loboAndando(); 
  ursoAndando(); 
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 18.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=18.9}
  if (tela==18.9) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==18.9) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 420
  cobAmaInitY = 240
  cobraRastejandoAma();
  ursoInitX = 380
  ursoInitY = 265
  ursoAndando();
  cobVerInitX = 430
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 440;
  pandaInitY = 230;
  pandaAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 195
  cobraStopped2();
  
  xbau = 400;
  ybau = 220;
  bau();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc >= 620) { tela = 18.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=19}
  if (tela==19) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==19) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=19.1}
  if (tela==19.1) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==19.1) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  ursoInitX = 320
  ursoInitY = 270
  cobAmaInitX = 290
  cobAmaInitY = 310

  ursoAndando();  
  cobraRastejandoAma();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 19; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=19.2}
  if (tela==19.2) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==19.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 400;
  cobAmaInitX = 200;
  cobAmaInitY = 490;
  
  cobraRastejandoAma();
  loboAndando();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 19.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=19.3}
  if (tela==19.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==19.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 19.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=19.4}
  if (tela==19.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==19.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
    gCoinX = 210
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=19.5}
  if (tela==19.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==19.5) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao(); 
  polarInitX = 300
  polarInitY = 200
  polarAndando();

  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 19.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=19.6}
  if (tela==19.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==19.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 19.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=19.7}
  if (tela==19.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==19.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 19.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=19.8}
  if (tela==19.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==19.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();    
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 200
  ursoInitY = 450
  ursoAndando();
  cobVerInitX = 370
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 510;
  pandaAndando();
  polarInitX = 420;
  polarInitY = 540;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 480
  cobPY = 390
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=19.9}
  if (tela==19.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==19.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoAma();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 19.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=20}
  if (tela==20) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==20) {
   image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 290;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 220
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 395
  cobInitY = 320
  cobraRastejando();
  cobPX = 400
  cobPY = 450
  cobraStopped2();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 19.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=20.1}
  if (tela==20.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==20.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  ursoInitX = 250;
  ursoInitY = 400;
  
  polarAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 20; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=20.2}
  if (tela==20.2) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==20.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 400;
  cobAmaInitX = 200;
  cobAmaInitY = 300;
  
  cobraRastejandoAma();
  loboAndando();
  
  xbau = 445;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }

  if ( yc == 165 ) {tela=20.3}
  if (tela==20.3) {yc=620; pontos += 50; erro = true; unBug();}
}
  
if (tela==20.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 20.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=20.4}
  if (tela==20.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==20.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
  gCoinX = 300
  gCoinY = 500
  getPontos();
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=20.5}
  if (tela==20.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==20.5) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 20.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=20.6}
  if (tela==20.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==20.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 20.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=20.7}
  if (tela==20.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==20.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 20.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=20.8}
  if (tela==20.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==20.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  loboInitX = 210
  loboInitY = 240
  loboAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=20.9}
  if (tela==20.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==20.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoAma();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 20.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=21}
  if (tela==21) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==21) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  pandaInitY = 210
  pandaAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 20.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=21.1}
  if (tela==21.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==21.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  loboInitX = 400;
  loboInitY = 200;
  loboAndando();
  cobAmaInitX = 390
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 420
  ursoInitY = 290
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 300;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 240;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 450
  cobPY = 420
  cobraStopped2();
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 21; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=21.2}
  if (tela==21.2) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==21.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 400;
  loboInitY = 400;
  cobAmaInitX = 200;
  cobAmaInitY = 300;
  
  cobraRastejandoAma();
  loboAndando();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 21.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=21.3}
  if (tela==21.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==21.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 400;
  
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 21.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=21.4}
  if (tela==21.4) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==21.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=21.5}
  if (tela==21.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==21.5) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 21.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=21.6}
  if (tela==21.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==21.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 21.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=21.7}
  if (tela==21.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==21.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 21.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=21.8}
  if (tela==21.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==21.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  loboInitX = 210
  loboInitY = 240
  loboAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=21.9}
  if (tela==21.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==21.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();  
  loboInitX = 290;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 340
  cobAmaInitY = 200
  cobraRastejandoAma();
  ursoInitX = 320
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 200;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 460;
  polarInitY = 210;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 21.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=22}
  if (tela==22) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==22) {
   image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  pandaInitY = 210
  pandaAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 21.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=22.1}
  if (tela==22.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==22.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  ursoInitX = 250;
  ursoInitY = 400;
  
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 22; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=22.2}
  if (tela==22.2) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==22.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  gCoinX = 400
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }

  if ( yc == 165 ) {tela=22.3}
  if (tela==22.3) {yc=620; pontos += 50; erro = true; unBug();}
}
  
if (tela==22.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 400;
  
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 20.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=22.4}
  if (tela==22.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==22.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
    gCoinX = 300
  gCoinY = 250
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=22.5}
  if (tela==22.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==22.5) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  ursoInitX = 400
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 200;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 290;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 500
  cobraRastejando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 22.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=22.6}
  if (tela==22.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==22.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 22.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=22.7}
  if (tela==22.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==22.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 22.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=22.8}
  if (tela==22.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==22.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  loboInitX = 210
  loboInitY = 240
  loboAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=22.9}
  if (tela==22.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==22.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 22.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=23}
  if (tela==23) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==23) {
   image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  pandaInitY = 210
  pandaAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 22.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=23.1}
  if (tela==23.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==23.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  ursoInitX = 250;
  ursoInitY = 400;
  
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 23; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=23.2}
  if (tela==23.2) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==23.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 23.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=23.3}
  if (tela==23.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==23.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 400;
  
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 23.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=23.4}
  if (tela==23.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==23.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
    gCoinX = 400
  gCoinY = 390
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=23.5}
  if (tela==23.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==23.5) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
  xbau = 390;
  ybau = 450;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro2() )
  opc2();
   }
  
  if ( yc == 620) { tela = 23.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=23.6}
  if (tela==23.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==23.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 23.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=23.7}
  if (tela==23.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==23.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 23.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=23.8}
  if (tela==23.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==23.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();    
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=23.9}
  if (tela==23.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==23.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoAma();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 23.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=24}
  if (tela==24) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==24) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  polarInitY = 210
  polarAndando();
  
  xbau = 370;
  ybau = 370;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 23.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=24.1}
  if (tela==24.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==24.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  polarInitX = 250;
  polarInitY = 400;
  
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 24; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=24.2}
  if (tela==24.2) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==24.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
  xbau = 260;
  ybau = 340;
  bau();
    gCoinX = 280
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }

  if ( yc == 165 ) {tela=24.3}
  if (tela==24.3) {yc=620; pontos += 50; erro = true; unBug();}
}
  
if (tela==24.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 24.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=24.4}
  if (tela==24.4) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==24.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=24.5}
  if (tela==24.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==24.5) {
   image(n2c, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
  xbau = 390;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 24.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=24.6}
  if (tela==24.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==24.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 24.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=24.7}
  if (tela==24.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==24.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  loboInitX = 300;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 470
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 200;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 24.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=24.8}
  if (tela==24.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==24.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  loboInitX = 210
  loboInitY = 240
  loboAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=24.9}
  if (tela==24.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==24.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 320
  cobAmaInitY = 210
  cobVerInitX = 420
  cobVerInitY = 310

  cobraRastejandoAma();  
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 24.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=25}
  if (tela==25) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==25) {
   image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  pandaInitY = 210
  pandaAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 24.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=25.1}
  if (tela==25.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==25.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  ursoInitX = 250;
  ursoInitY = 400;
  
  polarAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 25; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=25.2}
  if (tela==25.2) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==25.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
  xbau = 260;
  ybau = 340;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
    if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 25.1; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=25.3}
  if (tela==25.3) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==25.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  cobAmaInitX = 190;
  cobAmaInitY = 400;
  
  cobraRastejandoAma();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 25.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=25.4}
  if (tela==25.4) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==25.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 200;
  cobAmaInitX = 300
  cobAmaInitY = 320
  ursoInitX = 450
  ursoInitY = 250
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  ursoAndando();
  cobraRastejandoAma();
  loboAndando();
    gCoinX = 450
  gCoinY = 250
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 165 ) {tela=25.5}
  if (tela==25.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==25.5) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  loboInitX = 400;
  loboInitY = 200;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 310
  ursoInitY = 400
  ursoAndando();
  cobVerInitX = 220
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 440;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 200;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 460
  cobPY = 500
  cobraStopped2();
  
  xbau = 430;
  ybau = 360;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 25.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=25.6}
  if (tela==25.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==25.6) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobVerInitX = 200;
  cobVerInitY = 300;
  cobAmaInitX = 350
  cobAmaInitY = 320
  loboInitX = 290
  loboInitY = 200
  loboAndando();
  cobraRastejandoAma();
  cobraRastejandoVer();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 25.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=25.7}
  if (tela==25.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==25.7) {
  image(n2pb, 0,0, 700, 700);
  vidasContador();
  limitePadrao();  
  cobAmaInitX = 420
  cobAmaInitY = 310  
  cobraRastejandoAma();  
  loboInitX = 300
  loboInitY = 200
  loboAndando();
  ursoInitX = 350
  ursoInitY = 270
  ursoAndando();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc >= 620) { tela = 25.6; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=25.8}
  if (tela==25.8) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==25.8) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();  
  cobAmaInitX = 340
  cobAmaInitY = 300 
  cobraRastejandoAma();  
  loboInitX = 210
  loboInitY = 240
  loboAndando();
  ursoInitX = 400
  ursoInitY = 290
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 165 ) {tela=25.9}
  if (tela==25.9) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==25.9) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc == 620) { tela = 25.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=26}
  if (tela==26) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==26) {
   image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  cobAmaInitX = 420
  cobAmaInitY = 310
  cobraRastejandoAma(); 
  loboInitX = 400
  loboInitY = 300
  loboAndando();
  pandaInitX = 390
  pandaInitY = 210
  pandaAndando();
  
  xbau = 370;
  ybau = 420;
  bau();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc == 620) { tela = 25.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=26.1}
  if (tela==26.1) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==26.1) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 350
  cobPY = 320
  cobraStopped();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if ( yc >= 620) { tela = 26; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=26.2}
  if (tela==26.2) {yc=620 ; chave -=1; pontos += 100; unBug(); maisPontos=true}
    }
}
  
if (tela==26.2) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 260;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 390
  cobAmaInitY = 200
  cobraRastejandoAma();
  ursoInitX = 340
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 420;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 460;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 230
  cobraRastejando();
  
  gCoinX = 360
  gCoinY = 200
  getPontos();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();

  if ( yc == 165 ) {tela=26.3}
  if (tela==26.3) {yc=620; pontos += 50; erro = true; unBug();}
}
  
if (tela==26.3) {
  image(n2pa, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 385;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 380
  cobraRastejando();
  cobPX = 390
  cobPY = 350
  cobraStopped();
  
  xbau = 350;
  ybau = 350;
  bau();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50);
  snow();
  basico();
  
  if (keyCode===13 && chave == 0) {
  bauQuestao();
  if ( erro == true ) ( erro1() )
  opc1();
   }
  
  if ( yc >= 620) { tela = 26.2; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chave >=1 && yc == 165 ) {tela=26.4}
  if (tela==26.4) {yc=620 ; chave -=1; pontos += 100; unBug(); }
    }
}
  
if (tela==26.4) {
   image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  loboAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc <= 170 ) {tela=26.5}
  if (tela==26.5) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
if (tela==26.5) {
   image(n2b, 0,0, 700, 700);
  vidasContador()
  limitePadrao();

  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if ( yc == 620) { tela = 26.4; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=26.6}
  if (tela==26.6) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==26.6) {
  image(n2a, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 26.5; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=26.7}
  if (tela==26.7) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==26.7) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 26.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=26.8}
  if (tela==26.8) {yc=620; pontos += 50; erro = true; unBug();}}
  
}
  
if (tela==26.8) {
   image(n2a, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if ( yc == 620) { tela = 26.7; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=26.9}
  if (tela==26.9) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==26.9) {
  image(n2c, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 370;
  loboInitY = 350;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 500
  cobraRastejandoAma();
  ursoInitX = 290
  ursoInitY = 350
  ursoAndando();
  cobVerInitX = 450
  cobVerInitY = 350
  cobraRastejandoVer();
  pandaInitX = 420;
  pandaInitY = 350;
  pandaAndando();
  polarInitX = 480;
  polarInitY = 350;
  polarAndando();
  cobInitX = 200
  cobInitY = 500
  cobraRastejando();
  cobPX = 350
  cobPY = 500
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc == 620) { tela = 26.8; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=27}
  if (tela==27) {yc=620; pontos += 50; erro = true; unBug();}
    }
}
  
if (tela==27) {
   image(n2a, 0,0, 700, 700);
  vidasContador()
  limitePadrao();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow()
  basico();
  
  if ( yc == 620) { tela = 26.9; yc = 165; pontos -= 50; unBug();}
    else {
  if ( yc == 165 ) {tela=27.1}
  if (tela==27.1) {yc=620; pontos += 50; erro = true; unBug(); }
    }
}
  
if (tela==27.1) {
  image(ndec, 0,0, 700, 700);
  vidasContador();
  limitePadrao();
  
   if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  snow();
  basico();
  
  if ( yc >= 620) { tela = 27; yc = 165; pontos -= 50; unBug();}
    else {
  if ( chavesEspecial >=1 && yc == 165 ) {tela=27.2}
  if ( (xc >= limiteX700) && (yc > 200) && (yc < 310)) { tela = 27.3}
  if (tela==27.2) {yc=610 ; chavesEspecial -=1; pontos += 100; unBug(); }
  if (tela==27.3) {yc=620; xc=250; pontos += 100; unBug(); }
    }
}
  
// fim depois da chave
  
if (tela==27.3) {
   image(n2b, 0,0, 700, 700);
  limitePadrao();
  vidasContador();
  loboInitX = 200;
  loboInitY = 450;
  loboAndando();
  cobAmaInitX = 300
  cobAmaInitY = 320
  cobraRastejandoAma();
  ursoInitX = 260
  ursoInitY = 250
  ursoAndando();
  cobVerInitX = 410
  cobVerInitY = 300
  cobraRastejandoVer();
  pandaInitX = 320;
  pandaInitY = 200;
  pandaAndando();
  polarInitX = 260;
  polarInitY = 500;
  polarAndando();
  cobInitX = 300
  cobInitY = 320
  cobraRastejando();
  cobPX = 460
  cobPY = 550
  cobraStopped();
  
  if(keyIsPressed) {move();}
    else {move2();}
  
 image(player, xc, yc, 50, 50)
  
  snow();
  basico();
  
  if ( yc <= 170 ) {tela=26.4}
  if (tela==26.4) {yc=620; pontos += 50; erro = true; unBug();}
  
}
  
gameOver();


}

function move() {
  
  if (contfr > 1) {
    contfr = 0
    FR++
  if (FR > 3) {
    FR = 0;
  }
  }
  
  if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && ( yc > limiteY0)) {
      yc -= speed;
    contfr++;
    player = c[FR];
    }
  
   if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && ( yc < limiteY700)) {
      yc += speed;
    contfr++;
    player = f[FR];
     }
  
   if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) &&  xc > limiteX0) {
      xc -= speed;
    contfr++;
    player = e[FR];
  
      }
  
   if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) &&  xc < limiteX700) {
      xc += speed;
    contfr++;
    player = d[FR];
  
      }  
}
  
function move2() {
  
  if ( keyCode===DOWN_ARROW || keyCode===83) {
     player = f[0];
  }
    if ( keyCode===UP_ARROW || keyCode===87) {
     player = c[0];
  }
    if ( keyCode===LEFT_ARROW || keyCode===85) {
     player = e[0];
  }
    if ( keyCode===RIGHT_ARROW || keyCode===68) {
     player = d[0];
  }
  
}

function bau() {
  
    if ( dist( xc, yc, xbau, ybau) < 45) {
    if (xc < xbau) {xc = xc-speed}
    if (xc > xbau) {xc = xc+speed}
    if (yc > ybau) {yc = yc+speed}
    if (yc < ybau) {yc = yc-speed}
  }
  
    if ( dist(xc, yc, xbau, ybau) < 70) {
      image(bau1Aberto, xbau, ybau, 50, 50)
    } else {
      image(bau1Fechado, xbau, ybau, 50, 50)
    }
  
    if ( ( tela == 5.3) || ( tela == 12.2) || (tela==30) || (tela==31)) { 
    if (dist(xc, yc, xbau, ybau) < 70) {
        image(bau2Aberto, xbau, ybau, 50, 50)}
    else {
        image(bau2Fechado, xbau, ybau, 50, 50)
   }
   }
}

function bauQuestao() {
  
  if ( yc <= 350 ) {bauQDown();}
  if ( yc > 350 ) {bauQUp();}
  
  if ( dist( xc, yc, xbau, ybau) < 70) {
    strokeWeight(3)
    stroke(1)
    fill("yellow")
    rect ( bauQX0, bauQY0, bauQX700, bauQY700, 10 )
    
    if ( dist(mouseX, mouseY, resp1x, respy) < 25) { // primeiro círculo
      fill(255, 215, 50);
    } 
    else {
      fill('green')
    }
    
    circle (resp1x, respy, resptam)
    
    if ( dist(mouseX, mouseY, resp2x, respy) < 25) { // segundo círcculo
      fill(255, 215, 0);
    } 
    else {
      fill('red')
    }
    
    circle (resp2x, respy, resptam)

  perguntas();
  }
  if ( keyIsDown(13) && dist(xbau, ybau, xc, yc) < 70) {
  open.setVolume(0.4); open.playMode('untilDone'); open.play();}
}

function bauQUp () {
  bauQX0 = 50
  bauQX700 = 600
  bauQY0 = 75
  bauQY700 = 300
  respy = 325
  resp1x = 520
  resp2x = 600
}

function bauQDown () {
  bauQX0 = 50
  bauQX700 = 600
  bauQY0 = 375
  bauQY700 = 300
  respy = 635
  resp1x = 520
  resp2x = 600
}

function mostrarChaves() {
  let ch1X = 630
  let ch1Y = 20
  
    strokeWeight(3)
    stroke(1)
    fill(255, 215, 0, 180)
    rect ( 620, 10, 60, 60, 10 )
    noFill();
  
  if ( chave == 1) {
    image(chave1, ch1X, ch1Y, 40, 40);
  } else {
    image(noChave, ch1X, ch1Y, 40, 40)
  }
  
}

function mostrarPontos() {
  image(moeda, 490, 25, 30, 30);
  fill('white')
  textSize(15);
  textFont(fonte)
  text(pontos, 527, 47); 
}

function chavesContador() {
  for ( cont = 0; cont < 1; cont++) {
   chave = cont + 1
   }
}

function chaveEspecialContador() {
  for ( cont = 0; cont < 1; cont++) {
   chaveEspecial = cont + 1
   }
}

function mostrarVidas() {
    let vidaX = 90
  let vida = vidas
  
  if ( vida == 1) { image(coracao, vidaX, 27, 30, 30)}
  
  if ( vida == 2) { image(coracao, vidaX+33, 27, 30, 30)
                    image(vidaAdd, vidaX, 27, 30, 30)}
  
  if ( vida == 3) { image(coracao, vidaX+66, 27, 30, 30)
                  image(vidaAdd, vidaX+33, 27, 30, 30)
                  image(vidaAdd, vidaX, 27, 30, 30)}
  
  if ( vida == 4) { image(coracao, vidaX+99, 27, 30, 30)
                  image(vidaAdd, vidaX+66, 27, 30, 30)
                  image(vidaAdd, vidaX+33, 27, 30, 30)
                  image(vidaAdd, vidaX, 27, 30, 30)}
  
  if ( vida == 5) { image(coracao, vidaX+132, 27, 30, 30)
                  image(vidaAdd, vidaX+99, 27, 30, 30)
                  image(vidaAdd, vidaX+66, 27, 30, 30)
                  image(vidaAdd, vidaX+33, 27, 30, 30)
                  image(vidaAdd, vidaX, 27, 30, 30)}
  
}

function vidasContador() {
  
  if ( (dist(xc, yc, cobX+cobInitX, cobY+cobInitY) > 65) && (dist(xc, yc, cobPX, cobPY) > 65) && (dist(xc, yc, cobVerX+cobVerInitX, cobVerY+cobVerInitY) > 65) && (dist(xc, yc, cobAmaX+cobAmaInitX, cobAmaY+cobAmaInitY) > 65) && (dist(xc, yc, loboX+loboInitX, loboY+loboInitY) > 80) && (dist(xc, yc, ursoX+ursoInitX, ursoY+ursoInitY) > 80) && (dist(xc, yc, pandaX+pandaInitX, pandaY+pandaInitY) > 80) && (dist(xc, yc, polarX+polarInitX, polarY+polarInitY) > 80) ) { vidaFalse = true}
  
}

function recursos () {
    strokeWeight(3)
    stroke(1)
    fill(255, 215, 0, 180)
    rect ( 20, 10, 60, 60, 10 )
    noFill();
}

function basico() {
  mostrarChaves();
  mostrarPontos();
  mostrarVidas();
  recursos();
  
}

function unBug() {
  xbau = 0
  ybau = 0
  cobX = 0
  cobY = 0
  cobVerX = 0
  cobVerY = 0
  cobAmaX = 0
  cobAmaY = 0
  loboX = 0
  loboY = 0
  ursoX = 0
  ursoY = 0
  pandaX = 0
  pandaY = 0
  polarX = 0
  polarY = 0
  
}

function limitePadrao() {
  limiteX0 = 175
  limiteX700 = 465
  limiteY0 = 170
  limiteY700 = 620
}

function perguntas () {
  
  pergunta = p[tela]
  image(pergunta, bauQX0+20, bauQY0+20, 400, 250);
  fill(10)
  stroke(235)
  textSize(13)
  text('    Qual o\n maior valor\n apresentado\n   ao lado?', bauQX0+420, bauQY0+100)
  
}

function erro1 () {
  if ( (dist(mouseX, mouseY, resp1x, respy) < 25) && (mouseIsPressed || keyIsDown(49)) ) {
    image(errado, resp1x-25, respy-25, 50, 50); filter(GRAY); error.play(); pontos -= 250; erro = false}
}

function erro2 () {
  if ( (dist(mouseX, mouseY, resp2x, respy) < 25) && (mouseIsPressed || keyIsDown(50)) ) {
    image(errado, resp1x+55, respy-25, 50, 50); filter(GRAY); error.play(); pontos -= 250; erro = false}
}

function opc1 () {
  if ( (dist(mouseX, mouseY, resp2x, respy) < 25) && (mouseIsPressed || keyIsDown(50)) ) {
    chavesContador(); pontos += 100}
}

function opc2 () {
  if ( (dist(mouseX, mouseY, resp1x, respy) < 25) && (mouseIsPressed || keyIsDown(49)) ) {
    chavesContador(); pontos += 100 } 
}

function cobraRastejando() {
  
  somCobra.setVolume(1);
  
  if ( ((cobX + cobInitX) >= limiteX700-20 ) ) { 
    cob = Math.floor(random(0,4))
    somCobra.play();
    if (cob == 1) {cob = 0}
    if (cob == 2) {cob = 3}
  }
  
  if ( ((cobY + cobInitY) >= limiteY700 ) ) { 
    cob = Math.floor(random(0,4))
    somCobra.play();
    if (cob == 1) {cob = 3}
    if (cob == 0) {cob = 2}
  }
  
  if ( ((cobX + cobInitX) <= limiteX0 ) ) { 
    cob = Math.floor(random(0,4))
    somCobra.play();
    if (cob == 0) {cob = 1}
    if (cob == 3) {cob = 2}
  }
  
  if ( ((cobY + cobInitY) <= limiteY0 ) ) { 
    cob = Math.floor(random(0,4))
    somCobra.play();
    if (cob == 2) {cob = 1}
    if (cob == 3) {cob = 0}
  }
  
  // escolher dois números aleatoriamente
  
  if ( cob == 1 ) { cobX+=1.5 ; cobY+=0.5; }
  
  if ( cob == 0 ) { cobX-=1.5 ; cobY+=0.5;}
  
  if ( cob == 3 ) { cobX-=1.5 ; cobY-=0.5;}
  
  if ( cob == 2 ) { cobX+=1.5 ; cobY-=0.5;}
  
  // Se receber, muda a direção
  
    if ( dist( cobX+cobInitX, cobY+cobInitY, xbau, ybau ) < 55) {
    if (cobX+cobInitX < xbau) {cobX = cobX-5}
    if (cobX+cobInitX > xbau) {cobX = cobX+5}
    if (cobY+cobInitY > ybau) {cobY = cobY+5}
    if (cobY+cobInitY < ybau) {cobY = cobY-5}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, cobX+cobInitX, cobY+cobInitY) < 45)) {
    vidas-=1
    pontos-=59
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(cobra[cob], cobX+cobInitX, cobY+cobInitY, cobTam, cobTam);
  
  // Imagem da cobra
  
}

function cobraRastejandoVer() {
  
  somCobra.setVolume(1);
  
  if ( ((cobVerX + cobVerInitX) >= limiteX700-20 ) ) { 
    cobVer = Math.floor(random(0,4))
  somCobra.play();
    if (cobVer == 1) {cobVer = 0}
    if (cobVer == 2) {cobVer = 3}
  }
  
  if ( ((cobVerY + cobVerInitY) >= limiteY700 ) ) { 
    cobVer = Math.floor(random(0,4))
    somCobra.play();
    if (cobVer == 1) {cobVer = 3}
    if (cobVer == 0) {cobVer = 2}
  }
  
  if ( ((cobVerX + cobVerInitX) <= limiteX0 ) ) { 
    cobVer = Math.floor(random(0,4))
    somCobra.play();
    if (cobVer == 0) {cobVer = 1}
    if (cobVer == 3) {cobVer = 2}
  }
  
  if ( ((cobVerY + cobVerInitY) <= limiteY0 ) ) { 
    cobVer = Math.floor(random(0,4)) 
    somCobra.play();
    if (cobVer == 2) {cobVer = 1}
    if (cobVer == 3) {cobVer = 0}
  }
  
  // escolher dois números aleatoriamente
  
  if ( cobVer == 1 ) { cobVerX+=2.5 ; cobVerY+=1.5; }
  
  if ( cobVer == 0 ) { cobVerX-=2.5 ; cobVerY+=1.5;}
  
  if ( cobVer == 3 ) { cobVerX-=2.5 ; cobVerY-=1.5;}
  
  if ( cobVer == 2 ) { cobVerX+=2.5 ; cobVerY-=1.5;}
  
  // Se receber, muda a direção
  
    if ( dist( cobVerX+cobVerInitX, cobVerY+cobVerInitY, xbau, ybau ) < 60) {
    if (cobVerX+cobVerInitX < xbau) {cobVerX = cobVerX-5}
    if (cobVerX+cobVerInitX > xbau) {cobVerX = cobVerX+5}
    if (cobVerY+cobVerInitY > ybau) {cobVerY = cobVerY+5}
    if (cobVerY+cobVerInitY < ybau) {cobVerY = cobVerY-5}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, cobVerX+cobVerInitX, cobVerY+cobVerInitY) < 45)) {
    vidas-=1
    pontos -= 77
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(cobraVer[cobVer], cobVerX+cobVerInitX, cobVerY+cobVerInitY, cobTam+10, cobTam+10);
  
  // Imagem da cobra
  
}

function cobraRastejandoAma() {
  
  somCobra.setVolume(1);
  
  if ( ((cobAmaX + cobAmaInitX) >= limiteX700-20 ) ) { 
    cobAma = Math.floor(random(0,4))
  somCobra.play();
    if (cobAma == 1) {cobAma = 0}
    if (cobAma == 2) {cobAma = 3}
  }
  
  if ( ((cobAmaY + cobAmaInitY) >= limiteY700 ) ) { 
    cobAma = Math.floor(random(0,4))
  somCobra.play();
    if (cobAma == 1) {cobAma = 3}
    if (cobAma == 0) {cobAma = 2}
  }
  
  if ( ((cobAmaX + cobAmaInitX) <= limiteX0 ) ) { 
    cobAma = Math.floor(random(0,4))
  somCobra.play();
    if (cobAma == 0) {cobAma = 1}
    if (cobAma == 3) {cobAma = 2}
  }
  
  if ( ((cobAmaY + cobAmaInitY) <= limiteY0 ) ) { 
    cobAma = Math.floor(random(0,4)) 
  somCobra.play();
    if (cobAma == 2) {cobAma = 1}
    if (cobAma == 3) {cobAma = 0}
  }
  
  // escolher dois números aleatoriamente
  
  if ( cobAma == 1 ) { cobAmaX+=3 ; cobAmaY+=2; }
  
  if ( cobAma == 0 ) { cobAmaX-=3 ; cobAmaY+=2;}
  
  if ( cobAma == 3 ) { cobAmaX-=3 ; cobAmaY-=2;}
  
  if ( cobAma == 2 ) { cobAmaX+=3 ; cobAmaY-=2;}
  
  // Se receber, muda a direção
  
    if ( dist( cobAmaX+cobAmaInitX, cobAmaY+cobAmaInitY, xbau, ybau ) < 60) {
    if (cobAmaX+cobAmaInitX < xbau) {cobAmaX = cobAmaX-5}
    if (cobAmaX+cobAmaInitX > xbau) {cobAmaX = cobAmaX+5}
    if (cobAmaY+cobAmaInitY > ybau) {cobAmaY = cobAmaY+5}
    if (cobAmaY+cobAmaInitY < ybau) {cobAmaY = cobAmaY-5}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, cobAmaX+cobAmaInitX, cobAmaY+cobAmaInitY) < 45)) {
    vidas-=1
    pontos-=93
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(cobraAma[cobAma], cobAmaX+cobAmaInitX, cobAmaY+cobAmaInitY, cobTam+20, cobTam+20);
  
  // Imagem da cobra
  
}

function cobraStopped() {
  
  image(cobraParada, cobPX, cobPY, cobPTam, cobPTam);
  
  if ( vidaFalse == true ) {
    if ( (dist( xc, yc, cobPX, cobPY) < 45)) {
    vidas-=1;
    vidaFalse = false;
    pontos-=25;
    }
  
  }
}

function cobraStopped2() {
  
  image(cobraParada2, cobPX, cobPY, cobPTam, cobPTam);
  
  if ( vidaFalse == true ) {
    if ( (dist( xc, yc, cobPX, cobPY) < 45)) {
    vidas-=1;
    vidaFalse = false;
    pontos-=20;
    }
  
  }
}

function loboAndando() {
  
if ( Math.floor(frameCount)%100 === 0 ) {
  lb = Math.floor(random(0,4));
}
  
if ( Math.floor(frameCount)%500 === 0 ) {
  somLobo2.setVolume(0.4);
  somLobo2.play();
}
  
  
  if ( ((loboX + loboInitX) >= limiteX700-20 ) ) { 
    lb = 2
  }
  
  if ( ((loboY + loboInitY) >= limiteY700 ) ) { 
    lb = 1
  }
  
  if ( ((loboX + loboInitX) <= limiteX0 ) ) { 
    lb = 3
  }
  
  if ( ((loboY + loboInitY) <= limiteY0 ) ) { 
    lb = 0
  }
  
  // escolher dois números aleatoriamente
  
  if ( lb == 1 ) { 
    if ( ((loboY + loboInitY) >= yc) && ( (loboX + loboInitX) >= xc-45 ) && ((loboX + loboInitX) <= xc+45)) { loboY -= 5.5;}
    else {
    loboY-=3;
    }
  }
  
  if ( lb == 0 ) {
    if ( ((loboY + loboInitY) <= yc) && ( (loboX + loboInitX) >= xc-45 ) && ((loboX + loboInitX) <= xc+45)) { loboY += 5.5;}
    else {
    loboY+=3;
    }
  }
  
  if ( lb == 3 ) { 
    if ( ((loboX + loboInitX) <= xc) && ( (loboY + loboInitY) >= yc-45 ) && ((loboY + loboInitY) <= yc+45)) { loboX += 5.5;}
    else {
    loboX+=3;
    }
  }
  
  if ( lb == 2 ) { 
   if ( ((loboX + loboInitX) >= xc) && ( (loboY + loboInitY) >= yc-45 ) && ((loboY + loboInitY) <= yc+45)) { loboX -= 5.5; }
    else {
    loboX-=3;
    }
  }
  
  // Se receber, muda a direção
  
    if ( dist( loboX+loboInitX, loboY+loboInitY, xbau, ybau ) < 55) {
    if (loboX+loboInitX < xbau) {lb = 2}
    if (loboX+loboInitX > xbau) {lb = 3}
    if (loboY+loboInitY > ybau) {lb = 0}
    if (loboY+loboInitY < ybau) {lb = 1}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, loboX+loboInitX, loboY+loboInitY) < 60)) {
    somLobo1.play()
    vidas-=1
    pontos-=111
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(lobo[lb], loboX+loboInitX, loboY+loboInitY);
  
  // Imagem da cobra
  
}

function ursoAndando() {
  
if ( Math.floor(frameCount)%130 === 0 ) {
  ur = Math.floor(random(0,4));
}
  
  
  if ( ((ursoX + ursoInitX) >= limiteX700-20 ) ) { 
    ur = 2
  }
  
  if ( ((ursoY + ursoInitY) >= limiteY700 ) ) { 
    ur = 1
  }
  
  if ( ((ursoX + ursoInitX) <= limiteX0 ) ) { 
    ur = 3
  }
  
  if ( ((ursoY + ursoInitY) <= limiteY0 ) ) { 
    ur = 0
  }
  
  // escolher dois números aleatoriamente
  
  if ( ur == 1 ) { 
    if ( ((ursoY + ursoInitY) >= yc) && ( (ursoX + ursoInitX) >= xc-45 ) && ((ursoX + ursoInitX) <= xc+45)) { ursoY -= 4}
    else {
    ursoY-=1.5;
    }
  }
  
  if ( ur == 0 ) {
    if ( ((ursoY + ursoInitY) <= yc) && ( (ursoX + ursoInitX) >= xc-45 ) && ((ursoX + ursoInitX) <= xc+45)) { ursoY += 4}
    else {
    ursoY+=1.5;
    }
  }
  
  if ( ur == 3 ) { 
    if ( ((ursoX + ursoInitX) <= xc) && ( (ursoY + ursoInitY) >= yc-45 ) && ((ursoY + ursoInitY) <= yc+45)) { ursoX += 4}
    else {
    ursoX+=1.5;
    }
  }
  
  if ( ur == 2 ) { 
   if ( ((ursoX + ursoInitX) >= xc) && ( (ursoY + ursoInitY) >= yc-45 ) && ((ursoY + ursoInitY) <= yc+45)) { ursoX -= 4}
    else {
    ursoX-=1.5;
    }
  }
  
  // Se receber, muda a direção
  
    if ( dist( ursoX+ursoInitX, ursoY+ursoInitY, xbau, ybau ) < 55) {
    if (ursoX+ursoInitX < xbau) {ur = 2}
    if (ursoX+ursoInitX > xbau) {ur = 3}
    if (ursoY+ursoInitY > ybau) {ur = 0}
    if (ursoY+ursoInitY < ybau) {ur = 1}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, ursoX+ursoInitX, ursoY+ursoInitY) < 60)) {
    somUrso.play();
    vidas-=1
    pontos-=111
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(urso[ur], ursoX+ursoInitX, ursoY+ursoInitY);
  
  // Imagem da cobra
  
}

function pandaAndando() {
  
if ( Math.floor(frameCount)%150 === 0 ) {
  pa = Math.floor(random(0,4));
}
  
  
  if ( ((pandaX + pandaInitX) >= limiteX700-20 ) ) { 
    pa = 2
  }
  
  if ( ((pandaY + pandaInitY) >= limiteY700 ) ) { 
    pa = 1
  }
  
  if ( ((pandaX + pandaInitX) <= limiteX0 ) ) { 
    pa = 3
  }
  
  if ( ((pandaY + pandaInitY) <= limiteY0 ) ) { 
    pa = 0
  }
  
  // escolher dois números aleatoriamente
  
  if ( pa == 1 ) { 
    if ( ((pandaY + pandaInitY) >= yc) && ( (pandaX + pandaInitX) >= xc-45 ) && ((pandaX + pandaInitX) <= xc+45)) { pandaY -= 3.5}
    else {
    pandaY-=1.5;
    }
  }
  
  if ( pa == 0 ) {
    if ( ((pandaY + pandaInitY) <= yc) && ( (pandaX + pandaInitX) >= xc-45 ) && ((pandaX + pandaInitX) <= xc+45)) { pandaY += 3.5}
    else {
    pandaY+=1.5;
    }
  }
  
  if ( pa == 3 ) { 
    if ( ((pandaX + pandaInitX) <= xc) && ( (pandaY + pandaInitY) >= yc-45 ) && ((pandaY + pandaInitY) <= yc+45)) { pandaX += 3.5}
    else {
    pandaX+=1.5;
    }
  }
  
  if ( pa == 2 ) { 
   if ( ((pandaX + pandaInitX) >= xc) && ( (pandaY + pandaInitY) >= yc-45 ) && ((pandaY + pandaInitY) <= yc+45)) { pandaX -= 3.5}
    else {
    pandaX-=1.5;
    }
  }
  
  // Se receber, muda a direção
  
    if ( dist( pandaX+pandaInitX, pandaY+pandaInitY, xbau, ybau ) < 55) {
    if (pandaX+pandaInitX < xbau) {pa = 2}
    if (pandaX+pandaInitX > xbau) {pa = 3}
    if (pandaY+pandaInitY > ybau) {pa = 0}
    if (pandaY+pandaInitY < ybau) {pa = 1}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, pandaX+pandaInitX, pandaY+pandaInitY) < 60)) {
    somUrso.play();
    vidas-=1
    pontos-=111
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(panda[pa], pandaX+pandaInitX, pandaY+pandaInitY);
  
  // Imagem da cobra
  
}

function polarAndando() {
  
if ( Math.floor(frameCount)%110 === 0 ) {
  po = Math.floor(random(0,4));
}
  
  
  if ( ((polarX + polarInitX) >= limiteX700-20 ) ) { 
    po = 2
  }
  
  if ( ((polarY + polarInitY) >= limiteY700 ) ) { 
    po = 1
  }
  
  if ( ((polarX + polarInitX) <= limiteX0 ) ) { 
    po = 3
  }
  
  if ( ((polarY + polarInitY) <= limiteY0 ) ) { 
    po = 0
  }
  
  // escolher dois números aleatoriamente
  
  if ( po == 1 ) { 
    if ( ((polarY + polarInitY) >= yc) && ( (polarX + polarInitX) >= xc-45 ) && ((polarX + polarInitX) <= xc+45)) { polarY -= 4.5}
    else {
    polarY-=1.5;
    }
  }
  
  if ( po == 0 ) {
    if ( ((polarY + polarInitY) <= yc) && ( (polarX + polarInitX) >= xc-45 ) && ((polarX + polarInitX) <= xc+45)) { polarY += 4.5}
    else {
    polarY+=1.5;
    }
  }
  
  if ( po == 3 ) { 
    if ( ((polarX + polarInitX) <= xc) && ( (polarY + polarInitY) >= yc-45 ) && ((polarY + polarInitY) <= yc+45)) { polarX += 4.5}
    else {
    polarX+=1.5;
    }
  }
  
  if ( po == 2 ) { 
   if ( ((polarX + polarInitX) >= xc) && ( (polarY + polarInitY) >= yc-45 ) && ((polarY + polarInitY) <= yc+45)) { polarX -= 4.5}
    else {
    polarX-=1.5;
    }
  }
  
  // Se receber, muda a direção
  
    if ( dist( polarX+polarInitX, polarY+polarInitY, xbau, ybau ) < 55) {
    if (polarX+polarInitX < xbau) {po = 2}
    if (polarX+polarInitX > xbau) {po = 3}
    if (polarY+polarInitY > ybau) {po = 0}
    if (polarY+polarInitY < ybau) {po = 1}
  }
  // Não encostar no baú
  
   if ( vidaFalse == true ) {
    if ( (dist( xc, yc, polarX+polarInitX, polarY+polarInitY) < 60)) {
    somUrso.play();
    vidas-=1
    pontos-=111
    vidaFalse = false
    }}
  
  // Perder vida ao encostar
  
  image(polar[po], polarX+polarInitX, polarY+polarInitY);
  
  // Imagem da cobra
  
}

function colisaoAnimais() {
  
// lobo
    if ( (dist( loboX+loboInitX, loboY+loboInitY, ursoX+ursoInitX, ursoY+ursoInitY ) < 70) || (dist( loboX+loboInitX, loboY+loboInitY, pandaX+pandaInitX, pandaY+pandaInitY ) < 70) || (dist( loboX+loboInitX, loboY+loboInitY, polarX+polarInitX, polarY+polarInitY ) < 70)) { 
      
    if ( (loboX+loboInitX < ursoX+ursoInitX) || (loboX+loboInitX < pandaX+pandaInitX) || (loboX+loboInitX < polarX+polarInitX) ) {lb = 2}
    if ( (loboX+loboInitX > ursoX+ursoInitX) || (loboX+loboInitX > pandaX+pandaInitX) || (loboX+loboInitX > polarX+polarInitX) ) {lb = 3}
    if ( (loboY+loboInitY > ursoY+ursoInitY) || (loboY+loboInitY > pandaY+pandaInitY) || (loboY+loboInitY > polarY+polarInitY) ) {lb = 0}
    if ( (loboY+loboInitY < ursoY+ursoInitY) || (loboY+loboInitY < pandaY+pandaInitY) || (loboY+loboInitY < polarY+polarInitY) ) {lb = 1}
    }
  
// urso
      if ( (dist( loboX+loboInitX, loboY+loboInitY, ursoX+ursoInitX, ursoY+ursoInitY ) < 70) || (dist( ursoX+ursoInitX, ursoY+ursoInitY, pandaX+pandaInitX, pandaY+pandaInitY ) < 70) || (dist( ursoX+ursoInitX, ursoY+ursoInitY, polarX+polarInitX, polarY+polarInitY ) < 70)) { 
      
    if ( (loboX+loboInitX > ursoX+ursoInitX) || (ursoX+ursoInitX < pandaX+pandaInitX) || (ursoX+loboInitX < polarX+polarInitX) ) {ur = 2}
    if ( (loboX+loboInitX < ursoX+ursoInitX) || (ursoX+ursoInitX > pandaX+pandaInitX) || (ursoX+loboInitX > polarX+polarInitX) ) {ur = 3}
    if ( (loboY+loboInitY < ursoY+ursoInitY) || (ursoY+ursoInitY > pandaY+pandaInitY) || (ursoY+loboInitY > polarY+polarInitY) ) {ur = 0}
    if ( (loboY+loboInitY > ursoY+ursoInitY) || (ursoY+ursoInitY < pandaY+pandaInitY) || (ursoY+loboInitY < polarY+polarInitY) ) {ur = 1}
    }
  
// panda
      if ( (dist( loboX+loboInitX, loboY+loboInitY, pandaX+pandaInitX, pandaY+pandaInitY ) < 70) || (dist( ursoX+ursoInitX, ursoY+ursoInitY, pandaX+pandaInitX, pandaY+pandaInitY ) < 70) || (dist( pandaX+pandaInitX, pandaY+pandaInitY, polarX+polarInitX, polarY+polarInitY ) < 70)) { 
      
    if ( (loboX+loboInitX < pandaX+ursoInitX) || (ursoX+ursoInitX > pandaX+pandaInitX) || (pandaX+loboInitX < polarX+polarInitX) ) {pa = 2}
    if ( (loboX+loboInitX > pandaX+ursoInitX) || (ursoX+ursoInitX < pandaX+pandaInitX) || (pandaX+loboInitX > polarX+polarInitX) ) {pa = 3}
    if ( (loboY+loboInitY > pandaY+ursoInitY) || (ursoY+ursoInitY < pandaY+pandaInitY) || (pandaY+loboInitY > polarY+polarInitY) ) {pa = 0}
    if ( (loboY+loboInitY < pandaY+ursoInitY) || (ursoY+ursoInitY > pandaY+pandaInitY) || (pandaY+loboInitY < polarY+polarInitY) ) {pa = 1}
    }
  
// polar
      if ( (dist( loboX+loboInitX, loboY+loboInitY, polarX+polarInitX, polarY+polarInitY ) < 70) || (dist( polarX+polarInitX, polarY+polarInitY, pandaX+pandaInitX, pandaY+pandaInitY ) < 70) || (dist( ursoX+ursoInitX, ursoY+ursoInitY, polarX+polarInitX, polarY+polarInitY ) < 70)) { 
      
    if ( (loboX+loboInitX < polarX+polarInitX) || (polarX+polarInitX < pandaX+pandaInitX) || (ursoX+loboInitX > polarX+polarInitX) ) {po = 2}
    if ( (loboX+loboInitX > polarX+polarInitX) || (polarX+polarInitX > pandaX+pandaInitX) || (ursoX+loboInitX < polarX+polarInitX) ) {po = 3}
    if ( (loboY+loboInitY > polarY+polarInitY) || (polarY+polarInitY > pandaY+pandaInitY) || (ursoY+loboInitY < polarY+polarInitY) ) {po = 0}
    if ( (loboY+loboInitY < polarY+polarInitY) || (polarY+polarInitY < pandaY+pandaInitY) || (ursoY+loboInitY > polarY+polarInitY) ) {po = 1}
    }
}

function snow() {
   t = frameCount / 60;
  
  fill (240);
  noStroke();

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-400, 700);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function sons () {
  
    somInicial.setVolume(0.2);
    somOnda.setVolume(0.17);
    tema1.setVolume(0.17);
    tema2.setVolume(0.25);
    tema3.setVolume(0.2);
    tema4.setVolume(0.2);


  if ( ((tela == 1) || (tela == 2) || (tela == 3) || (tela == 2.1)) ) { 
    tema3.stop(); tema2.stop(); tema1.stop(); tema4.stop();
    somInicial.playMode('untilDone'); somInicial.play();
  }
  if ( tela == 4 || tela == 4.1 ) { somInicial.stop();   
      if ( frameCount%200 == 0) {
      somOnda.playMode('untilDone'); somOnda.play()}}
  
  if ( (tela >= 4.1 && tela <= 5.5) || (tela >= 9.8 && tela <= 13.1) ) { tema2.stop();
      tema1.playMode('untilDone'); tema1.play()}
  
  if ( tela >= 5.6 && tela <= 9.7) { tema1.stop();
      tema2.playMode('untilDone'); tema2.play()}
  
    if ( tela >= 13.2 && tela <= 18.2) { tema1.stop(); tema2.stop();
      tema3.playMode('untilDone'); tema3.play()}
  
      if ( tela >= 18.4 && tela <= 29 ) { tema3.stop(); tema2.stop(); tema1.stop();
      tema4.playMode('untilDone'); tema4.play()}
}

function getVida () {
  
  if ( maisVida == true) { 
    image(coracao, gVidaX, gVidaY, 25, 25);
   if (dist( xc, yc, gVidaX, gVidaY) < 25) {
    vidas += 1;
     somVida.play();
    maisVida = false;
  }}
  
}

function getPontos () {
  
  if ( maisPontos == true) { 
    image(maisCoin, gCoinX, gCoinY, 60, 60);
   if (dist( xc, yc, gCoinX, gCoinY) < 35) {
    pontos += 50;
     somCoin.play();
    maisPontos = false;
  }}
  
}

function gameOver() {
  
  if ( vidas <= 0) {
    tema3.stop(); tema2.stop(); tema1.stop(); tema4.stop();
    if (frameCount > 1) {fim.playMode('untilDone');
    fim.play();}
    filter(BLUR, 1)
    filter(GRAY);
    fill('yellow')
    rect(50, 130, 600, 500, 10);
    textFont(fonte)
    fill('black')
    textSize(50);
    strokeWeight(4);
    stroke(200, 0, 0)
    text('FIM DE JOGO', 81, 350);
    textSize(20);
    stroke(220)
    text('Sua pontuação foi: ' + pontos , 127, 450);
    frameCount=0
    
    noStroke();
    strokeWeight(0)
  
    fill('red');
    textSize(13)
    text('Pressione ENTER', 255, 600);
    
    if (keyCode===13) {
    tela=1;
    vidas=2
  }
    
  }
}
