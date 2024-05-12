/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-27-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, wire, track } from 'lwc';
import getAccRec from '@salesforce/apex/Demo1.getAccRec';

export default class WireDecUsingMethod extends LightningElement {
    @track accounts;
    @track check = false;

    @wire(getAccRec)
    wiredAccounts({ error, data }) {
        if (data) {
            this.check = true;
            this.accounts = data;
        } else if (error) {
            this.check = false;
            console.error('Error occurred while fetching account records:', error);
        }
    }
}
