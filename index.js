var clicked_card = null;
    var counter_match = 0;
    var counter_missed = 0;
    var clicked_num = 0;
    var cardBack2 = 0;
    var clicked_2 = false;
    //set clicked_card = to null so that we can check wich card has been clicked first
    function reset() {
        $('.card-front').removeClass('cards-matched');
        $('.card-back').removeClass('card-hidden');
        clicked_card = null, counter_match = 0, counter_missed = 0, clicked_num = 0, cardBack2 = 0, clicked_2 = false;
        var acc = counter_match + counter_missed;
        $('#accuracy').html('Matched / Total Tries: ' + counter_match + '/' + acc);
        $('#matches').html('Matched Cards: 0');
        $('#misses').html('Missed Cards: 0');

    }

    function card_click(card_number) {
        //declared function card_click with parameter card_number
        if (clicked_2 === true) {
            return
        }
        console.log("card_number : ", card_number);
        // logs card-number that is clicked to console
        var cardBackId = "#card_back" + card_number;
        var cardFrontId = "#card_front" + card_number;
        //declares var cardbackid and cardfrontid sets them equal to whatever card number is clicked 
        $(cardBackId).addClass('card-hidden');
        //adds class card-hidden when a card is clicked
        var current_card_data = $(cardFrontId).attr('data-card');
        //set var current card data to the attr data-card 
        console.log("card_data : ", current_card_data);
        //logs card_data : (card-data for card that is clicked) to console
        if (clicked_card == null) {
            //if clicked_card has not clicked any other card yet do code below
            console.log("First card was clicked");
            //log 'first card was clicked' to the console.
            clicked_card = current_card_data;
            clicked_num = $(cardFrontId);
            cardBack2 = $(cardBackId);
            //change clicked_card from null to card-data of current card that was clicked
        } else {
            //if player has clicked on a card to match do code below
            console.log("Second card was clicked");
            clicked_2 = true;
            //log 'second card was clicked'
            if (clicked_card === current_card_data) {
                //if first card clicked card-data == to current_card_data run code below
                console.log("We have a match");
                $(cardFrontId).removeClass('.card-hidden')
                    //log 'we have a match' to console
                setTimeout(function() {
                    clicked_2 = false;
                    $(cardFrontId).addClass('cards-matched');
                    $(clicked_num).addClass('cards-matched');
                    $('.card-hidden').addClass('card-hidden');
                }, 1200);
                counter_match++;
                $('#matches').html('Matched Cards: ' + counter_match)
                console.log('Matched cards: ', counter_match);
                if (counter_match == 9) {
                    ('You Win!');
                }
                clicked_card = null;

                //reset clicked-card to null so that clicks are reset 
                //clicked_card = null;
                //reset clicked-card to null so that clicks are reset 
            } else {
                //if clicked card === to current card data
                console.log("No Match");
                //log 'no match ' to console
                setTimeout(function() {
                    clicked_2 = false;
                    $(cardBackId).removeClass('card-hidden');
                    $(cardBack2).removeClass('card-hidden');
                }, 1200);
                counter_missed++;
                $('#misses').html('Missed Cards: ' + counter_missed)
                    //settimeout is js built in function with parameter for milliseconds runs remove class jquery function declared inside parameters after the milliseconds is complete
                clicked_card = null;
                //reset clicked-card to null so that clicks are reset 
            }
        }
        var acc = counter_match + counter_missed;
        $('#accuracy').html('Matched / Total Tries: ' + counter_match + '/' + acc);
    }
    $(document).ready(function(){
        $('body').on('click','#button', function(){
            reset();
        })
    })