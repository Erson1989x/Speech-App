// Select Elements
const jokeButton = document.querySelector(".button");
const speechDisplay = document.querySelector(".speech");

// Render Jokes

const renderJokes = (joke) => {
    speechDisplay.textContent = joke;
}

// Get Jokes from Joke API
const getJokes = async () => {
    const jokeUrl = "https://v2.jokeapi.dev/joke/Any"

    let joke = "";

    try {
        const response = await fetch(jokeUrl);
        const data =await response.json();


        if(data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        }
        else {
            joke = data.joke;
        }
     }
     catch(error) {
       console.log(error);
     }

     renderJokes(joke);

     tellMeAJokeVoice(joke);
}

// VoiceRSS speech function
const tellMeAJokeVoice = (joke) => {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}




// Event Listeners
jokeButton.addEventListener("click", getJokes);