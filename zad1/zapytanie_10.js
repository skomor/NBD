//10.	Usuń u wszystkich osób o zawodzie „Editor” własność „email”. 
printjson(db.people.updateMany({
    job: 'Editor'
}, {
    $unset: {
        email: true
    }
}));

printjson(db.people.find({
    job: "Editor"
}).toArray());