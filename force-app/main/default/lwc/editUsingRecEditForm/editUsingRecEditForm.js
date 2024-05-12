/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-01-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE_FIELD from '@salesforce/schema/Account.Type';
import ACCOUNT_EMAIL_FIELD from '@salesforce/schema/Account.Email__c';

export default class EditUsingRecEditForm extends LightningElement {
    @api recordId
    accName = ACCOUNT_NAME_FIELD;
    accType = ACCOUNT_TYPE_FIELD;
    accEmail = ACCOUNT_EMAIL_FIELD;
    handleSubmit(event){
        console.log(event.detail.fields);
    }
}