Template.judgeList.helpers({
    featured:function () {
        return Judges.findAll();
    }
    
});