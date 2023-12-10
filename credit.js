
function dogFactory(name, breed, weight) {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        /**
         * @param {string} name
         */
        set name(name) {
            if (typeof name === 'string'){
                this._name = name;
            }
        },
        /**
         * @param {string} breed
         */
        set breed(breed){
            if(typeof breed === 'string') {
                this._breed = breed
            }
        },
        /**
         * @param {number} weight
         */
        set weight(weight) {
            if(typeof weight === 'number') {
                this._weight = weight;
            }
        },
        get name() {
            if(this._name){
                return this._name
            }
        },
        get breed() {
            if(this._breed) {
                return this._breed
            }
        },
        get weight() {
            if (this._weight) {
                return this._weight;
            }
        },
        bark() {
            return 'ruff! ruff'
        },
        eatTooManyTreats() {
            return this._weight += 1;
        }
    }
}


console.log(dogFactory('Joe', 'Pug', 27))

function subLength(str, cha) {
    if (str.split(cha).length-1 !== 2) {
        return 0
    }
    let nj = str.indexOf(cha)
    let fg = str.indexOf(cha, nj + 1)
    let length = fg - nj + 1;
    return length
}
console.log(subLength('Saturday', 'a')) 
console.log(subLength('summer', 'm'))
console.log(subLength('digitize', 'i'))
console.log(subLength('cheesecake', 'k'))

function groceries(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 'Groceries are not available'
    }
    let result =''
    let length = array.length
    if (length === 1) {
        return array[length-1].item
    }
    for (let i = 0; i < (length)-2; i++){
        result += array[i].item + ', '
    }
    result += array[length-2].item + ' and ' + array[length-1].item
    return result
}
let sU = groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
console.log(sU)

console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ))
console.log(groceries( [{item: 'Cheese Balls'}] ))


const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const batch = [
    valid1,
    valid2,
    valid3,
    valid4,
    valid5,
    invalid1,
    invalid2,
    invalid3,
    invalid4,
    invalid5,
    mystery1,
    mystery2,
    mystery3,
    mystery4,
    mystery5,
  ];

  function validateCred(array) {
    for(let i=0; i < array.length; i++){
        let result = 0
        for(let j = 1; j < array[i].length; j += 2) {
            result += array[i][j]
        }
        for(let k=0; k < array[i].length; k += 2) {
            let res = array[i][k] * 2
            if (res.toString().length === 2){
                res = res - 9
            }
            result += res;
        }
        console.log(result)
        if (result% 10 === 0){
            console.log('valid number')
        }
        else {
            console.log('invalid number')
        }
    }
  }
validateCred(batch)

function invalidCompanies(array) {
    let company = []
    for (let i=0; i < array.length; i++) {
        switch(array[i][0]){
            case 3:
                if(company.indexOf('Amex') === -1){
                    company.push('Amex')
                }
                break;
            case 4:
                if(company.indexOf('Visa') === -1){
                    company.push('Visa')
                }
                break;
            case 5:
                if(company.indexOf('Mastercard') === -1){
                    company.push('Mastercard')
                }
                break;
            case 6:
                if(company.indexOf('Discover') === -1){
                    company.push('Discover')
                }
                break;
            default:
                console.log('Compnaies not found')
                break;
        }
    }
    return company
}
console.log(invalidCompanies([invalid3]))
console.log(invalidCompanies(batch))