let email = "cnboz@hotmail.com";
console.log(email);
//BİRLEŞTİRME
let ad = "İsmail";
let soyad = "Çetin";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[0]);
//Kaç Karakter
console.log(adSoyad.length);
//String Metodlar
console.log(adSoyad.toUpperCase());
let kucuk = adSoyad.toLowerCase();
console.log(kucuk);
//Kaçıncı İndekste Bulunduğu
let i = adSoyad.indexOf('a');
let iSon = adSoyad.lastIndexOf('a');
console.log(i + " " + iSon);
//Slice Kullanımı
let isim = adSoyad.slice(0,8);
console.log(isim);
//Replace
let boslukSil = adSoyad.replace(" ","");
let HepsiboslukSil = adSoyad.replaceAll(" ","");