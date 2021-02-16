
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
        success: function (data) {
            ShowMessage(data);
        },
        error: function (request) {
            if (request.status != 200) {
                ShowMessage(request.responseJSON.errors[0]);

            }
        }

    });
    function ShowMessage(mes) {

        $('#msg').html(mes);
        $('#myModal').modal('show');
    }

}