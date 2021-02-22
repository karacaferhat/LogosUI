function initIndex(){
    var doc=loadIndex();
    var lessonsDoc=loadLessons(); 
    setIntroVideo(doc);
    showLastAddedListOnIndexPAge(doc,lessonsDoc);
    showSelectedListOnIndexPAge(doc,lessonsDoc);
    showCrouselGuitar(doc,lessonsDoc);
    showCrouselDavul(doc,lessonsDoc);
    showCrouselPiyano(doc,lessonsDoc);
    showCrouselKeman(doc,lessonsDoc);

}

function showLastAddedListOnIndexPAge(pageXML,lessonXML){
   
    $("#LastAddedList").empty();

    $(pageXML).find("son_yuklenen").each(function(index){
        var code=$(this).text();
        var lesson=findLessonByDoc(lessonXML,code);
        $("#LastAddedList").append('<li><a href="'+ lesson.url+'"><span>'+lesson.academy+'</span><span>'+lesson.short_description+'</span></a></li>');
      
              
     }
 
     )
   


}

function showSelectedListOnIndexPAge(pageXML,lessonXML){
    
    

    $(pageXML).find("sectiklerimiz").each(function(index){
        var code=$(this).text();
        var lesson=findLessonByDoc(lessonXML,code);
        var i=index+1;
        var id="master"+i;
        var container=document.getElementById(id);
        if (container !=null){
            var content="";
            content='<a href="'+lesson.url+'"><h3>'+lesson.title+'</h3><div class="left"><img src="'+ lesson.preview_image_thumb+'"><span>'+lesson.academy+'</span></div><div class="right"><span>'+lesson.short_description+'</span><span>'+lesson.academy+'</span></div></a>';
            container.innerHTML=content;
        }        
        
     
      
              
     }
 
     )
   


}

function showCrouselGuitar(pageXML,lessonXML){

    

    $(pageXML).find("gitar_ders").each(function(index){
        var code=$(this).text();
        var lesson=findLessonByDoc(lessonXML,code);
        var i=index+1;
        var id="gtr_crs_vid_"+i;
        var img_id="gtr_crs_img_"+ i;
        var img=document.getElementById(img_id);
        img.src=lesson.preview_image_thumb;

        var videoContainer = document.getElementById(id);         
        var options = {id: lesson.video_id,height:550};           
        var player = new Vimeo.Player(videoContainer, options);

       
       
       i=i+1;
      
              
     }
 
     )
   


}

function showCrouselDavul(pageXML,lessonXML){

    

    $(pageXML).find("davul_ders").each(function(index){
        var code=$(this).text();
        var lesson=findLessonByDoc(lessonXML,code);
        var i=index+1;
        var id="dvl_crs_vid_"+i;
        var img_id="dvl_crs_img_"+ i;
        var img=document.getElementById(img_id);
        img.src=lesson.preview_image_thumb;

        var videoContainer = document.getElementById(id);         
        var options = {id: lesson.video_id,height:550};           
        var player = new Vimeo.Player(videoContainer, options);

       
       
       i=i+1;
      
              
     }
 
     )
   


}

function showCrouselPiyano(pageXML,lessonXML){

    

    $(pageXML).find("piyano_ders").each(function(index){
        var code=$(this).text();
        var lesson=findLessonByDoc(lessonXML,code);
        var i=index+1;
        var id="pyn_crs_vid_"+i;
        var img_id="pyn_crs_img_"+ i;
        var img=document.getElementById(img_id);
        img.src=lesson.preview_image_thumb;

        var videoContainer = document.getElementById(id);         
        var options = {id: lesson.video_id,height:550};           
        var player = new Vimeo.Player(videoContainer, options);

       
       
       i=i+1;
      
              
     }
 
     )
   


}

function showCrouselKeman(pageXML,lessonXML){

    

    $(pageXML).find("keman_ders").each(function(index){
        var code=$(this).text();
        var lesson=findLessonByDoc(lessonXML,code);
        var i=index+1;
        var id="kmn_crs_vid_"+i;
        var img_id="kmn_crs_img_"+ i;
        var img=document.getElementById(img_id);
        img.src=lesson.preview_image_thumb;

        var videoContainer = document.getElementById(id);         
        var options = {id: lesson.video_id,height:550};           
        var player = new Vimeo.Player(videoContainer, options);

       
       
       i=i+1;
      
              
     }
 
     )
   


}


function openTab(akademi) {
  
    var template = document.getElementById("akademiTemplate");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);
    initAkademi(akademi);
}
function openContentTab(id) {

    var template = document.getElementById(id);
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);
    
}

function openSignup(){

    var template = document.getElementById("singupTemplate");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);
   
}



var baseUrl = "https://fsnetwebapi.azurewebsites.net";
var registerUrl = baseUrl + "/api/v1/identity/register";
var loginUrl = baseUrl + "/api/v1/identity/login";
var refreshUrl = baseUrl + "/api/v1/identity/refresh";


function Register() {

    var pas1 = $('#registerPas').val();
    var pas2 = $('#registerPas2').val();
    if (pas1 != pas2) {
        ShowMessage('Onay şifresi aynı olmalı');
        return;
    }

    var registerDoBDay = $('#registerDoBDay').val();
    var registerDoBMonth = $('#registerDoBMonth').val();
    var registerDoBYear = $('#registerDoBYear').val();
    var dob = new Date(Date.UTC(registerDoBYear, registerDoBMonth - 1, registerDoBDay, 0, 0, 0, 0));



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
        Name: name,
        SurName: surname
    };
    $.ajax({
        type: "POST",
        url: registerUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(mydata),
        dataType: "json",
        success: function (data) {
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

            saveLoginInfo(data);

        },
        error: function (request) {

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
            saveLoginInfo(data);
            window.location = 'index.html';
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

function buildErrorMessage(ers) {
    var str = "";
    for (var i = 0; i < ers.length; i++) {
        str = str + ers[i] + '</br>';
    }
    return str;
}

function ShowMessage(mes) {

    $('#msg').html(mes);
    $('#myModal').modal('show');
}

function setCookie(cname, value) {
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

function checkLoggedIn() {
    var tkn = getCookie("token");
    var refTkn = getCookie("refreshToken");
    if (refTkn == null || tkn == null) {
        return false;
    } else {

        var mydata = {
            token: tkn,
            refreshToken: refTkn
        };
        $.ajax({
            type: "POST",
            url: refreshUrl,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(mydata),
            dataType: "json",
            success: function (data) {
                saveLoginInfo(data);
                return true;
            },
            error: function (request) {
                console.log(request.responseJSON.errors);
                if (request.responseJSON.errors == "Token aktif") {
                    saveLoginInfo(mydata);
                    return true;
                }
                return false;
            }

        });
      
    }


}



function saveLoginInfo(data) {
    setCookie("token", data.token);
    setCookie("refreshToken", data.refreshToken);
    showUserInfoPanel(data);
}

function showUserInfoPanel(data) {
    var str = $("#userPanel").html();
    $(".loginArea").html(str);

}

function Logout()
{
    setCookie("token", "");
    setCookie("refreshToken", "");
    hideUserInfoPanel();
    document.location = "Default.html";
}
function hideUserInfoPanel(data) {
    $(".loginArea").html('<ul><li> <a onclick="openSignup();">GİRİS YAP</a></li></ul>');

}