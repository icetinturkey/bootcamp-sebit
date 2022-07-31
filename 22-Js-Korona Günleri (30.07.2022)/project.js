//STEP 1
// doğru cevapları bir dizide tut  doğru cevaplar E E E E
// STEP 2
//Formu bir şekilde çekin içindeki kullancının girdiği değerleri alın formu çektikten sonra içindeki değerlere örneğin q1.value ile ulaşıyorum
// STEP 3
// İster forma submit olduğunda eventi eklersiniz ister button a click eventi
//STEP 4
// doğru cevaplarla kullancının girdiği cevapları foreach yardımıyla kontrol edip doğru cevap sayısı kadar puanı arttırın
// başlangıç score u na 0 atayın
// STEP 5
// d-none class ını kaldırın
// elde ettiğiniz score u span ın içine bastırın
const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
console.log(form);
console.log(result);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove('d-none');
  result.querySelector('#percentage').textContent = `${score}%`;
  console.log(result.classList);
});