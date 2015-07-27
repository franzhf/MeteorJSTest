
// Rutes are available both server side and client side
Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appBody',
  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'templateNotFound'
});

Router.map(function() {
  // each route should be point to a template
  this.route('home', {path: '/'});
});
