
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

    var Name = $('#registerName').val();
    var Sirname = $('#registerSirname').val();
    var registerCity = $('#registerCity').val();
    var registerInstrument = $('#registerInstrument').val();
    var Email = $('#registerEmail').val();


    var mydata = {
        Email: Email,
        Password: pas1,
        City: registerCity,
        DateOfBirth: "2021-02-14T18:53:09.216Z",
        Instrument: registerInstrument

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