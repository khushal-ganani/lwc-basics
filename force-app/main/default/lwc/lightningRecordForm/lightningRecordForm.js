/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-01-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class LightningRecordForm extends LightningElement {
    @api recordId;
    fields = [ACCOUNT_NAME_FIELD, ACCOUNT_REVENUE_FIELD, ACCOUNT_TYPE_FIELD];

    handleSubmit(event) {
        event.preventDefault();
        const myFields = event.detail.fields;
        myFields.Name += 'lwc';
        this.template.querySelector('lightning-record-form').submit(myFields);

        const evt = new ShowToastEvent({
            title: 'Account edited',
            message: 'Record ID: ' +this.recordId,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}
