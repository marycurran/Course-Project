const db=firebase.firestore()
const newBtn = document.getElementById('newBtn')
const indexBtn= document.getElementById('indexBtn')

//function to show the form when new button clicked
function showForm(){
  const form= document.getElementById('myForm')
  if(form.style.display==='none'){
    form.style.display='block';
  }else{
    form.style.display='none';
  }
}
//function to make sure name is inputed
function nameLen(){
  const name=document.getElementById('name');
  const nameValue=name.value
  if (nameValue===''){
    alert('must enter text')
  } else{
    name.value=''
  }
}
//function email pattern

///put all of this under the submit function for when you press the submit button


//function limit phone number to 10 digits
function phoneLength(){
  const phoneNum=document.getElementById('phone');
  const phoneLen=phoneNum.length;
  if (phoneLen===10){
    phoneLen.value='';
  } else{
    alert('Phone number must be 10 digits long')
  }
  const phoneValue=phoneNum.value;
  const check0=phoneValue.startsWith(0);
  const check1=phoneValue.startsWith(1);
  if (phoneValue===check0){
    alert('cannot start with 0')
  } else{
    phoneValue='';
  }
  if (phoneValue===check1){
    alert('cannot start with 1')
  } else{
    phoneValue='';
  }
}


//firebase submit??



/*
const dbCollection = firebase.firestore().collection('todos')

const input = document.getElementById('myInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('myUL')

const ENTER_KEY_CODE = 13
input.addEventListener('keyup', event => {
  if (event.keyCode === ENTER_KEY_CODE) {
    appendTodo()
  }
})

addBtn.addEventListener('click', appendTodo)

todoList.addEventListener('click', handleTodoClick)

dbCollection.onSnapshot(docs => {
  todoList.innerHTML = ''
  docs.forEach(doc => createItemFromData(doc))
})

function appendTodo() {
  const inputValue = input.value
  if (inputValue === '') {
    alert('Todo cannot be empty')
  } else {
    input.value = ''
    saveTodo(inputValue)
  }
}

function saveTodo(todoText) {
  dbCollection
    .add({
      task: todoText,
      checked: false,
      timestamp: Date.now(),
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function(error) {
      console.error('Error adding document: ', error)
    })
}

function createItemFromData(doc) {
  const refid = doc.id
  const data = doc.data()
  const todoItem = document.createElement('li')

  // set ref id
  todoItem.setAttribute('data-refid', refid)

  // save and set the checked class
  if (data.checked) {
    todoItem.setAttribute('data-checked', 'checked')
    todoItem.classList.add('checked')
  }

  // the todo text content
  const todo = document.createTextNode(data.task)
  todoItem.appendChild(todo)

  // the close symbol
  const span = document.createElement('SPAN')
  const txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  todoItem.appendChild(span)

  todoList.appendChild(todoItem)
}

function handleTodoClick(event) {
  const target = event.target
  if (target.tagName === 'LI') {
    toggleChecked(target)
  } else if (target.tagName === 'SPAN') {
    const item = target.parentElement
    removeItem(item)
  }
}

function toggleChecked(listItem) {
  const refid = listItem.dataset.refid
  const docRef = dbCollection.doc(refid)
  if (listItem.dataset.checked === 'checked') {
    docRef.update({ checked: false })
  } else {
    docRef.update({ checked: true })
  }
}

function removeItem(listItem) {
  const refid = listItem.dataset.refid
  const docRef = dbCollection.doc(refid)
  docRef.delete()
}

*/