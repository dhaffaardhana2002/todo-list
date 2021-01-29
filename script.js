// Form
let text = document.getElementById('text')
let add_button = document.getElementById('add')
add_button.onclick = () => {add()}
document.addEventListener("keyup", key => {
	if (key.keyCode === 13) {
		add()
	}
})

// List
let lists = document.getElementById('lists')

// Functions
function add() {
	if (text.value) {
		let li = document.createElement('li')
		let div = document.createElement('div')
		let img_check = document.createElement('img')
		let p = document.createElement('p')
		let text_in = document.createTextNode(text.value)
		let img_delete = document.createElement('img')
		img_check.classList.add('check')
		img_delete.classList.add('delete')
		lists.appendChild(li)
		li.appendChild(img_check)
		li.appendChild(p)
		li.appendChild(img_delete)
		img_check.src = 'img/check.png'
		img_check.alt = 'Check logo'
		img_delete.src = 'img/trash-can.png'
		img_delete.alt = 'Trash logo'
		p.appendChild(text_in)
		text.value = ''
	}
	makeButtons()
}

function makeButtons() {
	let li = Array.from(document.getElementsByTagName('li'))
	let img_delete = Array.from(document.getElementsByClassName('delete'))
	for (let q = 0; q < li.length; q++){
		li[q].onclick = () => {
			li[q].classList.toggle('checked')
		}
		img_delete[q].onclick = () => {
    		li[q].remove()
		 	}
	}
}
makeButtons()