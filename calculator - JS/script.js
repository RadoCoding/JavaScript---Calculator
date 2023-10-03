const input = document.querySelector('.resultWindow')
const btns = document.querySelectorAll('.number')
const deleteButton= document.querySelector('.delete')
const addButton = document.querySelector('.addButton')
const resultButton = document.querySelector('.resultButton')
const subtractButton = document.querySelector('.subtractButton')
const actions = document.querySelectorAll('.actions')
const changeSing = document.querySelector('.changeSing')
const dot = document.querySelector('.dot')

let result
let sign 
let action
let action2

deleteButton.addEventListener('click', ()=>{

        input.value = 0
        result = 0
        action = ''
        action2 = ''
        deleteButton.innerHTML = 'AC'
   
  
})

dot.addEventListener('click', ()=>{
    input.value = input.value + '.'
    const regex = /\./gm
    if(input.value.includes('..')){
        const test = input.value.slice(0,-1)
        input.value = test
 
    }
    else if(input.value.match(regex).length > 1){
        const test = input.value.slice(0,-1)
        input.value = test
    }
})

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(input.value.charAt(0) == '0' && input.value == '0'){
            const sliceValue = input.value.slice(1,input.length)
            input.value = sliceValue
        }
        input.value += e.target.textContent
        if(input.value.length >= 1){
            deleteButton.innerHTML = 'C'
         
        }else if(input.value.length < 1){
            deleteButton.innerHTML = 'AC'
       
          
    
        }
    })
})

changeSing.addEventListener('click', ()=>{
    if(result > 0){
        result = result * -1
        input.value = result
        
    }else if(result < 0){
        result = result * -1
        input.value = result
    }
})

actions.forEach(act =>{ 
    act.addEventListener('click', (e)=>{
        if(e.target.textContent === '+'){
            result = Number(input.value)     
            input.value = ''
            action = ''
            action = '+'
         
        }else if(e.target.textContent === '-'){
            result = Number(input.value)     
            input.value = ''
            action = ''
            action = '-'

        }else if(e.target.textContent === '/'){
            result = Number(input.value)     
            input.value = ''
            action = ''
            action = '/'

        }else if(e.target.textContent === 'x'){
            result = Number(input.value)     
            input.value = ''
            action = ''
            action = 'x'

        }else if(e.target.textContent === '%'){
            result = Number(input.value) / 100
            input.value = result
        }
    })
})

resultButton.addEventListener('click', ()=>{
    if(action === '+'){
    previousNumber = Number(input.value)
    result +=  Number(input.value)
    input.value = result
    action = ''
    action2 = '+' 

    }else if(action === '-'){
        result -=  Number(input.value)
        previousNumber = Number(input.value)
        input.value = result
        action = ''
        action2 = '-' 
    }else if(action === '/'){
        previousNumber = Number(input.value)
        result = result /  Number(input.value)
        input.value = result
        action = ''
        action2 = '/' 
    }else if(action === 'x'){
        previousNumber = Number(input.value)
        result = result *  Number(input.value)
        input.value = result
        action = ''
        action2 = 'x' 
    }else if(action2 === '+'){ 
        result =  result + previousNumber
        input.value = result
    }
    else if(action2 === '-'){ 
        result =  result - previousNumber
        input.value = result
    }else if(action2 === '/'){ 
        result =  result / previousNumber
        input.value = result
    }
    else if(action2 === 'x'){ 
        result =  result * previousNumber
        input.value = result
    }
})
