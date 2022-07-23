//Your code goes here

// 1. Click the button to display your name
//Selectors
const btn = document.getElementById('btnName')
const input= document.getElementById('myName')
const displayName = document.getElementById('displayMsg')




//Function
let flag=0
function display (){
  if(flag==0){
  displayName.innerHTML=input.value
  btn.innerHTML='Clear'
  flag=1;
  }else{
    input.value="";
    displayName.innerHTML=""
    btn.innerHTML="Click me"
    flag=0
  }
    
  }


//Call the event
btn.addEventListener('click', display)
//2. Switch lights on mouseover
//Selectors
const lightGlobe = document.getElementById('imageOff')
//Function

function lightOn(){
 
    lightGlobe.src='images/lighton.png'
    lightGlobe.alt= "it is bright"
    
}

function lightOff(){
 
    lightGlobe.src='images/lightoff.png'
    
   
}

//Call the event
lightGlobe.addEventListener('mouseover', lightOn)
lightGlobe.addEventListener('mouseout', lightOff)
//3. Double click to display content
//Selectors
const btndb=document.getElementById('btndbName')
const message=document.getElementById('displayPara')
/*Function {
  //some code here
  //create a new img element
}*/
function dbClick(){
  const newImg =  document.createElement('img')
  const doubleClick = document.getElementById('doubleClick')
  newImg.setAttribute('src', 'images/smileyface.png')
  doubleClick.appendChild(newImg)
  message.innerHTML='You double clicked me!'
}


//Call the event
btndb.addEventListener('dblclick', dbClick)
// 4. Traffic Lights
//Selectors
const stopBtn=document.getElementById('btnStop')
const readyBtn=document.getElementById('btnReady')
const goBtn=document.getElementById('btnGo')
const redLight=document.getElementById('stopDiv')
const yellowLight=document.getElementById('readyDiv')
const greenLight=document.getElementById('goDiv')
//Function 1
function stop(){
   redLight.style.backgroundColor='red'
   yellowLight.style.backgroundColor='black'
   greenLight.style.backgroundColor='black'
}

//Function 2
function ready(){
  redLight.style.backgroundColor='black'
  yellowLight.style.backgroundColor='yellow'
  greenLight.style.backgroundColor='black'
}
//Function 3
function go(){
  redLight.style.backgroundColor='black'
  yellowLight.style.backgroundColor='black'
  greenLight.style.backgroundColor='green'
}
//Call the events
stopBtn.addEventListener('click', stop)
readyBtn.addEventListener('click', ready)
goBtn.addEventListener('click', go)
//5. Change textbox border colours
//Selectors

  
//Function

//Call the event

//6. validate the box [length should be more than 5 characters]
//Selectors
const inputValue=document.getElementById('myName2')
const errMsg =document.getElementById('errMsg')
const submitBtn=document.getElementById('btnSub2')
/*Function {
  //if statement
}*/
function validation(){
  if (inputValue.value=="" || inputValue.value.length<8){
    errMsg.innerHTML="Error! The username must not be less than 8 characters."

  }else{
    errMsg.innerHTML="All good!"
  }
}

//Call the event
submitBtn.addEventListener('click', validation)
// 7.create a list of hobbies
//Selectors
const hobbiesBtn=document.getElementById('btnHobbies')
let hobby1 = prompt('Please enter your first hobby')
let hobby2 = prompt('Please enter your second hobby')
let hobby3 = prompt('Please enter your third hobby')
let arrOfhobby=[hobby1, hobby2, hobby3]


/*Function {
  //for loop
}*/

  function listOfHobby(){
      
      for(let i=0; i<arrOfhobby.length; i++){
        
        const hobbyList = document.createElement('li')   
        hobbyList.innerHTML=arrOfhobby[i]
        const hobbiesParent = document.getElementsByTagName('ul')
        hobbiesParent[0].appendChild(hobbyList)
      }
  }

//Call the event
hobbiesBtn.addEventListener('click', listOfHobby)
// 8. Display a profile card from an object
//Object
const profile = {
  name: 'Joy',
  gender: 'Female'
}
//Selectors
const cardBtn=document.getElementById('btnProfile')
/*Function {
    //for loop
      //if statement
  }*/
  function displayProfile(){
  for (let k in profile){
     const cardDisplay=document.getElementById('displayCard')
     const card=document.createElement('p')
     card.innerHTML= `${k} : ${profile[k]}`
     cardDisplay.appendChild(card)
    
  }
  
}


   cardBtn.addEventListener('click', displayProfile)
   
   