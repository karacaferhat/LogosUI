function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function showLessonPage(){
    var code = getParameterByName('lessoncode');
    var les= findLesson(code);
    var title=document.getElementById("title");
    var long_description=document.getElementById("long_description");
    var pdf=document.getElementById("pdf");
    var back_track=document.getElementById("back_track");
    
    var videoId=les.video_id;
    title.innerHTML=les.title;
    long_description.innerHTML=les.long_description;
    pdf.data=les.pdf;
    back_track.src=les.back_track;

    var videoContainer = document.getElementById('video');         
    var options = {
              id: videoId
          };           
    var player = new Vimeo.Player(videoContainer, options);

    

}

