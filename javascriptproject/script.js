const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!😂",
    "Why don't scientists trust atoms? Because they make up everything.🤯",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.😱",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.🌽",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.🏌️",
    "How do you make a tissue dance? You put a little boogie in it.💃",
    "Why did the tomato turn red? Because it saw the salad dressing.🍅",
    "What do you call fake spaghetti? An impasta!🍝",
    "How does a snowman get around? By riding an ‘icicle’.⛄",
    "Why did the bicycle stand up by itself? Because it was two-tired.🚲",
    "What did one wall say to the other? I'll meet you at the corner.🧱",
    "Why don't skeletons fight each other? They don't have the guts.💀",
    "What's the best thing about Switzerland? I don’t know, but their flag is a big plus!🇨🇭",
    "Why did the cookie go to the doctor? It felt crummy.🍪",
    "Why did the scarecrow keep getting promoted? He was outstanding in his field.🌾",
    "How do you catch a squirrel? Climb a tree and act like a nut!🌳",
    "Why did the golfer bring an extra shirt? In case he got a hole in one.👕",
    "What do you call a bear with no teeth? A gummy bear.🐻",
    "Why was the math book sad? It had too many problems.📚",
    "How do you organize a space party? You planet.🪐",
    "What did the left eye say to the right eye? Between you and me, something smells.👀",
    "What do you call a fish with a tie? So-fish-ticated.🐟",
    "Why did the chicken join a band? Because it had the drumsticks.🍗",
    "Why did the coffee file a police report? It got mugged.☕",
    "Why did the computer show up at work late? It had a hard drive.💾",
    "What did one plate say to another? Dinner's on me!🍽️",
    "Why did the scarecrow become a banker? He was good at straw investments.🌾💰",
    "How do you make a lemon drop? Just let it fall.🍋",
    "Why was the belt arrested? For holding up a pair of pants.👖",
    "How do you organize a cat party? You just purr-suade them!🐱",
    "Why don't programmers like nature? It has too many bugs.🐞",
    "How do you turn a pirate furious? Take away the p!☠️",
    "Why did the golfer carry an umbrella? In case of rain checks.☂️",
    "What did the big flower say to the small flower? Hey, bud!🌺",
    "Why did the robot go on a diet? He had byte issues.🤖",
    "What do you call a snowman with a six-pack? An abdominal snowman.⛄💪",
    "Why did the belt go to school? To tie up some loose ends.🎓",
    "Why don't eggs tell each other secrets? They might crack up.🥚",
    "What do you call an alligator in a vest? An investigator.🐊",
    "How does a cucumber become a pickle? It goes through a jarring experience!🥒"
];

function getRandomJoke() {
    let randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function displayRandomJoke(){
    document.getElementById('joke').innerText = getRandomJoke();
    document.getElementById('joke').style.color = "white";
    document.getElementById('joke').style.fontSize = "2.3rem";
}