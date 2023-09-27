//bai 1
// == a ==

function kiemTraAmDuong(n)
{
    if(n<0)
    {
        console.log("n la so am")
    }
    else if(n>0)
    {
        console.log("n la so duong")
    }
    else
    {
        console.log("n khong am khong duong")
    }
}

// kiemTraAmDuong(1)

// == b ==
function kiemTraChanLe(n)
{
    if(n%2 == 0)
    {
        console.log("n la so chan")
    }
    else
    {
        console.log("n la so le")
    }
}
// kiemTraChanLe(1)

// == c ==
function kiemTraSoLonNhat(a, b, c)
{
    let max = -9999
    if(a > max)
    {
        max = a
    }
    if(b > max)
    {
        max = b
    }
    if(c > max)
    {
        max = c
    }
    return max
}
// let soLonNhat = kiemTraSoLonNhat(3,8,7)
// console.log("So lon nhat: ",soLonNhat)

// == d ==
function kiemTraNamNhuan(n)
{
    if(n % 4 == 0 && n % 100 != 100)
    {
        console.log("La nam nhuan")
    }
    else
    {
        console.log("Khong phai nam nhuan")
    }
}
// kiemTraNamNhuan(2024)

// == e ==
function kiemTraNguyenPhuAm(n)
{
    if( n == 'a' || n == 'e' || n == 'i' || n == 'o' || n =='u')
    {
        console.log("La nguyen am")
    }
    else
    {
        console.log("La phu am")
    }
}
// kiemTraNguyenPhuAm('e')

// bai 2
// == a ==
function tinhPhuongTrinh(a, b, c)
{
    const delta = (b*b) - (4*a*c)
    let x1,x2
    if(a == 0 && b == 0)
    {
        console.log("Phuong trinh vo nghiem")
    }
    else if(a == 0)
    {
        x1 = -c/b
        console.log("Nghiem = ", x1)
    }
    else if(delta <0)
    {
        console.log("Phuong trinh vo nghiem")
    }
    else if(delta == 0)
    {
        x1 = (-b)/(2*a)
        console.log("Nghiem kep = ", x1)
    }
    else
    {
        x1 = (-b + Math.sqrt(delta))/(2*a)
        x2 = (-b - Math.sqrt(delta))/(2*a)
        console.log("x1 = ",x1)
        console.log("x2 = ",x2)
    }
}

// tinhPhuongTrinh(2,-7,3)

// == b ==
function tinhThueNET(n)
{
    let Thue = 0
    if(n>= 15000000)
    {
        Thue = n * 20 / 100
    }
    else if (n>= 8000000)
    {
        Thue = n * 15 / 100
    }
    console.log("Thue thu nhap NET la", Thue)
}
// tinhThueNET(7000000)

// == c ==
function xepHangHocLuc(kTra, gKy, cKy)
{
    let dtb = (kTra + gKy*2 + cKy*3)/6
    if(dtb>=9)
    {
        console.log("DTB %d, Xep hang A", dtb)
    }
    else if(dtb>=7)
    {
        console.log("DTB %d. Xep hang B", dtb)
    }
    else if(dtb>=5)
    {
        console.log("DTB %d. Xep hang C", dtb)
    }
    else
    {
        console.log("DTB %d. Xep hang F", dtb)
    }
}
// xepHangHocLuc(5,7,1)

// == d ==
function tinhGiaCuoc(soPhut)
{
    let phiThueBao = 25000
    if(soPhut < 50)
    {
        phiThueBao = phiThueBao + 600*soPhut
    }
    else if(soPhut < 200)
    {
        phiThueBao = phiThueBao + 600*50 + (soPhut-50)*400
    }
    else
    {
        phiThueBao = phiThueBao + 600*50 + 400*150 + (soPhut-200)*200
    }
    console.log("Phi thue bao = ", phiThueBao)
}
// tinhGiaCuoc(300)