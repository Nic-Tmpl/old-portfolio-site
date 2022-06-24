/* This script returns a random message consisting of two strings:
    "Today is %s"
    "That is why %s %s"
    its function is a useless dadaist fortune teller. It selects three random numbers
    and pulls the related string from three different arrays, then inserts them into the
    '%s' places in the above format */

function message () {
// Get date for one of the array variables
let today = new Date();
let day = today.getDay();
const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                'Friday', 'Saturday'];

//Arrays in order of how they will appear according to comment at top
const var1 = ['good', 'bad', daylist[day], 'thiccc', 'non-edible', 
                'not an NFT', 'fun', 'stressful'];
const var2 = ['you', 'we', 'the dogs', 'your friends', 'animals',
                'beasts of the sea', 'parents', 'politicians'];
const var3 = ['are depressed', 'drink', 'need to lighten up', 'are happy', 
                'share 60% DNA with a banana', 'sleep soundly', 'feel joy',
                'live, laugh, love'];

//empty array that will go through a function to hold three random integers
let nums = [];

//Function to fill nums array with 3 random numbers 1-8
const getNums = (nums) => {
    for (let c = 0; c < 3; c++) {
        nums[c] = (Math.floor(Math.random() * 8));
    }
    return nums;
}

//call getNums to fill array, then grab corresponding values from random word arrays
getNums(nums);
let string1 = `Today is ${var1[nums[0]]}.`;
let string2 = `That is why ${var2[nums[1]]} ${var3[nums[2]]}.`;

//Array to hold pictures and generate background image    
let picArr = ['./resources/images/photo-array/photo1.jpg',
               './resources/images/photo-array/photo2.jpg', 
               './resources/images/photo-array/photo3.jpg',
               './resources/images/photo-array/photo4.jpg',
               './resources/images/photo-array/photo5.jpg',
               './resources/images/photo-array/photo6.jpg',
               './resources/images/photo-array/photo7.jpg',
               './resources/images/photo-array/photo8.jpg' ];
let myNumber = Math.floor(Math.random() * 7) + 1;

let img = document.getElementById('background-image');
img.src = picArr[myNumber];


let fortune = document.getElementById('fortune');
fortune.innerHTML=`${string1}<br>${string2}`;
}

/* This function returns the day of the week to the Element dayname in the index.html */
document.addEventListener('DOMContentLoaded', (event) => {
    let today = new Date();
    let day = today.getDay();
    const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                    'Friday', 'Saturday'];
    document.getElementById("day-name").innerHTML = `Enjoy the rest of your ${daylist[day]}!`;
});
