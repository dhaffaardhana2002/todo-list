document.addEventListener("DOMContentLoaded", () => {
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
	function add(input) {
		let li = document.createElement('li')
		let div = document.createElement('div')
		let img_check = document.createElement('img')
		let p = document.createElement('p')
		let img_delete = document.createElement('img')
		img_check.classList.add('check')
		img_delete.classList.add('delete')
		lists.appendChild(li)
		li.appendChild(div)
		div.appendChild(img_check)
		div.appendChild(p)
		li.appendChild(img_delete)
		img_check.src = 'img/check.png'
		img_check.alt = 'Check logo'
		img_delete.src = 'img/trash-can.png'
		img_delete.alt = 'Trash logo'
		if (!input) {
			if (text.value) {
				let text_in = document.createTextNode(text.value)
				p.appendChild(text_in)
				text.value = ''
			}
		} else {
			let text_in = document.createTextNode(input)
			p.appendChild(text_in)
		}
		makeButtons()
	}
	add('Type and press "Enter" to make a list')
	add('Click/tap the text to mark as done')
	add('Click/tap again to unmark')
	add('Click/tap the trach logo to remove the list')

	function makeButtons() {
		let li = Array.from(document.getElementsByTagName('li'))
		let img_delete = Array.from(document.getElementsByClassName('delete'))
		let div = Array.from(document.getElementsByTagName('div'))
		for (let q = 0; q < li.length; q++){
			div[q].onclick = () => {
				div[q].classList.toggle('checked')
			}
			img_delete[q].onclick = () => {
	    		li[q].remove()
 		 	}
		}
	}
	makeButtons()
})