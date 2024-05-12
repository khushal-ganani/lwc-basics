/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-24-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class Sign_up_form extends NavigationMixin(LightningElement) {
    handleClick(){
        let comp = {
            componentDef: "c:my1LWC"
        }
        let encodedDef = btoa(JSON.stringify(comp))
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "/one/one.app#"+encodedDef
            }
        });
    }  
}