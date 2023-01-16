function viewDiv(){
    const button = document.getElementById('but');
    if(document.getElementById("divmore").style.display == "none"){
        document.getElementById("divmore").style.display = "block";
        button.innerText = "↑";
    } else {
        document.getElementById("divmore").style.display = "none";
        button.innerText = "↓";
    }
    
  };

  function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.name').innerHTML = "Name cannot be empty";
        document.querySelector('.name').style.color = "#FF0000";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.mail').innerHTML = "Email cannot be empty";
        document.querySelector('.mail').style.color = "#FF0000";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.mail').innerHTML = "Email format invalid";
            document.querySelector('.mail').style.color = "#FF0000";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.subject').innerHTML = "Subject cannot be empty";
        document.querySelector('.subject').style.color = "#FF0000";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.mes').innerHTML = "Message cannot be empty";
        document.querySelector('.mes').style.color = "#FF0000";
        return false;
    }
  };

