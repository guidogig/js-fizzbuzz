for (let i=0; i<100;i++) {
    if (i%3==0) {
        if (i%5==0) {
            console.log("FizzBuzz");
            continue;
        }
    }
    console.log(i);
}