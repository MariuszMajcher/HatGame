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
        /*DEFINE HOT MANY HOLES THERE WILL BE*/
        let howManyHoles = Math.floor(x * y / 100 * percentage)
        console.log(howManyHoles)

        /*DEFINE RANDOM STARTING POINT*/ 
        let startingPointX = Math.floor(Math.random() * x) 
        let startingPointY = Math.floor(Math.random() * y) 
        let startingPoint = [startingPointX, startingPointY]

        /* GENERATE NEW EMPTY FIELD*/
        let newLine = []
        let newField = []
        for(let i = 0; i < x; i++) {
            newField.push(newLine)
        }
       

        for(let i = 0; i < x; i++) {
            for(let j = 0; j < y; j++) {
                /*CREATE A CHECK AND RANDOMLY CHOOSE WHAT TO FILL THE CELL WITH*/
                // if(i === startingPointX)
                newField[i][j] = howManyHoles
                
                howManyHoles -= 1
            }
           
        }
        console.log(newField)
    }
    
}

const tr = new Field([  
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
        ])

tr.generateField(4,6, 70)