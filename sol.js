// Problem
// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.
let object={
  arr:[],
  bache: function(name,maths,English,Physics){
    let obj={};
    obj.name=name;
    obj.math=maths;
    obj.eng=English;
    obj.phy=Physics;
    this.arr.push(obj);
  },
   least: function(){
     let min=Infinity;
     let min_student;
     for(i=0;i<=this.arr.length-1;i++){
       let total=this.arr[i].math+this.arr[i].eng+this.arr[i].phy
       if(total<min){
         min=total;
         min_student=this.arr[i].name;
       }
     }
     console.log(min_student,min);
   },
   higest:function(){
     let max=-Infinity;
     let max_student;
     for(i=0;i<=this.arr.length-1;i++){
       let total=this.arr[i].math+this.arr[i].eng+this.arr[i].phy
       if(total>max){
         max=total;
         max_student=this.arr[i].name
       }
     }
     console.log(max_student,max);
   }
}
object.bache("Suraj",91,86,91);
object.bache("Dost",75,76,62);
object.bache("Dushman",43,65,42);

object.higest()
object.least()
