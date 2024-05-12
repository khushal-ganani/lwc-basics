/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-29-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class ParentCToP extends LightningElement {
    handlClick(){
        this.template.querySelectorAll('c-child-c-to-p').refresh();
    }
}