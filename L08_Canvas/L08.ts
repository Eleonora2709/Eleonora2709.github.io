namespace L08_Canvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let goldencut: number = 0.6;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * goldencut;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawMeadow ();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman1({x: 100,y: 0});

    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(goldencut, "white");
        gradient.addColorStop(1, "#EBEBEB");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //crc2.restore();
    }

    function drawMeadow(): void {
        console.log("Meadow");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        //gradient.addColorStop(goldencut, "background");
        //gradient.addColorStop(1,"#FFFFFF");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 400, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        console.log("Background", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Background", _position, _size);

        let nParticles: number = 25;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawSnowman1(_position: Vector): void {
        console.log("Meadow", _position);

        //let r6: number = 150;
        //let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 0);
        //gradient.addColorStop(0, "white");

        crc2.translate(0,0);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "red";
        crc2.beginPath();
        crc2.arc(10, 50, 50, 0, 2 * Math.PI);
        crc2.closePath ();
        //crc2.fill();
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }
}