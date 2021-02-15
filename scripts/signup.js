

function Login(){
   // var mdata = {"email": "f6@example.com","password": "Fsm1944*","city": "string","dateOfBirth": "2021-02-14T18:53:09.216Z","instrument": "string"};
   var mdata={"name": "morpheus","job": "leader"}
    $.ajax({
        type: "POST",
        url: "https://localhost:5001/api/v1/identity/register/",
        data: JSON.stringify(mdata),// now data come in this function

        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {

            alert("success");// write success in " "
        },

        error: function (jqXHR, status) {
            // error handler
            console.log(jqXHR);
            alert('fail' + status.code);
        }
     });
}