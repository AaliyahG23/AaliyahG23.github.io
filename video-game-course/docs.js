/**
 * calculate the cost based on the number of toppings
 * @param {string[]} toppings - the list of toppings
 * @return {number} - the total cost of the pizza
 */
function pizzaPrice(toppings) {
    // the piza costs $15
    // every additional topping costs $0.50
    const price = 15 + (toppings.length * 0.5)
    return price
}

const toppings = ['pepperoni', 'pineapple', 'bananaapple', 'mushrooms', 'bacon']

const price = pizzaPrice(toppings)

console.log(price)


/**
 * 
 * @param {Object} player1 - the first player
 * @param {string} player1.name - player1's name
 * @param {number} player1.health - player1's health
 * @param {number} player1.attack - player1's attack stat
 * @param {number} player1.defense - player1's defense stat
 * @param {number} player1.speed - player1's speed stat
 * @param {Object} player2 - the second player
 */
function fight(player1, player2) {
    let firstAttacker, secondAttacker;

    // Determine who attacks first based on speed
    if (player1.speed > player2.speed) {
        firstAttacker = player1;
        secondAttacker = player2;
    } else {
        firstAttacker = player2;
        secondAttacker = player1;
    }

    while (player1.health > 0 && player2.health > 0) {
        // First attacker attacks
        let firstAttackerAttack = firstAttacker.attack - secondAttacker.defense;
        secondAttacker.health -= firstAttackerAttack > 0 ? firstAttackerAttack : 0;

        // Check if second attacker is defeated
        if (secondAttacker.health <= 0) {
            console.log(`${firstAttacker.name} wins!`);
            break;
        }

        // Second attacker attacks
        let secondAttackerAttack = secondAttacker.attack - firstAttacker.defense;
        firstAttacker.health -= secondAttackerAttack > 0 ? secondAttackerAttack : 0;

        // Check if first attacker is defeated
        if (firstAttacker.health <= 0) {
            console.log(`${secondAttacker.name} wins!`);
            break;
        }
    }
}

// Example player objects
const player1 = {
    name: "Player 1",
    speed: 5,
    health: 100,
    attack: 20,
    defense: 10
};

const player2 = {
    name: "Player 2",
    speed: 4,
    health: 100,
    attack: 18,
    defense: 12
};

// Start the fight
fight(player1, player2);
