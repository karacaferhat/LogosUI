﻿$(document).ready(function(){
	
	$('.down').click(function(e){
		var link = $(this).attr('href');
			$('html, body') .animate({
				scrollTop: $(link) .offset().top - 100
			}, 1000);
	});	
    
    $('.tikla').on('click', function (e) {
        e.preventDefault();
  
        $(this).toggleClass('active').siblings('.ac').slideToggle();
        $(this).parent().siblings().find('.tikla').removeClass('active').siblings('.ac').slideUp();

    });

       /* mobile menu */
       $(".menuBtn").click(function (e) {
        if ($(".menuBtn").hasClass("active")) {
            $(this).removeClass("active");
            $(".mobileMenu").removeClass("active");
            e.preventDefault();
            $('body').css('overflow', 'auto');
            $('.mobileHeader').css('height', '100%');
        } else {
            $(this).addClass("active");
            $(".mobileMenu").addClass("active");
            e.preventDefault();
            $('body').css('overflow', 'hidden');
            $('.mobileHeader').css('height', '100%');
        }
    });


    ///* AYARLAR TAB  */
    var vitrinSelected = 0;
    var getTab = document.location.hash.substring(1);

    if (getTab) {
        var vitrinSelected = getTab;
        $(".tabsBtn a:eq(" + vitrinSelected + ")").click();

        if ($("#commentZone").length) {
            $('html,body').animate({
                scrollTop: ($('#commentZone').position().top)
            }, 500);
            //return false;
        }

        if ($("." + getTab).length) {
            $('html,body').animate({
                scrollTop: ($("." + getTab).offset().top)
            }, 500);
            // return false;
        }
    }

    $(".tabsArea > div:eq(" + vitrinSelected + ")").css("display", "block");
    $(".tabsBtn a").removeClass("selected");
    $(".tabsBtn a:eq(" + vitrinSelected + ")").addClass("selected");

    $('.tabsBtn a').click(function () {
        vitrinSelected = $(this).index();
        if (vitrinSelected !== 'bos') {
            window.location.hash = vitrinSelected;
            $(".tabsArea > div").css("display", "none");
            $(".tabsArea > div:eq(" + vitrinSelected + ")").fadeIn();
            $(".tabsBtn a").removeClass("selected");
            $(".tabsBtn a:eq(" + vitrinSelected + ")").addClass("selected");
        }
    })


	
});

