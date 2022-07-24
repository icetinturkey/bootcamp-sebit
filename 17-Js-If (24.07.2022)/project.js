// Uygulama
// Şifre uzunluğu 12 den büyükse güçlü şifre
// 8-12 arasındaysa yeterli şifre
// 8 den küçükse yetersiz olduğunu yazdırın
const sifre="cekoslovakyalilastiramadiklarimizdanmisiniz";
if(sifre.length > 12){
	console.log("Şifre Güçlü");
}else if(sifre.length >= 8 && sifre.length <= 12){
	console.log("Şifre Yeterli");
}else{
	console.log("Şifreyi Yeniden Girin");
}