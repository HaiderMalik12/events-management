Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound'
});
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
	name:'eventList'
});

/*judges Routes*/
Router.route('/judges',{
	name:'judgeList'
});
/*participants route*/
Router.route('/participants',{
 name:'participantList'
});
/*organizer route*/
Router.route('/addEvent',{
	name:'createEvent'
});