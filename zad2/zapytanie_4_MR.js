printjson(db.people.mapReduce(
    function () {
        emit(this.nationality, {
            weight: this.weight,
            height: this.height
        });
    },
    function (key, values) {
        let sumBMI = 0;
        let maxBMI = 0;
        let minBMI = Infinity;

        values.forEach(person => {
            const heightInMeters = person.height / 100;
            const bmi = person.weight / (heightInMeters * heightInMeters);

            sumBMI += bmi;
            if (bmi > maxBMI) maxBMI = bmi;
            if (bmi < minBMI) minBMI = bmi;
        });

        return {
            avgBmi: sumBMI / values.length,
            maxBMI,
            minBMI
        };
    }, {
        out: {
            inline: 1
        }
    }
));