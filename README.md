TRABALHO PENSAMENTO COMPUTACIONAL:
ALUNA: LAURA RIBEIRO BÉRGAMO
TURMA: 1ºC

INSTRUÇÕES DO SOFTWARE DO AGRINHO:

Jogo do Caipira Coletor — Feito com p5.js

Sobre o Jogo

Este é um mini jogo desenvolvido com a biblioteca [p5.js](https://p5js.org/), onde o jogador controla um personagem caipira que deve coletar alimentos da fazenda enquanto desvia de bombas.

O personagem pode coletar:
- Cenoura  
- Batata  
- Milho  

Se tocar em uma bomba, o jogo termina e é necessário reiniciar.

Como Jogar

- Pressione **P** para o personagem pular.
- Pressione **ESPAÇO** para reiniciar o jogo após o fim.
- Cada alimento coletado vale 1 ponto.
- O jogo termina automaticamente ao encostar em uma bomba.

Objetivo

O objetivo do jogo é coletar o maior número possível de alimentos, evitando as bombas para alcançar uma pontuação alta.

Tecnologias Utilizadas

- JavaScript
- [p5.js](https://p5js.org/) — biblioteca para programação visual e interativa

Estrutura do Código

### `Personagem`
Classe que representa o personagem principal. Controla a física do pulo, a gravidade e as colisões com obstáculos.

### `Obstaculo`
Classe responsável por gerar os alimentos e bombas que se movem da direita para a esquerda na tela.

### Funções Principais
- `setup()` — inicializa o jogo
- `draw()` — atualiza os elementos a cada quadro do jogo
- `keyPressed()` — trata os controles de pulo e reinício do jogo
