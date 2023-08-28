let btn = $('#addArea');

$(function(){
	$('#clickBtn').click(function(){
		for(let i = 0; i < 50; i++){
			btn.append('<p>ボタンが押されました</p>');
		}
	})
})