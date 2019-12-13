//check HTML5 storage support
function _support_html5_storage(){
  try{
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

//function to show the form when new button clicked
function showForm(){
  const form= document.getElementById('myForm')
  if(form.style.display==='none'){
    form.style.display='block';
  }else{
    form.style.display='none';
  }
}
//variables of the text inputs
const nameInp=document.getElementById('name');
const emailInp=document.getElementById('email');
const phoneNumInp=document.getElementById('phone');
//variables of the input
const nameDetail=document.getElementById('nameDetail');
const emailDetail=document.getElementById('emailDetail');
const phoneDetail=document.getElementById('phoneDetail');
//variables of the table elements
const indexofName=document.getElementById('indexofName');
const indexofEmail=document.getElementById('indexofEmail');
const indexofPhone=document.getElementById('indexofPhone');
const indexTable= document.getElementById('indexTable')
const indexTableBody=document.getElementById('indexTableBody');
//new Array
const myArray=[];



//function to save the inputs 
function submitForm(){
  
  //function
  if(nameInp.value===""){
    alert('fill out name')
  }
  else if(emailInp===""){
    alert('fill out email')
  }
  else if(phoneNumInp===""){
    alert('fill out phone number')
  }
  else{
  //saving name to localStorage
  localStorage.setItem('name',nameInp.value);
  //saving email to localStorage
  localStorage.setItem('email',emailInp.value);
  //saving phone to localStorage
  localStorage.setItem('phoneNum',phoneNumInp.value);
  //writing the localStorage to the html page
  nameDetail.innerHTML=localStorage.getItem('name');
  emailDetail.innerHTML=localStorage.getItem('email');
  phoneDetail.innerHTML=localStorage.getItem('phoneNum');

  //only displays data when submit is pressed
  const contact= document.getElementById('inputData')
  if(contact.style.display==='none'){
    contact.style.display='block';
  }else{
    contact.style.display='none';
  }
  }

  myArray.push(nameInp.value,emailInp.value,phoneNumInp.value);
  localStorage.myArray+=JSON.stringify({'name':nameInp.value, 'email':emailInp.value, 'phoneNum':phoneNumInp.value});

  

//inside the function it adds every time you press submit//
//outside the function, it saves the data even when you press refresh
//but it only shows the last entry
//need to use data from the array. then whne i click delete it will actually delete storage
    const row=document.createElement('tr');
    const tdNum=document.createElement('td');
    const td1=document.createElement('td');
    const td2=document.createElement('td');
    const td3=document.createElement('td');
    tdNum.innerHTML=localStorage.getItem('name'); //supposed to be the number!
    td1.innerHTML=localStorage.getItem('name');
    td2.innerHTML=localStorage.getItem('email');
    td3.innerHTML=localStorage.getItem('phoneNum');
    row.appendChild(td1);
    row.appendChild(td2)
    row.appendChild(td3);
    indexTableBody.children[0].appendChild(row);
  
  nameInp.value='';
  emailInp.value='';
  phoneNumInp.value='';
 }



function editFunction(){
    localStorage.clear();
}
//function to show contacts in table form
function index(){
  //only displays table when index is pressed)
  if(indexTable.style.display==='none'){
    indexTable.style.display='block';
  }else{
    indexTable.style.display='none';
  }

}

//deleting item
function deleteFunction(){
    const removed=myArray.splice('name',nameInp)
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phoneNum');
    return '';
  }
  //editing contact





//local storage push items in to the array?



//extra things
//make sure name is capitilized
//using required on the input spot so it has to be filled out instead of writing code for it 
//.indexof for the email
//put the contact inputs of the same line in the html
