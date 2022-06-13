printjson(
    db.people.mapReduce(
		function() {
			emit(this.sex, { weight: parseFloat(this.weight), height: parseFloat(this.height) }); 
		},
		function(keys, vals) { 
			let weights = vals.map(v => v.weight);
			let heights = vals.map(v => v.height);
			
			const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

			return {
				weight: average(weights),
				height: average(heights)
			}; 
		},
		{
			out: { inline: 1 }
		}
	)
);