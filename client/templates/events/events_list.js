Template.eventsList.helpers({
    featured: function () {
        return Events.findAll();
    }
});

