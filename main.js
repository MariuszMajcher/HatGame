const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        prompt('where')
        for (let i = 0; i < this.field.length; i++) {
            let line = ''
            for (let j = 0; j < this.field[i].length; j++)
            line += this.field[i][j] + " "
            console.log(line)
        }
       
    }

    generateField(x, y, percentage) {
        if(typeof x !== 'number' || typeof y !== 'number' || (typeof percentage !== 'number' || percentage > 80 || percentage < 5 )) {
            console.log('Use only numbers please, percentage is only the numbers between 5 and 80!')
            return 
        }
        let howManyHoles = Math.floor(x * y / 100 * percentage)
        console.log(howManyHoles)
        let newField = []
        for(let i; i < x; i++) {

        }
    }
    
}

const tr = new Field([  
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
        ])

tr.generateField(4,4, 90)