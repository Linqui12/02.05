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
  let pos=arr.indexOf(str)
  if(pos!=-1){
    return true;
  }
  else return false;
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
/////////////////////////////////
let nArr=[1,5,3,8,4,6];
console.log(nArr);
console.log(hasElem(nArr,5));
//////////////////////////////////////////////////
nArr=[1,2,5,8,7,6,5,4,5,2,5];
console.log(nArr);
function thereAreTheSameNumbers(arr){
   let tempo=0;
    for(let i = 0;i<arr.length;i++){
      for(let j=i+1;j< arr.length;i++){
        if(arr[i]===arr[j]){
          tempo++;
        }
      }
      
     
    }
    if(tempo!=0){
      return true;
    }
    else{
      return false;
    }
};
let result=thereAreTheSameNumbers(nArr);
console.log(resuult);
////////////////////////////////////////////////
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
console.log(array);//
/////////////////////////////////////////////////////////
function avarage(arr){
  let temp=0;
  for(let i = 0;i<arr.length;i++){
    temp+=arr[i];
  }
  console.log(temp);
  return temp/arr.length;

}
arr1=[12,15,20,25,59,79];
let res=avarage(arr1);
console.log(res);
////////////////////////////////////////////////