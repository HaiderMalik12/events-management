Template.participantList.helpers({
    featured:function () {
        return Participants.findAll();
    }
});