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

appMenu.addEventListener("click", function(e) {
	switch (e.index) {
		case 0:
			alert("from controller");
			break;
		case 1:
			alert("from i18 file");
			break;
	}
});

$.index.open();
