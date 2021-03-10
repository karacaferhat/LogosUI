function initIndex(){
    var doc=loadIndex();
    var lessonsDoc=loadLessons(); 
    setIntroVideo(doc);
    showLastAddedListOnIndexPAge(doc,lessonsDoc);
    showSelectedListOnIndexPAge(doc,lessonsDoc);
    //showCrouselGuitar(doc,lessonsDoc);
    //showCrouselDavul(doc,lessonsDoc);
    //showCrouselPiyano(doc,lessonsDoc);
    //showCrouselKeman(doc,lessonsDoc);

}

function showLastAddedListOnIndexPAge(pageXML,lessonXML){
   
    $("#LastAddedList").empty();

    $(pageXML).find("son_yuklenen").each(function(index){
        var code=$(this).text();
        var lesson = findLessonByDoc(lessonXML, code);
        
        var str = '<li><a onclick="showLesson(\'' + code +'\');" ><span>'+lesson.academy+'</span><span>'+lesson.short_description+'</span></a ></li> ';

        $("#LastAddedList").append(str);
      
              
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
            content = '<a onclick="showLesson(\'' + code +'\');" ><h3>'+lesson.title+'</h3><div class="left"><img src="'+ lesson.preview_image_thumb+'"><span>'+lesson.academy+'</span></div><div class="right"><span>'+lesson.short_description+'</span><span>'+lesson.academy+'</span></div></a>';
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

    var email = getCookie("email");
    $('#loginEmail').val(email);

    
   
}

//"https://localhost:5001";
var baseUrl = "https://fsnetwebapi.azurewebsites.net";
var registerUrl = baseUrl + "/api/v1/identity/register";
var loginUrl = baseUrl + "/api/v1/identity/login";
var refreshUrl = baseUrl + "/api/v1/identity/refresh";
var updateUserInfoUrl = baseUrl + "/api/v1/identity/updateUserInfo";
var resetUrl = baseUrl + "/api/v1/identity/reset";
var changeUrl = baseUrl + "/api/v1/identity/change";
var paymentPostUrl = baseUrl + "/api/v1/payment/post";
var paymentResultUrl = baseUrl + "/api/v1/payment/checkPayment"
function Register() {

    var pas1 = $('#registerPas').val();
    var pas2 = $('#registerPas2').val();
    if (pas1 != pas2) {
        ShowMessage('Onay şifresi aynı olmalı');
        return;
    }

    var onay1Cb = document.getElementById("customCheck1");
    var onay2Cb = document.getElementById("customCheck2");

    var onay1 = onay1Cb.checked;
    var onay2 = onay2Cb.checked;
    if (onay1 == false || onay2 == false) {

        ShowMessage('Lütfen üye olmak için kullanım şartları ve gizlilik ilkelerini onaylayınız');
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
            deleteAllCookies();

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
            window.location = 'index.html';

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
            deleteAllCookies();
            saveLoginInfo(data);
            window.location = 'index.html';
        },
        error: function (request) {

            ShowArrayMessage(request.responseJSON.errors);


        }

    });



}

function RenewLogin() {

    var tkn = getCookie("token");
    var refTkn = getCookie("refreshToken");

    if (tkn == null || tkn == "undefined" || tkn == "") {
       
        return false;
    };

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
            deleteAllCookies();
            saveLoginInfo(data);
            return true;
        },
        error: function (request) {

            ShowArrayMessage(request.responseJSON.errors);
            return false;

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
   //check cookie exists
    var tkn = getCookie("token");
    var refTkn = getCookie("refreshToken");

    if (tkn == "" || refTkn == "") {
       // openSignup();
    } else {

        var data = getUserInfoFromCookie();
        showUserInfoPanel(data);
    };

    
  




}

//function CheckToken(tkn, refTkn) {

//    var _valid = false;
//    var _tkn = "";
//    var _refTkn = "";
//    var _userInfo;


