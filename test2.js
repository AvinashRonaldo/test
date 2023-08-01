const sum = (num) => {
    return num.reduce((sum,a)=> sum+a,0)
}

const arr = [1,2,3]

const res = sum(arr);
console.log(res);