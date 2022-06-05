//6.	Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób 
//(dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne); 
printjson(db.people.insert( {

        sex: 'Male',
        first_name: 'Piotr',
        last_name: 'Skomorowski',
        job: 'Programmer',
        email: 'piotrskomorow@gmail.com',
        location: {

            city: 'Warsaw',
            address: {
                streetname: 'Some street', streetnumber: '1'
            }
        }

        ,
        description: "loves mongoDb",
        height: 186,
        weight: 96,
        birth_date: '1998-04-04T05:44:11Z',
        nationality: 'Poland',
        credit: [ {
            type: 'visa',
            number: '1254785412584785',
            currency: 'PLN',
            balance: '1'
        }

        ]
    }

));