({
    init : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
            {label: 'LastName', fieldName: 'LastName', type: 'text'}
        ]);
    },

    performSearch: function(component, event, helper){
        helper.fetchData(component);
    }
})
