/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-03-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, track } from 'lwc';

export default class ParentComp extends LightningElement {
    @track msg;
    handleChange(event){
        const messge= event.detail;
        this.msg=messge;
    }
}