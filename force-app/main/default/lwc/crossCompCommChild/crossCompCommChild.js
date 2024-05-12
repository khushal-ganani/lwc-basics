/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class ChildCrossCompComm extends LightningElement {
    handleClick(){
        let event = new CustomEvent('message', {
            detail: {
                value: 'Some message'
            },
            bubbles: true
        })
        this.dispatchEvent(event);
    }
}