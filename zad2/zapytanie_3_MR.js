printjson(
    db.people.mapReduce(
		function() {
			emit(this.job, this.job);
		},
		function(keys, vals) {
			return 1;
		},
		{
			out: {inline: 1}
		}
	)
);
