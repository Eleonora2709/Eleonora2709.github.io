var L09_Snowflake;
(function (L09_Snowflake) {
    window.addEventListener("load", init);
    var imgData;
    // neue Objekte werden erzeugt
    let snowflakes = [];
    function init(_event) {
        L09_Snowflake.canvas = document.getElementsByTagName("canvas")[0];
        L09_Snowflake.crc2 = L09_Snowflake.canvas.getContext("2d");
        console.log(L09_Snowflake.crc2);
        //Background();
        //imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    // Schneeflocken
    for (let i = 0; i < 12; i++) {
        let snowflakes = new L09_Snowflake.Snowflake();
        snowflakes.position.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
        snowflakes.position.y = Math.random() * 325;
        snowflakes.push(snowflakes);
    }
    function moveObjects() {
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].move();
            if (snowflakes[i].position.x < 500 && snowflakes[i].position.y < -50) {
                snowflakes[i].position.x = Math.random() * (100 - 300) + 300;
                snowflakes[i].position.y = Math.random() * 100 + 325;
            }
        }
    }
})(L09_Snowflake || (L09_Snowflake = {}));
//# sourceMappingURL=main.js.map