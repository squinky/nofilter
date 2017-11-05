var insta, pic, backButton, caption;

function initInsta()
{
	insta = new createjs.Bitmap(queue.getResult("frame"));
	insta.scaleY = ACTUAL_HEIGHT/insta.getBounds().height;
	insta.scaleX = insta.scaleY;
	insta.x = ACTUAL_WIDTH/2 - insta.getBounds().width*insta.scaleX/2;

	pic = new createjs.Bitmap(queue.getResult("bg-placeholder2"));

	backButton = new createjs.Shape();
	backButton.graphics.beginFill("#000000").drawRect(0, 0, ACTUAL_WIDTH, ACTUAL_HEIGHT);
	backButton.alpha = 0.01;

	caption = new createjs.Text("", "24px Open Sans", "#333333");
	caption.textAlign = "left";
	caption.x = insta.x+50;
	caption.y = 920;
	caption.lineWidth = insta.getBounds().width*insta.scaleX - 100;
}

function showInsta(r)
{	
	currentScreen = SCREEN_INSTA;

	pic.sourceRect = r;
	pic.scaleX = insta.getBounds().width*insta.scaleX/pic.getBounds().width;
	pic.scaleY = pic.scaleX;
	pic.x = ACTUAL_WIDTH/2 - pic.getBounds().width*pic.scaleX/2;

	var objs = checkObjectCollisions(r);

	stage.addChild(pic);

	caption.text = "This is a caption. A what? A caption! A what? A caption! Oh, a caption! #blessed #yolo #idgaf #tbt #wlw #catsofinstagram";

	for (var o of objs)
	{
		if (o.name == "ghost") caption.text = "OOOOOOOoooooooOOOOOOooo OOOOOOOOOOOOOooooo #spoopy"

		var objPic = o.bmp.clone();
		objPic.sourceRect = pic.sourceRect;
		objPic.scaleX = pic.scaleX;
		objPic.scaleY = pic.scaleY;
		objPic.x = pic.x;
		stage.addChild(objPic);
	}

	stage.addChild(insta);
	stage.addChild(caption);
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
