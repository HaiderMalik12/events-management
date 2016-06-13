/**
 * Created by HaiderNazir on 6/13/2016.
 */
Template.eventsShow.helpers({
    formatDate:function (date) {
        return date.toDateString();
    },
    participants:function () {
        return Participants.findAll();
    }
});