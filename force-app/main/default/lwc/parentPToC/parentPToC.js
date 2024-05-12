/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-23-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';


export default class ParentPToC extends LightningElement {
    validValue = false;
    isNegative = false;
    percentage = 0;
    handleChange(event){
        const value = event.target.value;
        if(value<=100){
            this.validValue = true;
            this.percentage = event.target.value;
        }else if(value<0){
            this.validValue = false;
            this.isNegative = true;
        }else{
            this.validValue = false;
            this.isNegative = false;
        }    
    }
}