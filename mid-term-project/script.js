const storyData = {
    start: {
        text: "You are Gopi, a truthful cow living peacefully in the verdant fields of Karnataka. One day, while grazing too far from your herd, you encounter Shar Khan, a fierce tiger. What will you do?",
        choices: [
            { text: "Try to run away back to the herd", next: "run" },
            { text: "Speak to the tiger", next: "speak" }
        ],
        image: "1st.jpg"
    },
    run: {
        text: "You attempt to dash back to your herd, hoping to lose the tiger in the dense fields.",
        choices: [
            { text: "Try to escape", next: "escape" },
            { text: "The tiger catches up", next: "caught" }
        ],
        image: "2nd.jpg"
    },
    escape: {
        text: "You reach your herd, and the story spreads of your narrow escape, teaching everyone the value of vigilance and the presence of mind. However, the tiger remains a threat to the herd. Do you:",
        choices: [
            { text: "Plan with the herd to safely graze elsewhere", next: "new_pastures" },
            { text: "Decide to confront the tiger with the herd's help", next: "confront" }
        ],
        image: "3rd.jpg"
    },
    new_pastures: {
        text: "Together with the herd, you find new pastures away from the tiger's territory, ensuring the safety of everyone. Your wisdom and leadership are celebrated, teaching the importance of adaptability and the collective good. However, the tale of the tiger remains a lesson of the untamed wild that lies beyond.",
        choices: [],
        image: "4th.png"
    },
    confront: {
        text: "Facing the tiger with the herd, the unity and courage of the herd impress the tiger, leading to a pact between the animals and the tiger, ensuring peace.",
        choices: [],
        image: "5th.png"
    },
    caught: {
        text: "The tiger admires your attempt to escape but reminds you of the harsh realities of life. He offers you a chance to say goodbye to your calf before your fate is sealed. Do you:",
        choices: [
            { text: "Accept the offer and go to your calf", next: "farewell" },
            { text: "Try to plead with the tiger for your life, intending to run away", next: "deceit" }
        ],
        image: "6th.png"
    },
    speak: {
        text: "Shar Khan is surprised by your bravery and willingness to speak. You have a few options to negotiate your freedom or uphold your values.",
        choices: [
            { text: "Plead for your life", next: "plead" },
            { text: "Stand firm in your truth and offer to return after bidding your calf farewell", next: "truth" }
        ],
        image: "7th.png"
    },
    plead: {
        text: "The tiger considers your words. He tells you that he is very hungry. You can help him satisfy his hunger, but he decides to let you go.",
        choices: [
            { text: "Return to the tiger after bidding farewell", next: "farewell" },
            { text: "Stay with your calf and break your promise", next: "broken_promise" }
        ],
        image: "8th.png"
    },
    truth: {
        text: "Your honesty impresses the tiger. He gives you a choice:",
        choices: [
            { text: "Return after saying goodbye", next: "farewell" },
            { text: "Stay with your calf", next: "broken_promise" }
        ],
        image: "9th.png"
    },
    farewell: {
        text: "Return to the tiger after bidding your calf farewell, honoring your promise and facing your fate. The tiger, moved by your honesty, decides to leave you and the herd in peace, becoming a vegetarian and forever changing the dynamics of the jungle.",
        choices: [],
        image: "10th.png"
    },
    deceit: {
        text: "The tiger learns of your deceit, leading to mistrust between the animals and the jungle's predators.",
        choices: [
            { text: "Face the consequences", next: "broken_promise" }
        ],
        image: "11th.png"
    },
    broken_promise: {
        text: "The story ends with the weight of the broken promise on your conscience, teaching the bitter lesson that the truth is always the better path, even in the face of fear.",
        choices: [],
        image: "12th.png"
    }
};

let currentScene = 'start';

function startGame() {
    currentScene = 'start';
    updatePage();
    document.getElementById('restart').style.display = 'none';
}

function updatePage() {
    const scene = storyData[currentScene];
    document.getElementById('story-text').textContent = scene.text;
    document.getElementById('story-image').src = scene.image;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => makeChoice(choice.next);
        choicesDiv.appendChild(button);
    });

    if (scene.choices.length === 0) {
        document.getElementById('restart').style.display = 'block';
    }
}

function makeChoice(nextScene) {
    currentScene = nextScene;
    updatePage();
}

// Initialize the last modified date
var x = document.lastModified;
document.getElementById('lastModified').textContent = x;

// Start the game
startGame();