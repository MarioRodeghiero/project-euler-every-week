let num = 0;

const polindromo = (x) => {
    const str = x.toString();

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str.charCodeAt(i) !== str.charCodeAt(str.length - i - 1)) {
            return false;
        }
    }
    return true;
}

for (let x = 100; x < 1000; x++) {
    for (let y = x; y < 1000; y++) {
        if (polindromo(x * y) && x * y > num) {
            num = x * y;
        }
    }
}
console.log(num);