let resources = { images:[
                         {id:"bg", src:"images/MainBG.png"},
                         {id:"turtle", src:"images/Turtle.png"}
                    ],
                  audios:[
                    ]
                };

function loading() {
  game = new Game("game");
  game.preload(resources);

  game.state = init;
  gameloop();
  
}
document.onload = loading();

function gameloop() {
  game.processInput();

  if (game.ready) {
    game.state();
  }

  game.update();
  setTimeout(gameloop, 10);
}

function init() {
  bg = new Sprite(game.images.bg, game);
  tut = new Sprite(game.images.turtle, game);

  tut.scale = 0.2;

  game.state = startScreen;
}

function startScreen() {
  bg.draw()
  tut.draw()
}