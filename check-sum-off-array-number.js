const number = [
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
]

console.log(checkSumOffArrayNumber(number))

/*This function will check the sum of multi dimension array:
horizontal, vertical, cross from up left to bottom right and cross from up right to bottom left*/
function checkSumOffArrayNumber (array) {
  const sumNumberTemp = []

  //loop horizontal
  for (let i=0; i<number.length; i++) {
    const length = number[i].length
    let sum = 0
    for (let j=0; j<length; j++) {
      sum += number[i][j]
    }
    sumNumberTemp.push(sum)
  }

  //loop vertical
  for (let i=0; i<number.length; i++) {
    let sum = 0
    for (let j=0; j<number.length; j++) {
      sum += (number[j][i])
    }
    sumNumberTemp.push(sum)
  }

  //loop cross 1
  let array3Sum = 0
  for (let i=0; i<number.length; i++) {
      array3Sum += number[i][i]
  }
  sumNumberTemp.push(array3Sum)

  //loop cross 2
  let j = number.length
  let array4Sum = 0
  for (let i=0; i<number.length; i++) {
    j--
    array4Sum += number[i][j]
  }
  sumNumberTemp.push(array4Sum)

  const isAllSame = sumNumberTemp.every((value, idx, array) => value === array[0] )
  //console.log(sumNumberTemp)
  //console.log(isAllSame)
  return isAllSame
}

