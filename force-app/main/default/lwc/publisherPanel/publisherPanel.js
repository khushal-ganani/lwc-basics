/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-27-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PublisherPanel extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    color = 'red';

    get colorOptions() {
        return [
            { label: "Green", value: "green" },
            { label: "Red", value: "red" },
            { label: "Blue", value: "blue" }
        ];
    }

    handleColorChange(event) {
        this.color = event.detail.value;
    }

    handleClick() {
        fireEvent(this.pageRef, "colorchange", this.color);
        console.log(this.pageRef);
    }
}
