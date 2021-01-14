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
	lists.onclick = event => {
		if (event.target.tagName === 'P') {
			event.target.classList.toggle('checked')
		}
	}

	// Functions
	function add(input) {
		if (!input) {
			if (text.value) {
				let li = document.createElement('li')
				let p = document.createElement('p')
				let text_in = document.createTextNode(text.value)
				let img = document.createElement('img')
				lists.appendChild(li)
				li.appendChild(p)
				li.appendChild(img)
				p.appendChild(text_in)
				img.src = 'img/trash-can.png'
				img.alt = 'Trash can logo'
				text.value = ''
				makeDelete()
			}
		} else {
			let li = document.createElement('li')
			let p = document.createElement('p')
			let text_in = document.createTextNode(input)
			let img = document.createElement('img')
			lists.appendChild(li)
			li.appendChild(p)
			li.appendChild(img)
			p.appendChild(text_in)
			img.src = 'img/trash-can.png'
			img.alt = 'Trash can logo'
			makeDelete()
		}
	}
	add('Type and press "Enter" to make a list')
	add('Click/tap the text to mark as done')
	add('Click/tap again to unmark')
	add('Click/tap the trach logo to remove the list')

	function makeDelete() {
		var li = Array.from(document.getElementsByTagName('li'))
		var img = Array.from(document.getElementsByTagName('img'))
		for (let q = 0; q < li.length; q++){
			img[q].onclick = () => {
	    		li[q].remove()
 		 	}
		}
	}
	makeDelete()
})