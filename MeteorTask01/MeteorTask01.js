if (Meteor.isClient) {
	// counter starts at 0
	Session.setDefault('ActivitiesCollection', []);
	Session.setDefault('Increment', 0);
	Template.Activity.helpers({
		items: function () {
			return Session.get('Increment');
		}
	});

	Session.set("oTaskSelected", {});
	Template.Activity.helpers({
		activities: function () {
			return Session.get('ActivitiesCollection');
		}
	});

	Template.Activity.events({
		'click #btn-add': function () {
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
			'click button.btn-delete': function(){
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
			'click .lbl-item-task': function(){
				this.isEditing = true;
				console.log(this.isEditing);
			},
			'click .btn-edit': function(e){
				e.preventDefault();
        $("#editTaskModal").modal("show");
        Session.set("oTaskSelected", this);       
			},
	}) 

	Template.Task.helpers({
		taskSelected: function(){
			console.log('here');
			return Session.get('oTaskSelected');
		}
	})

	Template.Task.events({
		'click .btn-primary': function(e){
			this.activityName = $(e).value;
			var activities = Session.get('ActivitiesCollection');
			var index = 0;
				for (var i = activities.length - 1; i >= 0; i--) {						
					var activity = activities[i];
					if(this._id === activity.id){
						index = i;
						break;
					}
				};
			var act = activities[index];
			act = this;
			Session.set('ActivitiesCollection', activities);
			$("#editTaskModal").modal("hide");
			console.log(Session.get('ActivitiesCollection'));
		}
	});

}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
