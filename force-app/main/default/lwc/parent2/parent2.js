/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-04-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, track } from 'lwc';

export default class Parent2 extends LightningElement {
    @track messageFromChild;

    constructor() {
        super();
        // Add event listener
        //? addEventListener('childmessage', this.handleChildMessage.bind(this)) is used to add an event listener to the 
        //? component's template. The first argument, 'childmessage', specifies the type of event to listen for. In this
        //? case, the component is listening for a custom event named 'childmessage'.

        //? this.handleChildMessage.bind(this) is the event handler function that will be executed when the 'childmessage' 
        //? event is triggered. The bind(this) ensures that the event handler is executed in the context of the current
        //? component, allowing the handler to access the component's properties and methods.

        //? .bind(this) is used to create a new function that wraps the original handleChildMessage function, ensuring that 
        //? it is executed within the context of the current component. The this keyword inside the handleChildMessage 
        //? function will refer to the current instance of the parentComponent.
        ///this.template.addEventListener('childmessage', this.handleChildMessage.bind(this));
        
        this.template.addEventListener('myevent', this.handleMyEvent.bind(this));
    }

    handleMyEvent(event) {
        this.messageFromChild = event.detail;
    }
}
