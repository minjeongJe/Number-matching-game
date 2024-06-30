//1. 랜덤번호 지정 
//2. 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름 
//3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다! 
//4. 랜덤번호가 < 유저번호 Down!! 
//5. 랜덤번호가 > 유저번호 Up!! 
//6. Rest버튼을 누르면 게임이 리셋된다. 
//5번의 기회를 다쓰면 게임이 끝난다.  (더이상 추측 불가, 버튼이 disable) 
//8. 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다. 
//9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다., 기회를 깍지 않는다. 


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area"); 
let resetButton = document.getElementById("reset-button");
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100) + 1;
    console.log("정답",computerNum);
}

function play () {
    let userValue = userInput.value;
    chance --;
    chanceArea.textContent = `남은기회:${chance}번`;

    if (userValue < computerNum) {
        resultArea.textContent = "Up!"
        console.log("UP!!");
    }else if(userValue > computerNum) {
        resultArea.textContent = "down!"
        console.log("Down!!");
    }else {
        resultArea.textContent = "정답!"
        console.log("정답!!");
    }
    if(chance < 1) {
        gameOver = true;
    }
    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset () {
 // user input 창이 깨끗하게 정리
    userInput.value = "";
 // 새로운 번호가 생성 
    pickRandomNum();
    resultArea.textContent = "숫자를 입력하세요."
}

pickRandomNum();