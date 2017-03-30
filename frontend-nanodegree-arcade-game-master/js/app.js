var ChangeLives = function() {
    this.lives = 4; 
};

ChangeLives.prototype.minusLives = function() {
    var newLife = this.lives -= 1;
    if (newLife > 0) {
        document.getElementById('livesNum').innerHTML = newLife;
    }else {
        document.getElementById('livesNum').innerHTML = newLife;
        setTimeout(function() {
            var scoreEnd = document.getElementById("scoreNum").innerHTML;
            alert('GAME OVER, Your final score is: '+scoreEnd);
            location.reload(false);
    }, 200);
    }
};

//class to handel the change of score
var ChangeScore = function() {
    this.score = 0;  
};

ChangeScore.prototype.addScore = function() {
    var newScore = this.score += 1;
    document.getElementById('scoreNum').innerHTML = newScore;
};

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.fasterBy = 0;
    this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks  
Enemy.prototype.update = function(dt) {
// console.log('enemy update function');
    this.sprite = 'images/enemy-bug.png';
        if (this.x < 500) {//move the bug
            this.x += (this.speed + this.fasterBy) * dt;
        } else {
            // console.log('bug loop');
            this.x = -100;//put the bug back at the beginning
        }
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    // console.log('enemy render function');
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player(x, y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';        
}

Player.prototype.reset = function(x, y){
    this.x = x;
    this.y = y;
};

Player.prototype.win = function() {
    //using the var that == this so that i can use this in the setTimeout function
    var that = this;
    //set timeout so that it shows the player in the water
    setTimeout(function() { 
        //added this to clear the squares so the head of the player doesn't show up
        ctx.clearRect(0, 0, 505, 606);
        //reset the player position
        that.reset(202, 385);  
    }, 100); 
    //add 1 to the score after win
    changeScore.addScore(); 
};

Player.prototype.checkCollisions = function() {
        //reset the player position
        this.reset(202, 385); 
        //for loop through the array and update enemies position
        allEnemies.forEach(function(enemy) {
            //put the enemies back at the start
            enemy.update();
        });
        //clear the whole rec
        ctx.clearRect(0, 0, 505, 606);
        //shows how many times in the console that I was killed- just for referance
        console.log('killed'); 
}; 

Player.prototype.update = function(dt) {
// console.log('player update function');   
    for (var count = 0; count < allEnemies.length; count++) {
        if ((this.x < allEnemies[count].x + 55 &&
            this.x > allEnemies[count].x - 55) &&
            this.y === allEnemies[count].y) {
            //take a life away
            changeLives.minusLives();
            //call the killed player function
            this.checkCollisions();
        }
    }
};

Player.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(keyup) {
    // shows how many times this function is called
    console.log('player handleInput function');
    //calls the up key and win is called if the y access of the player is -30
    if (keyup === 'up' && this.y > 50) {
        this.y -= 83;
        if (this.y === -30) {
            this.win();
        } 
    }
    if (keyup === 'down' && this.y < 385) {
        this.y += 83;
    }
    if (keyup === 'left' && this.x > 50) {
        this.x -= 101;
    }
    if (keyup === 'right' && this.x < 400) {
        this.x += 101;
    }
};  

//pick a random speed for the enemies
var randomSpeed = function(top, bottom) {
    var x = Math.floor((Math.random() * top) + bottom);
    console.log(x);
    return x;
};

// Now instantiate your objects.
var chris = new Player(202, 385);
//I dont know why I made these separate classes but I wanted to see if it worked
var changeLives = new ChangeLives();
var changeScore = new ChangeScore();
var smellyBug = new Enemy(0, 136, randomSpeed(200, 150));
var uglyBug = new Enemy(0, 219, randomSpeed(150, 100));
var superBug = new Enemy(0, 53, randomSpeed(250, 200));
// Place all enemy objects in an array called allEnemies
var allEnemies = [smellyBug, uglyBug, superBug];
// Place the player object in a variable called player
var player = chris;
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});


