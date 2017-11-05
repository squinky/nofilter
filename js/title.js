var title;

function initTitle()
{
	title = new createjs.Bitmap(queue.getResult("title-placeholder"));
}

function showTitle()
{	
	currentScreen = SCREEN_TITLE;

	stage.addChild(title);

	title.cursor = "pointer";
	title.addEventListener("click", handleTitleClick);

	createjs.Sound.play(" intro-music-low", { loop: -1 });
}

function hideTitle()
{	
	stage.removeAllEventListeners();
	stage.removeAllChildren();
}

function handleTitleClick(event)
{
	createjs.Sound.removeSound(" intro-music-low");
	createjs.Sound.play("click0");
	createjs.Sound.play("soundtrack1", { loop: -1 });
	hideTitle();
	showRoom();
}
