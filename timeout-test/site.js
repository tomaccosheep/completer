function printA() {
    console.log("a");
}
$("#submitWord").click(function() {
    setTimeout(function() {
        printA();
}, 3000);

});
