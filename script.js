/* for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz");
            continue;
        }
        console.log("Fizz");
        continue;
    } else if (i % 5 == 0) {
        console.log("Buzz");
        continue;
    } else {
        console.log(i);
    }
} */

////////

for (let i = 0; i < 100; i++) {
    const val = i + 1;
    const multipleOf3 = val % 3 === 0;
    const multipleOf5 = val % 5 === 0;

    if (multipleOf3 && multipleOf5) {
        console.log("FizzBuzz");
    } else if (multipleOf3) {
        console.log("Fizz");
    } else if (multipleOf5) {
        console.log("Buzz");
    } else {
        console.log(val);
    }
}
