printjson(
    db.people.aggregate([{
            $group: {
                _id: "$nationality",
                "MinBmi": {
                    "$min": {
                        $divide: [{
                                $toDouble: "$weight"
                            },
                            {
                                $pow: [{
                                    $divide: [{
                                        $toDouble: "$height"
                                    }, 100]
                                }, 2]
                            }
                        ]
                    }
                },
                "MaxBmi": {
                    "$max": {
                        $divide: [{
                                $toDouble: "$weight"
                            },
                            {
                                $pow: [{
                                    $divide: [{
                                        $toDouble: "$height"
                                    }, 100]
                                }, 2]
                            }
                        ]
                    }
                },
                "AvgBmi": {
                    "$avg": {
                        $divide: [{
                                $toDouble: "$weight"
                            },
                            {
                                $pow: [{
                                    $divide: [{
                                        $toDouble: "$height"
                                    }, 100]
                                }, 2]
                            }
                        ]
                    }
                }
            }
        },
        {
            $sort: {
                _id: 1
            }
        }
    ])
    .toArray()
);