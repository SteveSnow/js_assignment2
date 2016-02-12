$(document).ready(function() {
    $('#startBtn').click(function() {
        setTimer(60)
    })
})

function setTimer(sec) {
    if (sec === 0) {
        	$('#startBtn').hide()
        $('#seconds').css({'font-size':'24px','color':'black'})
        return;
    };
    sec--;
    	$('#startBtn').hide()
    if (sec ===10){
    	$('#seconds').css({'font-size':'72px','color':'red'})
    }
    $('#seconds').text(sec);
    window.setTimeout(setTimer, 1000, sec);
}
