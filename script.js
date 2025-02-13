const messages = [
    "Playing hard to get, huh? 😏",
    "Fine, I see how it is. 🙄",
    "You sure you want to break donkey's heart? 🐴❤️",
    "Wow..... Guess I'll ask someone else instead. 🐴",
    "Guess I'll go cry in the corner. 😢",
    "This was a test! You failed! BOOOO 😜",
    "Take that answer back!! Or no chocolate for you! 🍫",
    "Oh, so it's like that now? 😶",
    "Donkey says you're mean. 🐴",
    "What do you mean 'no'? 🥺",
    "If you say no one more time, I'll walk away to doggie instead. 🐴✍️",
    "One more 'no,' and I'll make doggie my only priority in my life! 🐴"
];

let messageIndex = 0;

function showFunnyMessage() {
    document.querySelector(".message").innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

function showHeart() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("heartContainer").style.display = "block";
    
    // Add a fade-in animation for the heartfelt message
    let message = document.getElementById("heartfeltMessage");
    message.style.opacity = "0";
    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 500);
}

