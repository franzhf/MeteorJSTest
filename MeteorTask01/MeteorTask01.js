if (Meteor.isClient) {
	// counter starts at 0
	Session.setDefault('ActivitiesCollection', []);
	Session.setDefault('Increment', 0);
	Template.Activity.helpers({
		items: function () {
			return Session.get('Increment');
		}
	});

	Template.Activity.helpers({
		activities: function () {
			return Session.get('ActivitiesCollection');
		}
	});

	Template.Activity.events({
		'click #add-button': function () {
			// increment the counter when button is clicked
			var activities = Session.get('ActivitiesCollection');
			var increment = Session.get('Increment');

			activities.push({
				id: increment,
				activityName: 'New Task',
				isEditing: false
			})

			increment++;
			Session.set('Increment', increment);
			Session.set('ActivitiesCollection', activities);
		}
	});

	Template.Activity.events({
			'click button.delete': function(){
					var activities = Session.get('ActivitiesCollection');
					var index = 0;
					for (var i = activities.length - 1; i >= 0; i--) {						
						var activity = activities[i];
						if(this._id === activity.id){
							index = i;
							break;
						}
					};
					activities.splice(index, 1);
					var inc = Session.get('Increment');
					Session.set('Increment', --inc)
					Session.set('ActivitiesCollection', activities);
			}			
	}) 


	Template.Activity.events({
			'click .item-task-label': function(){
				this.isEditing = true;
				console.log(this.isEditing);
			}
	}) 
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
