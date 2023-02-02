//////  ----------1
const numbArr = [];

for (let i = 20; i <= 30; i += 0.5) {
    numbArr.push(i);
    ;
}

console.log(numbArr.join(' '));

///------------------2

for (let i = 10; i <= 100; i += 10) {
    let usdCourse = 27;
    console.log(`${i} usd = ${i * usdCourse} uah`);
}

////-------------------3

const findGivenNumbers = (n) => {
    for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= n) {
            console.log(i);
        }
    }
}

findGivenNumbers(120);

///////----------------4

const isSimpleNumber = (number) => {
    let countDividers = 0;
    for (let i = 1; i <= number; i++) {
        if (!(number % i)) {
            countDividers += 1;
        }
    }
    return countDividers === 2 ? true : false;
}


console.log(isSimpleNumber(89));


///////////------------------------5

const findDegreeOf = (number) => {
    for (let i = 1; i <= 30; i++) {
        if (number === 3 ** i) {
            return true;
        }
    }
    return false;
}

console.log(findDegreeOf(243));