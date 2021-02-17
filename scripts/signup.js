
var baseUrl = "https://fsnetwebapi.azurewebsites.net";
var registerUrl = baseUrl + "/api/v1/identity/register";
var loginUrl = baseUrl + "/api/v1/identity/login";


function Register() {

    var pas1 = $('#registerPas').val();
    var pas2 = $('#registerPas2').val();
    if (pas1 != pas2) {
        alert('Onay şifresi aynı olmalı');
        return;
    }

    var registerDoBDay = $('#registerDoBDay').val();
    var registerDoBMonth = $('#registerDoBMonth').val();
    var registerDoBYear = $('#registerDoBYear').val();
    var dob = new Date(Date.UTC(registerDoBYear, registerDoBMonth-1, registerDoBDay, 0, 0, 0, 0));
    


    var name = $('#registerName').val();
    var surname = $('#registerSirname').val();
    var registerCity = $('#registerCity').val();
    var registerInstrument = $('#registerInstrument').val();
    var email = $('#registerEmail').val();

    //"2021-02-14T18:53:09.216Z"

    var mydata = {
        Email: email,
        Password: pas1,
        City: registerCity,
        DateOfBirth: dob,
        Instrument: registerInstrument,
        Name:name,
        SurName:surname
    };
    $.ajax({
        type: "POST",
        url: registerUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(mydata),
        dataType: "json",
        success: function(data) {
            document.cookie = data.token;
            document.cookie = "token = " + data.token;
            document.cookie = "token = " + data.refreshToken;
            $('#registerEmail').val("");
            $('#registerPas').val("");
            $('#registerPas2').val("");
            $('#registerName').val("");
            $('#registerSirname').val("");
            $('#registerDoBMonth').val("");
            $('#registerDoBYear').val("");
            $('#registerCity').val("");
            $('#registerInstrument').val("");

            ShowMessage(data.refreshToken);

        },
        error: function(request) {
       
                ShowArrayMessage(request.responseJSON.errors);
        }

    });

}

function Login() {
    
        var pas1 = $('#loginPas').val();
        var Email = $('#loginEmail').val();
    

        var mydata = {
            Email: Email,
            Password: pas1
        };
        $.ajax({
            type: "POST",
            url: loginUrl,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(mydata),
            dataType: "json",
            success: function (data) {
                setCookie("token", data.token);
                setCookie("refreshToken", data.refreshToken);
              
                ShowMessage(getCookie("refreshToken"));

            },
            error: function (request) {
            
                ShowArrayMessage(request.responseJSON.errors);

  
            }

        });

    

}

function ShowArrayMessage(errs) {
    var str = buildErrorMessage(errs);
    ShowMessage(str);
}

function buildErrorMessage(ers)
{
    var str="";
    for (var i = 0; i < ers.length; i++) {
        str = str + ers[i] + '</br>';
    }
    return str;
}

function ShowMessage(mes) {

        $('#msg').html(mes);
        $('#myModal').modal('show');
}

function setCookie(cname,value) {
    document.cookie = cname + " = " + value;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}