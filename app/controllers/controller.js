$.win.addAction('عربي تمام', 'ic_favorite.png', function(e) {
	alert('good from controller');
});

$.win.addAction(L('from_i18n'), 'ic_feedback.png', function(e) {
	alert('from i18 file');
});

var file = Ti.Filesystem.getFile('app/native/assets/arabictxt.txt');
$.textLbl.text = file.read().text;
$.text2Lbl.text = L('from_i18n');
