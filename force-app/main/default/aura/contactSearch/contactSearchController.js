({
    init : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
            {label: 'LastName', fieldName: 'LastName', type: 'text'}
        ]);
    },

    performSearch: function(component, event, helper){
        helper.fetchData(component);
    },

    handlerComponentEvent: function(component, event, helper){
        var contact = event.getParam("selectedContact");
        // set the handler attribute based on event data

        var selectcontacts = component.get("v.selectContacts");
        selectcontacts.push(contact);
        component.set("v.selectContacts", selectcontacts);
    }
})
