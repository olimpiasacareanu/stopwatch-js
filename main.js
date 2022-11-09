// Select all elements from html
let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')
let timer = document.querySelector('.timer')

// Initialize variables
let milisec = 0
let seconds = 0
let minutes = 0
let hours = 0
let int

// Event to set interval 
start.addEventListener('click', (e)=>{
    
    int = setInterval(startTimer, 10)
})

// Function to start the timing by miliseconds
let startTimer = ()=>{
    milisec += 10
    // console.log(milisec)
    if(milisec === 1000){
        seconds += 1
        milisec = 0
        if(seconds === 60){
            minutes += 1
            seconds = 0
            if(minutes === 60){
                hours +=1
                minutes = 0
            }
        }
    }

    // Add the value of variables to element HTML div timer
    timer.innerHTML = ` 0${hours} : 0${minutes} : 0${seconds} : ${milisec}`
        
}

// Function to stop the timing
pause.addEventListener('click', ()=>{
    clearInterval(int)
})

// Function to reset the timing
reset.addEventListener('click', ()=>{
    milisec = 0
    seconds = 0
    minutes = 0
    hours = 0
    timer.innerHTML = "00 : 00 : 00 : 000"
    clearInterval(int)
})