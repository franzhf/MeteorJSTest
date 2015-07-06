if (Meteor.isClient) {
  Meteor.Router.add({
    '/signIn': 'signIn',
    '/signUp' : 'signUp'
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
