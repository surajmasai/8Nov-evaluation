function runProgram(input) {

    var nI = input.trim().split(" ").map(Number);
    // console.log(nI)
    var n = nI[0];
    var k = nI[1];

    // console.log(n)
    // console.log(k)
    var arr = []

    for (var i = 1; i <= n; i++) {
        arr.push(i)
    }
    // console.log(arr)
    var str = " ";

    for (var l = 0; l < arr.length; l++) {

        for (var j = j + 1; j <= arr.length; j++) {
            str = arr.substring(l, j);
            console.log(str)

        }
    }


}
if (process.env.USER === "suraj") {
    runProgram(`4 2`);
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