window.onload = function() {
 console.log('Dom has loaded')
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
      view.innerHTML = "No route matches this pattern!";
    }
  }
  
} 