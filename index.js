function f (n) {
    if(n == 1 || n == 2){
        return 1
    }
    return f(n - 1) + f(n - 2) 
}
for(let i = 1; i<= 10; i++) {
    console.log(f(n));
}