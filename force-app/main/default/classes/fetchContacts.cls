/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-28-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
public with sharing class fetchContacts {
    @AuraEnabled(cacheable =true)
    public static List<Contact> getCon(){
        return [SELECT Id, Name, Account.Name FROM Contact];
    }
}