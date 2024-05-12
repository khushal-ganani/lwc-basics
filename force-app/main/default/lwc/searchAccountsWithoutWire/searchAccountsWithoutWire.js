/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 11-24-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement, track} from 'lwc';
import searchAcc from '@salesforce/apex/Demo1.searchAcc';

export default class SearchAccountsWire extends LightningElement {
    Acc;
    error;
    //* we can use promises as follows:-
    // handleChange(event){
    //     const searchKey = event.target.value;
    //     searchAcc({searchStr: searchKey})
    //     .then((resolve)=>{
    //        this.Acc = resolve;
    //     })
    //     .catch((reject)=>{
    //         this.error = reject;
    //         colsole.error('Error in fetching Account Records: '+error);
    //     })
    // }

    //* We can use modern ES6 Async await also as follows:-
    async handleChange(event){
        try{
            const searchKey = event.target.value;
            this.Acc = await searchAcc({searchStr: searchKey});
            this.error = undefined;
        }
        catch(error){
            this.error = error;
            console.error('Error in fetching Account Records: '+error);
        } 
    }

    @track columnsList = [
        { label: 'ID', fieldName: 'Id' },
        { label: 'Account Name', fieldName: 'Name' },
        { label: 'Account Phone', fieldName: 'Phone' }
    ];
}