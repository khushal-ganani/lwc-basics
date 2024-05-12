/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-28-2023
 * @last modified by  : khushal.ganani@gmail.com
**/

import { LightningElement, wire, track } from 'lwc';
import getCon from '@salesforce/apex/fetchContacts.getCon';

export default class WireOppRec extends LightningElement {
    check = false;
    cont;
    error;
    @wire(getCon) getContacts({data, error}){
        if(data){
            this.check = true;
            this.cont = data;
        }else if(error){
            this.check = false;
            this.error = error;
        }
    }
    @track columnsList = [
        { label: 'ID', fieldName: 'Id' },
        { label: 'Contact Name', fieldName: 'Name' },
        { label: 'Account Name', fieldName: 'Account.Name' }
    ];
}
