



// load choose your enemy house screen
// user picks enemy
// load duel screen (hero on left enemy on right)
// duel
// on win or lose, ask user if they want to challenge a new player

$(document).ready(function () {
    // user picks house
    // show choose your house div only - hide all others
    $("#duel").hide();
    $("#enemyHouse").hide();

    // VARIABLES
    // var characters = [];
    var gryfArr = [];
    var huffArr = [];
    var raveArr = [];
    var slythArr = [];
    var houses = [];
    var CHOOSING_PLAYER = 'CHOOSING_PLAYER';
    var CHOOSING_ENEMY = 'CHOOSING_ENEMY';
    var CHOOSING_DONE = 'CHOOSING_DONE';
    var CHOOSING_HOUSES;
    var choosing = CHOOSING_PLAYER;
    var chosenHouse;
    var hero;
    var enemy;
    var enemyCounter;
    var resetDuel;
    var healthPoints;
    var attackPower;

    // create characters
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

    // characters.push(harry, hermoine, dean, cho, ron, draco);
    gryfArr.push(harry, hermoine, ron, cho)
    console.log(gryfArr)

    var House = function (short, name, image, characters) {
        this.short = short
        this.name = name;
        this.image = image;
        this.characters = characters;
    }

    var gryf = new House("gryf", "Gryffindor", "https://i.imgur.com/jnHkdOy.gif", gryfArr)
    var huff = new House("huff", "Hufflepuff", "https://i.imgur.com/cV2E3T0.jpg", huffArr)
    var rave = new House("rave", "Ravenclaw", "https://s-media-cache-ak0.pinimg.com/originals/95/87/f3/9587f305825d378206019edddd392a19.gif", raveArr)
    var slyth = new House("slyth", "Slytherin", "https://i.pinimg.com/originals/72/86/8e/72868ea628013cb62ae0de1aa8e6d2c0.gif", slythArr)

    houses.push(gryf, huff, rave, slyth)
    console.log(houses)


    function showHouses(array, rowId, status) {
        array.forEach(function (house) {
            var imgDiv = $('<div class="col-md-3 house ' + status + ' ' + house.short + '" data-house="' + house.name + '"><img class="' + house.short + 'Img" src="' + house.image + '" alt=""></div>');
            $("." + rowId + "").append(imgDiv);
        });
        console.log("working!")
    };

    showHouses(houses, "houseRow", "hero");


    function chooseHouse() {

        chosenHouse = $(this).attr("data-house");
        console.log(chosenHouse)
        alert("Welcome to " + chosenHouse + "!")

        const housesLeft = houses.filter(
            house => chosenHouse !== house.name
        )

        console.log(housesLeft);
        $("#house").hide();
        showHouses(housesLeft, "enemyRow", "enemy")

        $("#enemyHouse").show();
        CHOOSING_HOUSES = true;
        if (CHOOSING_HOUSE) {
            console.log("choosing done!")
            choosePlayer(chosenHouse);
        }
    }

    $(document).on("click", '.hero', chooseHouse)

    function chooseEnemyHouse() {

        console.log("choosing done!");
        console.log(chosenHouse);
        var chosenEnemyHouse = $(this).attr("data-house")
        choosePlayer(chosenHouse);
        console.log(chosenEnemyHouse);
    }

    $(document).on("click", '.enemy', chooseEnemyHouse)

    function choosePlayer(chosenHouse) {
        console.log(gryf)
        for (var i = 0; i < chosenHouse.characters.length; i++) {
            var charContain = $("<div class='col-md-2 start'></div>")
            var newDiv = $("<div id='" + i + "'class='charDiv'></div>")
            var newImage = $("<img id='" + chosenHouse.characters[i].name + "' style='position: relative;' class='char' src='" + chosenHouse.characters[i].image + "' />");

            $(newDiv).append(newImage)

            $(charContain).append(newDiv)
            $("#characterRow").append(charContain);
            console.log(characters[i])

        }
    }

    // FUNCTIONS
    function appendImages(characters) {
        for (var i = 0; i < characters.length; i++) {
            var charContain = $("<div class='col-md-2 start'></div>")
            var newDiv = $("<div id='" + i + "'class='charDiv'></div>")
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
                chooseEnemyHouse();
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







    // appendImages();
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
