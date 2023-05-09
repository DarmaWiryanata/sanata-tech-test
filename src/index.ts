const fibonacciSequences = (n: number): number[] => {
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [1]
    } else if (n === 2) {
        return [1, 1]
    } else {
        const arr = [1, 1];
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        }
        return arr
    }
}

const killedVillagers = (n: number): number => {
    const fibonacci = fibonacciSequences(n)

    return fibonacci.reduce((total, current) => {
        return total + current;
    }, 0)
}

const main = () => {
    const villagerA: { age: number, death: number } = { age: 10, death: 12 }
    const villagerB: { age: number, death: number } = { age: 13, death: 17 }

    let totalKilledVillagers: number = 0

    const villagers = [villagerA, villagerB]

    villagers.map(villager => {
        totalKilledVillagers += killedVillagers(villager.death-villager.age)
    })

    const averageKilledVillagers = totalKilledVillagers / 2
    return averageKilledVillagers
}

console.log(main())
