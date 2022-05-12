//12.05.22
// const toString = function(){
//   return `${this.name} ${this.sname}`
// }
// const man={
//   countFingers:5,
//   read:function(){
//     return this.name + ' is reading';
//   }
// }
// const student={
//   id:1,
//   name: 'Elon',
//   sname: 'Musk',
//   age:50,
//   toString,
// };
// student.__proto__=man;//наследование sudent  от man!!!!
// console.log(student);
// console.log(student.read());
// const rabbit={
  
//   countPaw : 4,
//   toJump:function(){
//     return ' i`M jumping';
//   }
// };
// const rabbitPet={
//   name:'Dilan',
//   isPet:function(){
//     return 'Pet: ' + this.name;
//   }
// };
// const rabbitMagic={
//   name:'Mike',
//   ToSay:function(word){
//     return   this.name + ' say : '+ word;
//   }
// };
// rabbitPet.__proto__= rabbit;
// rabbitMagic.__proto__=rabbitPet;
// console.log(rabbitMagic.ToSay('bla'));

// function Ladder(){
//   this.step=0
// };
// function LadderPrototype(){
//   this.show= function(){
//     return this.step;
//   } 
//   this.up=function(){
//     this.step++;
//     return this;
//   };
//   this.down=function(){
//      this.step--;
//      return this;
//   };
// };
// Ladder.prototype=new LadderPrototype();

// const ladder=new Ladder();
// console.log(ladder.up());
// console.log(ladder.show());
// console.log(ladder.up());
// console.log(ladder.show());
// console.log(ladder.down());
// console.log(ladder.show());
// console.log(ladder.up().up().up().up().up());
// console.log(ladder.down().down().up().up().up().show());
// const a=Math.random();
// console.log(a);    ------- математический рандом( 0- 10 )
// console.log(a*10);

