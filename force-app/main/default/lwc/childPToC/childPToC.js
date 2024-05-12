/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-29-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, api } from 'lwc';

export default class ChildPToC extends LightningElement {
    @api percentage
    get style(){
        return `border-radius: 5px; background-color: red; min-height:50px; width:${this.percentage}%; min-width: 10px border: 1px solid black`
    }
}