//! Syntax :-
//? import { adapterId } from 'adapterModule';
//? @wire(adapterId, adapterConfig)
//? propertyOrFunction;


import { LightningElement,api, wire } from 'lwc';

//? import { identifier of wire adapter } from 'identifier that contains the wire adapter'
import { getRecord, getFieldValue } from "lightning/uiRecordApi";

//? import a referance of an field of an object (here name field of Account obj)
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
const fields = [ACCOUNT_NAME_FIELD];

export default class Record extends LightningElement {
  @api recordId;
  
  //? @wire(adapterId, adapterConfig) - here adapterConfig (Object)—A configuration object specific to the wire adapter.
  //? Configuration object property values can be either strings or references to objects and fields imported from
  //? @salesforce/schema. Properties in the {adapterConfig} object can’t be undefined. If a property is undefined, the wire
  //? service doesn’t provision data. Don’t update a wire adapter configuration object property in renderedCallback() as it
  //? can result in an infinite loop.
  @wire(getRecord, { recordId: "$recordId", fields})
  AccRecords;
  

  get Accounts(){
    return getFieldValue(this.AccRecords.data, ACCOUNT_NAME_FIELD);
    
  }

  columns = [{label: 'Account Names', fieldName: 'Name'}]
}