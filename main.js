/**
 * BT1:
 */

document.getElementById('btnTinh').onclick = function() {
    //input
    var name = document.getElementById('name').value;
    var totalTN = document.getElementById('totalTN').value * 1;
    var people = document.getElementById('people').value * 1;
    var VAT = 0;
    //process
    var thuNhapCT = totalTN - 4000000 - people * 1600000;
    if(thuNhapCT > 0 && thuNhapCT <= 60000000) {
        VAT = thuNhapCT * 0.05;
    }else if(thuNhapCT > 60000000 && thuNhapCT <= 120000000) {
        VAT = thuNhapCT * 0.1;
    }else if(thuNhapCT > 120000000 && thuNhapCT <= 210000000) {
        VAT = thuNhapCT * 0.15;
    }else if(thuNhapCT > 210000000 && thuNhapCT <= 384000000) {
        VAT = thuNhapCT * 0.2;
    }else if(thuNhapCT > 384000000 && thuNhapCT <= 624000000){
        VAT = thuNhapCT * 0.25;
    }else if(thuNhapCT > 624000000 && thuNhapCT <= 960000000){
        VAT = thuNhapCT * 0.3;
    }else if (thuNhapCT > 960000000){
        VAT = thuNhapCT * 0.35;
    }else {
        alert('Tổng thu nhập năm không được để trống!')
    }
    var formart = new Intl.NumberFormat("vn-VN");
    var VATVnd = formart.format(VAT) + ' VND';
    //output
    document.getElementById('tinhThue').innerHTML = 'Họ tên: ' + name + '; Tiền thuế thu nhập cá nhân: ' + VATVnd;
}

/**
 * BT2: 
 */

document.getElementById('btnTinhTien').onclick = function() {
    //input
    var user = document.getElementById("user").value;
    var maKH = document.getElementById('maKH').value;
    var kenhCC = document.getElementById('kenhCC').value *1;
    var soKN = document.getElementById('soKN').value *1;
    var hoaDon = 0;
    var phiDV = 0;
    var total;
    //process
    switch(user) {
        case "Nhà dân":
            hoaDon = 4.5;
            phiDV = 20.5;
            kenhCC = kenhCC * 7.5;
            total = hoaDon + phiDV + kenhCC;  
        break;

        case "Doanh nghiệp":
            hoaDon = 15;
            kenhCC = kenhCC * 50;
            if(soKN <= 10) {
                phiDV = soKN * 75;
            }else {
                phiDV = 10 * 75 + (soKN - 10) * 5;
            }
            total = hoaDon + phiDV + kenhCC;
        break;

        default:
            alert("Hãy chọn người dùng!");
    }

    var formart = new Intl.NumberFormat('en-US', {
        // style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
    var total$ = '$' + formart.format(total); 
    //output
    document.getElementById('tienCap').innerHTML = 'Mã khách hàng: ' + maKH + '; Tiền cáp: ' + total$;
    
}

function myFuntion() {
    var x = document.getElementById("user").value;
    switch(x) {
        case "Doanh nghiệp":
            document.getElementById("soKN").style.display = "block";
        break;

        default:
            document.getElementById("soKN").style.display = "none";

    }
}

