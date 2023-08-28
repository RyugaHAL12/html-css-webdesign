let btn = $('#addArea');

$(function(){
	$('#clickBtn').click(function(){
		let text = $('#inputWord').val();
		console.log(text);
		for(let i = 0; i < 50; i++){
			btn.append('<p>'+ text + '</p>');
		}
	})
})