namespace L09_Snowflake {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    var imgData: ImageData;
    export let canvas: HTMLCanvasElement;

// neue Objekte werden erzeugt
    let snowflakes: Snowflake[] = [];

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Background();
        //imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }   

// Schneeflocken
    for (let i: number = 0; i < 12; i++) {
        let snowflakes: Snowflake = new Snowflake ();
        snowflakes.position.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
        snowflakes.position.y = Math.random() * 325;
        snowflakes.push(snowflakes);
    }
    

    function moveObjects(): void {

        for (let i: number = 0; i < snowflakes.length; i++) {
            snowflakes[i].move();

            if (snowflakes[i].position.x < 500 && snowflakes[i].position.y < -50) {
                snowflakes[i].position.x = Math.random() * (100 - 300) + 300;
                snowflakes[i].position.y = Math.random() * 100 + 325;
            }
        }

    }
}
    