//    var mydata = {
//        token: tkn,
//        refreshToken: refTkn,
//        name: '',
//        surname: ''
//    };
//    $.ajax({
//        type: "POST",
//        url: refreshUrl,
//        contentType: "application/json; charset=utf-8",
//        data: JSON.stringify(mydata),
//        dataType: "json",
//        success: function (data) {
            
//            var tokenCheckResult = {
//                token: data.token,
//                refreshToken: data.refreshToken,
//                valid: true,
//                userInfo: data.userInfo
//            };

//            return tokenCheckResult;
//        },
//        error: function (request) {
//            console.log(request.responseJSON.errors);
//            if (request.responseJSON.errors == "Token aktif") {
//                _tkn = tkn;
//                _refTkn = refTkn;
//                _valid = true;
//            }
//            _valid = false;
//        }

//    });

    
//}

function getUserInfoFromCookie() {

    var _userInfo = {
        name: getCookie("name"),
        surname: getCookie("surname"),
        email: getCookie("email"),
        instrument: getCookie("instrument"),
        dateOfBirth: getCookie("instrument"),
        city: getCookie("city"),
        profile: getCookie("profile")
    };

    var result = {
        token: getCookie("token"),
        refreshToken: getCookie("refreshToken"),
        userInfo: _userInfo
    };

    return result;
}

function saveLoginInfo(data) {
    setCookie("token", data.token);
    setCookie("refreshToken", data.refreshToken);

    setCookie("email", data.userInfo.eMail);
    setCookie("name", data.userInfo.name);
    setCookie("surname", data.userInfo.surname);
    setCookie("instrument", data.userInfo.instrument);
    setCookie("dateOfBirth", data.userInfo.dateOfBirth);
    setCookie("city", data.userInfo.city);
    setCookie("profile", data.userInfo.profile);

    showUserInfoPanel(data);
}

function openUserInfoForm() {

    var template = document.getElementById("UserInfoFormTemplate");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);

    var email = getCookie("email");
    var name=getCookie("name");
    var surname=getCookie("surname");
    var instrument=getCookie("instrument");
    var dob = getCookie("dateOfBirth");
    var city = getCookie("city");
   
    
    var date = new Date(dob);
    var monthvalue = date.getMonth() + 1;
    var dayvalue = date.getDate();
    var yearvalue = date.getFullYear();

    
    

    $('#userInfoEmail').val(email);
    $('#userInfoName').val(name);
    $('#userInfoSurname').val(surname);
    $('#userInfoInstrument').val(instrument);

    $('#userInfoCity').val(city);

    $('#userInfoDoBYear').val(yearvalue);
    $('#userInfoDoBMonth').val(monthvalue);
    $('#userInfoDoBDay').val(dayvalue);

    $('.form-group option[value=yearvalue]').attr('selected', 'selected');
    $('.form-group option[value=monthvalue]').attr('selected', 'selected');
    $('.form-group option[value=dayvalue]').attr('selected', 'selected');


    $('.form-group option[value=city]').attr('selected', 'selected');



   // $('#userInfoEmail').html(dob);


}
function showUserInfoPanel(data) {
    var str = $("#userPanel").html();
    $("#loginArea").html(str);
    $('#name').html(data.userInfo.name);
    $('#surname').html(data.userInfo.surname);

}

function Logout()
{
    setCookie("token", "");
    setCookie("refreshToken", "");
    hideUserInfoPanel();
    document.location = "index.html";
}
function hideUserInfoPanel(data) {
    $(".loginArea").html('<ul><li> <a onclick="openSignup();">GİRİS YAP</a></li></ul>');

}

