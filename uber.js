class uberPrice{
    constructor(type,km){
       this.type=type;
        this.km=km;
        this.baseRate;
        }
    getPrice(){
            //console.log(" km is "+this.km)
        if(this.type=="hatchpack")
        {
            this.baseRate=75;
            if(this.km<=4)
            return this.baseRate;
            else
            return (this.baseRate+(20*(this.km-4)));
        }
        else if(this.type=="sedan")
        {
            this.baseRate=100;
            if(this.km<=4)
            return this.baseRate;
            else
            return (this.baseRate+(30*(this.km-4)));
        }
       else if(this.type=="suv")
        {
            this.baseRate=120;
            if(this.km<=4)
            return this.baseRate;
            else
            return (this.baseRate+(40*(this.km-4)));
        }
        else
        {
            console.log("please enter carType(hatchpack/sedan/suv) and total kilometer travelled by rider  ")
        }
    }
    
    
}
var up1=new uberPrice("sedan",3);
console.log(up1);
console.log("The uber price is " +up1.getPrice());