function solution(players, m, k) {
    let res = 0
    const computer = []
    for (let i = 0; i < players.length; i++) {
        while (computer[0] === i) computer.shift()
        if (Math.floor(players[i] / m) > computer.length) {
            let count = Math.floor(players[i] / m) - computer.length
            res += count
            while (count--) computer.push(i + k)
        }
    }
    return res
}


const players1 = [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5]	
const m1 = 3	
const k1 = 5	
solution(players1, m1, k1) //7