printjson(
    db.people.mapReduce(
        function () {
            this.credit.forEach(c => emit(
                c.currency,
                { balance: parseFloat(c.balance), sum: 0, avg: 0 }));
        },
        function (keys, vals) {
            let balances = vals.map(v => v.balance);
            const sum = arr => arr.reduce((p, c) => p + c);
            return {
                sum: Array.sum(balances),
                avg: sum(balances) / balances.length,
            };
        }, {
            out: {
                inline: 1
            },
            query: {
                sex: "Female",
                nationality: "Poland"
            }
        }
    )
);