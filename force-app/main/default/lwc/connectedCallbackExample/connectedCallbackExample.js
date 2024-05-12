/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-26-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class ConnectedCallbackExample extends LightningElement {
    connectedCallback() {
//? Accessing the Component's Parent Container:
//? In the connectedCallback(), you can access the component's parent container using this.parentElement. This allows you to 
//? interact with the container and retrieve information or manipulate elements within it. For instance, you might want to 
//? adjust the styling of the container based on the presence of your component.        
        // Accessing the component's parent container
        const parentContainer = this.parentElement;

        // Check if the parent container exists
        if (parentContainer) {
            // Apply custom styling to the parent container
            parentContainer.style.backgroundColor = 'red';
        } else {
            console.error('Parent container not found.');
        }

        document.addEventListener('click', this.handleDocumentClick);
    }
    handleDocumentClick() {
        // Handle document click events
        console.log('Document Clicked!');
    }
}