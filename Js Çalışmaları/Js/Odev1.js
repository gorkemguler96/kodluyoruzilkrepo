let fullName = prompt("İsminiz Nedir?")
let info =document.querySelector("#myName")
info.innerHTML = `${fullName.toUpperCase()}`;

let tarih = new Date()
let saat = tarih.getHours()
let dakika = tarih.getMinutes()
let saniye = tarih.getSeconds()
let gün = tarih.getDay()
let günler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let saat1 =document.querySelector("#myClock")
saat1.innerHTML = `${saat}:${dakika}:${saniye} ${günler[`${gün}`]}`



