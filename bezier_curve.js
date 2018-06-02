function drawBezierCurve(control_points) {
    var step = 0.01;
    var n = control_points.length-1;
    var points = []

    for (i = 0; i <= n; i++) {
        point = control_points[i]

        ctx.beginPath();
        ctx.moveTo(point.x - 5, point.y);
        ctx.lineTo(point.x + 5, point.y);
        ctx.moveTo(point.x, point.y - 5);
        ctx.lineTo(point.x, point.y + 5);
        ctx.stroke();
    }

    for (t = 0; t < 1.01; t += step) {
        var point = {x: 0, y: 0};

        for (i = 0; i <= n; i++) {
            var B = bernstein(t, n, i);
            point.x += B * control_points[i].x;
            point.y += B * control_points[i].y;
        }

        points.push(point);
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 0; i < points.length - 1; i++) {
        ctx.lineTo(points[i+1].x, points[i+1].y);
        ctx.moveTo(points[i+1].x, points[i+1].y);
    }
    ctx.stroke();

}

function bernstein(t, n, i) {
    return coeficienteBinomial(n, i) * Math.pow(t, i) * Math.pow(1-t, n-i);
}

function coeficienteBinomial(n, i) {
    numerator = factorial(n);
    denominator = factorial(n-i)*factorial(i);
    return numerator/denominator;
}

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n-1);
}
