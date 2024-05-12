/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-31-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class BaseTypeProgressIndicatorEx extends LightningElement {
    isStepOne;
    isStepTwo;
    isStepThree;
    isStepFour;
    handleClick(event){
        const target = event.target
        if(target.value==="1"){
            this.isStepOne=true;
            this.isStepTwo=false;
            this.isStepThree=false;
            this.isStepFour=false;
        }else if(target.value==="2"){
            this.isStepTwo=true;
            this.isStepOne=false;
            this.isStepThree=false;
            this.isStepFour=false;
        }else if(target.value==="3"){
            this.isStepThree=true;
            this.isStepTwo=false;
            this.isStepOne=false;
            this.isStepFour=false;
        }else if(target.value==="4"){
            this.isStepFour=true;
            this.isStepTwo=false;
            this.isStepOne=false;
            this.isStepThree=false;
        }
        
    }
}