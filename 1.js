const tempr = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Результат по Фаренгейту  ${tempr}  равен ${sum(tempr)}`);
function sum(tempr) {
    return Math.round(((9 / 5) * tempr + 32) * 10) / 10;
}


// const tempr = Number.parseFloat = prompt('Введите температуру в градусах Цельсия!');


// const degree = function calculateDegree(tempr) {
//     return (9 / 5) * tempr + 32;
// }


// alert('Результат по Фаренгейту $tempr равен $degree');





// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений,
//     которые ввел пользователь, вывод должен выглядеть так(пример):
// Результат сложения чисел 5 и 2 равен 7 //


// Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя
//  по имени в консоль.
// Проверить работоспособность функции
// const yourname = prompt(`ВВедите ваше имя `);
// function printHello(name) {
//     console.log(`привет ${name}`)
// }
// // printHello(yourname);

// // Задача 4 в скрине в папке этого проекта
// const answer = confirm('Вам хорошо живется? ');
// if (answer) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну вы держитесь там!");
// }
// const age = Number.parseInt(prompt("Введите ваш возраст"));
// switch (age) {
//     case 18:
//         alert("Вы совершеннолетний, Все можно");
//         break;
//     case 10:
//         alert('Вам надо учить уроки!');
//         break;
//     case 30:
//         alert('Ложитесь спасть, хавтра на работу!');
//         break;
//     default:
//         alert('Мы не знаем, что вам делать!');

// }