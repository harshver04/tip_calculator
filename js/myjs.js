// this is my module javascript file....


//this is my Tip class for calculating total bill and tip and also check inputs validation.
export class Tip{
    bill;tip_per;no_of_person;
    constructor(bill,tip_per,no_of_person){
        this.bill=bill;
        this.tip_per=tip_per;
        this.no_of_person=no_of_person
    }
    calculate_Tip(){
         return ((this.bill * this.tip_per)/100);
    }
    calculate_total(){
        return((this.bill/this.no_of_person)+this.calculate_Tip());
    }
    
    ck_input(){
        if (this.bill === ""  || this.bill==0) {
            alert("Please enter  valid input bills amount");
            return;
          }  
        if ( this.tip_per < 0 || this.tip_per==="") {
            alert("Please enter  valid input tip persent");
            return;
          }
        
          //Check to see if this input is empty or less than or equal to 1
          if (this.no_of_person === "" || this.no_of_person < 1) {
            alert("Please enter number of person");
            
            document.getElementById("ans_total_per_person").style.display = "none";
            document.getElementById("ans_tip_per_person").style.display = "none";
            return ;
          }
        else{
              
            document.getElementById("ans_total_per_person").style.display = "block";
            document.getElementById("ans_tip_per_person").style.display = "block";
          }
          
    }
}


//this is my increment -decrement class for increase and decrease the tip value 
//..and no of person value 
export class increment_decrement{
    
    value;
    constructor(value){
        this.value=value;
    }
    decre(){
        if(this.value>0){
            this.value=this.value-1;
            return this.value;
        }

        else{
            return this.value;
        }
    }
    incre(){
        if(this.value>=0){
            this.value=parseInt(this.value) + 1;
           return this.value;
        }
        else{
            return this.value;
        }
    }
}