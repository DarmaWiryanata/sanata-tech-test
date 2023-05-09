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

interface Villager {
    age: number
    death: number
}

const main = (age1: number, death1: number, age2: number, death2: number) => {
    const villagerA: Villager = { age: age1, death: death1 }
    const villagerB: Villager = { age: age2, death: death2 }

    let totalKilledVillagers: number = 0

    const villagers = [villagerA, villagerB]
    
    // Check whether the villager age is valid
    let ageIsValid = true
    villagers.forEach(villager => {
        if (villager.death - villager.age < 1) ageIsValid = false
    })

    if (ageIsValid) {
        villagers.map(villager => {
            totalKilledVillagers += killedVillagers(villager.death-villager.age)
        })

        const averageKilledVillagers = totalKilledVillagers / 2
        return averageKilledVillagers
    } else { 
        return -1
    }
}

console.log(main(10, 12, 13, 17))
