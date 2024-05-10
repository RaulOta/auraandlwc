({
    onCheck : function(component, event, helper) {
        var cmpEvent = component.getEvent("selectedContact");
        cmpEvent.setParams({
            "selectedContact" : component.get("v.thisContact")
        });
        cmpEvent.fire();
    }
})
