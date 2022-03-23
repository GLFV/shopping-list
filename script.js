var button = document.getElementById('enter')
var input = document.getElementById('userinput')
var ul = document.querySelector('ul')
function inputLength() {
	return input.value.length
}
function createListElement() {
	var li = document.createElement('li')
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = ''
	var button = document.createElement('button')
	button.appendChild(document.createTextNode('delete'))
	li.appendChild(button)
	button.onclick = removeParent
}
function addListAfterCLick() {
	if (inputLength() > 0) {
		createListElement()
	}
}
document.querySelectorAll('button').className = 'btn'
function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}
function underlineParent(event) {
	event.target.parentNode.classList.toggle('done')
}

function removeParent(evt) {
	evt.target.parentNode.remove()
}
button.addEventListener('click', addListAfterCLick)
input.addEventListener('keypress', addListAfterEnter)
console.log(inputLength)
