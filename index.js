//concat
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3);
//reverse
console.log(arr1.reverse());
console.log(arr1.reverse());
 //push,unshit
arr1.push(4,5,6);
arr1.unshift(4,5,6);
console.log(arr1);
//shift,pop
arr1=['js','css','htlm'];
console.log(arr1.shift(0));
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);
//slice
arr1 = [1,2,3,4,5];
arr2=arr1.slice(0,3);
console.log(arr2);

arr2=arr1.slice(3,5);
console.log(arr2);
//splice
arr1 = [1,2,3,4,5];
arr1.splice(1,2);
console.log(arr1);

arr1 = [1,2,3,4,5];
arr2=arr1.splice(1,3);
console.log(arr2);

arr1 = [1,2,3,4,5];
arr1.splice(3,0,'a','b','c');
console.log(arr1);

arr1 = [1,2,3,4,5];
arr1.splice(1,0,'a','b');
arr1.splice(6,0,'c');
arr1.splice(8,0,'e');
console.log(arr1);
//sort
arr1=[3,4,1,2,7];
console.log(arr1.sort());
///////////////////////////
function hasElem(arr,str){
  let temp=0;
  for(arr.begin;i<arr.,i++;){
    if(arr[i]===str) temp++;;
  }
  if (temp!==0) return true;
  else return false;
}
let str='lalalend';
let arr=[];
arr.push(str);
console.log(hasElem(arr,str));

