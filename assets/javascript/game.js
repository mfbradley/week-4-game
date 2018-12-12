$(document).ready(function () {

    // VARIABLES
    var characters = [];
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

    var Character = function (name, health, attack, counter, image) {
        this.name = name,
            this.health = health,
            this.attack = attack,
            this.counter = counter,
            this.image = image,
            this.printStats = function () {
                console.log("Name: " + this.name + "\nHealth: " + this.health + "\nAttack: " + this.attack + "\nCounter: " + this.counter + "\n---------------------------")
            }
    }

    var harry = new Character("Harry Potter", 150, 8, 10, "assets/images/hp.jpg");
    var hermoine = new Character("Hermione Granger", 120, 10, 25, "assets/images/hermione.jpg");
    var dean = new Character("Dean Thomas", 140, 7, 15, "assets/images/dean.png");
    var cho = new Character("Cho Chung", 110, 9, 20, "assets/images/cho.jpg");
    var ron = new Character("Ron Weasley", 130, 6, 30, "assets/images/ron.jpg");
    var draco = new Character("Draco Malfoy", 170, 7, 15, "assets/images/draco.jpg")

    characters.push(harry, hermoine, dean, cho, ron, draco);


    // FUNCTIONS
    function appendImages() {
        for (var i = 0; i < characters.length; i++) {
            var charContain = $("<div class='col-md-2 start'></div>")
            var newDiv = $("<div class='charDiv'></div>")
            var newImage = $("<img id='" + characters[i].name + "' style='position: relative;' class='char' src='" + characters[i].image + "' />");
            
            $(newDiv).append(newImage)
            
            $(charContain).append(newDiv)
            $("#characterRow").append(charContain);
            console.log(characters[i])

        }

        //  for (var i = 0; i < characters.length; i++) {
            // var newDiv = $("<div style='height: 200px;' class='col-md-2 charDiv'></div>")
            
            // $(newDiv).append(newImage)
            // $(newDiv).append(castBtn)
            // $("#characterRow").append(newDiv);
            // console.log(characters[i])

        // }

    }

    function selections() {
        var chosenId = $(this).attr('id'); // grab id of clicked character
        console.log(chosenId);

        switch (choosing) {
            case CHOOSING_PLAYER:
                hero = $(this).attr('id')
                $(this).parent().attr('id', 'hero')
                alert('You are entering the duel as ' + hero + "! Best of Luck.");
                var castBtn = $("<button class='cast' style='position: absolute; bottom: 10px; right: 30px'>Cast!</button>");
                $("#hero").append(castBtn)
                hero = $(this).parent().detach();
                hero.appendTo('#heroStage');

                choosing = CHOOSING_ENEMY;
                break;

            case CHOOSING_ENEMY:
                enemy = chosenId;
                alert('You have chosen ' + enemy + ' as your enemy!');
                enemy = $(this).parent().detach();
                console.log(enemy)
                enemy.appendTo('#enemyStage');
                choosing = CHOOSING_DONE;
                break;

            case CHOOSING_DONE:
                alert("You've already chosen. Start casting!");
                break;

            default:
                alert('Error. Variable choosing has unrecognized value.');
        }

    };

    function cast() {
        alert("lumos!")
        character = $(this).siblings('.char').attr('id')
        console.log("hero: ")
        console.log(hero)
        console.log("enemy: ")
        console.log(enemy)

    }

    appendImages();
    $(document).on('click', '.char', selections);
    $(document).on('click', '.cast', cast)
    // end logging of second image/enemy
    // disable image clicks

    // HERO AND ENEMY DUEL
    // enable cast button for hero only
    // onclick for cast button

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
