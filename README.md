# -my-first-slackbot
GA - 22nd December 

+++++++++++++++++++++++README:++++++++++++++++++++++++++++++++++++++++++++

Congratulations, you have successfully downloaded my-first-slackbot file! 

What my Bot does: Attempt at Story Telling/ Joke Telling Bot using Poems, Quotes, Story Beginnings and Chuck Norris Jokes!

BOT: hubot-7

Commands Responded to: 

1. 

how are you?
HB7: Very well thank you. I'm feeling fine

can I ask for some advice then?
HB7: I always advise people never to give advice.

What can you do + "?"
HB7: I tell stories and jokes - short beautiful tales. Would you like to hear one + "?"

HB7: yes - a story or a joke + "?"
if (story): I love telling stories. Once upon a time I used to...
if (joke): I love telling jokes. Knock Knock.

Can I hear a story
HB7: There once was a Parrot called Andrew, who lives with his nephew called Stew. 

tickletickle
HB7:OOOOHHHOOHHNOOSTOPITSTOPIT!

2. @hubot-7

Hi Drew! My name is (.*)
if (Drew) - This isnt the gwen stefani fan club page + name

if (Stuart or Supriya) - Please to meet you + name

3. 

"poetry" in the-official-hubot-testing-org-for-ga-jsr-121

"I met a traveller from an antique land, Who said— Two vast and trunkless legs of stone. Stand in the desert. . . . Near them, on the sand, Half sunk a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read, Which yet survive, stamped on these lifeless things, The hand that mocked them, and the heart that fed. And on the pedestal, these words appear." Ozymandias

if (Drew) "Someone does not like poetry"

4. would you prefer to hear about stories/ animals / poems

4.2 is it a general assembly day

5. Chuck Norris, chucknorris, // for Chuck Norris Joke

5b. deepQuote // for API quote 

6. classSize 

Approaches Taken: 

Worked hard on trying to simplify the code and tried different variants, attempting to use some previous js from past lessons as new ways to script. Attempted to cover all of the questions, particularly the random generators and axios APIs, as they allowed for live-ness that I thought was interactive and approachable. I review existing Slackbots and Hubots, trying to identify the basics.
Begin by writing down what your different commands (perhaps still haven't quite fleshed some of them out to their full potential.

Don't think I quite inputted the commands for .hear, .listen to access them easily enough for the API commands. It was challenging and enjoyable, will continue to develop HUBOT-7 over the Christmas break and continue to grow and develop the code. Specified challenges and difficulties to work on below.  

Difficulties/ Challenges: 

Tried to use axios for slackbot APIs to wire in Chuck Norris Jokes using http://api.icndb.com/jokes/random/ and Quotes from https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json. Don't know if there's significant roadblocks in these apart from using terminal to execute the axios code. Not quite sure how JSON requirements also work yet, but have made an attempt. 

explanations of what your bot does, what commands it responds to, the approach taken, installation instructions, unsolved problems, etc.

Task Notes:
// 1. A Message Post to Slack based on User Input
// 2. Do at least 3 different things
// 3. Utilise the list of people in the class to send a direct message - A bit difficult for everyone but have tried for 'Drew'
// 4. Leverage Hubot
// 5. At least 1 conditional to change the Hubot 
// 6. Leverage a for loop
// 7. Introduce a random component -
// 8. readme

//These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md
