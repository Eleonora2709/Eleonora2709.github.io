var L09_Snowflake;
(function (L09_Snowflake) {
    function createParticles() {
        L09_Snowflake.asteroidPaths = createAsteroidPaths(shapesAsteroids);
        L09_Snowflake.ufoPath = createUfoPath();
    }
    L09_Snowflake.createParticles = createParticles;
    function createAsteroidPaths(_shapes) {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            // console.group(type);
            for (let coordinates of type) {
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            // console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
    function createUfoPath() {
        let path = new Path2D();
        path.moveTo(20, 13);
        path.lineTo(27, 3);
        path.lineTo(38, 3);
        path.lineTo(43, 13);
        path.lineTo(59, 25);
        path.lineTo(45, 35);
        path.lineTo(18, 35);
        path.lineTo(4, 25);
        path.lineTo(20, 13);
        path.lineTo(43, 13);
        path.closePath();
        path.moveTo(4, 25);
        path.lineTo(59, 25);
        path.closePath();
        return path;
    }
})(L09_Snowflake || (L09_Snowflake = {}));
//# sourceMappingURL=Particle.js.map