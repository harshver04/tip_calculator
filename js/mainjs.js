
//Hide the tip amount on load
document.getElementById("ans_tip_per_person").style.display = "none";
document.getElementById("ans_total_per_person").style.display = "none";

//get the all button from the file
let calcBtn = document.querySelector('.calcBtn');
let sub_tip_btn= document.querySelector('.button-tip-subtract');
let add_tip_btn= document.querySelector('.button-tip-addition');
let sub_people_btn= document.querySelector('.button-people-subtract');
let add_people_btn= document.querySelector('.button-people-addition');

// Dynamically  import Tip class 
calcBtn.addEventListener('click', () => {
    import('./myjs.js').then((Module) => {
        
        let bill_amount=document.getElementById("bill").value;
        let tip_per=document.getElementById("tip").value;
        let no_people=document.getElementById("no_people").value; 
        var temp = new Module.Tip(bill_amount,tip_per,no_people);//temp is a object of Tip class
        
        temp.ck_input();//perform input validation
        var tip_per_person=temp.calculate_Tip();//calculate tip per person
        var total_per_person=temp.calculate_total();//calculate total per person

        total_per_person = Math.round(total_per_person * 100) / 100;
        
        total_per_person = total_per_person.toFixed(2);//take to value after dedcimal
        tip_per_person = tip_per_person.toFixed(2);//take to value after dedcimal

        document.getElementById("ans_tip_per_person").innerHTML=" $ "+tip_per_person;
        document.getElementById("ans_total_per_person").innerHTML=" $ "+total_per_person;
        
    })
  });
//tip decreament with the help of dynamic import module
  sub_tip_btn.addEventListener('click', () => {
    import('./myjs.js').then((Module) => {    
        var tip_pers=document.getElementById("tip").value;
        console.log(tip_pers);
        var temp1 = new Module.increment_decrement(tip_pers);
        tip_pers=temp1.decre();
        document.getElementById("tip").value=tip_pers;        
    })
  });
//Tip increament with the help of dynamic import module
  add_tip_btn.addEventListener('click', () => {
    import('./myjs.js').then((Module) => {    
        var tip_perss=document.getElementById("tip").value;
        console.log(tip_perss);
        var temp2 = new Module.increment_decrement(tip_perss);
        tip_perss=temp2.incre();
        document.getElementById("tip").value=tip_perss;        
    })
  });

//person decreament with the help of dynamic import module
  sub_people_btn.addEventListener('click', () => {
    import('./myjs.js').then((Module) => {    
        var no_pers=document.getElementById("no_people").value;
        console.log(no_pers);
        var temp1 = new Module.increment_decrement(no_pers);
        no_pers=temp1.decre();
        document.getElementById("no_people").value=no_pers;        
    })
  });

//person Increament with the help of dynamic import module
  add_people_btn.addEventListener('click', () => {
    import('./myjs.js').then((Module) => {    
        var no_pers=document.getElementById("no_people").value;
        console.log(no_pers);
        var temp1 = new Module.increment_decrement(no_pers);
        no_pers=temp1.incre();
        document.getElementById("no_people").value=no_pers;        
    })
  });


// only take numeric value function
 function onlyNumberKey(evt) 
 {	
     // Only ASCII character in that range allowed
     var ASCIICode = (evt.which) ? evt.which : evt.keyCode
     if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
         return false;
     return true;
 }
 
 