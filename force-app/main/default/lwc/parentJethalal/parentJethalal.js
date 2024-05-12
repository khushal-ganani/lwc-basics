/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-02-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class ParentJethalal extends LightningElement {
    handleChange(event){
        this.template.querySelector("c-child-tappu").uppercaseMsg(event.target.value);
    }
}