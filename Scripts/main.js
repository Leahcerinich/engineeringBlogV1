// query selector() to grab reference to the heading and store it in the variable called "myHeading"
// set the value as myHeading variables "testContent" property

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Engineering blog';
alert('Warning this is only a test website');


// the function telling the button what to do and how to store data

// function setUserName() {
// var myName = prompt('Please enter your name.');
// localStorage.setItem('name', myName);
// myHeading.innerHTML = 'This is a test Website,' + myName;
// }

// //   //using if else statements/ blocks checking whether the name data exsists

// if(!localStorage.getItem('name')) {
//   setUserName();
//     } else {
// var storedName = localStorge.getItem('name');
// myHeading.innerHTML = 'This is a test website,'+ storedName;
// }

  // setUserName() - is the function is to run to create it
  // we retrieve the stored name by getItem()
  // set the text context as a string (textContext)

 function myFunction() {
   alert('Confirmation to post blog');
 }

//  function titleWriter(maxBlocks, maxLines) {
//   for (bc = 0; bc < maxBlocks; bc++) {
//   for(lc = 1; lc < maxLines +1; lc++) {
//     document.write('<p>'+lc+'</p>');
//     }
//   }
// }

function blogInfo() {
  document.write('<p> Purpose of the blog </p>');
  document.write('<p> Testing webiste for blog </p>');
}

function titleWriter () {

var content = [{
  title:'article_one', 
  date:'1234',
  text:'text'
},{
  title:'article_two', 
  date:'2345',
  text:'text'
},{
  title:'article_three',
  date: '3456', 
  text:'text'
},{
  title:'article_four', 
  date:'4567', 
  text: 'text'
},{
  title:'article_five', 
  date:'6789', 
  text:'text'
},{
  title:'article_six', 
  date:'5678',
  text:'text'
},{
  title:'article_seven', 
  date:'7890', 
  text:'text'
},{
  title:'article_eight',
  date:'7890', 
  text:'text'
},{
  title:'article_nine', 
  date:'5678', 
  text:'text'
},{
  title: 'article_ten', 
  date:'1234', 
  text:'text'
},
];

console.log(content);

// document.write('<p>'+content[0].title+'</p>');
// document.write('<p>'+content[0].date+'</p>');
// document.write('<p1>'+content[0].text+'</p1>');
// document.write('<p>'+content[1].title+'</p>');
// document.write('<p>'+content[1].date+'</p>');
// document.write('</p1>'+content[1].text+'</p1>');
// document.write('<p>'+content[2].title+'</p>');
// document.write('<p>'+content[2].date+'</p>');
// document.write('<p1>'+content[2].text+'</p1>');
// document.write('<p>'+content[3].title+'</p>');
// document.write('<p>'+content[3].date+'</p>');
// document.write('<p1>'+content[3].text+'</p1>');
// document.write('<p>'+content[4].title+'</p>');
// document.write('<p>'+content[4].date+'</p>');
// document.write('<p1>'+content[4].text+'</p1>');
// document.write('<p>'+content[5].title+'</p>');
// document.write('<p>'+content[5].date+'</p>');
// document.write('<p1>'+content[5].text+'</p1>');
// document.write('<p>'+content[6].title+'</p>');
// document.write('<p>'+content[6].date+'</p>');
// document.write('<p1>'+content[6].text+'</p1>');
// document.write('<p>'+content[7].title+'</p>');
// document.write('<p>'+content[7].date+'</p>');
// document.write('<p1>'+content[7].text+'</p1>');
// document.write('<p>'+content[8].title+'</p>');
// document.write('<p>'+content[8].date+'</p>');
// document.write('<p1>'+content[8].text+'</p1>');
// document.write('<p>'+content[9].title+'</p>');
// document.write('<p>'+content[9].date+'</p>');
// document.write('<p1>'+content[9].text+'</p1>');
// document.write('<p>'+content[10].title+'</p>');
// document.write('<p>'+content[10].date+'</p>');
// document.write('<p>'+content[10].text+'</p>');
// }

// need to put this in a 4 loop 


document.write('<p>___________________________________</p>');


for (var i=0; i<content.length; i++) {
  console.log(content[i].title);
  document.write('<p>'+content[i].title+'</p>');
  document.write('<p>'+content[i].date+'</p>');
  document.write('<p>'+content[i].text+'</p>')
  } 
}

