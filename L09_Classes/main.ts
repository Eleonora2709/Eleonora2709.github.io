namespace L09_Snowflake {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let snowflakes: Snowflake[] = [];

    function handleLoad(_event: Event): void {
        console.log("Snowflakes fall");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createParticles();
        //console.log("Snowflake particless: ", snowflakeParticles);

        createSnowflakes(5);
        // createShip();

        // canvas.addEventListener("mousedown", loadLaser);
       // canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }

    function createSnowflakes(_nSnowflakes: number): void {
        console.log("Create Snowflakes");
        for (let i: number = 0; i < _nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake(1.0);
            Snowflake.push(snowflake);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let snowflake of Snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }

        // ship.draw();
        // handleCollisions();
    }
}