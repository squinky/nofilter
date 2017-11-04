var roombg, frame;
var leftBox, rightBox, topBox, bottomBox;

function initRoom()
{
	roombg = new createjs.Bitmap(queue.getResult("bg-placeholder"));
	frame = new createjs.Bitmap(queue.getResult("frame-tiny"));

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
	frame.x = pos.x;
	frame.y = pos.y;
}
