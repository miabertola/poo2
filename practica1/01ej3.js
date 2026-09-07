function repeat(funToRepeat,n){
    for(let i=1; i<=n; i++){
        funToRepeat(i);
    }
}

function printString(n){
    console.log(`Execution number: ${n}`);
}

repeat(printString, 4);