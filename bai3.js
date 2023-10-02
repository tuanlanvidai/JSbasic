//bai1
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let doDaiMang = arr.length

// for(let i = 0; i< doDaiMang;  i++)
// {
//     console.log("Phan tu thu %s = %s", i, arr[i])
// }
// ==b
// let tongPhanTu = 0
// for(let i = 0; i<doDaiMang; i++)
// {
//     tongPhanTu = tongPhanTu + arr[i];
// }
// console.log("Tong phan tu = %d", tongPhanTu)

//==c
// let max=arr[0]
// let min=arr[0]
// for(let i=0; i<doDaiMang; i++)
// {
//     if(max<arr[i])
//     {
//         max=arr[i]
//     }
//     if(min>arr[i])
//     {
//         min=arr[i]
//     }
// }
// console.log("Phan tu lon nhat: %d, nho nhat: %d", max, min)

//==d
// let tongPhanTu = 0;
// let soPhanTu = doDaiMang
// for(let i=0; i<doDaiMang; i++)
// {
//     tongPhanTu = tongPhanTu + arr[i]
// }

// const trungBinhCong = tongPhanTu/soPhanTu
// console.log("Trung binh cong: ", trungBinhCong)

//==e
// let arr1 = []
// let j=0
// for(let i =doDaiMang - 1; i >=0 ; i--)
// {
//     arr1[j] = arr[i]
//     j++
// }
// for(let i=0;i<doDaiMang;i++)
// {
//     console.log(arr1[i])
// }

//==f
// for(let i = 0; i<doDaiMang-1;i++)
// {
//     count =1
//     for(let j = 1; j<doDaiMang;j++)
//     {
//         if(arr[i] == arr[j])
//         {
//             count = count+1
//         }
//     }
//     console.log("%d xuat hien %d lan", arr[i], count)
// }

//g
for(let i = doDaiMang-1; i>=0; i--)
{
    arr[i+1] = arr[i];
}
arr[0] = 117
console.log(arr)

//h
// let phanTuHienTai = arr[0]
// for(let i = 1; i< doDaiMang; i++)
// {
//     if(arr[i]<phanTuHienTai)
//     {
//         console.log("Day so khong tang dan")
//         return 0
//     }
//     else
//     {
//         if(i!=doDaiMang-1)
//         {
//             phanTuHienTai = arr[i]
//         }
//         else 
//         {
//             console.log("Day so tang dan")
//         }
//     }
// }

//i
let bienTam=0
for(let i = 0; i<doDaiMang-1; i++)
{
    if(arr[i]>arr[i+1])
    {
        bienTam = arr[i]
        arr[i]= arr[i+1]
        arr[i+1]=bienTam
    }
    i++
}
console.log(arr)