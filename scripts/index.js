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

