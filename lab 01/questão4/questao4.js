let F = function(n){
    let current = 0, last = 1, newone;
    for(let i = 1; i <= n; i++){
        newone = current + last;
        last = current;
        current = newone;
        console.log(current)
    }
}
F(100)