var sum = [0, 0, 0];

function viewDiv() {
    const button = document.getElementById('but');
    if (document.getElementById("divmore").style.display == "none") {
        document.getElementById("divmore").style.display = "block";
        button.innerText = "↑";
    } else {
        document.getElementById("divmore").style.display = "none";
        button.innerText = "↓";
    }

};

function contactsFix() {
    if(document.querySelector('.navbar-toggler').value == "dropped"){
        document.querySelector('.con').className = "nav-link text-white me-5 con";
        document.querySelector('.navbar-toggler').value = "none";
    } else {
        document.querySelector('.con').className = "btn btn-info text-white con";
        document.querySelector('.navbar-toggler').value = "dropped";
    } 
};

function validateForm() {
    var myModal = new bootstrap.Modal(document.getElementById('popup'), {
        keyboard: false
    })
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.name').innerHTML = "Name cannot be empty";
        document.querySelector('.name').style.color = "#FF0000";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.mail').innerHTML = "Email cannot be empty";
        document.querySelector('.mail').style.color = "#FF0000";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.mail').innerHTML = "Email format invalid";
            document.querySelector('.mail').style.color = "#FF0000";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.subject').innerHTML = "Subject cannot be empty";
        document.querySelector('.subject').style.color = "#FF0000";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.mes').innerHTML = "Message cannot be empty";
        document.querySelector('.mes').style.color = "#FF0000";
        return false;
    }
    myModal.toggle()
};

function CheckBox(id) {
    document.getElementById('customRange3').value = 0;
    document.getElementById('rangeval').innerText = `1 hour`;
    switch (id) {
        case fe:
            document.getElementById('price').innerText = `~30 zł`;
            break;
        case be:
            document.getElementById('price').innerText = `~40 zł`;
            break;
        case pm:
            document.getElementById('price').innerText = `~80 zł`;
            break;
    }
};

function RangeSlider() {
    var val = parseInt(document.getElementById('customRange3').value);
    var backendPrice = 40;
    var frontendPrice = 30;
    var pmPrice = 80;

    if (document.querySelector('.fe').checked) {
        document.getElementById('price').innerText = `~${frontendPrice * (val + 1)} zł`
        document.querySelector('.fer').placeholder = `Front-end: ${frontendPrice * (val + 1)} zł`;
        sum[0] = frontendPrice * (val + 1);
    }
    if (document.querySelector('.be').checked) {
        document.getElementById('price').innerText = `~${backendPrice * (val + 1)} zł`
        document.querySelector('.ber').placeholder = `Back-end: ${backendPrice * (val + 1)} zł`;
        sum[1] = backendPrice * (val + 1);
    }
    if (document.querySelector('.pm').checked) {
        document.getElementById('price').innerText = `~${pmPrice * (val + 1)} zł`
        document.querySelector('.pmr').placeholder = `PM: ${pmPrice * (val + 1)} zł`;
        sum[2] = pmPrice * (val + 1);
    }

    document.querySelector('.sum').innerHTML = `Summary: ~${sum[0] + sum[1] + sum[2]} zł`;
    document.getElementById('rangeval').innerText = `${val + 1} hour`;
    if (val != 0) document.getElementById('rangeval').innerText += `s`;
};

function Reset(id) {
    document.getElementById('customRange3').value = 0;
    document.getElementById('rangeval').innerText = `1 hour`;
    switch (id) {
        case resber:
            document.querySelector('.ber').placeholder = `Back-end: 0 zł`;
            sum[1] = 0;
            document.querySelector('.sum').innerHTML = `Summary: ~${sum[0] + sum[1] + sum[2]} zł`;
            if (document.querySelector('.be').checked) {
                document.getElementById('price').innerText = `~40 zł`
            }
            break;
        case resfer:
            document.querySelector('.fer').placeholder = `Front-end: 0 zł`;
            sum[0] = 0;
            document.querySelector('.sum').innerHTML = `Summary: ~${sum[0] + sum[1] + sum[2]} zł`;
            if (document.querySelector('.fe').checked) {
                document.getElementById('price').innerText = `~30 zł`
            }
            break;
        case respmr:
            document.querySelector('.pmr').placeholder = `PM: 0 zł`;
            sum[2] = 0;
            document.querySelector('.sum').innerHTML = `Summary: ~${sum[0] + sum[1] + sum[2]} zł`;
            if (document.querySelector('.pm').checked) {
                document.getElementById('price').innerText = `~80 zł`
            }
            break;
    }
};

