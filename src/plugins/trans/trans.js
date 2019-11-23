window.onload = function () {
	var startX, startY, moveX, moveY, status, move, turn, width, height, direction, left, top, deg
	var target = document.getElementById('target')
	var arr = ['top', 'left', 'right', 'bottom']
	var len = arr.length
	var spin = document.createElement("div")
	spin.classList.add("spin")
	target.appendChild(spin)
	deg = 0

	for(var i = 0; i < len; i++){
		var div = document.createElement("div")
		div.classList.add("dot", arr[i])
		div.dataset.direction = arr[i]
		target.appendChild(div)

		div.addEventListener("mousedown", function(event){
			event.stopPropagation()
			startX = event.clientX
			startY = event.clientY
			width = target.offsetWidth
			height = target.offsetHeight
			direction = event.target.dataset.direction
			status = true
		})
	}

	spin.addEventListener("mousedown", function(event){
		event.stopPropagation()
		startX = event.clientX
		startY = event.clientY
		turn = true
	})

	spin.addEventListener("mouseup", function(event){
		event.stopPropagation()
		turn = false
	})

	target.addEventListener("mousedown", function(event){
		event.stopPropagation()
		if(!turn){
			target.style.cursor = "move"
			startX = event.clientX
			startY = event.clientY
			left = target.offsetLeft
			top = target.offsetTop
			move = true
		}
	})

	target.addEventListener("mousemove", function(event){
		event.stopPropagation()
		if(!turn){
			if(move){
				target.style.left = left + event.clientX - startX + 'px'
				target.style.top = top + event.clientY - startY + 'px'
			}

			if(status){
				moveX = event.clientX - startX 
				moveY = event.clientY - startY
				switch (direction) {
					case 'top':
						target.style.height = height - moveY + 'px'
						target.style.top = top + moveY + 'px'
						break;
					case 'right':
						target.style.width = width + moveX + 'px'
						break;
					case 'bottom':
						target.style.height = height + moveY + 'px'
						break;
					case 'left':
						target.style.width = width - moveX + 'px'
						target.style.left = left + moveX + 'px'
						break;
				}
			}
		}
	})

	target.addEventListener("mouseup", function(event){
		event.stopPropagation()
		target.style.cursor = "default"
		left = target.offsetLeft
		top = target.offsetTop
		move = false
		status = false
	})

	document.addEventListener("mousemove", function(event){
		event.stopPropagation()
		if(turn){
			var a, b, c, cos, radina, angle
			moveX = event.clientX - startX 
			moveY = event.clientY - startY
			a = Math.abs(moveX);
	        b = Math.abs(moveY);
	        c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
	        cos = a / c;
	        radina = Math.acos(cos);
	        angle = Math.floor(180/(Math.PI/radina));

	        angle = moveX > 0 ? angle : - angle
	        console.log({angle})

			target.style.transform = "rotate("+ angle +"deg)";
		} else {

			if(move){
				return false
			}
			if(status){
				moveX = event.clientX - startX 
				moveY = event.clientY - startY
				switch (direction) {
					case 'top':
						target.style.height = height - moveY + 'px'
						target.style.top = top + moveY + 'px'
						break;
					case 'right':
						target.style.width = width + moveX + 'px'
						break;
					case 'bottom':
						target.style.height = height + moveY + 'px'
						break;
					case 'left':
						target.style.width = width - moveX + 'px'
						target.style.left = left + moveX + 'px'
						break;
				}
			}
		}
	})

	document.addEventListener("mouseup", function(event){
		event.stopPropagation()
		var trans = target.style.transform
		status = false
		turn = false
		deg = parseInt(trans.match(/rotate\((\S*)deg\)/)[1])
	})
}