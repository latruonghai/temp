string = 'Ngày xửa ngày xưa, năm 19 trước Covid, có một cô bé đáng yêu cất tiếng khóc chào đời.' + 
			'<br> Thiên Thần tên Ly :3. Lan man vậy thôi, nhưng mà tớ lại có vài lời chúc dành cho cậu.' + 
			'<br><br> Tuổi 20 đầy sự mới mẻ và thách thức, là trải nghiệm mới khó khăn nhưng cũng thú vị ' + 
			'<br> Mong rằng cậu vẫn luôn vui vẻ, hạnh phúc. Dẫu mới chỉ quen biết cậu, nhưng cảm nhận của tớ về cậu thực sự rất tốt' + 
			'<br> Cảm giác rằng bản thân có thể đã gặp đúng người và muốn sự nỗ lực của bản thân dành cho cậu.' + 
			'<br> Hi vọng sẽ có thể được cậu cho phép bước vào cuộc đời cậu nhé ' + 
			'<br><p class = "big-text">Sinh Nhật vui vẻ nhé Ly <span id="transmark" style="display: none; width: 0px; height: 0px;">❤</span></p>';

var line = 0;
cursor = '_';
function getsubString(string,dom, line){
if (line == string.length) {cursor  = '';
return}

dom.innerHTML = string.substring(0, line) + cursor;
if (line <string.length){
	setTimeout('getsubString(string, dom, line++)', 60);
}
}

dom = document.querySelectorAll('.txt')[1];
dom2 = document.querySelectorAll('.txt')[0];
/*window.addEventListener('onload' , )*/
window.addEventListener('load', getsubString(string, dom, line));
/*window.addEventListener('onload', getsubString(string, dom, line));*/
