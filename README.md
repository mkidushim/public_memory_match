# memory_match_c4
Memory Match game, similar to Concentration

##Scope

###Game Area
1 Game title header
- Game Title
- Game Logo
1 Game score area
- Bonus:
   - Accuracy display
   - Game duration
1 primary Game Area
- 18 cards
   - 1 card back image
   - 9 unique card front images
   - Arranged in a 6 x 3 grid
    
###Card Behavior
Default: 
- shows the card’s standard “back” side
On Hover:
- Present a hand cursor on mouseover
On 1st card Click:
- Selects the card
- Once a card is selected (clicked). The card would reveal the unique “front” side.
On 2nd card Click:
- Occurs when one “front” card is already exposed
- If the 2nd card is a match to the first selected one
   - Keep both cards face up
   - Change the display of the card to indicate a match
- If the 2nd card is NOT a match of the first selected card
   - both cards are returned to their previous Default state. 
- LOGIC DIAGRAM

###Player Success
Required:
- Completion: 
   - player should be able to “win” when a player successfully matches all of the cards on the game area.
Bonus:
- Accuracy:  Number of successful matches divded by the total number of card clicks
- Speed: Indicate the amount of time the player takes to complete the game

###Tasks
Create overall game board (index.html)
- Create header
   - place logo
   - place game reset button
   - place game title
- Create game score area
   - create accuracy display
   - create game time display
- Create main game area
   - create container for cards
  
Create card prototype page (card_prototype.html)
- Create 1 game card with the following:
  - Create one card container
  - Inside card container, create a card “front” image
  - Inside card container, create a card “back” image
- Place card “back” so it is directly above the card “front”
Create card prototype behavior
- Create and attach JS code so that clicking on the card’s “back” hides the back, revealing the card’s “front” side.
Create multiple-card behavior
- Add JS code to detect whether one or two cards have been clicked
- If the 1st card click, reveal “front” image as previous
- If the 2nd card click, check to see if both cards are the same behavior
  - report to console if you have a match or not a match
Add JS code for “match” behavior
- If both cards match, add a match indicator (suggested: green border) to both cards
- If both cards do not match, hide both “Front” sides by showing the card “back” again
Extend prototype to include 4 cards, 2 of one type, and 2 of another
- Test behavior to ensure it matches with required game behavior
Incorporate prototype into game area, 
- Paste necessary JS code and elements into the main game page from step 1
- Increase card count to required amount, adding new images as necessary

