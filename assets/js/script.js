
window.addEventListener('load', function() {


    let messages = document.querySelector('.comments'),
    computerScore = document.querySelector('#computer-score'),
    userScore = document.querySelector('#user-score'),
    computerField = document.querySelector('.computer-field'),
    userField = document.querySelector('#user-field'),
    resetButton = document.querySelector('#reset'),
    fields = document.querySelectorAll('.field'),
    
    
    userStep,
    computerStep,
    countUser = 0,
    countComputer = 0,
    blocked = false;
    
    
    const winSound = new Audio('assets/audio/win.wav');
    const loseSound = new Audio('assets/audio/lose.wav');
    const drawSound = new Audio('assets/audio/draw.wav');
    

    function userGame(e){
    if (blocked) return;
    let target = e.target;
    if(target.classList.contains('field')){
        userStep = target.dataset.field;
        fields.forEach(item => item.classList.remove('active'))
        target.classList.add('active');
        computerGame();
    }
    
    
    }
    
    function computerGame(){
    blocked = true;
    let randomChoice = Math.floor(Math.random() * 3);
    computerField.classList.add('blink');
    let computerFields = computerField.querySelectorAll('.field');
    
    setTimeout(() => {
    computerField.classList.remove('blink');
    computerStep = computerFields[randomChoice].dataset.field;
    computerFields[randomChoice].classList.add('active');
    blocked=false;
    winner();
    }, 4000);
    
    }
    
    function winner (){
    let both = userStep + computerStep;
    switch (both) {
        case 'rr':
        case 'ss':
        case 'pp':
            messages.innerText = 'Its a draw!';
            drawSound.play();
            break;   
            
            case 'rs':
            case 'sp':
            case 'pr':
                messages.innerText = 'You win!';
                winSound.play();
                countUser++;
                userScore.innerText = countUser;
                break;  
    
                case 'sr':
                case 'ps':
                case 'rp':
                    messages.innerText = 'Computer wins!';
                    loseSound.play();
                    countComputer++;
                    computerScore.innerText = countComputer;
                    break;   
            
            
    }
    }
    
    function playGame(){
    document.querySelector('.user-choice').focus();
    countUser = 0;
    countComputer = 0;
    messages.innerText = 'Please make your choice!';
    userScore.innerText = '0';
    computerScore.innerText = '0';
    fields.forEach(item => item.classList.remove('active'));
    }
    
    document.querySelector('.user-choice').focus();
    resetButton.addEventListener('click', playGame);
    userField.addEventListener('click', userGame);

    function arrows(e){
    let arrowMove = document.getElementsByClassName('.user-choice');
        for (let i = 0; i <= arrowMove.length; i++)
        if (e.key === 'ArrowDown') {
       arrowMove.next().focus();
   
         }
};
        
    
    const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('hidden');
    };
    
    document.querySelector('#modal-show')
    .addEventListener('click', toggleModal);
    
    document.querySelector('#ok-btn')
    .addEventListener('click', toggleModal);
    
    
    document.querySelector('.modal-close span')
    .addEventListener('click', toggleModal);
    
    
    
    });
    
    