function showgizlilik() {
    var str = $("#gizlilik").html();
    $('#msg').html(str);
    $('#myModal').modal('show');
}
function showkullanim() {
    var str = $("#kullanimSartlari").html();
    $('#msg').html(str);
    $('#myModal').modal('show');
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function updateUserInfo() {

    var registerDoBDay = $('#userInfoDoBDay').val();
    var registerDoBMonth = $('#userInfoDoBMonth').val();
    var registerDoBYear = $('#userInfoDoBYear').val();
    var dob = new Date(Date.UTC(registerDoBYear, registerDoBMonth - 1, registerDoBDay, 0, 0, 0, 0));



    var name = $('#userInfoName').val();
    var surname = $('#userInfoSurname').val();
    var registerCity = $('#userInfoCity').val();
    var registerInstrument = $('#userInfoInstrument').val();
    var email = $('#userInfoEmail').val();
   

    var mydata = {
        email: email,
        name: name,
        surname: surname,
        city: registerCity,
        instrument: registerInstrument,
        dateOfBirth: dob
    };

    $.ajax({
        type: "POST",
        url: updateUserInfoUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(mydata),
        dataType: "json",
        success: function (data) {

            setCookie("name", data.userInfo.name);
            setCookie("surname", data.userInfo.surname);
            setCookie("instrument", data.userInfo.instrument);
            setCookie("dateOfBirth", data.userInfo.dateOfBirth);
            setCookie("city", data.userInfo.city);

            showUserInfoPanel(data);
            window.location = 'index.html';
        },
        error: function (request) {

            ShowArrayMessage(request.responseJSON.errors);


        }

    });
}

function openResetPasForm() {

    var template = document.getElementById("resetPasFormTemplate");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);
}

function resetPas() {
    var _email = $('#resetPasEmail').val();

    var _data = {
        email:_email
    }
    $.ajax({
        type: "POST",
        url: resetUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(_data),
        dataType: "json",
        success: function (data) {
            ShowMessage("Yeni şifreniz eposta adresine iletilmiştir.");
            Logout();
            openSignup();
        },
        error: function (request) {

            ShowArrayMessage(request.responseJSON.errors);


        }

    });
}

function openChangePasForm() {

    var template = document.getElementById("changePasFormTemplate");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);
}

function UpdPsw() {

    var _email = $('#changePasEmail').val();
    var pas1 = $('#changePas').val();
    var pas2 = $('#changePas2').val();
    var pas3 = $('#changePas3').val();

    if (pas2 != pas3) {
        ShowMessage('Yeni şifreniz tekrarı hatalı');
        return;
    }


    var _data = {
        email: _email,
        pas_old: pas1,
        pas_new: pas2
    }

    $.ajax({
        type: "POST",
        url: changeUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(_data),
        dataType: "json",
        success: function (data) {
            ShowMessage("Şifreniz değiştirilmiştir");
            Logout();
            openSignup();

        },
        error: function (request) {

            ShowArrayMessage(request.responseJSON.errors);


        }

    });

}



function showLesson(code) {
    var template = document.getElementById("lessonTemplate");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);

    var les = findLesson(code);
    var title = document.getElementById("LessonTitle");
    var long_description = document.getElementById("LessonLongDescription");
    var pdf = document.getElementById("LessonPdf");
    var back_track = document.getElementById("LessonBackTrack");

    var videoId = les.video_id;
    title.innerHTML = les.title;
    long_description.innerHTML = les.long_description;
    pdf.data = les.pdf;
    back_track.src = les.back_track;







    var videoContainer = document.getElementById('LessonVideo');
    var options = {
        id: videoId
    };
    var player = new Vimeo.Player(videoContainer, options);



}

function toggleOpen(sender) {
    event.preventDefault();

    $(sender).toggleClass('active').siblings('.ac').slideToggle();
    $(sender).parent().siblings().find('.tikla').removeClass('active').siblings('.ac').slideUp();
}

function openLib() {
    var template = document.getElementById("lib");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);

    var Connect = new XMLHttpRequest();
    var xmlpath = "Yonetim/Kutuphane.xml";
    Connect.open("GET", xmlpath, false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    Connect.send(null);
    var libdoc;
     libdoc= Connect.responseXML;

     var str="";
     $(libdoc).find("kaynak").each(function(index) {
         var ad = $(this).find('ad').text();
         var link = $(this).find('link').text();
         var aciklama = $(this).find('aciklama').text();

         str = str + "<li>" + ad + "</li>";

         $("#libTable").find('tbody')
             .append($('<tr>')
                 .append($('<th>').attr('scope', 'row').text(index+1))
                 .append($('<td>').text(ad))
                 .append($('<td>').html('<a href="' + link+'"><img class="lib_link" src="images/pdf.png"/></a>'))
                 .append($('<td>').text(aciklama))
            
                 
             );

     });
    //$('#libList').html(str);




}

