//bai1
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let doDaiMang = arr.length

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
// for(let i = doDaiMang-1; i>=0; i--)
// {
//     arr[i+1] = arr[i];
// }
// arr[0] = 117
// console.log(arr)

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
// let bienTam=0
// console.log(arr)
// for(let i = 0; i<doDaiMang-1; i++)
// {
//     for(let j = i+1; j<doDaiMang; j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             bienTam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = bienTam
//         }
//     }
// }
// console.log(arr)

//j
// let bienTam = 0
// console.log(arr)
// for(let i=0; i<doDaiMang-1; i++)
// {
//     for(let j = i+1; j<doDaiMang; j++)
//     {
//         if(arr[i]< arr[j])
//         {
//             bienTam=arr[i]
//             arr[i]= arr[j]
//             arr[j] = bienTam
//         }
//     }
// }
// console.log(arr)

//k
// console.log("Danh sach so chan: ")
// for(let i=0; i<doDaiMang; i++)
// {
//     if(arr[i]%2 ==0)
//     {
//         console.log(arr[i])
//     }
// }

//l
// console.log("Danh sach so le")
// for(let i=0; i<doDaiMang; i++)
// {
//     if(arr[i]%2 !=0)
//     {
//         console.log(arr[i])
//     }
// }

// == bai 2
let arr = [5,-2,5,-6,23,69,100,-13,10,0,14]
let doDaiMang = arr.length

//a
// for(let i = 0; i < doDaiMang-1; i++)
// {
//     for(let j = i+1; j<doDaiMang; j++)
//     {
//         if(arr[i] + arr[j] == 10)
//         {
//             console.log("[%s, %s]",arr[i], arr[j])
//         }
//     }
// }

//b
console.log(arr)
for(let i = 0; i<doDaiMang-1; i++)
{
    for(let j = i+1; j<doDaiMang; j++)
    {
        if(arr[i]==arr[j])
        {
            console.log("Phan tu trung nhau: ", arr[i])
            for(j; j<=doDaiMang;j++)
            {
                arr[j] = arr[j+1]
            }
        }
    }
}
console.log(arr)