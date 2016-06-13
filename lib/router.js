Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound'
});
/*home routes*/
Router.route('/',{
	name:'homeIndex'
});
Router.route('/contact',{
	name:'homeContact'
});
Router.route('/about',{
	name:'homeAbout'
});

/*events Route*/
Router.route('/events',{
	name:'eventsList'
});
Router.route("/events'/:id",{
	name:'eventsShow',
	data:function () {
		return Events.findOne({id:this.params.id});
	}
});

/*judges Routes*/
Router.route('/judges',{
	name:'judgeList'
});

/*participants route*/
Router.route('/participants',{
 name:'participantList'
});
Router.route('/participants/:id',{
	name:'participantsShow',
	data:function () {
		return Participants.findOne({id:this.params.id});
	}
});
Router.route('/participate',{
	name:'participateToEvent'
});


/*organizer route*/
Router.route('/addEvent',{
	name:'createEvent'
});
