// for ([initialExpression]; [conditionExpression]; [incrementExpression])
// statement
// for (statement 1; statement 2; statement 3) { code to be executed }

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Hello World');
}
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}