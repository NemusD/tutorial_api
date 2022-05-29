// AJAX HttpRequest Method
const request = new XMLHttpRequest();

// Prepare the end point to call the API  
const myIP = '190.20.207.230';
const endPoint = 'https://worldtimeapi.org/api/ip/' + myIP; //Example: http://worldtimeapi.org/api/ip/37.15.249.54
console.log(endPoint);
/* Prepare the request: 
    - FIRST -> DEFINE THE METHOD HTTP (Get, Post, Put...)
    - SECOND -> API END POINT (URL)
    - THIRD -> BOOLEAN OPTIONAL PARAMETER BY DEFAULT THE DEFAULT VALUE IT'S TRUE IF VALUE IT'S:
        * TRUE = means asynchronous
        * FALSE = means synchronous
*/
request.open('GET', endPoint, true);

// Send the request
request.send();

// keep track of the request
request.onreadystatechange = function () {
    // check if the response data send back to us (readyState 4)
    if (request.readyState === 4) {
        // uncomment the line below to see the request
        // window.runnerWindow.proxyConsole.log(request);
      
        // check if the request is successful
        if (request.status === 200) {
            console.log(request.responseText);
        } else {
          //otherwise display an error massage
          console.log("An error occurried durign your requestion")
        }
    }
}