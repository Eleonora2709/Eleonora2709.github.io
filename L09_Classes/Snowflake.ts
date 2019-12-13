namespace L09_Snowflake {
    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_position?: Vector) {
            console.log("Snowflake constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
            
           // neue Funktion, die einen random Wert für x festlegt
            let randomNumber : number = Math.random() * 4;
         // Die Geschwindigkeit soll den Vektor 0 und random haben   
            this.velocity = new Vector(0, randomNumber);
            this.size = (Math.random()) * (3 - 0.5) + 0.5;
        }

        move(_timeslice: number): void {
         console.log("Snowflake move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            // console.log("Asteroid draw");
            let nParticles: number = 400;
            let particle: Path2D = new Path2D();
        
            particle.arc(0, 0, 2, 0, 2 * Math.PI);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "white";
            crc2.fill(particle);
            crc2.restore();
        }
    }
}