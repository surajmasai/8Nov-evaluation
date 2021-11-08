function quicksort(arr) {

    if (arr.length === 1) {
        return arr;
    }
    let l = arr[arr.length - 1];
    // console.log(l)
    let larr = [];
    let rarr = [];

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < l) {
            larr.push(arr[i]);
        } else {
            rarr.push(arr[i]);
        }
    }
    if (larr.length > 0 && rarr.length > 0) {
        return [...quicksort(larr), l, ...quicksort(rarr)];
    }
    else if (larr.length > 0) {
        return [...quicksort(larr), l]
    }
    else {
        return [l, ...quicksort(rarr)];
    }
}

function runProgram(input) {

    var nI = input.trim().split("\n");

    var len = +nI[0];

    var arr = nI[1].trim().split(" ").map(Number);

    var res = quicksort(arr);
    console.log(res.reverse().join(" "));

}
if (process.env.USER === "suraj") {
    runProgram(`5
2 3 1 4 5`);
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