/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-27-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class SubscriberPanel extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    
    @track color;
    connectedCallback(){
        registerListener('colorchange', this.handleChangeColor, this);
    }
    handleChangeColor(colorCode){
        this.color = colorCode;
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    get getColor(){
        return `background-color: ${this.color}`
    }
}