function loadIndex(){
    var Connect = new XMLHttpRequest();
    var xmlpath="Yonetim/Index.xml";
    Connect.open("GET",xmlpath , false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    Connect.send(null);      
    return Connect.responseXML;     
}

function loadLessons(){
      var Connect = new XMLHttpRequest();
      var xmlpath="Yonetim/Dersler.xml";
      Connect.open("GET",xmlpath , false);
      Connect.setRequestHeader("Content-Type", "text/xml");
      Connect.send(null);      
      return Connect.responseXML;     
}
function loadAkademi(akademi){
    var Connect = new XMLHttpRequest();
    var xmlpath="Yonetim/"+akademi+"Akademi.xml";
    Connect.open("GET",xmlpath , false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    Connect.send(null);
    return Connect.responseXML;
}
function setIntroVideo(doc){
    var intro = doc.getElementsByTagName("intro")[0];   
    var videoId=intro.textContent;        
    var videoContainer = document.getElementById('video');         
    var options = {
              id: videoId
          };           
    var player = new Vimeo.Player(videoContainer, options);
}

function initAkademi(akademi){        
    var academyDoc = loadAkademi(akademi);

      setAkademiTitle(academyDoc);
      setIntroVideo(academyDoc);           
      showLastAddedLessons(academyDoc);
      showAllLessons(akademi);

}
function setAkademiTitle(doc) {
    var intro = doc.getElementsByTagName("title")[0];
    $('#akademiTitle').html(intro.textContent);
}
function showAllLessons(akademi){
    var lessonsDoc=loadLessons(); 
    $(lessonsDoc).find("ders").each(function(index){
        var _akademi=$(this).find('academy').text();
        if (akademi.toLowerCase()==_akademi.toLowerCase()){
            var les=getLessonInfo($(this));
            var id="lesson"+(index+1);             
            //var str ='<a href="' + les.url+ '"><div class="left"><img src="'+ les.preview_image+'"></div><div class="right"><span>'+les.title+'</span><span>'+les.short_description+'</span></div></a>';
            var str = '<a onclick="showLesson("'+les.code+'");"><div class="left"><img src="' + les.preview_image + '"></div><div class="right"><span>' + les.title + '</span><span>' + les.short_description + '</span></div></a>';
            var container=document.getElementById(id);
            container.innerHTML=str;           
        }       
     }
 
     )
    
       

}

function findLesson(lesson_code) {
    var lessonsDoc=loadLessons(); 
    var foundlesson;
    $(lessonsDoc).find("ders").each(function(index){
        var code=$(this).find('code').text();
        if (code==lesson_code){
            foundlesson=getLessonInfo($(this));            
        }       
     }
 
     )
     return foundlesson;

   
}

function findLessonByDoc(lessonsDoc,lesson_code) {   
    var foundlesson;
    $(lessonsDoc).find("ders").each(function(index){
        var code=$(this).find('code').text();
        if (code==lesson_code){
            foundlesson=getLessonInfo($(this));            
        }       
     }
 
     )
     return foundlesson;

   
}

function getLessonInfo(node){

    var code= $(node).find("code").text();
    var title= $(node).find("title").text();
    var academy= $(node).find("academy").text();
    var akademipath='content/media/'+academy+'/'+code+'/';
    var short_description= $(node).find("short_description").text();
    var preview_image= akademipath+$(node).find("preview_image").text();
    var preview_image_thumb= akademipath+$(node).find("preview_image_thumb").text();
    var long_description= $(node).find("long_description").text();
    var pdf= akademipath+$(node).find("pdf").text();
    var back_track=akademipath+$(node).find("back_track").text();
    var video_link= $(node).find("video_link").text();
    var video_id= $(node).find("video_id").text();
    var url='lesson.html?lessoncode='+code;

    
    var lesson={
        title:title,
        academy:academy,
        short_description:short_description,
        code: code,        
        preview_image:preview_image ,
        preview_image_thumb:preview_image_thumb,
        long_description:long_description,
        pdf:pdf,
        back_track:back_track,
        video_link:video_link,       
        video_id:video_id,
        url: url
    }
    return lesson;

}

function showLastAddedLessons(academyDoc,akademi){


    var soneklenen1 = academyDoc.getElementsByTagName("son_eklenen_1")[0].textContent; 
    var soneklenen2 = academyDoc.getElementsByTagName("son_eklenen_2")[0].textContent;   
    var soneklenen3 = academyDoc.getElementsByTagName("son_eklenen_3")[0].textContent;   
    
    var soneklenen1_ders= findLesson(soneklenen1);
    var soneklenen2_ders= findLesson(soneklenen2);         
    var soneklenen3_ders= findLesson(soneklenen3);
    
    showLastAdd(soneklenen1_ders,"LastAdd1");
    showLastAdd(soneklenen2_ders,"LastAdd2");
    showLastAdd(soneklenen3_ders,"LastAdd3");

}

function showLastAdd(les,id){
    var str = '<a onclick="showLesson("' + les.code +'");"><div class="left"><img src="'+ les.preview_image+'"></div><div class="right"><span>'+les.title+'</span><span>'+les.short_description+'</span></div></a>';
    var container=document.getElementById(id);
    container.innerHTML=str;


}

function UpdateLesson(les,id){

    var str = '<a onclick="showLesson("' + les.code +'");"><div class="left"><img src="'+ les.preview_image+'"></div><div class="right"><span>'+les.title+'</span><span>'+les.short_description+'</span></div></a>';
    var container=document.getElementById(id);
    container.innerHTML=str;

}
//var foo = getParameterByName('lessoncode');

