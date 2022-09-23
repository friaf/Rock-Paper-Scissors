window.addEventListener('load', function() {


    let messages = document.querySelector('#message');
    let computerScore = document.querySelector('#computer-score');
    let userScrore = document.querySelector('#user-score');
    let computerField = document.querySelector('.computer-field');
    let userField = document.querySelector('#user-field');
    let resetButton = document.querySelector('#reset');
    let sounds = document.querySelector('#sound');
    let computerChoice = document.querySelector('#computer-choice');
    let fields = document.querySelectorAll('.field')


    let userStep;
    let computerStep;
    let countUser = 0;
    let countComputer = 0;
    let blocked = false;


    function userGame(e){
        if (blocked) return;
        let target = e.target;
        if(target.classList.contains('field')){
            userStep = target.dataset.field;
            fields.forEach(item => item.classList.remove('active', 'error'))
            target.classList.add('active');
            computerGame() 
        }


    }

    function computerGame(){
      blocked = true;
      let randomChoice = Math.floor(Math.random() * 3)
      computerField.classList.add('blink');
      

    }

    function winner (){

    }

    function playGame(){

    }


    resetButton.addEventListener('click', playGame);
    userField.addEventListener('click', userGame);





    
 





})
