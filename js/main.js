
/*function smoothScroll () {
    document.getElementById("bio").scrollIntoView();
}*/

document.getElementById("test").onclick = function(event) {
    event.preventDefault();
    document.querySelector('#bio').scrollIntoView({ 
        behavior: 'smooth' 
      });
    };

