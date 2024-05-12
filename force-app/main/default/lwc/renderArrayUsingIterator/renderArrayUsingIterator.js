/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-25-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
import { LightningElement } from 'lwc';

export default class RenderingArray extends LightningElement {
    isDetailsVisible = false;
    employees = [
        {
            id:1,
            name: "Person 1",
            age: 22,
            title: "SF Admin" 
        },

        {
            id:2,
            name: "Person 2",
            age: 25,
            title: "SF Developer" 
        },
        
        {
            id:3,
            name: "Person 3",
            age: 30,
            title: "SF Consultant" 
        }
    ]

    handleClick(event){
        this.isDetailsVisible = event.target.checked;
    }
}