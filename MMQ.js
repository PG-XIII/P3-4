function sum_pol_a(points, degree) {
    var res = 0;
    for (i = 0; i < points.length; i++) {
        res += Math.pow(points[i].x,degree);
    }
    return res;
}

function sum_pol_b(points, degree) {
    var res = 0;
    for (i = 0; i < points.length; i++) {
        res += Math.pow(points[i].x,degree)*points[i].y;
    }
    return res;
}

function solve_MMQ(points, degree) {
    var a = new Array(degree);
    for (var i = 0; i < degree; i++) {
        a[i] = new Array(degree);
    }
    for (i = 0; i < degree; i++) {
        for (j = 0; j < degree; j++) {
            a[i][j] = sum_pol_a(points, i+j);
        }
    }

    var b = new Array(degree);
    for (var i = 0; i < degree; i++) {
        b[i] = new Array(1);
    }
    for (i = 0; i < degree; i++) {
        b[i][0] = sum_pol_b(points, i);
    }

    var res = math.lusolve(a,b);
    for (i = 0; i < res.length; i++) {
        res[i] = res[i][0];
    }

    return res.reverse();
}

function drawFunctionGraph(cs, xs) {
    ctx.beginPath();
    for (i = 0; i < xs.length-1; i++) {
        var y0 = 0;
        for (j = 0; j < cs.length; j++) {
            y0 += cs[j]*Math.pow(xs[i], cs.length - j - 1);
        }

        var y1 = 0;
        for (j = 0; j < cs.length; j++) {
            y1 += cs[j]*Math.pow(xs[i+1], cs.length - j - 1);
        }

        ctx.moveTo(xs[i], y0)
        ctx.lineTo(xs[i+1], y1)
    }
    ctx.strokeStyle = "red";
    ctx.lineWidth = "1";
    ctx.stroke();
}
