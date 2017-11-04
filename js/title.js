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
}

function hideTitle()
{	
	stage.removeAllEventListeners();
	stage.removeAllChildren();
}

function handleTitleClick(event)
{
	hideTitle();
	showRoom();
}
