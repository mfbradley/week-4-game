// declare variables
// all characters as objects with name, HP, Attack, Counter

$(document).ready(function() {
    var CHOOSING_PLAYER = 'CHOOSING_PLAYER';
    var CHOOSING_ENEMY = 'CHOOSING_ENEMY';
    var CHOOSING_DONE = 'CHOOSING_DONE';
    var choosing = CHOOSING_PLAYER;
    var hero;
    var enemy;
    var enemyCounter;
    var resetDuel;
    
    
    $('.thumbnail').on('click', function() {
        var chosenId = $(this).attr('id'); // grab id of clicked character

        switch (choosing) {
            case CHOOSING_PLAYER:
                hero = chosenId;
                alert('Your hero is ' + hero + '!');
                hero = $(this).detach();
                hero.appendTo('#heroStage');

                choosing = CHOOSING_ENEMY;
                break;

            case CHOOSING_ENEMY:
                enemy = chosenId;
                alert('Your enemy is ' + enemy + '!');
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
    function heroCast(healthPoints - attackPower) {

    }

    $('.btn').on('click', function() {
        alert('it works!');
        CHOOSING_DONE = false;
        // hero casts a spell (enemyHP - hero attack power)
        heroCast();
        console.log(heroCast);
        // update enemy HP
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
});
