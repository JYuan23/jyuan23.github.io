let number = 10
let score = 0

function fn(){
    if(number>0){
        number--
        document.querySelector('.timer').innerHTML = number
    }else{
        document.querySelector('.timer').replaceChildren()
        document.querySelector('.answers').replaceChildren()
        document.querySelector('.question').replaceChildren()
        document.querySelector('.score').style.fontSize = 'xx-large'
    }
}


function mathProblem(){
    let num1 = Math.round(Math.random()*10)
    let num2 = Math.round(Math.random()*10)
    document.querySelector('.question').innerHTML = "What is " + num1+"*"+num2+":"
    let correctAnswer = num1*num2
    let right = Math.floor(Math.random()*4)


    for (let i = 0; i<4; i++){
        let answerDiv = document.createElement('div')
        answerDiv.classList.add('answer')
        if (i==right){
            answerDiv.innerHTML = correctAnswer
            answerDiv.addEventListener('click', () => {
                document.body.style.background="lime"
                score++
                document.querySelector('.score').innerHTML = "Score: "+score
                reset()
            })
        } else{
            answerDiv.innerHTML = Math.round(Math.random()*50)
            answerDiv.addEventListener('click', () => {
                document.body.style.background="red"
                reset()
            })
        }
        document.querySelector('.answers').appendChild(answerDiv)
    }
    

}

function reset(){
    setTimeout(()=> {document.body.style.background="aqua"},500)
    document.querySelector('.answers').replaceChildren()
    if(number>0){
        mathProblem()
    }else{
        document.querySelector('.answers').replaceChildren()
        document.querySelector('.question').replaceChildren()
    }
}

function main(){
    setInterval(fn, 1000)
    mathProblem()
    
}

main()

