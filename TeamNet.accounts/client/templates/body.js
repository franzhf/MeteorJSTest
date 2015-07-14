
//client Run code when a client or a server starts.
Meteor.startup(function () {
  console.log('server side')
});

Template.appBody.events({ 
  'click .js-logout': function() {
   Meteor.logout();   
  }  
});

Template.appBody.helpers({
    connected: function() {
    if (Session.get(SHOW_CONNECTION_ISSUE_KEY)) {
      return Meteor.status().connected;
    } else {
      return true;
    }
  }
});