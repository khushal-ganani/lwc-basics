/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-23-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    handleChange(event){
        event.preventDefault();
        const value = event.target.value;
        this.dispatchEvent(new CustomEvent(childevent, {detail: value}))
    }
}