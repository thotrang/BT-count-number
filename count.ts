let $numbers = [1, 2, 4, 5, 6, 8, 5, 5, 5, 8, 9, 10, 6];
let $value = 5;
let counts = (arr: number[], value: number) => {
    let count=0;
    for (const number of arr) {
        if(value==number){
            count++;
        }
    }
    return count;
}
console.log(counts($numbers,$value));
