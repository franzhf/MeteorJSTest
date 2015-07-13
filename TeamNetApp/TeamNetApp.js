if (Meteor.isClient) {
  Meteor.Router.add({
    '/signin': 'signin',
    '/signup' : 'signup'
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
