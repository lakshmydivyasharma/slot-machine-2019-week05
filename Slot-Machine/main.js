// Build a simple slot machine with minimum 5 items per reel and 3 reels
// - user should be able to bet min or max and have their total update
// aka how much money they have won or lost.
// Min bet does $5 and Max bet does $50.
// They should start with $1000.
// Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

// randomization and then a big old conditioner like if first reel = second reel = third reel means they won DICE ROLLS
// then you have to update the dom to show that they won or loss
// and then showing the click ability
//




document.getElementById("spin").addEventListener("click", spinReel); //spinreel is saying call thee function when it is clicked




document.getElementById("min").addEventListener("click", selectMin);
document.getElementById("max").addEventListener("click", selectMax);
let balance = 1000
const minBet = 5
const maxBet = 50

const slotOne = document.getElementById("reel1") //declaring a variable; took the ID located it in HTML; we are giving an additional name for the element so the rest of the JS to udnerstand & that is slot1
const slotTwo = document.getElementById("reel2")
const slotThree = document.getElementById("reel3")

let images = ["images/bell.png", "images/cherry.png", "images/lemon.png", "images/orange.png", "images/watermelon.png"]; //let is dynamic, and we are using it here bc

let displayBet
selectMin()


function selectMin(){
  displayBet = minBet
  document.getElementById("min").style.backgroundColor="yellow"
  document.getElementById("max").style.backgroundColor="white"
}

function selectMax(){
  displayBet = maxBet
  document.getElementById("max").style.backgroundColor="yellow"
  document.getElementById("min").style.backgroundColor="white"
}

function spinReel() {
    let randomSpin1 = Math.floor(Math.random() * images.length)
    let randomSpin2 = Math.floor(Math.random() * images.length)
    let randomSpin3 = Math.floor(Math.random() * images.length)

    document.getElementById("imageReelOne").src= images[randomSpin1]
    document.getElementById("imageReelTwo").src= images[randomSpin2]
    document.getElementById("imageReelThree").src= images[randomSpin3]

    const reels = document.getElementsByClassName("slot") //reels is the array
    // console.log(reels)
    // reels.forEach(addRotation)
    for(let i = 0; i < reels.length; i++){ //for loop has 4 parts to it; first part is count, and then initalize it which means start it so thats usually 0 or 1. ----- (let i = 0; i < reels.length; i++) the two ; separate the first three parts of this; second part is the condition or the continued condition, its an expression and an expression in js evaluates the same number and that expression has to evaluate to true or false, when its false the loop stops; ++ changes count, or you can do i+10 if you want to count by 10s; the fourth part is the body whichis the {}, thats the actual code that runs for each iteration of the loop
      reels [i].classList.add("rotated") // this i shows you the space, so 0 1 and 2  ----the current part of the array you are doing something to, theen it moves on till it goes past the end of an array number then it stops; so in this case it is 0 1 2 and at 3 it will stop and this function will recognize that
    }

    setTimeout(() => {
      console.log("stop")
      for(let i = 0; i < reels.length; i++){
        reels [i].classList.remove("rotated") //the current part of the array you are doing something to, theen it moves on till it goes past the end of an array number then it stops; so in this case it is 0 1 2 and at 3 it will stop and this function will recognize that
      }
      if (randomSpin1 === randomSpin2 && randomSpin2 === randomSpin3) {
          console.log("You Win Money")
          balance = balance + (displayBet * 10)

      } else{
          console.log("You Lose Money")
          balance = balance - displayBet
            if(balance < 50){
              alert("You're out of money, let's get you out of debt and get you some help")
              document.location = "https://www.nationaldebtrelief.com/"
            }
      }
      document.getElementById("totalBalance").innerHTML= balance
    },2000)
}


function addRotation(e){
  e.classList.add("rotated")
}





//
// group notes:
// // slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//
// so you want to use the dice function and get math random to get you the roll on the DICE then link that side to the image you want displayed
//
//
// //// balance box
// let balance = document.getElementById(balanceBox)
//  var balance = 1000;
//
//
//
//
//
//
// // Write JavaScript here
// const reelClicks = document.querySelectorAll(".reel")
// let reel1Clicks = 0,
//     reel2Clicks = 0,
//     reel3Clicks = 0
//
//
//   reel.forEach(el =>{
//   el.addEventListener("click",()=> {
//     const reelClicked = event.target.id
//     if( reelClicked === "img1"){
//       reel1Clicks++
//     }else if (reelClicked === "img2"){
//       reel2Clicks++
//     }else{
//       reel3Clicks++
//     }    })
//   })





// Sam's Code
//document.getElementByClassName("boxes").addEventListener("click", spinReel)
//let displayBet = 0
//let balance = 1000
//const minBet = 5
//const maxBet = 50
//let images = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"];

//let randomSpin1 = math.floor(math.Random() * images.length)
//let randomSpin2 = math.floor(math.Random() * images.length)
//let randomSpin3 = math.floor(math.Random() * images.length)


//function spinReel(3, images) {
//  if (randomSpin1 === randomSpin2 === randomSpin3){
//    console.log("You Win Money")
//  }else {
//    console.log("You Lose Money")
//  }
//}

 //divya's code:
 //let slotOptions = ["cherry", "seven", "bell", "bar"];

    //function play() {
    //return [shuffle(slotOptions), shuffle(slotOptions), shuffle(slotOptions)];
 //   }

   // let [slot1, slot2, slot3] = play();
