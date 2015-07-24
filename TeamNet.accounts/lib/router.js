Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appBody',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'appNotFound'
});

if (Meteor.isClient) {  
  console.log("client side");
}

if (Meteor.isServer)
{
  console.log(process.MAIL_URL);
}

Router.map(function() {  
    //cada ruta debe apuntar a una plantilla
    this.route('signin');
    this.route('signup');
    this.route('profile', {
      path: '/',
      onBeforeAction: function(){
        console.log('render');        
        if(!Meteor.user()){
          Router.go('signin');
        }
        else {
          Router.go('profile');
        }
      }
    });
});