const data = [{
        keyCode: "65",
        key: "A",
        event: "clap"
    },
    {
        keyCode: "83",
        key: "S",
        event: "hat"
    },
    {
        keyCode: "68",
        key: "D",
        event: "flam"
    },
    {
        keyCode: "70",
        key: "F",
        event: "kick"
    },
    {
        keyCode: "71",
        key: "G",
        event: "ophat"
    },
    {
        keyCode: "72",
        key: "H",
        event: "perc"
    },
    {
        keyCode: "74",
        key: "J",
        event: "rim"
    },
    {
        keyCode: "75",
        key: "K",
        event: "snore"
    }, {
        keyCode: "76",
        key: "L",
        event: "tom"
    }

];

let body = document.getElementsByTagName("body");
let keys = document.querySelector(".keys");

function createMarkdown() {
    let fragment = document.createElement("template");
    data.map(item => {
        console.log(item);
        keys.innerHTML += `<div class="key" data-key="${item.keyCode}">
        <kbd>${item.key}</kbd>
        <span class="sound">${item.event}</span>
    </div>`;
        fragment.innerHTML += `<audio data-key="${item.keyCode}" src="sounds/${item.event}.wav"></audio>`;
    });
    document.body.appendChild(keys);
    document.body.appendChild(fragment.content);
}

createMarkdown();