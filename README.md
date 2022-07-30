# check-sum-off-array-number
Created by Pratama Indra R <br/>
This function will check the sum of multi dimension array is same or not: <br/>
horizontal, vertical, cross from up left to bottom right and cross from up right to bottom left
## Usage

```js
const arrayNumber = [
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
]

console.log(checkNumber(arrayNumber)) // true

const arrayNumber = [
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,5,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
]

console.log(checkNumber(arrayNumber)) // false

```
