Template.homeIndex.helpers({
    featured:function () {
        return Events.findAll();
    }
});