function openHome() {
    window.location='index.html';
}

function showLive() {
    var Connect = new XMLHttpRequest();
    var xmlpath = "Yonetim/CanliYayin.xml";
    Connect.open("GET", xmlpath, false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    Connect.send(null);
    var libdoc;
    libdoc = Connect.responseXML;
    var baslik = libdoc.getElementsByTagName("baslik")[0];
    var zaman = libdoc.getElementsByTagName("zaman")[0];
    var cont = libdoc.getElementsByTagName("link")[0];

    var cnt = cont.innerHTML;
    $('#liveTitle').html(baslik.textContent);
    $('#liveZaman').html(zaman.textContent);

    $('#liveVideo').html(cnt);
    $('#liveModal').modal('show');
}

function hideLive() {
    $("#liveModal").on('hidden.bs.modal', function (e) {
        var div = document.getElementById("liveModal");
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"method":"pause"}', '*');
    });
    $('#liveVideo').html(cnt);
    $('#liveModal').modal('hide');
}

function selectSubscription(){
    var template = document.getElementById("selectSubscription");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);

}



function showPayform(price,productName) {
    var template = document.getElementById("payForm");
    var clone = template.content.cloneNode(true);
    $('#contentContainer').empty();
    $('#contentContainer').html(clone);

    var email = getCookie("email");
    $('#myCheckoutDiv').empty();
    var ip = "178.154.15.15";

    var payItem = {
        productName: "P1",
        productId: "1",
        quantity: 1,
        price: price
    }
    var payItems = [];
    payItems.push(payItem);

    var mydata = {
        email: email,
        ip: ip,
        items: payItems
    };
    setCookie("payToken", "");
    var token = getCookie("token");
    $.ajax({
        type: "POST",
        url: paymentPostUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(mydata),
        dataType: "json",
        headers: {
            Authorization: 'Bearer ' + token
        },
        success: function (data) {
            $('#payProductName').html(productName);
            $('#payProductPrice').html(price + ' TL');
            setCookie("payToken", data.paymentFormToken);
            CreatePaymentFrame(data.paymentPageUrl +'&iframe=true');
            
        },
        error: function (request) {
            if (request.status == 401) {
                if (RenewLogin()) {
                    showPayform();
                } else {
                    openSignup();
                    return;
                }

            }

            ShowMessage(request.error);

        }

    });

    
    
}
function getMyIp() {
    

  
}
function CreatePaymentFrame(link) {
    document.getElementById("payFrameContainer").innerHTML = "";
    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.id = "paymentFrame";
    iframe.setAttribute("class", "responsive-iframe");
    iframe.setAttribute("src", link);
    document.getElementById("payFrameContainer").appendChild(iframe);

}

function showPaymentResult() {
    var conversationId = null;
    conversationId =getParameterByName("ConvId");
    if (conversationId != null) {
       
        var payToken = getCookie("payToken");
        var token = getCookie("token");
        var mydata = {
            conversationId: conversationId,
            payToken: payToken
        };
        $.ajax({
            type: "POST",
            url: paymentResultUrl,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(mydata),
            dataType: "json",
            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function (data) {
                if (data.paymentStatus == "SUCCESS") {
                    ShowMessage(data.lastFourDigits + ' ile biten kartınızdan ödeme başarı ile alınmıştır.');

                } else {
                    ShowMessage('Ödeme işlmeninde hata:' + data.errorMessage);
                }
                
            },
            error: function (request) {
                ShowMessage(request.error);
            }

        });

    }

}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}