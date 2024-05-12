/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-24-2023
 * @last modified by  : khushal.ganani@gmail.com
**/

import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {
    handleClick(evt){
      evt.preventDefault();//* Stop the event's default behavior.
      evt.stopPropagation();//* Stop the event from bubbling up in the DOM.

//* here this keyword calls the NavigationMixin module and .Navigate() is a method inside the module which takes a JS obj of
//* PageReference which describes 'type', 'attributes' and 'stage' of the page.
        this[NavigationMixin.Navigate]({ 
          type: "standard__objectPage",
          attributes: {
            actionName: "new",
            objectApiName: "Case"
          }
        });

        lwc-nav
    }
}