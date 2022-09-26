window.addEventListener('load', function() {


    let messages = document.querySelector('.comments');
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


    const winSound = new Audio('assets/audio/win.wav');
    const pcSound = new Audio('assets/audio/pc.wav');
    const drawSound = new Audio('assets/audio/draw.wav');


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
      let computerFields = computerField.querySelectorAll('.field');

      setTimeout(() => {
        computerField.classList.remove('blink');
        computerStep = computerFields[randomChoice].dataset.field;
        computerFields[randomChoice].classList.add('active');
        blocked=false;
        winner()
      }, 4000)

    }

    function winner (){
        let both = userStep + computerStep;
        switch (both) {
            case 'rr':
            case 'ss':
            case 'pp':
                messages.innerText = 'Its a draw!';
                winSound.play();
                break;   
                
                case 'rs':
                case 'sp':
                case 'pr':
                    messages.innerText = 'You win!';
                    winSound.play();
                    countUser++;
                    userScrore.innerText = countUser;
                    break;  

                    case 'sr':
                    case 'ps':
                    case 'rp':
                        messages.innerText = 'Computer wins!';
                        winSound.play();
                        countComputer++;
                        computerScore.innerText = countComputer;
                        break;   
                
                
        }
    }

    function playGame(){

    }


    resetButton.addEventListener('click', playGame);
    userField.addEventListener('click', userGame);





    
 





})
