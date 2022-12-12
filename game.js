
import { snakeIntersection, getSnakeHead, snakeSpeed, update as updateSnake, draw as drawSnake } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"


let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false


// game loop - function that repeats itself based od given interval
function main(currentTime) {

    if (gameOver) {
        if (confirm('Game Over. Press OK to restart')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if ( secondsSinceLastRender < 1 / snakeSpeed ) return
    
    lastRenderTime = currentTime
    console.log('Render')

    update()

    draw()

}

window.requestAnimationFrame(main) // first calling

// update snake and food
function update () { 
    updateSnake()
    updateFood()
    checkDeath()
}

// draw snake and food
function draw () {
    gameBoard.innerHTML = '' //erase old snake
    drawSnake(gameBoard) //draw new snake
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}

