const number = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

console.log(checkSumOffArrayNumber(number))

/*This function will check the sum of multi dimension array:
horizontal, vertical, cross from up left to bottom right and cross from up right to bottom left*/
function checkSumOffArrayNumber(number) {
    let crossSum = 0
    let reverseCrossSum = 0
    let fisrtIndexVal = 0

    for (let i = 0; i < number.length; i++) {
        const length = number[i].length
        let sum = 0
        let sumVertical = 0

        for (let j = 0; j < length; j++) {
            sum += number[i][j]
        }

        if (i === 0) fisrtIndexVal = sum

        if (sum !== fisrtIndexVal) return false

        for (let j = 0; j < number.length; j++) {
            sumVertical += (number[j][i])
        }

        if (sum !== fisrtIndexVal) return false

        crossSum += number[i][i]

        const reverseIndex = (length - 1) - i
        reverseCrossSum += number[i][reverseIndex]

    }

    if (crossSum !== fisrtIndexVal || reverseCrossSum !== fisrtIndexVal) {
        return false
    } else {
        return true
    }
}
