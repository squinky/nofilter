var insta, pic, backButton;

function initInsta()
{
	insta = new createjs.Bitmap(queue.getResult("frame"));
	insta.scaleY = ACTUAL_HEIGHT/insta.getBounds().height;
	insta.scaleX = insta.scaleY;
	insta.x = ACTUAL_WIDTH/2 - insta.getBounds().width*insta.scaleY/2;

	pic = new createjs.Bitmap(queue.getResult("bg-placeholder2"));

	backButton = new createjs.Shape();
	backButton.graphics.beginFill("#000000").drawRect(0, 0, ACTUAL_WIDTH, ACTUAL_HEIGHT);
	backButton.alpha = 0.01;
}

function showInsta(r)
{	
	currentScreen = SCREEN_INSTA;

	pic.sourceRect = r;
	pic.scaleY = ACTUAL_HEIGHT/pic.getBounds().height;
	pic.scaleX = pic.scaleY;
	pic.x = ACTUAL_WIDTH/2 - pic.getBounds().width*pic.scaleY/2;

	stage.addChild(pic);
	stage.addChild(insta);
	stage.addChild(backButton);

	backButton.cursor = "pointer";
	backButton.addEventListener("click", goBack);
}

function hideInsta()
{	
	stage.removeAllEventListeners();
	stage.removeAllChildren();
}

function goBack(event)
{
	hideInsta();
	showRoom();
}
