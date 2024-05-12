import { LightningElement } from 'lwc';
// import { ShowToastEvent } from 'lightning/ShowToastEvent';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class My1LWC extends LightningElement { //* we export our whole js file for LWC as a module 
    handleButton(){
        const ev = new ShowToastEvent({
            title: "Congratulations!",
            message: "A new User has been created!",
            variant: "success",
            mode: 'dismissable'
        });
        this.dispatchEvent(ev);
    }
}

