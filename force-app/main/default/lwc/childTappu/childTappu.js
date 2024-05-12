/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-02-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, api, track } from 'lwc';

export default class ChildTappu extends LightningElement {
    @track msg
    //* here we defined a method that we will access in parent component.
    @api uppercaseMsg(str){
        this.msg=str.toUpperCase()+" !!!";
    }
}