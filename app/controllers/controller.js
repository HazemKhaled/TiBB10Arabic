$.win.addAction('عربي تمام', 'ic_favorite.png', function(e) {
	alert('good from controller');
});

$.win.addAction(L('from_i18n'), 'ic_feedback.png', function(e) {
	alert('from i18 file');
});
try {
	var file = Ti.Filesystem.getFile('app/native/assets/blackberry/arabictxt.txt');
} catch (e) {
	var file = Ti.Filesystem.getFile('app/native/assets/arabictxt.txt');
}

$.textLbl.text = file.read().text;
$.text2Lbl.text = L('from_i18n');

var rightBtn = Ti.UI.BlackBerry.createNavButton({
	title : "عربي"
});
$.win.setRightNavButton(rightBtn);

var leftBtn = Ti.UI.BlackBerry.createNavButton({
	title : L("from_i18n")
});
$.win.setLeftNavButton(leftBtn);
