var imgArray = ['images/dog1.jpg', 'images/dog2.jpg', 'images/dog3.jpg', 'images/dog4.jpg', 'images/dog5.jpg', 'images/dog6.jpg', 'images/dog7.jpg', 'images/dog8.jpg', 'images/dog9.jpg'];
var randomImages = [];
var doubleImagesArray = imgArray.concat(imgArray);


//This will give me a randomized array of images for my card fronts
function randomize() {
    for (var i = 0; i < doubleImagesArray.length;) {
        var random = Math.floor(Math.random() * doubleImagesArray.length);
        randomImages.push(doubleImagesArray[random]);
        doubleImagesArray.splice(random, 1);
    }
}

//This is the click function being attached to the cardBack object
var my_card = null;
var counterMatched = 0;
var counterMissed = 0;

function card_click(card_back_target) {
        var card_back = $(card_back_target);
        var card_container = card_back.parent();
        var card_front = card_container.find('.card-front');
        var card_data = card_front.attr('data-card');
        console.log(card_data);

        card_back.toggleClass('card-hidden');
        if (my_card == null) {
            console.log('first card was clicked, on card 1, it was ' + card_data);
            my_card = card_data;
        } else {
            console.log('second card was clicked, it was card 1, it was ' + card_data);
            var my_card2 = card_data;
            if (my_card == my_card2) {
                console.log('They match dude!');
                $('.card-hidden').addClass('matched');
                counterMatched++;
                console.log('Matches is now ' + counterMatched);
            } else {
                setTimeout(function() {
                    $('.card-hidden').removeClass('card-hidden');
                }, 1000)
                console.log('Sorry dude!');
                counterMissed++;
            }
            my_card = null;
            $('#attempts').text(counterMissed + counterMatched);
            $('#accuracy').text(Math.floor((counterMatched / (counterMatched + counterMissed)) * 10000) / 100 + "%");
        }
    }
    //This function creates the cards and their attributes and then attaches them to the card container,
    //and then attaches the card container to the board.
var boardMaker = function() {
    randomize();
    var gameBoard = $('.board');
    for (var x = 0; x < randomImages.length; x++) {
        var $card = $("<div class='card_container'>");
        var $cardFront = $("<img src='" + randomImages[x] + "' class='card card-front' data-card='" + randomImages[x] + "'>");
        var $cardFront = $("<img>", {
            src: randomImages[x],
            class: 'card card-front',
            'data-card': randomImages[x],
        });

        var $cardBack = $("<img>", {
            src: 'images/cardback.png',
            class: 'card card-back',
        }).click(function() {
            card_click(this);
        });

        $cardFront.appendTo($card);
        $cardBack.appendTo($card);

        gameBoard.append($card);
    }
    $('#attempts').text(counterMatched + counterMissed);
}

$(document).ready(function() {
    console.log('game is ready, making board');
    boardMaker();

    $('#reset').click(function() {
        $('.board').empty();
        boardMaker();
    });
});

//js for random cards

var my_card = null;

function card_click(card_back_target) {
    var card_back = $(card_back_target);
    var card_container = card_back.parent();
    var card_front = card_container.find('.card-front');
    var card_data = card_front.attr('data-card');
    console.log(card_data);

    console.log('hi');
    card_back.toggleClass('card-hidden');
    if (my_card == null) {
        console.log('first card was clicked, on card 1, it was ' + card_data);
        my_card = card_data;
    } else {
        console.log('second card was clicked, it was card 1, it was ' + card_data);
        var my_card2 = card_data;
        if (my_card == my_card2) {
            console.log('They match dude!');
            card_back.addClass('card-hidden');
            card_back.addClass('matched');
        } else {
            setTimeout(function() {
                $('.card-hidden').removeClass('card-hidden');
            }, 3000)
            console.log('Sorry dude!');
        }
        my_card = null;
    }
}
$(document).ready(function() {});
