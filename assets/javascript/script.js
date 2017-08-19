var state = {
	wins:0,
	losses:0,
	// target
	// gem1val
	// gem2val
	// gem3val
	// gem4val
	// score
	targEl:document.getElementById("target"),
	scoreEl:document.getElementById("score"),
	winsEl:document.getElementById("wins"),
	lossEl:document.getElementById("losses"),
	icons:document.getElementsByClassName("icon"),

	reset: function(){
		this.target= 20+Math.floor(Math.random()*20);
		this.gem1val= 2+Math.floor(Math.random()*7);
		this.gem2val= 2+Math.floor(Math.random()*7);
		this.gem3val= 2+Math.floor(Math.random()*7);
		this.gem4val= 2+Math.floor(Math.random()*7);
		this.score=0;
		this.disp;
},

	disp: function(){
		// console.log(this)
		this.targEl.innerHTML = this.target;
		this.winsEl.innerHTML = "Wins: " + this.wins;
		this.lossEl.innerHTML = "Losses: " + this.losses;
		this.scoreEl.innerHTML= this.score;
	},

}

state.reset();
state.disp();
// console.log(state);
// console.log(state.icons);

 $(document).ready(function() {
        $('img').click(function() {
            // console.log(this.id);
            state.score += state[this.id+"val"];
            if (state.score>state.target){
            	alert("You Lost :(");
            	state.losses++;
            	state.reset();
            } else if (state.score === state.target){
            	alert("You Won!");
            	state.wins++;
            	state.reset();
            }
            state.disp();
        });
    });