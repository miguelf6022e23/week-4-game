var state = {
	wins:0,
	losses:0,
	// target
	// gem1val
	// gem2val
	// gem3val
	// gem4val
	// score

	reset: function(){
		this.target= 20+Math.floor(Math.random()*20);
		this.gem1val= 2+Math.floor(Math.random()*7);
		this.gem2val= 2+Math.floor(Math.random()*7);
		this.gem3val= 2+Math.floor(Math.random()*7);
		this.gem4val= 2+Math.floor(Math.random()*7);
		this.score=0;

},

	disp: function(){
		$(#target).HTML(this.target)
	},



}

state.reset()
console.log(state)