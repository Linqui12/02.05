//concat
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);

//reverse
//push,unshit
arr1.push(4,5,6);
arr1.unshift(4,5,6);
//shift,pop
arr1=['js','css','htlm'];
arr1.shift(0);
arr1.pop();
//slice
arr1 = [1,2,3,4,5];
arr2=arr1.slice(0,3);
arr2=arr1.slice(3,5);
console.log(arr2);
//splice
arr1 = [1,2,3,4,5];
arr1.splice(1,2);
arr1 = [1,2,3,4,5];
arr2=arr1.splice(1,3);
arr1 = [1,2,3,4,5];
arr1.splice(3,0,'a','b','c');
arr1 = [1,2,3,4,5];
arr1.splice(1,0,'a','b');
arr1.splice(6,0,'c');
arr1.splice(8,0,'e');
//sort
arr1=[3,4,1,2,7];
arr1.sort();
//Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
function hasElem(arr,str){
  if(arr.length===0)return false;
  else{
  let pos=arr.indexOf(str)
  if(pos!=-1)return true;//переделал 
}
};
let str='lalalend';
let  arr=[str,];
console.log(arr);
arr.push(str);
console.log(arr);
console.log(hasElem(arr,str));
arr.push('Vanila');
console.log(arr);
console.log(hasElem(arr,'re'));
//Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
let nArr=[1,5,3,8,4,6];
console.log(nArr);
console.log(hasElem(nArr,5));
//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
arr=[1,2,5,8,7,6,5,4,5,5];
function thereAreTheSameNumbers(arr){
  return arr.some((element,index,arr)=>index!==0&&element===arr[index-1]);
};
let result=thereAreTheSameNumbers(arr);
console.log(result);
//Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
function getRandom(min,max){
  return Math.round(Math.random()*(max-min)+min);
};
function fillArrayTen(min,max){
  let temp=[];
  for(let i=0;i<10;i++){
    temp.push(getRandom(min,max));
  }
  return temp;
};
let array=fillArrayTen(5,33);
console.log(array);
//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function avarage(arr){
  if(arr.leagth==0)return 0;
  return arr.reduce((accumulator, current) => accumulator + current) / arr.length;
}
arr1=[12,15,20,25,59,79];
let res=avarage(arr1);
console.log(res);