const text = document.getElementById("text");
const choices = document.getElementById("choices");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");

const story = [
    {
        sceneID: "A",
        sceneHTML: "<p>This is Scene A</p>",
        btnText: ["turn around", "retreat and regroup"],
        btnFunctions: [A1, A2],
        thirdBtn: false
    }
];

//initialize buttons
choice1.onclick = sceneA;
//choice2.onclick = sceneB;
//choice3.onclick = null;

function update(scene) {
    text.innerHTML = scene.sceneHTML;
    choice1.innerText = scene.btnText[0];
    //choice2.innerText = scene[btnText][1];
    choice1.onclick = scene.btnFunctions[0];
    //choice2.onclick = scene[btnFunctions][1];
    /* if (thirdBtn) {
        choice3.classList.remove("hidden");
        choice3.innerText = scene[btnText][2];
        choice3.onclick = scene[btnFunctions][2];
    } */
}

function sceneA() {
    //alert("You clicked the button!");
    update(story[0]);
}

function sceneB() {

}

function A1() {

}

function A2() {

}
