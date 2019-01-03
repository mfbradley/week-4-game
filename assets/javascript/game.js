$(document).ready(function () {
    // user picks house
    // show choose your house div only - hide all others
    $("#image").hide();
    $("#sortDiv").hide();
    $("#house").hide();
    $("#userHouse").hide();
    $("#duel").hide();
    $("#enemyHouse").hide();
    $("#houseDivided").hide();

    // VARIABLES
    var opponentCount = 0;
    var houses = [];
    var CHOOSING_PLAYER = 'CHOOSING_PLAYER';
    var CHOOSING_ENEMY = 'CHOOSING_ENEMY';
    var CHOOSING_DONE = 'CHOOSING_DONE';
    var choosing = CHOOSING_PLAYER;
    var chosenHouse;
    var chosenEnemyHouse;
    var hero;
    var enemy;
    var heroHouse;
    var enemyCounter;
    var resetDuel;
    var healthPoints;
    var attackPower;
    var sortingHat = false;

    // CONSTRUCTORS
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
    gryf.addCharacter("Ron Weasley", 130, 6, 30, "assets/images/ron.jpg");

    huff.addCharacter("Cedric Diggory", 189, 4, 20, "assets/images/cedric.jpg");
    huff.addCharacter("Nymphadora Tonks", 172, 4, 2, "assets/images/tonks.jpg");
    huff.addCharacter("Helga Hufflepuff", 123, 5, 18, "assets/images/helga.jpg");
    huff.addCharacter("Newt Scamander", 167, 8, 7, "assets/images/newt.jpg");

    rave.addCharacter("Cho Chung", 110, 9, 20, "assets/images/cho.jpg");
    rave.addCharacter("Luna Lovegood", 134, 7, 10, "assets/images/luna.jpg");
    rave.addCharacter("Rowena Ravenclaw", 156, 3, 9, "assets/images/rowena.jpg");
    rave.addCharacter("Moaning Myrtle", 200, 30, 50, "assets/images/myrtle.png")

    slyth.addCharacter("Draco Malfoy", 170, 7, 15, "assets/images/draco.jpg");
    slyth.addCharacter("Severus Snape", 198, 3, 4, "assets/images/snape.jpg");
    slyth.addCharacter("Salazar Slytherin", 114, 8, 4, "assets/images/salazar.jpg");
    slyth.addCharacter("Lord Voldemort", 179, 4, 9, "assets/images/volde.jpg")

    // FUNCTIONS

    // LOGIC
    $("#sortHatImage").on("click", function (array) {
        sortingHat = true;
        var random = Math.floor(Math.random() * 4);
        heroHouse = houses[random];
        $("#welcome").hide();
        $("#image").show();
        $("#image").css("background-image", "url('" + heroHouse.image + "')");
        $("#image").css({ "background-repeat": "no-repeat", "background-position": "center", "height": "100vh" });
        $("#houseName").text(heroHouse.name);

        choosePlayer(heroHouse, "hero")

    });

    function choosePlayer(house, status) {
        for (var i = 0; i < house.characters.length; i++) {
            var charContain = $("<div data-house='" + house.name + "'id='" + i + "' class='col-md-3 start' data-house='" + house.short + "'></div>");
            var newImage = $("<img id='" + house.characters[i].name + "' style='position: relative;' class='char' src='" + house.characters[i].image + "' />");
            $(charContain).append(newImage);
            $("." + status + "Chars").append(charContain);
        }
    }

    function randomEnemy() {
        var heroIndex = $(this).parent().attr("id");
        var heroImage = heroHouse.characters[heroIndex].image;
        hero = $(this).attr("id")
        $(this).attr('class', 'caster');
        alert('You are entering the duel as ' + hero + "! Best of Luck.");
        var castBtn = $("<button class='cast' data-index='" + heroIndex + "' style='position:absolute; bottom:10px; right:50px'>Cast!</button>");


        const housesLeft = houses.filter(
            house => heroHouse.name !== house.name
        )

        var randEn = Math.floor(Math.random() * 3);
        enemyHouse = housesLeft[randEn];

        enemy = enemyHouse.characters[opponentCount]
        alert("Prepare to cast against your opponent " + enemy.name)

        $("#heroStage").html("<img id='caster' class='char' src='" + heroImage + "' src='' style='position:relative'>")
        $("#heroStage").append(castBtn)
        $("#enemyStage").html("<img class='char' src='" + enemy.image + "' alt=''>");

        $("#image").hide();
        $("#duel").show();
    }

    function cast() {

        heroIndex = $(this).attr("data-index");
        hero = heroHouse.characters[heroIndex];

        console.log(hero)
        console.log(enemy)

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

    // show hero houses when page loads

    $(document).on('click', '.char', randomEnemy);
    $(document).on('click', '.cast', cast)

});