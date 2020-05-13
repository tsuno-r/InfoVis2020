class Vec3
{
	// Constructor
	constructor(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}

	// Add method
	add(v)
	{
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	}

	// Sum method
	sum()
	{
		return this.x + this.y + this.z;
	}

	min()
	{
		return Math.min(this.x, this.y, this.z);
	}

	mid()
	{
		var arr =[this.x, this.y, this.z];
		arr = arr.sort();

		var half_length = (arr.length / 2) | 0;

		if (arr.length % 2 == 1) {
			return arr[half_length];
		}else {
			return (arr[half_length - 1] + arr[half_length]) / 2;
		}
	}

	max()
	{
		return Math.max(this.x, this.y, this.z);
	}
}


// // Constructor
// Vec3 = function(x, y, z) 
// {
// 	this.x = x;
// 	this.y = y;
// 	this.z = z;
// }

// // Add method
// Vec3.prototype.add = function(v)
// {
// 	this.x += v.x;
// 	this.y += v.y;
// 	this.z += v.z;
// 	return this;
// }

// // Sum method
// Vec3.prototype.sum = function()
// {
// 	return this.x + this.y + this.z;
// }



