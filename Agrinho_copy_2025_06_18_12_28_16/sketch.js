let personagem;
let obstaculos = [];
let chao = 350;
let velocidade = 6;
let gravidade = 0.8;
let pontuacao = 0;
let jogoRodando = true;

function setup() {
  createCanvas( 800, 400);
  personagem = new Personagem();
  textAlign(LEFT, TOP); // padrão alinhamento para emojis
}

function draw() {
  background(135, 206, 235); // céu azul
  fill(34, 139, 34);
  rect(0, chao, width, 50); // chão

  if (jogoRodando) {
    personagem.update();
    personagem.show();

    if (frameCount % 90 === 0) {
      obstaculos.push(new Obstaculo());
    }

    for (let i = obstaculos.length - 1; i >= 0; i--) {
      obstaculos[i].update();
      obstaculos[i].show();

      if (personagem.colidiu(obstaculos[i])) {
        if (obstaculos[i].tipo === 'bomba') {
          jogoRodando = false;
        } else {
          if (!obstaculos[i].coletado) {
            pontuacao++;
            obstaculos[i].coletado = true;
          }
        }
      }

      if (obstaculos[i].offscreen()) {
        obstaculos.splice(i, 1);
      }
    }

    fill(255);
    textSize(20);
    text("Pontuação: " + pontuacao, 10, 30);
  } else {
    fill( 120, 125, 0);
    textSize(32);
    text("Fim de Jogo! Aperte ESPAÇO para reiniciar", 100, 200);
  }
}

function keyPressed() {
  // Faz o personagem pular ao apertar a tecla "P" ou "p"
  if ((key === 'p' || key === 'P') && personagem.podePular()) {
    personagem.pular();
  }
  // Reiniciar o jogo com a tecla espaço
  if (key === ' ') {
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  jogoRodando = true;
  pontuacao = 0;
  personagem = new Personagem();
  obstaculos = [];
}

class Personagem {
  constructor() {
    this.r = 50;
    this.x = 50;
    this.y = chao - this.r;
    this.velY = 0;
  }

  pular() {
    this.velY = -15;
  }

  update() {
    this.y += this.velY;
    this.velY += gravidade;

    if (this.y > chao - this.r) {
      this.y = chao - this.r;
      this.velY = 0;
    }
  }

  show() {
    textSize(40);             // tamanho do emoji do caipira
    text('🧑‍🌾', this.x, this.y);
  }

  podePular() {
    return this.y >= chao - this.r;
  }

  colidiu(obstaculo) {
    return (
      this.x < obstaculo.x + obstaculo.w &&
      this.x + this.r > obstaculo.x &&
      this.y < obstaculo.y + obstaculo.h &&
      this.y + this.r > obstaculo.y
    );
  }
}

class Obstaculo {
  constructor() {
    this.w = 30;
    this.h = 30;
    this.x = width;
    this.y = chao - this.h;
    this.coletado = false;

    let rand = floor(random(4));
    if (rand === 0) this.tipo = 'cenoura';
    else if (rand === 1) this.tipo = 'batata';
    else if (rand === 2) this.tipo = 'milho';
    else this.tipo = 'bomba';
  }

  update() {
    this.x -= velocidade;
  }

  show() {
    textSize(32);
    let emoji = '';
    if (this.tipo === 'cenoura') emoji = '🥕';
    else if (this.tipo === 'batata') emoji = '🥔';
    else if (this.tipo === 'milho') emoji = '🌽';
    else if (this.tipo === 'bomba') emoji = '💣';

    text(emoji, this.x, this.y);
  }

  offscreen() {
    return this.x + this.w < 0;
  }
}
