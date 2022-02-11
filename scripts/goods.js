const goods = document.querySelector('.goods');

const  counterGroups = goods.querySelectorAll('.counter-group');


counterGroups.forEach((item) => {
const  counterButtonMinus = item.querySelector('.counter-button--minus');
const  counterButtonPlus = item.querySelector('.counter-button--plus');

const  counterInput = item.querySelector('.counter-input');

let num = Number(counterInput.value);

counterButtonPlus.addEventListener('click', () => {
	num = num += 1;
	counterInput.value = String(num);

})
counterButtonMinus.addEventListener('click', () => {
	num -= 1;
	counterInput.value = String(num);


		})
});

const more = document.querySelector('.more-open'),
      card = document.querySelectorAll('.card'),
      other = document.querySelectorAll('.other');


more.addEventListener('click', () => {
for(let i=4; i< 8; i++ ) {
card[i].classList.remove('other');
}

})