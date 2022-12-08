"use strict"
console.log( alert('Спроби опанувати JS продовжуються =) Відповіді у JS-файлику'))
// ==========================
// Масиви в javascript
// ==========================


// Видаляємо елемент 

// Починаючт з першої позиції (в даному випадку це буде Паша) видаляємо один елемнт

// arrOne.splice( 1, 1 );
// console.log( arrOne );

// Видадяємо обʼєкт і повертаємо його в змінну
let arrTwo = ['Ваня', 'Паша', 'Оля',];
let removed = arrTwo.splice( 1, 1 );
console.log( removed );

// Заміна елементу
let arrThree = ['Ваня', 'Паша', 'Оля',];
// Починаємо з 0 (нульвої) позиції (Ваня), заміняючт один елемент
arrThree.splice( 0, 1, 'Валєра' );
console.log( arrThree );

// Додати елемент до масиву
let arrFour = ['Оля', 'Ваня', 'Паша',];
// Починаємо з першої позиції (перед 'Ваня')
arrFour.splice( 1, 0, 'Маша', 'Коля' );
console.log( arrFour );
console.log( arrFour.langht );

// Видалаємо елементи
let arrFive = ['Оля', 'Ваня', 'Паша',];
//  Починаючи з останньої позиції (Паша), видаляємо один елемент
arrFive.splice( -1, 1 );
console.log( arrFive );

// Копіюємот частину масиву, створюючи новий масив, в який копіюємо частину або весь массив
// Синтаксис arr.splie([start], [end])
let arrSix = ['Оля', 'Ваня', 'Паша',];

// Починаючи з 1-ї позиції 'Ваня', до другої позиції 'Паша' (не включаючи її)
let arrSeven = arrSix.slice( 1, 2 );
console.log( arrSeven );


// Починаючи з передостанньої позиції 'Ваня', до другої позиції 'Оля' (не включаючи її)
let arrEight = arrSix.splice( -2, -1 );
console.log( arrEight );

// Копіюємо весь масив(робимо дубль)
let arrNine = arrSix.splice();
console.log( arrNine );


// Метод concat - робить дубль масиву і може додати ще одне значення

let arOn = ['Оля', 'Ваня', 'Паша',];
let arTw = arOn.concat( 'Саша' );
console.log( arTw );


// Метод split, join
//splin - перетворює строку в масив
// join  - перетворює масив у строку
let sts = 'Алла, Петя, Маша';
let ar = sts.split( ',', 1 ); // - є можливість обмежити кількість
console.log( ar );

// Методи reduce/reduceRight



// Сортування чисел

let arrTen = [8, 22, 1];
console.log(arrTen.sort());

