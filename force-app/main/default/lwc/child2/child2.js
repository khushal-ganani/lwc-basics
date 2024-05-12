/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-03-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    handleChange(event){
        event.preventDefault();
        const name = event.target.value;
        const selectEvent = new CustomEvent('myevent',{detail:name, bubbles:true});
        this.dispatchEvent(selectEvent);
    }
}