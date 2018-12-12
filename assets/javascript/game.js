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
            var newDiv = $("<div id='"+ i +"'class='charDiv'></div>")
            var newImage = $("<img id='" + characters[i].name + "' style='position: relative;' class='char' src='" + characters[i].image + "' />");
            
            $(newDiv).append(newImage)
            
            $(charContain).append(newDiv)
            $("#characterRow").append(charContain);
            console.log(characters[i])

        }
    }

    function selections() {
        var chosenId = $(this).attr('id'); // grab id of clicked character
        console.log(chosenId);

        switch (choosing) {
            case CHOOSING_PLAYER:
                hero = $(this).attr('id')
                $(this).parent().attr('class', 'hero')
                alert('You are entering the duel as ' + hero + "! Best of Luck.");
                var castBtn = $("<button class='cast' style='position: absolute; bottom: 10px; right: 30px'>Cast!</button>");
                $(".hero").append(castBtn)
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
                enemyIndex = $(this).parent().attr('id')
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
        
        var index = $(this).parent().attr('id')
        hero = characters[index]
        enemy = characters[enemyIndex]
        alert("lumos! you are attacking " + enemy.name)
        
        // hero attacks enemy
        enemy.health = enemy.health - hero.attack
        console.log(enemy.health)
        alert(enemy.name + "'s health was damaged by your attack and has been decreased to " + enemy.health)
        // enemy counter attacks hero
        hero.health = hero.health - enemy.counter;
        console.log(hero.health)
        alert(enemy.name + ' countered your attack! your currenth health is ' + hero.health)
        // var Character = function (name, health, attack, counter, image)

    }

    appendImages();
    $(document).on('click', '.char', selections);
    $(document).on('click', '.cast', cast)
    
});




// WINNER OR LOSER?
// if enemy hp === 0, enemy disappears/hides
// player chooses a new enemy
// process above repeats

// if hero hp === 0, player loses
// game restarts

// if player defeats all enemies, player wins game!
// alert winner!
