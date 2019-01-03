// // show house images so user can choose hero and opponent houses
    // function showHouses(array, rowId, status) {
    //     array.forEach(function (house) {
    //         var imgDiv = $('<div class="col-md-3 house ' + status + ' ' + house.short + '" data-house="' + house.name + '"><img class="' + house.short + 'Img" src="' + house.image + '" alt=""></div>');
    //         $("." + rowId + "").append(imgDiv);
    //     });
    // };


    // // user picks their house (hero house)
    // function chooseHouse() {
    //     chosenHouse = $(this).attr("data-house");
    //     alert("Welcome to " + chosenHouse + "!");
    //     // filter out houses left (3)
    //     const housesLeft = houses.filter(
    //         house => chosenHouse !== house.name
    //     )

    //     // load choose your enemy house screen
    //     $("#house").hide();

    //     // reload houses with remaining houses only
    //     showHouses(housesLeft, "enemyRow", "enemy");

    //     $("#enemyHouse").show();

    // }

    // // user picks enemy house
    // function chooseEnemyHouse() {

    //     console.log("choosing done!");
    //     chosenEnemyHouse = $(this).attr("data-house");

    //     $(".enemyRow").hide();
    //     $("#houseDivided").show();

    //     showHouseColors();

    // }

    // function showHouseColors() {
    //     $("#houseDivided").show;
    //     console.log(chosenHouse)
    //     switch (chosenHouse) {
    //         case "Gryffindor":
    //             $(".heroColor").css({ "background-image": "url('https://i.imgur.com/jnHkdOy.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(gryf, "hero");
    //             console.log("gryf hero")
    //             break;
    //         case "Hufflepuff":
    //             $(".heroColor").css({ "background-image": "url('https://i.imgur.com/cV2E3T0.jpg')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(huff, "hero");
    //             console.log("huff hero")
    //             break;
    //         case "Ravenclaw": $(".heroColor").css({ "background-image": "url('https://s-media-cache-ak0.pinimg.com/originals/95/87/f3/9587f305825d378206019edddd392a19.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(rave, "hero");
    //             console.log("rave hero")
    //             break;
    //         case "Slytherin": $(".heroColor").css({ "background-image": "url('https://i.pinimg.com/originals/72/86/8e/72868ea628013cb62ae0de1aa8e6d2c0.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(slyth, "hero");
    //             console.log("slyth hero")
    //             break;
    //         default: alert("chosenHouse has no value")
    //     }

    //     switch (chosenEnemyHouse) {
    //         case "Gryffindor": $(".enemyColor").css({ "background-image": "url('https://i.imgur.com/jnHkdOy.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(gryf, "enemy");
    //             console.log("gryf enemy")
    //             break;
    //         case "Hufflepuff": $(".enemyColor").css({ "background-image": "url('https://i.imgur.com/cV2E3T0.jpg')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(huff, "enemy");
    //             console.log("huff enemy")
    //             break;
    //         case "Ravenclaw": $(".enemyColor").css({ "background-image": "url('https://s-media-cache-ak0.pinimg.com/originals/95/87/f3/9587f305825d378206019edddd392a19.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(rave, "enemy");
    //             console.log("rave enemy")
    //             break;
    //         case "Slytherin": $(".enemyColor").css({ "background-image": "url('https://i.pinimg.com/originals/72/86/8e/72868ea628013cb62ae0de1aa8e6d2c0.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    //             choosePlayer(slyth, "enemy");
    //             console.log("slyth enemy")
    //             break;
    //         default: alert("chosenEnemyHouse has no value")
    //     }

    // }



    // function selections() {
    //     var chosenId = $(this).attr('id'); // grab id of clicked character

    //     switch (choosing) {
    //         case CHOOSING_PLAYER:
    //             hero = $(this).attr('id')
    //             $(this).parent().attr('class', 'caster')
    //             alert('You are entering the duel as ' + hero + "! Best of Luck.");
    //             var castBtn = $("<button class='cast' style='position: absolute; bottom: 10px; right: 50px'>Cast!</button>");
    //             $(".caster").append(castBtn)
    //             hero = $(this).parent().detach();
    //             hero.appendTo('#heroStage');
    //             if (sortingHat) {
    //                 randomEnemy();

    //             }
    //             choosing = CHOOSING_ENEMY;

    //             break;

    //         case CHOOSING_ENEMY:

    //             randomEnemy();
    //             enemy = chosenId;
    //             alert('You have chosen ' + enemy + ' as your enemy!');
    //             // enemy = $(this).parent().detach();
    //             // console.log(enemy)
    //             // enemy.appendTo('#enemyStage');
    //             // enemyIndex = $(this).parent().attr('id')
    //             // choosing = CHOOSING_DONE;
    //             // $("#houseDivided").hide();
    //             // $("#duel").show();
    //             break;

    //         case CHOOSING_DONE:
    //             alert("You've already chosen. Start casting!");

    //             break;



    //         default:
    //             alert('Error. Variable choosing has unrecognized value.');
    //     }

    // };






    // $("#pickHouse").on("click", function () {
    //     alert("choosing")
    //     showHouses(houses, "houseRow", "hero");
    //     $("#sortDiv").hide();
    // });

    // $(document).on("click", '.hero', chooseHouse);

    // $(document).on("click", '.enemy', chooseEnemyHouse)

    // appendImages();


// });




// WINNER OR LOSER?
// if enemy hp === 0, enemy disappears/hides
// player chooses a new enemy
// process above repeats

// if hero hp === 0, player loses
// game restarts

// if player defeats all enemies, player wins game!
// alert winner!
// split screen depending on which houses were chosen
    // heroes on left, enemies on right
    // give options to choose both
    // show stats
    // move to bottom of screen
    // hide other characters
    // animate on casting