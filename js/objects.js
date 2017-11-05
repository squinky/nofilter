var objects = [];
var animObjects = [];

function addObjects()
{
	objects.push({ name: "ghost", bmp: new createjs.Bitmap(queue.getResult("placeholderghost-1")) });

	for (var o of objects)
	{
		roombg.addChild(o.bmp);
	}
}

function checkObjectCollisions(r)
{
	var collidedObjects = [];

	for (var o of objects)
	{
		var added = false;
		for (var x = r.x; x <= r.x+r.width; x += 100)
		{
			for (var y = r.y+140; y <= r.y+r.height; y += 100)
			{
				console.log(x, y);
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

	return collidedObjects;
}
