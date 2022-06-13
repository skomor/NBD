printjson(
    db.people.aggregate([
        {
            $match: { sex: "Female", nationality: "Poland" }
        },
        {
            $unwind: "$credit"
        },
        {
            $group: {
                _id: "$credit.currency",
                "avg": { $sum: { $toDouble: "$credit.balance" } },
                "sum": { $avg: { $toDouble: "$credit.balance" } },
            }
        },
        {
            $project: {
                _id: 0,
                curr: "$_id",
                "avg": 1,
                "sum": 1
            }
        },
		{
			$sort: { curr: 1 } 
		}
    ])
    .toArray()
);