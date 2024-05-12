/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-25-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
// todoItem.js
import { LightningElement, api } from "lwc";
export default class TodoItem extends LightningElement {
  name;

  @api
  get value() {
    return this.name;
  }

  set value(value) {
    this.name = value.toUpperCase();
  }
  
  handleChange(event){
    this.name = event.target.value;
  }
}
