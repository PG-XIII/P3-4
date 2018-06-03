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