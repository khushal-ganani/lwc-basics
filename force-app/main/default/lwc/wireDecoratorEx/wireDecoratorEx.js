/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-27-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, wire } from 'lwc';
import getAccRec from '@salesforce/apex/Demo1.getAccRec';

export default class WireDecoratorEx extends LightningElement {
    @wire(getAccRec) acctns;
}