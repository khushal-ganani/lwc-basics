/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-29-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement,api } from 'lwc';

export default class ChildCToP extends LightningElement {
    timestamp = new Date();
    
    @api refresh(){
        this.timestamp = new Date();
    }
}