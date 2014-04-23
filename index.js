function Pool(factory){
	this.factory = factory;
	this.pool = [];
}

Pool.prototype.get = function(){
	return this.pool.pop() || this.factory();
};

Pool.prototype.free = function(object){
	this.pool.push(object);
};

module.exports = Pool;
