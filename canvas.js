function resizeCanvas(width, height) {
    canvas.width = width;
    canvas.height = height;
}

function resizeToFit() {
    var width = parseFloat(window.getComputedStyle(canvas).width);
    var height = parseFloat(window.getComputedStyle(canvas).height);
    resizeCanvas(width, height);
}

function isInCircle(click) {
    var v;
    for (i = 0; i < points.length; i++) {
        v = {
            x: points[i].x - click.x,
            y: points[i].y - click.y
        };

        if (Math.sqrt(v.x * v.x + v.y * v.y) <= point.radius) {
            return i;
        }
    }
    return -1;
}

function draw_point() {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = '4';
    ctx.fillStyle = 'red';
    ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function draw_points() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < points.length; i++) {
        point.x = points[i].x;
        point.y = points[i].y;
        draw_point();
    }
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var point = {
    x: 0,
    y: 0,
    radius: 5
};
var move = -1;
var points = []

resizeToFit();

canvas.addEventListener('mousedown', function(e) {
    move = isInCircle({
        x: e.offsetX,
        y: e.offsetY
    });

    if (move < 0) {
        point.x = e.offsetX;
        point.y = e.offsetY;
        points.push({x: point.x, y: point.y});
        draw_points();
    }
});

canvas.addEventListener('mousemove', function(e) {
    if (move >= 0) {
        points[move] = {
            x: e.offsetX,
            y: e. offsetY
        }
        draw_points();

        var cs = solve_MMQ(points, 5);
        console.log(points);
        var xs = [];
        for (x = points[0].x; x <= points[points.length-1].x; x += 0.1) {
            xs.push(x);
        }
        console.log(cs);
        drawFunctionGraph(cs, xs);
    }
});

canvas.addEventListener('mouseup', function(e) {
    move = -1;
});
