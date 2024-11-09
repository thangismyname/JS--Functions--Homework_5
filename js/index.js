function Test1() {
    var benchmark = document.getElementById("Benchmark").value
    var location = Number(document.getElementById("selLocation").value)
    var student = Number(document.getElementById("selUser").value)
    var firstscore = Number(document.getElementById("FirstScore").value)
      , secondscore = Number(document.getElementById("SecondScore").value)
      , thirdscore = Number(document.getElementById("ThirdScore").value)
    if (!checkBenchmark(benchmark)) {
        document.getElementById("txtResult").innerHTML = "Bạn vui lòng nhập lại điểm chuẩn. Do có điểm nhỏ hơn, bằng 0 hoặc lớn hơn 30"
    } else if (!checkScore(firstscore) || !checkScore(secondscore) || !checkScore(thirdscore)) {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn, bằng 0 hoặc lớn hơn 30"
    } else {
        var total =firstscore + secondscore + thirdscore + ( location + student);
        document.getElementById("txtResult").innerHTML = total >= benchmark 
        ? "Bạn đã đậu. Tổng điểm: " + total 
        : "Bạn đã rớt. Tổng điểm: " + total
    }
}

function checkBenchmark(benchmark) {
    if (benchmark <= 0 || benchmark > 30) {
        return false;
    }
return true;
}

function checkScore(score) {
    if (score <= 0 || score > 10) {
        return false;
    }
return true;
}

document.getElementById("btnResult").onclick = Test1;