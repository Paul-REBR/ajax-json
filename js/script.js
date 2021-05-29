// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
    var message=
    res.firstName+" "+res.lastName
    if(res.likes){
        message+="likes";
    }
    else{
        message+="doesn't like to manance mult";
    }
    message+=" and use ";
    message+=res.numbe;
    message+="-ul ala la vrajeala :)";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });

        
      });
  }
);