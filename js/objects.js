var objects = [];
var animObjects = [];
var frameLength = 100;
var frameTimeElapsed = 0;

function addObjects()
{
	// objects.push({ name: "bed", bmp: new createjs.Bitmap(queue.getResult("02bed")) });
	// objects.push({ name: "table", bmp: new createjs.Bitmap(queue.getResult("03bedside")) });
	// objects.push({ name: "drawer", bmp: new createjs.Bitmap(queue.getResult("04drawer")) });
	// objects.push({ name: "mirror", bmp: new createjs.Bitmap(queue.getResult("05mirror")) });
	// objects.push({ name: "zebra", bmp: new createjs.Bitmap(queue.getResult("06zebra")) });
	// objects.push({ name: "vibrator", bmp: new createjs.Bitmap(queue.getResult("07vibrator")) });
	// objects.push({ name: "books", bmp: new createjs.Bitmap(queue.getResult("08books")) });

	var catframes = [];
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers01")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers02")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers03")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers04")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers05")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers06")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers05")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers04")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers03")));
	catframes.push(new createjs.Bitmap(queue.getResult("new_catdrawers02")));
	animObjects.push({ name: "cat", frames: catframes, currentFrame: 0 });

	var o;
	for (o of objects)
	{
		roombg.addChild(o.bmp);
	}
	for (o of animObjects)
	{
		roombg.addChild(o.frames[o.currentFrame]);
	}
}

function animateObjects(timeSinceLastTick)
{
	frameTimeElapsed += timeSinceLastTick;

	if (frameTimeElapsed >= frameLength)
	{
		for (o of animObjects)
		{
			roombg.removeChild(o.frames[o.currentFrame]);
			o.currentFrame++;
			if (o.currentFrame >= o.frames.length) o.currentFrame = 0;
			roombg.addChild(o.frames[o.currentFrame]);
		}
		frameTimeElapsed = 0;
	}
}

function checkObjectCollisions(r)
{
	var collidedObjects = [];

	var o, x, y, added;

	var widthBuffer = 140;
	var heightBuffer = 50;
	var pixelDistance = 50;

	for (o of objects)
	{
		added = false;
		for (x = r.x; x <= r.x+r.width; x += pixelDistance)
		{
			for (y = r.y+widthBuffer; y <= r.y+r.height-heightBuffer; y += pixelDistance)
			{
				if (o.bmp.hitTest(x, y))
				{
					collidedObjects.push(o);
					added = true;
					break;
				}
			}
			if (added) break;
		}
	}

	for (o of animObjects)
	{
		added = false;
		for (x = r.x; x <= r.x+r.width; x += pixelDistance)
		{
			for (y = r.y+widthBuffer; y <= r.y+r.height-heightBuffer; y += pixelDistance)
			{
				if (o.frames[o.currentFrame].hitTest(x, y))
				{
					var newObj = { name: o.name, bmp: o.frames[o.currentFrame] }
					collidedObjects.push(newObj);
					added = true;
					break;
				}
			}
			if (added) break;
		}
	}

	return collidedObjects;
}
