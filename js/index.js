// Test 1 Functions
function Test_1() {
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

document.getElementById("btnResult").onclick = Test_1;

// Test 2 Functions
const kw_1 = 500
    , kw_2 = 650
    , kw_3 = 850
    , kw_4 = 1100
    , kw_5 = 1300;

function Test_2() {
    var name = document.getElementById("ElecBillUser").value
      , n = Number(document.getElementById("KwValue").value)
      , total = 0;
      switch (true) {
        case (n > 0 && n <= 50):
            total = n * kw_1;
            break;
        case (n > 50 && n <= 100):
            total = 50 * kw_1 + (n - 50) * kw_2;
            break;
        case (n > 100 && n <= 200):
            total = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3;
            break;
        case (n > 200 && n <= 350):
            total = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4;
            break;
        case (n > 350):
            total = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5;
            break;
        default:
            alert("Số kw không hợp lệ! Vui lòng nhập lại");
            total = 0;
            break;
    }
    
    total = new Intl.NumberFormat("vn-VN").format(total);
    document.getElementById("txtElecBill").innerHTML = "Họ tên: " + name + "; Tiền điện: " + total + " vnd"
}

document.getElementById("btnElecBill").onclick = Test_2

// Test 3 Functions
function Test_3() {
    var name = document.getElementById("TaxPayer").value,
        salary = document.getElementById("inputSalary").value,
        dependent = document.getElementById("inputUser").value,
        n = salary  - 4e6 - 16e5 * dependent,
        t = 0;

    switch (true) {
        case (n > 0 && n <= 6e6):
            t = 0.05 * n;
            break;
        case (n > 6e6 && n <= 12e7):
            t = 0.1 * n;
            break;
        case (n > 12e7 && n <= 21e7):
            t = 0.15 * n;
            break;
        case (n > 21e7 && n <= 384e6):
            t = 0.2 * n;
            break;
        case (n > 384e6 && n <= 624e6):
            t = 0.25 * n;
            break;
        case (n > 624e6 && n <= 96e7):
            t = 0.3 * n;
            break;
        case (n > 96e7):
            t = 0.35 * n;
            break;
        default:
            alert("Số tiền thu nhập không hợp lệ");
            return; // Exit the function if income is invalid
    }

    t = new Intl.NumberFormat("vn-VN").format(t);
    document.getElementById("txtTax").innerHTML = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + t + " VND";
}

document.getElementById("btnTax").onclick = Test_3;

// Test 4 Functions
function Test_4() {
    var customerType = document.getElementById("selCustomer").value,  
        customerId = document.getElementById("inputID").value,      
        channelCount = parseInt(document.getElementById("inputChanel").value) || 0,  
        connectionCount = parseInt(document.getElementById("inputConnect").value) || 0, 
        total = 0;  

    if (!customerId || !channelCount || (customerType === "company" && !connectionCount)) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    switch (customerType) {
        case "company":
            total = calculateCost(15, 75, 50, channelCount, connectionCount, 5);
            break;
        case "user":
            total = calculateCost(4.5, 20.5, 7.5, channelCount, 0, 0);
            break;
        default:
            alert("Hãy chọn loại khách hàng");
            return;
    }

    // Display the result
    document.getElementById("txtNet").innerHTML = "Mã khách hàng: " + customerId + "; Tiền cáp: " + 
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total);
}

function calculateCost(baseCost, channelRate, connectionRate, channelCount, connectionCount, additionalRate) {
    var cost = baseCost + channelRate + connectionRate * channelCount;
    if (connectionCount > 10) {
        cost += (connectionCount - 10) * additionalRate;
    }
    return cost;
}

function disableInput() {
    var customerType = document.getElementById("selCustomer").value;
    document.getElementById("inputConnect").style.display = customerType === "company" ? "block" : "none";
}

document.getElementById("btnNet").onclick = Test_4;
