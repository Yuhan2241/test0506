let arr = []

fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-67D405BE-7D98-4292-87C4-06A0880B4B98")
//res為API回傳的資料，強制將傳回來的資料利用 .json 方法轉換成 js看得懂的格式
.then(res => res.json())
// 強制將轉換好的資料，做我們想做的事
.then(data =>{
    console.log(data)
    console.log(data.records.location)
    arr = data
    let aaaa = [1,2,3,4,5]
    for(let i = 0 ; i < aaaa.length; i++){
        Selection.innerHTML += '<option value=${aaaa[]}>'
    }
    console.log(arr)
})


console.log(arr)
const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    console.log(arr)
})

