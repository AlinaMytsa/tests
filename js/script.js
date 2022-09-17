'use strict';

(function () {
  const plus = document.getElementById('plus');
  const counter = document.getElementById('counter');
  const minus = document.getElementById('minus');

  if (localStorage){
    counter.innerText = JSON.parse(localStorage.getItem('currentItem'));
  }

  document.body.addEventListener("click", item => {

    const obj = {
      increment: num => ++num,
      decrement: num => --num,
    }

    if( item.target === plus){
      counter.innerText = obj.increment(counter.innerText);
      countSave(counter.innerText);
    }

    if( item.target === minus && counter.innerText > 0){
      counter.innerText = obj.decrement(counter.innerText);
      countSave(counter.innerText);
    }

  })



  const countSave = (data) => {
    localStorage.setItem('currentItem', data);


  }


})()

























// const obj = {
//   age : null,
//   fullName: null,
//
//   getAge: function(num){
//     this.age = 2022 - num
//   },
//
//   getFullName: (string, string2) => {
//     this.fullName = `${string} ${string2}`
//   }
// }
//
// obj.getFullName('Mytsa', 'Alina');
//
//
// obj.getAge(2000);
// console.log(obj);

//
// const arr = [4, 6, 865, 65, 7, 6];
//
// const anotherArr = [];
//
// arr.forEach((item) => {
// if (item > 10){
//   anotherArr.push(item);
// }
// })
//
// console.log(anotherArr);


//  const result = arr.reduce( (accum,item) =>{
//   return accum += item
// }, 0);
// console.log(result);
//
//
//
// const result1 = arr.reduce((accum,item) =>{
//   accum[item] = accum[item] + 1 || 1;
//   return accum
// }, {});
// console.log(result1);
//
//
// const result2 = arr.reduce( (accum,item) =>{
//   accum.push(Math.pow(item, 2))
//   return accum
// }, []);
//
// console.log(result2);
