var coins=0,scores=0
document.querySelector("#snake").addEventListener("click",function(){
    document.querySelector(".home").style.display="none"
    document.querySelector("body").style.backgroundColor="white"
    document.querySelector(".snakegame").style.display="block"
    document.querySelector(".header").style.display="none"
    document.querySelector("#stagme").addEventListener("click",function(){
document.addEventListener("DOMContentLoaded", function () {
    pTag = document.querySelector("div");
    newVal = document.createElement("p");
    newVal.innerHTML = '';
    pTag.appendChild(newVal);
  });
  const board_border = 'black';
    const board_background = "white";
    const snake_col = 'lightblue';
    const snake_border = 'darkblue';
    
    let snake = [
      {x: 200, y: 200},
      {x: 190, y: 200},
      {x: 180, y: 200},
      {x: 170, y: 200},
      {x: 160, y: 200}
    ]

    let score = 0;
    // True if changing direction
    let changing_direction = false;
    // Horizontal velocity
    let food_x;
    let food_y;
    let dx = 10;
    // Vertical velocity
    let dy = 0;
    
    
    // Get the canvas element
    const snakeboard = document.getElementById("snakeboard");
    // Return a two dimensional drawing context
    const snakeboard_ctx = snakeboard.getContext("2d");
    // Start game
    main();

    gen_food();

    document.addEventListener("keydown", change_direction);
    
    // main function called repeatedly to keep the game running
    function main() {

        if (has_game_ended()){
            coins+=scores 
            console.log(coins)
            score=0
            clear_board()
          return coins}

        changing_direction = false;
        setTimeout(function onTick() {
        clear_board();
        drawFood();
        move_snake();
        drawSnake();
        // Repeat
        main();
      }, 100)
    }
    
    // draw a border around the canvas
    function clear_board() {
      //  Select the colour to fill the drawing
      snakeboard_ctx.fillStyle = board_background;
      //  Select the colour for the border of the canvas
      snakeboard_ctx.strokestyle = board_border;
      // Draw a "filled" rectangle to cover the entire canvas
      snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
      // Draw a "border" around the entire canvas
      snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
    }
    
    // Draw the snake on the canvas
    function drawSnake() {
      // Draw each part
      snake.forEach(drawSnakePart)
    }

    function drawFood() {
      snakeboard_ctx.fillStyle = 'lightgreen';
      snakeboard_ctx.strokestyle = 'darkgreen';
      snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
      snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
    }
    
    // Draw one snake part
    function drawSnakePart(snakePart) {

      // Set the colour of the snake part
      snakeboard_ctx.fillStyle = snake_col;
      // Set the border colour of the snake part
      snakeboard_ctx.strokestyle = snake_border;
      // Draw a "filled" rectangle to represent the snake part at the coordinates
      // the part is located
      snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
      // Draw a border around the snake part
      snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function has_game_ended() {
      for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
      }
      const hitLeftWall = snake[0].x < 0;
      const hitRightWall = snake[0].x > snakeboard.width - 10;
      const hitToptWall = snake[0].y < 0;
      const hitBottomWall = snake[0].y > snakeboard.height - 10;
      return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
    }

    function random_food(min, max) {
      return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }

    function gen_food() {
      // Generate a random number the food x-coordinate
      food_x = random_food(0, snakeboard.width - 10);
      // Generate a random number for the food y-coordinate
      food_y = random_food(0, snakeboard.height - 10);
      // if the new food location is where the snake currently is, generate a new food location
      snake.forEach(function has_snake_eaten_food(part) {
        const has_eaten = part.x == food_x && part.y == food_y;
        if (has_eaten) gen_food();
      });
    }

    function change_direction(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;
      
    // Prevent the snake from reversing
    
      if (changing_direction) return;
      changing_direction = true;
      const keyPressed = event.keyCode;
      const goingUp = dy === -10;
      const goingDown = dy === 10;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;
      if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
      }
      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
      }
      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
      }
    }

    function move_snake() {
      // Create the new Snake's head
      const head = {x: snake[0].x + dx, y: snake[0].y + dy};
      // Add the new head to the beginning of snake body
      snake.unshift(head);
      const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
      if (has_eaten_food) {
        // Increase score
        score += 10;
        scores=score
        console.log(scores)
        // Display score on screen
        document.getElementById('score').innerHTML = scores;
        // Generate new food location
        gen_food();
      } else {
        // Remove the last part of snake body
        snake.pop();
      }
    }})
    document.querySelector("#close").addEventListener("click",function(){   
        
        score=0 
        document.getElementById('score').innerHTML = score;
        document.querySelector("body").style.backgroundColor="rgb(9, 245, 9)"
        document.querySelector(".header").style.display="block"
        document.querySelector(".snakegame").style.display="none"
        document.querySelector(".home").style.display="grid"
        document.querySelector(".home").style.flexDirection="column"
        document.querySelector(".home").style.justifyContent="center"
        document.querySelector(".home").style.gridTemplateAreas="'snake bird' 'fbby fbby' 'quizz quizz' 'quby quby'"
        document.querySelector(".home").style.gridColumnGap="50px"
        document.querySelector(".home").style.gridRowGap="25px"
        document.querySelector(".home").style.textAlign="center"
        document.querySelector(".home").style.width="fit-content"
        document.querySelector(".home").style.height="fit-content"
        document.querySelector(".home").style.margin="auto"
        document.querySelector(".home").style.padding="10px"
        document.querySelector(".home").style.alignItems="center"
        document.querySelector("#totscore").innerHTML="Coins:"+coins})
    })
    
        game="not bought"
