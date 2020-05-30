// chasing the dom.
// 1
let userScore = 0;
let computerscore = 0;
let userScore_span = document.getElementById('user-scor')
let computer_span = document.getElementById('computer-score')
// const scoreBord_div = document.getElementById('scroe-bord')
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissor_div = document.getElementById('s')

//2
function getComputerChoices() {
    const choices = ['r', 'p', 's']
    const randomnumber = Math.floor(Math.random() * 3)//it will gives you random number between 0 and 3
    return choices[randomnumber]
}
// 5
function convertToWord(letter) {
    if (letter == "r") return 'Rock';
    if (letter == "p") return "Paper";
    return "Scissor"


}
// 6
function win(usechoice, computerchoice) {
    userScore++
    userScore_span.innerHTML = userScore
    computer_span.innerHTML = computerscore;
    const smalluserword = "user".fontsize(3).sup()
    const compsmallword = "comp".fontsize(3).sup()
    result_div.innerHTML = `${convertToWord(usechoice)} ${smalluserword} beats ${convertToWord(computerchoice)}${compsmallword} You win! `
    document.getElementById("userChoice").classList.add('green-glow')
}

function lose(usechoice, computerchoice) {
    computerscore++
    userScore_span.innerHTML = userScore
    computer_span.innerHTML = computerscore;
    const smalluserword = "user".fontsize(3).sup()
    const compsmallword = "comp".fontsize(3).sup()
    result_div.innerHTML = `${convertToWord(usechoice)} ${smalluserword} loses to ${convertToWord(computerchoice)}${compsmallword} You lost.. `
}
function draw(usechoice, computerchoice) {
  
    const smalluserword = "user".fontsize(3).sup()
    const compsmallword = "comp".fontsize(3).sup()
    result_div.innerHTML = `${convertToWord(usechoice)} ${smalluserword} equal ${convertToWord(computerchoice)}${compsmallword} its a draw `
}



// 4
function Game(userChoice) {
    let computerChoice = getComputerChoices()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;


    }
}

// 3
function main() {
    rock_div.addEventListener('click', () => {
        // console.log('you clicked on rock')
        Game("r")
    })

    paper_div.addEventListener('click', () => {
        // console.log('you clicked on paper')
        Game("p")
    })

    scissor_div.addEventListener('click', () => {
        // console.log('you clicked on scissor')
        Game('s')
    })

}

main()




