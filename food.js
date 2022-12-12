
import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

//let food = { x:15 , y:15 }
let food = getRandomFoodPosition()
let expansion = 1

export function update () {
    if (onSnake(food)) {
        expandSnake(expansion)
        //food = { x:5 , y:-10 }
        food = getRandomFoodPosition()
    }
}

export function draw (gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
