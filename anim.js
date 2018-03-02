var svg = document.getElementById('svg');
var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');

var anim_id;

var min_x = '0';
var min_y = '0';
var center_x = '250';
var center_y = '250';
var max_x = '400';
var max_y = '450';
var max_r = 250;
var min_r = 0;

var bottom_layer = true;

var circle_anim = function(e){
    var curr_r = min_r;
    var expand = false;
    stop_anim(e);

    var draw_circle = function(e){
	var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	if (!bottom_layer){
	    svg.removeChild(svg.lastChild);
	}
	c.setAttribute('cx', center_x);
	c.setAttribute('cy', center_y);
	c.setAttribute('r', curr_r.toString()); //this may be a problem
	c.setAttribute('fill', 'black');
	svg.appendChild(c);
	bottom_layer = false;

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
    var curr_x = 0;
    var curr_y = 0;
    var up = true;
    var left = true;
    stop_anim(e);

    var draw_rect = function(e){
	var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	if (!bottom_layer){
	    svg.removeChild(svg.lastChild);
	}
	
	rect.setAttribute('x', curr_x.toString());
	rect.setAttribute('y', curr_y.toString());
	rect.setAttribute('width', '100');
	rect.setAttribute('height', '50');
	rect.setAttribute('fill', 'black');

	svg.appendChild(rect);
	bottom_layer = false;
	//console.log(svg);

	if (curr_y == min_y || curr_y == max_y){
	    up = !up;
	}
	if (curr_x == min_x || curr_x == max_x){
	    left = !left;
	}
	if (up){
	    curr_y = curr_y - 1;
	}
	else{
	    curr_y ++;
	}
	if (left){
	    curr_x = curr_x - 1;
	}
	else{
	    curr_x ++;
	}
    }

    anim_id = setInterval(draw_rect, 15);
    
}

var stop_anim = function(e){
    clearInterval(anim_id);
}

var clear_scr = function(e){
    stop_anim(e);
    while (svg.lastChild){
	svg.removeChild(svg.lastChild);
    }
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');	
    rect.setAttribute('width', '500');
    rect.setAttribute('height', '500');
    rect.setAttribute('fill', 'white');
    rect.setAttribute('stroke', 'black');
    rect.setAttribute('stroke-width', '2');

    svg.appendChild(rect);
    bottom_layer = true;
}

circle.addEventListener('click', circle_anim);
dvd.addEventListener('click', dvd_anim);
stop.addEventListener('click', stop_anim);
clear.addEventListener('click', clear_scr);
