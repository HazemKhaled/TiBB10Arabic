///swipe dowm from top to see app menu. app menu is shown throughout all windows
var appMenu = Ti.UI.BlackBerry.createApplicationMenu({
	items : [{
		title : "تجربة من الكنتروللر",
		icon : "ic_help.png"
	}, {
		title : L("from_i18n"),
		icon : "ic_home.png"
	}]
});

appMenu.addEventListener('click', function(e) {
	Ti.UI.createAlertDialog({
		title : "عنوان الرسالة تمام",
		message : "كمان نص الرسالة تمام",
		buttonNames : ["عربي", L("from_i18n"), "English"]
	}).show();
});

$.index.open();
