// declare variables
// all characters as objects with name, HP, Attack, Counter

$(document).ready(function () {
    var CHOOSING_PLAYER = 'CHOOSING_PLAYER';
    var CHOOSING_ENEMY = 'CHOOSING_ENEMY';
    var CHOOSING_DONE = 'CHOOSING_DONE';
    var choosing = CHOOSING_PLAYER;
    var hero;
    var enemy;
    var enemyCounter;
    var resetDuel;
    var healthPoints;
    var attackPower;

    var characters = [
        {
            name: "Harry Potter",
            health: 150,
            attack: 8,
            counter: 10
        },
        {
            name: "Hermione Granger",
            health: 120,
            attack: 10,
            counter: 25
        },
        {
            name: "Dean Thomas",
            health: 140,
            attack: 7,
            counter: 15
        },
        {
            name: "Cho Chung",
            health: 110,
            attack: 9,
            counter: 20
        },
        {
            name:"Ron Weasley",
            health: 130,
            attack: 6,
            counter: 30
        }
    ]
    
    $('.thumbnail').on('click', function () {
        var chosenId = $(this).attr('id'); // grab id of clicked character

        switch (choosing) {
            case CHOOSING_PLAYER:
                hero = chosenId;
                alert('You are entering the duel as ' + hero + "! Best of Luck.");
                hero = $(this).detach();
                hero.appendTo('#heroStage');

                choosing = CHOOSING_ENEMY;
                break;

            case CHOOSING_ENEMY:
                enemy = chosenId;
                alert('You have chosen ' + enemy + ' as your enemy!');
                enemy = $(this).detach();
                enemy.appendTo('#enemyStage');
                choosing = CHOOSING_DONE;
                break;

            case CHOOSING_DONE:
                alert("You've already chosen. Start casting!");
                break;

            // default:
            //     alert('Error. Variable choosing has unrecognized value.');
        }

    });

    // end logging of second image/enemy
    // disable image clicks

    // HERO AND ENEMY DUEL
    // enable cast button for hero only
    // onclick for cast button

    $('.btn').on('click', function () {
        // computer must recognize which hero was chosen
        var chosenId = $(this).attr('id');
        CHOOSING_DONE = false;
        alert('Lumos!');
        hero = chosenId;
        console.log(hero);
    });
    // use button id to identify variables?
    // this.healthPoints, this.attackPower, this.counterAttackPower??

    // computer must recognize which enemy was chosen and then run math functions to update stats


    //  be able to call upon their health/attack powers
    // can this layer access chosenId or hero/enemy?
    // if no, redefine under button click
    // define variables for each thumbnail selected
    //  hero casts a spell on the enemy (enemyHP - hero attack power)
    // if hero==="hero name/thumbnail id", then... set as an object with 3 properties, hp, ap, cap
    // run math function to determine how much health enemy lost (enemy hp - hero attack power)




    // update enemy HP in thumbnail
    // hero attack power increases ^ base power, never resets
});



// enemy automatically counter attacks (hero HP - opponent counter power)


// update hero HP
// continue to cast until enemy hp === 0 or hero hp === 0

// WINNER OR LOSER?
// if enemy hp === 0, enemy disappears/hides
// player chooses a new enemy
// process above repeats

// if hero hp === 0, player loses
// game restarts

// if player defeats all enemies, player wins game!
// alert winner!
