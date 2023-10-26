//Math fonksiyonlarını kullanmak
const PI = Math.PI
console.log('pi sayisi: ' + PI)
console.log('pi sayisini yuvarla: ' + Math.round(PI)) //yuvarla
console.log('pi sayisini asagi yuvarla: ' + Math.floor(PI)) //aşağı yuvarla
console.log('pi sayisini yukari yuvarla: ' + Math.ceil(PI)) //yukarı yuvarla
console.log('Listedeki min degeri dondur: ' + Math.min(-9, 7, 0, 3, -24)) //min değeri döndür
console.log('Listedeki min degeri dondur: ' + Math.max(-9, 7, 0, 3, -24)) //max değeri döndür

const randNum = Math.random() //0 ve 1 arasında random numara 
console.log('0 ve 1 arasinda sayi dondur: ' + randNum)

let nums = [0, 1, 2, 34]
console.log('dizi: ' + nums)

let var1 = 'Hello'
let yourName = 'John'
let age = 34
let text = `${var1} ${yourName}. You are ${age} years old.`
console.log(text)