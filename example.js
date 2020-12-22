"use strict";
const axios = require("axios"); // attempt for Chuck Norris + Quote API 

//Task Notes:
// 1. A Message Post to Slack based on User Input
// 2. Do at least 3 different things
// 3. Utilise the list of people in the class to send a direct message
// 4. Leverage Hubot
// 5. At least 1 conditional to change the Hubot
// 6. Leverage a for loop
// 7. Introduce a random component 
// 8. readme

//npm start - Control C

//These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

//Read Me: The Story Telling/ Joke Telling Bot

//1. A Message Post to Slack based on User Input

  robot.on('start', () => { 
    const params = { 
        icon_emoji: ':smiley:'
    }

    robot.postMessageToChannel(
      'the-official-hubot-testing-org-for-ga-jsr-121', 
      'Get Ready to Rumble with @hubot-7', 
      params
      ); 
}); 

module.exports = (robot) ->
  robot.hear /hi/ i, (res) ->
    res.send "Glad to make your acquaintance. I am not one for small talk but I tell stories and jokes.";

  robot.respond /how are you?/i, (res) ->
    res.reply "Very well thank you. I'm feeling fine";
  robot.hear /can I ask for some advice then?/i, (res) ->
    res.reply "I always advise people never to give advice.";

robot.hear(/Hello!/, function (res) {
  return res.send("How do you do" + "?");
});

robot.respond(/What can you do + "?"/, function (res) {
  return res.send("I tell stories and jokes - short beautiful tales. Would you like to hear one + "?"");
});

robot.respond(/yes - a story or a joke + "?"/i, (res) => {
    const descriptionType = res.match[1];

    if (descriptionType === "story") {
      res.reply("I love telling stories. Once upon a time I used to...");
      return;
    }

    else (descriptionType === "joke")
      res.reply("I love telling jokes. Knock Knock."); 

//1.1 Or with Normal JS Functions (Reply and Respond to getWelcome function with Math.Random to re-select the welcome message)

function welcomeMessages(message) {
  switch(message) {
      case "hi":
      case "hello":
      case "bonjour": 
      case "ciao": 
      case "howdy":
          welcomeMessages();
          break;
      default:
          return;
  }
}

function welcomeMessages() {
  var welcomeReply = getWelcome();
  bot.postMessageToChannel(channel, greeting);
}

function getWelcome() {
  var welcomeReply = [
      "hello!",
      "hi there!",
      "howdy!",
      "cheerio!",
      "how do you do!",
      "¡hola!"
  ];
  return getWelcome[Math.floor(Math.random() * getWelcome.length)];
}

//2. Activated by @hubot-7

robot.respond(/Hi Drew! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "Drew"){
    return msg.send("This isnt the gwen stefani fan club page, " + name + "!");
  }
  if (name == "Stuart", "Supriya"){
    return msg.send("Please to meet you, " + name + "!");
  }
    else {
      return msg.reply("A great pleasure to see you here, how can I help you " + name + "?");
  }

});

//3. Utilise the list of people in the class to send a direct message (Messages to a room or user)

module.exports = (robot) ->

  robot.hear /poetry/i, (res) ->
    room == "the-official-hubot-testing-org-for-ga-jsr-121", 
    robot.messageRoom room, "I met a traveller from an antique land, Who said— Two vast and trunkless legs of stone. Stand in the desert. . . . Near them, on the sand, Half sunk a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read, Which yet survive, stamped on these lifeless things, The hand that mocked them, and the heart that fed. And on the pedestal, these words appear."

  robot.respond /My name is Ozymandias/i, (res) ->
    room == 'Drew'
    robot.messageRoom room, "Someone does not like poetry"
    res.reply  "Romanticism’s major themes—\nthe interchange with nature\nthe pursuit of ideal love\nthe search for freedom"

  robot.hear /Romanticism/i, (res) ->
    room ==  res.envelope.user.name
    robot.messageRoom room, "My name is Ozymandias\nKing of Kings\nLook on my Works\nye Mighty" 

//4. Leverage Hubot

robot.respond(/would you prefer to hear about (.*)/, function(msg) {
  var fav;
  fav = msg.match[1];
  console.log(fav);
  switch (fav) {
    case "stories":
      return msg.reply("There was an African Gray Parrot called Alex");
      break;
    case "animals":
      return msg.reply("Every Parrot has its own distinct voice");
      break;
    case "poems":
      return msg.reply("Ozymandia by Percy Bysshe Shelley of course!");
      break;
    default:
      return msg.reply("But what do I know about " + fav + ". I'm just a robot. What's yours?");
  }
});

//4. Leverage Attempt 2.0 

module.exports = function(robot) {
  robot.respond(/is it a (general assembly day|workday)\s?\?/i, function(msg){
      var today = new Date();

      msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
  });

  robot.hear(/Is it today/i, function(msg){
      msg.send("Yes it is! Last one this year!");
  });

  robot.respond(/are you there?/i, function(msg){
      msg.reply('Yes I am, and listening impeccably to your messages.');
  });

}

//5. Random Component + Pathway - Chuck Norris Jokes + Quotations 

// Chuck Norris Joke
function handleMessage(message) { 
  if(message.includes('Chuck Norris')) {
      chuckJoke();
  }

}
function chuckJoke() { 
axios.get('http://api.icndb.com/jokes/random/')
  .then(res => { 
    const joke = res.data.value.joke;
  })
}

// start handler 
const params = { 
  icon_emoji: ':laughing:'
}; 

robot.postMessagetoChannel(
  'the-official-hubot-testing-org-for-ga-jsr-121', 
  `Chuck Norris Jokes:${joke}`, 
  params
); 
}); 

//Random Quote
function deepQuote() {
  axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
    .then(res => {
          const quotes = res.data;
          const random = Math.floor(Math.random() * quotes.length);
          const quote = quotes[random].quote
          const author = quotes[random].author

          const params = {
              icon_emoji: ':book:'
          }
      
          bot.postMessageToChannel(
              'random',
              `:zap: ${quote} - *${author}*`,
              params
          );

    })
}

//6. Leverage a FOR LOOP  

var classSize;
for (i = 0; i < class.length; i++) { 
  text += class[i] + "<br>";
}

// var teamGA = ["Stuart", "Supriya",];
// var x;

// for (x of teamGA) {
  // document.write(x + "<br >");
// }

// function getRandomMate(min, max) {
//  min = Math.ceil(0);
//  max = Math.floor(21);
//  return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(getRandomMate(3));


robot.respond(/yes/i, (response) => {
  // Tell Story and pathways Experiments.
  
  let annoyIntervalId = null;
  
    robot.respond(/tickletickle/, (res) => {
      if (annoyIntervalId) {
        res.send("OOOOHHHOOHHNOOSTOPITSTOPIT!");
        return;
      }
  
      res.send("Can I hear a story");
      annoyIntervalId = setInterval(
        () => res.send("There once was a Parrot called Andrew, who lives with his nephew called Stew"),
        1000
      );
    });
