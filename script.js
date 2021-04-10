function drawGraphic() {
	if (document.getElementById('coordinates').hasChildNodes() === false) {
		pi_calculator();
	} else {
		document.getElementById("coordinates").innerHTML = '';
		pi_calculator();
	}
}
function pi_calculator() {
	let n = document.getElementById("number_of_points").value;
	if (n) {
		num_inside_circle = 0;
		
		for (let i = 0; i < n; i++) {
			let x = Math.random();
			let y = Math.random();
			
			let distance = x*x + y*y;
			if (distance <= 1) {
				placePoint(x, y, document.getElementById('colorInside').value);
				num_inside_circle += 1;
			} else {
				placePoint(x, y, document.getElementById('colorOutside').value);
			}
		}
		document.getElementById("result").value = `${(4 * num_inside_circle)/n}`;
		document.getElementById("inside").value = `${num_inside_circle}`;
		document.getElementById("outside").value = `${n - num_inside_circle}`;
		
	} else {
		console.log("error");
	}
}

function placePoint(x_pos, y_pos, color) {
	let point = document.createElement('div');
	point.style.position = "absolute";
	
	if (document.getElementById("number_of_points").value < 100) {
		point.style.width = '3px';
		point.style.height = '3px';
	} else if (document.getElementById("number_of_points").value >= 100 && document.getElementById("number_of_points").value < 1000){
		point.style.width = '2px';
		point.style.height = '2px';
	} else {
		point.style.width = '1px';
		point.style.height = '1px';
	}
	
	point.style.borderRadius = '100%';
	point.style.backgroundColor = color;
	point.style.left = document.getElementById('coordinates').getBoundingClientRect().left + x_pos * 500 + "px";
	point.style.top = document.getElementById('coordinates').getBoundingClientRect().top + y_pos * 500 + "px";
	document.getElementById("coordinates").appendChild(point);
}