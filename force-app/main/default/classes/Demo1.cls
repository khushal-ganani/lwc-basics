/**
 * @description       : 
 * @author            : khushal.ganani@gmail.com
 * @group             : 
 * @last modified on  : 10-29-2023
 * @last modified by  : khushal.ganani@gmail.com
**/
public with sharing class Demo1 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccRec(){
       return [SELECT Id, Name, Phone FROM Account];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAcc(String searchStr){
        String strNameLike = '%'+searchStr+'%';
        return [SELECT Id, Name, Phone FROM Account WHERE Name LIKE: strNameLike];
    }
}