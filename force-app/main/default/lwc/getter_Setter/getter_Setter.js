/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-25-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class GetterSetterExample extends LightningElement {
    _name = 'Khushal Ganani';

    // Getter method to retrieve the value of the 'name' property
    get name() {
        return this._name.toUpperCase();
    }

    // Setter method to set the value of the 'name' property
    set name(value) {
        this._name = value.toUpperCase();
    }
}