function compareNumeric(a, b) {
	console.log(`Порівнюємо ${a} і ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
	return a - b;
}
console.log( arrTen.sort( compareNumeric ) );

//==================
// Задача №1
//==================

//  Яке число, довжину ми отримаємо?

let arr = ['Ivan', 'Stepan', 'Olya',];
let newArr = arr;
newArr.push( 'Petya' );
console.log( arr.length );
console.log( arr );
// Отримаємо число 4 тому що push додає елемент в кінець масиву

//==================
// Задача №2
//==================

// Створіть масив users з елементами "Vanya", "Stepan". Додойте  "Olya" в кінець.
// Замініть значення "Stepan" на "Petro".
// Ваш код для пошуку повинен працювати с будь-якою довжиною. Видаліть перший елемент масиву і покажіть його. Вставте "Masha" i "Pasha" на початок масиву.

/*
let users = ['Vanya', 'Stepan',];
users.push( 'Olya' );
console.log( users );
*/

let users = ['Vanya', 'Stepan',];
users.push( 'Olya', );
users[1] = 'Petya';
console.log( users ); 
let usersSpl = users.splice( 0, 1 )
console.log( usersSpl );
users.unshift( 'Masha', 'Pasha', );
console.log( users );
let result = users.filter( function ( item, index, array ) { } );
console.log( result )  // - Ваш код для пошуку повинен працювати с будь-якою довжиною - ось це завдання нажаль не зрозумів(


//==================
// Задача №3
//==================

// Видалити елемент 'Vanya' і повернути його в змінну
let newArrOne = ['Vanya', 'Stepan', 'Olya',];
newArrOne = newArrOne.splice( 0, 1 );
console.log( newArrOne );


//==================
// Задача №4
//==================

// Зробити із рядка масив
let str = 'Vanya, Stepan, Olya';
let newStr = str.split( ',' );
console.log( newStr );


//==================
// Задача №5
//==================

// Чому дорівнює previousValue на початку роботи масиву
let areTwo = [9, 2, 8,];
let reduceValue = arrThree.reduce( function ( previousValue, item, index, array ) { console.log( previousValue ) } );

// В консолі мені показало дві відповіді) якщо undefined я ще можу якось логічно пояснити, типу назва такої змінної відсутня, то результат Валєра це взрив=)


// =============
// Функціїї в js
// =============


//==================
// Задача №1
//==================

// Хто попаде в консоль першим, Вася чи Коля?
function showName() {
	console.log( 'Vasya' );
}
setTimeout( showName, 0 );
console.log( 'Kolya' );
// В консоль попаде Вася швидше ніж Коля, так як Васі було задано інтервал, через який від зʼявиться


//==================
// Задача №2
//==================

// Чи вірно викликана функція
/*
showMessage();
function showMessage () {
	console.log( 'Повідомлення' );
} // - вірний запис, функцію можна викликати як до її оголошення так і після. Основна мета і завдання - це економія строк коду
*/


//==================
// Задача №3
// Чи вірно викликана функція
//==================

/*
showMessag();
let showMessag = function () {
	console.log( 'Повідомлення' );
} - в даному варіанті в консолі буде помилка, допущено помилку в синтаксисі, після фігурних дужок потрібно поставити крапку з комою. Так як це функціональний вираз і викликати його потрібно після. При правильному записі, з ; і викликом до, всерівно помидка в консолі
*/

//==================
// Задача №4
//==================
// Як вирішити проблему?

// "use strict"
/*
if ( 2 > 1 ) {
	function showMessage () {
		console.log( 'Message' );
	}
	
}
showMessage();
*/ // - дана запис викличе помилку, так як при строгому режимі виклик можливий при одному рівні вкладеності

/*
if ( 2 > 1 ) {
	function showMessage () {
		console.log( 'Message' );
	}
	showMessage();
}
*/ // - вірний запис





// const newElement = document.createElement( 'div' );
// console.log( newElement );

//  Отримуємо обʼєкт
const textElement = document.querySelector( '.text' );

// Створюємо ноаий елемент(тег)
const newElement = document.createElement( 'div' );
// Наповнюємо новий елемент
newElement.innerHTML = 'Живи, а працюй у вільний час!';

// Вставляємо новий елемент
textElement.append( newElement );

// ============
// DOM
// ============

// Задача №1
// Отримати в змінну елемент з атрибутом data-say-hi і прочитати значення цього атрибуту

const sayHi = document.querySelector( '[data-say-hi]' );
console.log( sayHi );

// Задача №2
// Отримати в змінну елемент з текстом Йончи

const name = document.querySelector( '.list li+li' );
console.log( name );
// Ментори, підскажіть будь-ласка чи це праивльний варіант? Заздалегідь дякую)

// Задача №3
// Отримати в змінну колекцію елементів з класом like

const className = document.querySelectorAll( `.like` );
console.log( className );

// Задача №4
// Куди добавиться <li>Тескт</li>?


/*
const list = document.querySelectorAll( 'ul' );
list.insertAdjacentHTML(
	'beforeend',
	'<li> Тескт </li>'
);
*/

// В консолі видає помилку, так як ми хочемо добавити до всьої колекції. А якщо замінити querySelectorAll на querySelector то текст буде після Пункт №2


// ========
// JS розміри прокрутки і координати елементів на сторінці і вікна браузера
// ========


// ============
// Задача №1
// ============
// дізнатися ширину полоси прокрутки 
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;
console.log( mainElementWidth );
console.log( mainElementHeight );


// Ширина і висота браузера з полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log( windowWidth );
console.log( windowHeight );

const scrolWidth = windowWidth - mainElementWidth;
console.log( scrolWidth );


/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);

const mainElement = document.documentElement;
const bodyElement = document.body;

const clientWidth = mainElement.clientWidth;
console.log(clientWidth);

const clientWidthBody = bodyElement.clientWidth;
console.log(clientWidthBody);

// const clientHeight = mainElement.clientHeight;
// console.log(clientHeight);

// const clientHeightBoby = bodyElement.clientHeight;
// console.log(clientHeightBoby);
*/



// ============
// Задача №2
// ============
// Заставити браузер прокрутитись на 400рх зверху спуститись через секунду після відкриття сторінки

function scrollTop() {
	window.scrollTo( {
		top: 400,
		left: 0,
		behavior: "smooth"
	} );
}
setTimeout( scrollTop, 1000 );


// ============
// Задача №3
// ============
// Отримайте координати будь-яких трьох елементів на сторінці

const firstItem = document.querySelector( '.like' );
const getFirstItem = firstItem.getBoundingClientRect();
console.log(getFirstItem);

const secondItem = document.querySelector( '.subscribe' );
const getSecondItem = secondItem.getBoundingClientRect();
console.log(getSecondItem);

const thirdItem = document.querySelector( '.subscribe' );
const getThirdItem = thirdItem.getBoundingClientRect();
console.log(getThirdItem);



// ==== Якась практика

/*
// Отримуємо обʼєкт
const textElement = document.querySelector( '.text' );
// Отримуємо вміст обʼєкту, як є в HTML
const textElementContent = textElement.innerHTML;
console.log( textElementContent );

// Дописуємо якийсь вміст до обʼєкта
textElement.innerHTML = 
`<p>${textElementContent}</p> <p>Живи, а працюй у вільний час)</p>`
console.log( textElement.innerHTML );
*/

/*
// Отримуємо обʼєкт
const textElement = document.querySelector( '.text' );
// Отримуємо вміст обʼєкту, як є в HTML
const textElementContent = textElement.outerHTML;
console.log( textElementContent );

// Дописуємо якийсь вміст до обʼєкта
textElement.outerHTML = 
`<p>Живи, а працюй у вільний час)</p>`
console.log( textElement.outerHTML );
*/
if ( navigator.userAgent.includes("Chrome") ) {
	console.log("Chrome");
} else if ( navigator.userAgent.includes( "Firefox" ) ) {
	console.log("Firefox");
} else if ( navigator.userAgent.includes( "Safari" ) ) {
	console.log("Safari");
}
console.log( navigator.platform );
console.log( location.href );
// location.href = "https://google.com";
// let confirmAnswer = confirm("Маєш автомобіль?");
// console.log( confirmAnswer );
// let promptAnswer = prompt("Запитання");
// console.log( promptAnswer );
const headElement = document.head;

/*
const nameExp = ['Vanya', 'Stepan', 'Olya', 'Pasha', 'Ivan', 'Sasha',];
let findName = 'Pasha';
let newName = 'Nika';
nameExp.forEach( ( item, index ) => {
	if ( item === findName ) {
		nameExp.splice( index, 1, newName );
	}
} );
console.log( nameExp );
*/
// Перебор із заміною Pasha на Nika;

/*
let usersName = ['Vanya', 'Stepan', ];
console.log( usersName );
usersName.forEach( userP => {
	console.log( userP );
} );
*/
// Перебор із виводом значень в консоль