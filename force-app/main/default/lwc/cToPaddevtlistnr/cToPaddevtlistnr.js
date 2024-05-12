/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class CToPaddevtlistnr extends LightningElement {
    // childComponent.js
    sendMessage() {
        const message = 'Hello from child component!';
        const event = new CustomEvent('childmessage', {
             detail: message 
            });
            
        // Dispatch the event
        this.dispatchEvent(event);
    }
}

