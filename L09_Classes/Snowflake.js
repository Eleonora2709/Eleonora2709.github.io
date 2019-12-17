var L09_Snowflake;
(function (L09_Snowflake) {
    class Snowflake {
        constructor(_position) {
            console.log("Snowflake constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Snowflake.Vector(0, 0);
            // neue Funktion, die einen random Wert für x festlegt
            let randomNumber = Math.random() * 4;
            // Die Geschwindigkeit soll den Vektor 0 und random haben   
            this.velocity = new L09_Snowflake.Vector(0, randomNumber);
            this.size = (Math.random()) * (3 - 0.5) + 0.5;
        }
        move(_timeslice) {
            console.log("Snowflake move");
            let offset = new L09_Snowflake.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y < 0)
                this.position.y += L09_Snowflake.crc2.canvas.height;
            if (this.position.x > L09_Snowflake.crc2.canvas.width)
                this.position.x -= L09_Snowflake.crc2.canvas.width;
            if (this.position.y > L09_Snowflake.crc2.canvas.height)
                this.position.y -= L09_Snowflake.crc2.canvas.height;
        }
        draw() {
            // console.log("Asteroid draw");
            let nParticles = 400;
            let particle = new Path2D();
            particle.arc(0, 0, 2, 0, 2 * Math.PI);
            L09_Snowflake.crc2.save();
            L09_Snowflake.crc2.translate(this.position.x, this.position.y);
            L09_Snowflake.crc2.fillStyle = "white";
            L09_Snowflake.crc2.fill(particle);
            L09_Snowflake.crc2.restore();
        }
    }
    L09_Snowflake.Snowflake = Snowflake;
})(L09_Snowflake || (L09_Snowflake = {}));
//# sourceMappingURL=Snowflake.js.map