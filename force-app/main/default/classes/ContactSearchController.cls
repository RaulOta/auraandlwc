public with sharing class ContactSearchController {
    
    @AuraEnabled
    public static List<Contact> searchContactSafe(String searchText) {
        String likeValue = '%'+searchText+'%';
        List<Contact> lstContact = [SELECT LastName, FirstName FROM Contact WHERE LastName Like :likeValue];
        return lstContact;
    }
}