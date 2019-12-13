var L09_Snowflake;
(function (L09_Snowflake) {
    window.addEventListener("load", handleLoad);
    let snowflakes = [];
    function handleLoad(_event) {
        console.log("Snowflakes fall");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Snowflake.crc2 = canvas.getContext("2d");
        L09_Snowflake.crc2.fillStyle = "black";
        L09_Snowflake.crc2.strokeStyle = "white";
        createParticles();
        console.log("Snowflake particless: ", snowflakeParticles);
        createSnowflakes(5);
        // createShip();
        // canvas.addEventListener("mousedown", loadLaser);
        // canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function createSnowflakes(_nSnowflakes) {
        console.log("Create Snowflakes");
        for (let i = 0; i < _nSnowflakes; i++) {
            let snowflake = new L09_Snowflake.Snowflake(1.0);
            L09_Snowflake.Snowflake.push(snowflake);
        }
    }
    function update() {
        console.log("Update");
        L09_Snowflake.crc2.fillRect(0, 0, L09_Snowflake.crc2.canvas.width, L09_Snowflake.crc2.canvas.height);
        for (let snowflake of Snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
})(L09_Snowflake || (L09_Snowflake = {}));
//# sourceMappingURL=main.js.map