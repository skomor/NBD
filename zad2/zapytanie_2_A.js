printjson(
    db.people.aggregate([

        {
            $unwind: "$credit"
        },
        {
            $group: {
                _id: "$credit.currency",
                srodki: { $sum: { $toDouble: "$credit.balance" } }
            }
        },
        {
            $project: {
                _id: 0,
                waluta: "$_id",
                srodki: 1
            }
        },
    ])
    .toArray()
);