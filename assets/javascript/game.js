$(document).ready(function () {
    // user picks house
    // show choose your house div only - hide all others
    $("#duel").hide();
    $("#enemyHouse").hide();
    $("#houseDivided").hide();

    // VARIABLES
    var houses = [];
    var CHOOSING_PLAYER = 'CHOOSING_PLAYER';
    var CHOOSING_ENEMY = 'CHOOSING_ENEMY';
    var CHOOSING_DONE = 'CHOOSING_DONE';
    var CHOOSING_HOUSES = true;
    var choosing = CHOOSING_PLAYER;
    var chosenHouse;
    var chosenEnemyHouse;
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

    var House = function (short, name, image, characters) {
        this.short = short,
            this.name = name,
            this.image = image,
            this.characters = [],
            this.addCharacter = function (name, health, attack, counter, image) {
                this.characters.push(new Character(name, health, attack, counter, image))
            }
    }
    // create 4 houses
    var gryf = new House("gryf", "Gryffindor", "https://i.imgur.com/jnHkdOy.gif");
    var huff = new House("huff", "Hufflepuff", "https://i.imgur.com/cV2E3T0.jpg");
    var rave = new House("rave", "Ravenclaw", "https://s-media-cache-ak0.pinimg.com/originals/95/87/f3/9587f305825d378206019edddd392a19.gif");
    var slyth = new House("slyth", "Slytherin", "https://i.pinimg.com/originals/72/86/8e/72868ea628013cb62ae0de1aa8e6d2c0.gif");

    // push all houses into the houses array (used for css)
    houses.push(gryf, huff, rave, slyth)

    // create characters
    gryf.addCharacter("Harry Potter", 150, 8, 10, "assets/images/hp.jpg");
    gryf.addCharacter("Hermione Granger", 120, 10, 25, "assets/images/hermione.jpg");
    gryf.addCharacter("Dean Thomas", 140, 7, 15, "assets/images/dean.png");
    rave.addCharacter("Cho Chung", 110, 9, 20, "assets/images/cho.jpg");
    gryf.addCharacter("Ron Weasley", 130, 6, 30, "assets/images/ron.jpg");
    slyth.addCharacter("Draco Malfoy", 170, 7, 15, "assets/images/draco.jpg");
    rave.addCharacter("Luna Lovegood", 134, 7, 10, "assets/images/luna.jpg");
    rave.addCharacter("Rowena Ravenclaw", 156, 3, 9, "assets/images/...")

    // show house images so user can choose hero and opponent houses
    function showHouses(array, rowId, status) {
        array.forEach(function (house) {
            var imgDiv = $('<div class="col-md-3 house ' + status + ' ' + house.short + '" data-house="' + house.name + '"><img class="' + house.short + 'Img" src="' + house.image + '" alt=""></div>');
            $("." + rowId + "").append(imgDiv);
        });
    };

    // show hero houses when page loads
    showHouses(houses, "houseRow", "hero");


    // user picks their house (hero house)
    function chooseHouse() {

        chosenHouse = $(this).attr("data-house");
        alert("Welcome to " + chosenHouse + "!");

        // filter out houses left (3)
        const housesLeft = houses.filter(
            house => chosenHouse !== house.name
        )

        // load choose your enemy house screen
        $("#house").hide();
        
        // reload houses with remaining houses only
        showHouses(housesLeft, "enemyRow", "enemy");

        $("#enemyHouse").show();

    }

    $(document).on("click", '.hero', chooseHouse);


    // user picks enemy house
    function chooseEnemyHouse() {

        console.log("choosing done!");
        chosenEnemyHouse = $(this).attr("data-house");

        $(".enemyRow").hide();
        $("#houseDivided").show();

        showHouseColors();
        choosePlayer(chosenHouse)
    }

    $(document).on("click", '.enemy', chooseEnemyHouse)

    function showHouseColors() {
        $("#houseDivided").show;
        console.log(chosenHouse)
        switch (chosenHouse) {
            case "Gryffindor":
                $(".heroColor").css({"background-image":"url('https://i.imgur.com/jnHkdOy.gif')", "background-repeat":"no-repeat", "background-size":"cover"});
                choosePlayer(gryf);
                break;
            case "Hufflepuff":
                $(".heroColor").css("background-image", "url('https://i.imgur.com/cV2E3T0.jpg')");
                break;
            case "Ravenclaw": $(".heroColor").css("background-image", "url('https://s-media-cache-ak0.pinimg.com/originals/95/87/f3/9587f305825d378206019edddd392a19.gif')");
                break;
            case "Slytherin": $(".heroColor").css("background-image", "url('https://i.pinimg.com/originals/72/86/8e/72868ea628013cb62ae0de1aa8e6d2c0.gif')");
                break;
            default: alert("chosenHouse has no value")
        }
      
        switch (chosenEnemyHouse) {
            case "Gryffindor": $(".enemyColor").css({"background-image":"url('https://i.imgur.com/jnHkdOy.gif')", "background-repeat":"no-repeat", "background-size":"cover"});
                break;
            case "Hufflepuff": $(".enemyColor").css({"background-image":"url('https://i.imgur.com/cV2E3T0.jpg')", "background-repeat":"no-repeat", "background-size":"cover" });
                break;
            case "Ravenclaw": $(".enemyColor").css({"background-image":"url('https://s-media-cache-ak0.pinimg.com/originals/95/87/f3/9587f305825d378206019edddd392a19.gif')", "background-repeat":"no-repeat", "background-size":"cover"});
                break;
            case "Slytherin": $(".enemyColor").css({"background-image":"url('https://i.pinimg.com/originals/72/86/8e/72868ea628013cb62ae0de1aa8e6d2c0.gif')", "background-repeat":"no-repeat", "background-size":"cover"});
                break;
            default: alert("chosenEnemyHouse has no value")
        }

    }
    function choosePlayer(house) {
        console.log("HOUSE IS ...")
        console.log(house)
        for (var i = 0; i < house.characters.length; i++) {
            var charContain = $("<div class='col-md-2 start'></div>")
            var newDiv = $("<div id='" + i + "'class='charDiv'></div>")
            var newImage = $("<img id='" + house.characters[i].name + "' style='position: relative;' class='char' src='" + house.characters[i].image + "' />");

            $(newDiv).append(newImage)

            $(charContain).append(newDiv)
            $(".heroColor").append(charContain);
            console.log(house.characters[i])

        }
    }




    // split screen depending on which houses were chosen
    // heroes on left, enemies on right
    // give options to choose both
    // show stats
    // move to bottom of screen
    // hide other characters
    // animate on casting



    // FUNCTIONS

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
