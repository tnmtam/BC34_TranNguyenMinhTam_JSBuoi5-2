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



//     //VND
//     var formart = new Intl.NumberFormat("vn-VN");
//     var totalVnd = formart.format(total) + ' VND';
