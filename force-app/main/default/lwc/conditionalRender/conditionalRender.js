/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-25-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class ConditionalRender extends LightningElement {
    isDetailsVisible = false;

    handleClick(event){
        let target = event.target;
        if(target.name==='check'){
            this.isDetailsVisible = event.target.checked;
        }else if(target.name==='hide'){
            this.isDetailsVisible = !(event.target.checked);
        }
    }
}