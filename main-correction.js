// Select all elements from html
let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')
let timer = document.querySelector('.timer')

// Initialize variables
let [milisec, seconds, minutes, hours] = [0, 0, 0, 0]
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
    

    let ms = milisec < 10 ? "00" + milisec : milisec< 100 ? '0' + milisec : milisec
    let s = seconds < 10 ? "0" + seconds : seconds
    let m = minutes < 10 ? "0" + minutes : minutes
    let h = hours < 10 ? "0" + hours : hours
    // Add the value of variables to element HTML div timer
    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
        
}

// Function to stop the timing
pause.addEventListener('click', ()=>{
    clearInterval(int)
})

// Function to reset the timing
reset.addEventListener('click', ()=>{
    [milisec, seconds, minutes, hours] = [0, 0, 0, 0]
    timer.innerHTML = "00 : 00 : 00 : 000"
    clearInterval(int)
})