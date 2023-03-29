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
        if(typeof x !== 'number' || typeof y !== 'number' || (typeof percentage !== 'number' || percentage > 50 || percentage < 5 )) {
            console.log('Use only numbers please, percentage is only the numbers between 5 and 50!')
            return 
        }
        /*DEFINE HOT MANY HOLES THERE WILL BE*/
        let howManyHoles = Math.floor(x * y / 100 * percentage)

        /*DEFINE RANDOM STARTING POINT*/ 
        let startingPointX = Math.floor(Math.random() * x) 
        let startingPointY = Math.floor(Math.random() * y) 
        let startingPoint = [startingPointX, startingPointY]

        /*DEFINE RANDOM STARTING POINT OF THE HAT*/
        let hatStartingPointX = Math.floor(Math.random() * x) 
        let hatStartingPointY = Math.floor(Math.random() * y) 
        let hatStartingPoint = [hatStartingPointX, hatStartingPointY]

        /* GENERATE NEW EMPTY FIELD*/
        let newLine = []
        let newField = []
        
       

        for(let i = 0; i < x; i++) {
            for(let j = 0; j < y; j++) {
                /*CREATE A CHECK AND RANDOMLY CHOOSE WHAT TO FILL THE CELL WITH*/
                if(i === startingPointX && j === startingPointY ) {
                    newLine[j] = pathCharacter
                } else if(i === hatStartingPointX && j === hatStartingPointY) {
                    newLine[j] = hat
                } else {
                    let holeOrNot = Math.random()
                    if(holeOrNot > 0.5 && howManyHoles > 0) {
                        newLine[j] = hole
                        howManyHoles -= 1
                    } else {
                        newLine[j] = fieldCharacter
                    }
                }
                

            }
                newField.push(newLine)
                newLine = []
           
        }
      
    }
    
}

const tr = new Field()

tr.generateField(4,6, 49)
tr.print()