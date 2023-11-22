class Vector {
    constructor(coordinates) {
        this.coordinates = coordinates;
    }

    add(vector2) {
        if (this.coordinates.length !== vector2.coordinates.length) {
            throw new Error('Вектори мають бути однакової довжини');
        }

        let result = this.coordinates.map((value, index) => value + vector2.coordinates[index]);
        return new Vector(result);
    }

    subtract(vector2) {
        if (this.coordinates.length !== vector2.coordinates.length) {
            throw new Error('Вектори мають бути однакової довжини');
        }

        let result = this.coordinates.map((value, index) => value - vector2.coordinates[index]);
        return new Vector(result);
    }

    dot(vector2) {
        if (this.coordinates.length !== vector2.coordinates.length) {
            throw new Error('Вектори мають бути однакової довжини');
        }

        let result = this.coordinates.reduce((sum, value, index) => sum + value * vector2.coordinates[index], 0);
        return result;
    }

    norm() {
        let squares = this.coordinates.reduce((sum, value) => sum + value ** 2, 0);

        return Math.sqrt(squares);
    }

    toString() {
        return `(${this.coordinates.join(',')})`;
    }

    equals(vector2) {

        if (!(vector2 instanceof Vector)) {
            return false;
        }

        if (this.coordinates.length !== vector2.coordinates.length) {
            return false;
        }

        return this.coordinates.every((value, index) => value === vector2.coordinates[index]);
    }
}