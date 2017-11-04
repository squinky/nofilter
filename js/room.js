var roombg, roombgWidth, roombgHeight;
var frame, frameWidth, frameHeight;
var leftBox, rightBox, topBox, bottomBox;

function initRoom()
{
	roombg = new createjs.Bitmap(queue.getResult("bg-placeholder2"));
	roombg.scaleX = 0.54;
	roombg.scaleY = 0.54;
	roombgWidth = roombg.getBounds().width*roombg.scaleX;
	roombgHeight = roombg.getBounds().height*roombg.scaleY;

	roombg.x = -740;
	roombg.y = -200;

	frame = new createjs.Bitmap(queue.getResult("frame"));
	frame.scaleX = 0.16;
	frame.scaleY = 0.16;
	frameWidth = frame.getBounds().width*frame.scaleX;
	frameHeight = frame.getBounds().height*frame.scaleY;

	leftBox = new createjs.Shape();
	leftBox.graphics.beginFill("#000000").drawRect(-399, 0, 400, ACTUAL_HEIGHT);
	rightBox = new createjs.Shape();
	rightBox.graphics.beginFill("#000000").drawRect(ACTUAL_WIDTH, 0, 400, ACTUAL_HEIGHT);
	topBox = new createjs.Shape();
	topBox.graphics.beginFill("#000000").drawRect(0, -399, ACTUAL_WIDTH, 400);
	bottomBox = new createjs.Shape();
	bottomBox.graphics.beginFill("#000000").drawRect(0, ACTUAL_HEIGHT, ACTUAL_WIDTH, 400);
}

function showRoom()
{	
	currentScreen = SCREEN_ROOM;

	stage.addChild(roombg);
	stage.addChild(frame);

	stage.addChild(leftBox);
	stage.addChild(rightBox);
	stage.addChild(topBox);
	stage.addChild(bottomBox);

	stage.cursor = "none";
}

function hideRoom()
{	
	stage.removeAllEventListeners();
	stage.removeAllChildren();
}

function updateRoom(timeSinceLastTick)
{
	var pos = stage.globalToLocal(stage.mouseX, stage.mouseY);

	var scrollBuffer = 100;
	var scrollFactor = 20;
	if (pos.x < scrollBuffer)
	{
		roombg.x += scrollFactor;
		if (roombg.x > 0) roombg.x = 0;
	}
	if (pos.y < scrollBuffer)
	{
		roombg.y += scrollFactor;
		if (roombg.y > 0) roombg.y = 0;
	}
	if (pos.x+frameWidth > ACTUAL_WIDTH-scrollBuffer)
	{
		roombg.x -= scrollFactor;
		if (roombg.x < ACTUAL_WIDTH-roombgWidth) roombg.x = ACTUAL_WIDTH-roombgWidth;
	}
	if (pos.y+frameHeight > ACTUAL_HEIGHT-scrollBuffer)
	{
		roombg.y -= scrollFactor;
		if (roombg.y < ACTUAL_HEIGHT-roombgHeight) roombg.y = ACTUAL_HEIGHT-roombgHeight;
	}

	frame.x = pos.x;
	frame.y = pos.y;

	if (frame.x < 0)
	{
		frame.x = 0;
	}
	if (frame.y < 0)
	{
		frame.y = 0;
	}
	if (frame.x+frameWidth > ACTUAL_WIDTH)
	{
		frame.x = ACTUAL_WIDTH-frameWidth;
	}
	if (frame.y+frameHeight > ACTUAL_HEIGHT)
	{
		frame.y = ACTUAL_HEIGHT-frameHeight;
	}
}
