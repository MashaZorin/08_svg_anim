var svg = document.getElementById('svg');
var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');

var anim_id;

var center_x = '250';
var center_y = '250';
var max_r = 250;
var min_r = 0;


var circle_anim = function(e){
    var curr_r = min_r;
    var expand = false;

    var draw_circle = function(e){
	var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	//if last child exists, delete it
	c.setAttribute('cx', center_x);
	c.setAttribute('cy', center_y);
	c.setAttribute('r', num.toString(curr_r)); //this may be a problem
	c.setAttribute('fill', 'black');
	svg.appendChild(c);

	if (curr_r == 0 || curr_r == 250) {
	    expand = !expand;
	}
	if (expand){
	    curr_r ++;
	}
	else{
	    curr_r = curr_r - 1;
	}
    }

    anim_id = setInterval(draw_circle, 15);
    
}

var dvd_anim = function(e){
}

var stop_anim = function(e){
}

var clear_scr = function(e){
}

circle.addEventListener('click', circle_anim)
