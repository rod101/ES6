window.onload = function() {
 console.log('Dom has loaded')

 //Create Router Constructor 

 //Grap all active attribute routes
 var activeRoutes = Array.from(document.querySelectorAll('[route]'));

 function navigate(event){
   var route = event.target.attributes[0].value;
   var routeInfo = myFirstRouter.routes.filter(function(r){
     return r.path === route;
   })[0];
   if(!routeInfo){
    window.history.pushState({}, '', '404');
     view.innerHTML = 'No route exists with this path';
   }else{
     window.history.pushState({}, 'name', routeInfo.path);
     view.innerHTML = 'You have clicked the ' + routeInfo.name + ' route'
   }

 };

//  add event listeners

activeRoutes.forEach(function(route){
  route.addEventListener('click', navigate, false)
});


  var Router = function(name, routes){
    return {
         name: name,
          routes: routes 
        }
  }; 

   var view = document.getElementById('view');
  document.getElementById("view").innerHTML = "The full URL of this page is:<br>" + window.location.pathname;

    var myFirstRouter = new Router("myFirstRouter", [
        {
        path: "/",
        name: "Root"
        },
        {
        path: "/about",
        name: "About"
        },
        {
        path: "/contact",
        name: "Contact"
        }
    ]); 

    var currentPath = window.location.pathname;

    console.log(currentPath);
 

  if (currentPath === "/") {
    view.innerHTML = "You are on the root page";
  } else {
    let route = myFirstRouter.routes.filter(function(r) {
      return r.path === currentPath;

    })[0];
    if (route) {
      view.innerHTML = "You are on the " + route.name + " path";
    } else {
      view.innerHTML = "404!";
    }
  }
  
} 