document.querySelector("#fbby").addEventListener("click",function(){

if(coins>=50){
    coins-=50
    game="bought"
    document.querySelector("#fbby").style.display="none"
    document.querySelector("#bird").style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Flappy_Bird_icon.png/220px-Flappy_Bird_icon.png")'
    document.querySelector("#bird").style.backgroundSize="100% 100%"}
    else
    alert("Not enough coins to buy")})
    document.querySelector("#bird").addEventListener("click",function(){
    if(game=="bought"){
        document.querySelector(".home").style.display="none"
        document.querySelector(".header").style.display="none"
        document.querySelector("body").style.backgroundColor="skyblue"
        document.querySelector(".birdgame").style.display="block"  
        let move_speed = 3;
	
        // Gravity constant value
        let gravity = 0.5;
            
        // Getting reference to the bird element
        let bird = document.querySelector('.bird');
            
        // Getting bird element properties
        let bird_props = bird.getBoundingClientRect();
        let background =
            document.querySelector('.background')
                    .getBoundingClientRect();
            
        // Getting reference to the score element
        let score_val =
            document.querySelector('.score_val');
        let message =
            document.querySelector('.message');
        let score_title =
            document.querySelector('.score_title');
            
        // Setting initial game state to start
        let game_state = 'Start';
            
        // Add an eventlistener for key presses
        document.addEventListener('keydown', (e) => {
            
        // Start the game if enter key is pressed
        if (e.key == 'Enter' &&
            game_state != 'Play') {
            document.querySelectorAll('.pipe_sprite')
                    .forEach((e) => {
            e.remove();
            });
            bird.style.top = '40vh';
            game_state = 'Play';
            message.innerHTML = '';
            score_title.innerHTML = 'Score : ';
            score_val.innerHTML = '0';
            play();
        }
        });
        function play() {
        function move() {
            
            // Detect if game has ended
            if (game_state != 'Play') return;
            
            // Getting reference to all the pipe elements
            let pipe_sprite = document.querySelectorAll('.pipe_sprite');
            pipe_sprite.forEach((element) => {
                
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();
                
            // Delete the pipes if they have moved out
            // of the screen hence saving memory
            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                // Collision detection with bird and pipes
                if (
                bird_props.left < pipe_sprite_props.left +
                pipe_sprite_props.width &&
                bird_props.left +
                bird_props.width > pipe_sprite_props.left &&
                bird_props.top < pipe_sprite_props.top +
                pipe_sprite_props.height &&
                bird_props.top +
                bird_props.height > pipe_sprite_props.top
                ) {
                    
                // Change game state and end the game
                // if collision occurs
                game_state = 'End';
                message.innerHTML = 'Press Enter To Restart';
                message.style.left = '28vw';
                return;
                } else {
                // Increase the score if player
                // has the successfully dodged the
                if (
                    pipe_sprite_props.right < bird_props.left &&
                    pipe_sprite_props.right +
                    move_speed >= bird_props.left &&
                    element.increase_score == '1'
                ) {
                    score_val.innerHTML = +score_val.innerHTML + 1;
                    coins+=score_val.innerHTML
                }
                element.style.left =
                    pipe_sprite_props.left - move_speed + 'px';
                }
            }
            });
        
            requestAnimationFrame(move);
        }
        requestAnimationFrame(move);
        
        let bird_dy = 0;
        function apply_gravity() {
            if (game_state != 'Play') return;
            bird_dy = bird_dy + gravity;
            document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                bird_dy = -7.6;
            }
            });
        
            // Collision detection with bird and
            // window top and bottom
        
            if (bird_props.top <= 0 ||
                bird_props.bottom >= background.bottom) {
            game_state = 'End';
            message.innerHTML = 'Press Enter To Restart';
            message.style.left = '28vw';
            return;
            }
            else{
            bird.style.top = bird_props.top + bird_dy + 'px';
            bird_props = bird.getBoundingClientRect();}
            requestAnimationFrame(apply_gravity);
        }
        requestAnimationFrame(apply_gravity);
        
        let pipe_seperation = 0;
            
        // Constant value for the gap between two pipes
        let pipe_gap = 35;
        function create_pipe() {
            if (game_state != 'Play') return;
            
            // Create another set of pipes
            // if distance between two pipe has exceeded
            // a predefined value
            if (pipe_seperation > 115) {
            pipe_seperation = 0
                
            // Calculate random position of pipes on y axis
            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';
                
            // Append the created pipe element in DOM
            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';
                
            // Append the created pipe element in DOM
            document.body.appendChild(pipe_sprite);
            document.querySelector("#closeb").addEventListener("click",function(){   
        
         
          
              document.querySelector("body").style.backgroundColor="rgb(9, 245, 9)"
              document.querySelector(".header").style.display="block"
              document.querySelector(".birdgame").style.display="none"
              document.querySelector(".home").style.display="grid"
              
              console.log(document.body.innerHTML)
              document.querySelector(".home").style.flexDirection="column"
              document.querySelector(".home").style.justifyContent="center"
              document.querySelector(".home").style.gridTemplateAreas="'snake bird' 'fbby fbby' 'quizz quizz' 'quby quby'"
              document.querySelector(".home").style.gridColumnGap="50px"
              document.querySelector(".home").style.gridRowGap="25px"
              document.querySelector(".home").style.textAlign="center"
              document.querySelector(".home").style.width="fit-content"
              document.querySelector(".home").style.height="fit-content"
              document.querySelector(".home").style.margin="auto"
              document.querySelector(".home").style.padding="10px"
              document.querySelector(".home").style.alignItems="center"
              document.querySelector("#totscore").innerHTML="Coins:"+coins
              document.body.innerHTML=`<div class="header"><p id="totscore">Coins:</p>
              <p id="title">WELCOME TO GAME WEBSITE</p></div>
              <div class="home">
              <div id="snake"></div>
              <div id="quizz"></div>
              <button id="quby">BUY</button>
              <div id="bird">
                 
              </div> <button id="fbby">BUY</button></div>
              <!-- https://image.flaticon.com/icons/png/512/891/891399.png -->
             <div class="snakegame"> 
              <img id="close" src="/prograd-project-repo/lab-javascript-oops-blog/assets/window-close-solid.svg">
              <div id="score">0</div>
              <canvas id="snakeboard" width="400" height="400"></canvas>
              <canvas id="snakeboard" width="400" height="400"></canvas>
              <button id="stagme">PLAY</button>
              </div>
          <div class="birdgame">
              <img id="closeb" src="/prograd-project-repo/lab-javascript-oops-blog/assets/window-close-solid.svg">
              <div class="background"></div>
          <img class="bird" src="https://www.nicepng.com/png/detail/585-5857711_flappy-bird-icon-png-flappy-bird-sprite-png.png" alt="bird-img">
          <div class="message">
              Press Enter To Start Game
          </div>
          <div class="score">
              <span class="score_title"></span>
              <span class="score_val"></span>
          </div></div>`})
            }
            pipe_seperation++;
            requestAnimationFrame(create_pipe);
        }
        requestAnimationFrame(create_pipe);
        
        }}
        else{
            alert("Game not bought to play buy")
        }
    })
    // Background scrolling speed


