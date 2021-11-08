function runProgram(input) {
    var nI = input.trim().split("\n");

    var len = +nI[0];

    var arr = nI[1].trim().split(" ").map(Number);

    // console.log(arr)
    var A = 2;
    var B = 3

    let even = 0;
    let odd = 0;
    for (var i = 0; i < len; i++) {
        // console.log(arr[i])
        if (arr[i] % 2 == 0) {
            even = even + arr[i]

        } else {
            odd = odd + arr[i]
        }
    }
    // console.log(even)
    // console.log(odd)

    var equation = (even * A) + (odd * B);
    console.log(equation)

}
if (process.env.USER === "suraj") {
    runProgram(`5
1 2 3 4 5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}