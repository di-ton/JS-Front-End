function solve(input) {
    const R = (/[A-Za-z0-9]+/gm)
    // const R = (/\w+/g)
    let result = input.match(R);
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].toUpperCase()
    }
    console.log(result.join(', '))
}

solve('Hi, how are you?')
solve('hello')