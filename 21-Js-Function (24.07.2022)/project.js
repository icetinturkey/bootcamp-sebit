function hello(){
	console.log("Hello");
}
hello();

//Fonksiyonlara Parametre Gönderme
const canboz = function(ad="Can",soyad="Boz"){
	console.log(`Ad Soyad $(ad) $(soyad)`);
}
canboz("Kemal","Dağ");

//Eski tipten arrow fonksiyona hafif geçiş
const alan = function(kenar){
	return kenar*kenar;
}
let sonuc = alan(6);
console.log(sonuc);

//Arrow ilk versiyon
//const alan = (kenar) => {
//	return kenar**2;
//}
//Tek parametre ise
//const alan = kenar => {
//	return kenar**2;
//}
const alan = kenar => kenar**2;
console.log(alan(7));

const donus = () => {
	return "Burak";
}
const strDonus = () => "Burak";
console.log(strDonus());

//UYGULAMA
//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın
const urunSatis = (urunler,vergi) => {
	let toplam=0;
	for(let i=0;i<urunler.length;i++){
		toplam += urunler[i]+urunler[i]*vergi;
	}
	return toplam;
}
console.log(urunSatis([10,20,30],0.25));