function getAnimals(done) {
    Animal.get(function (err, animals) {
        if(err) {
            return done(err);
        }

        return done(null, {
            dogs: animals.dogs,
            cats: animals.cats
        })
    });

    debugger;
}