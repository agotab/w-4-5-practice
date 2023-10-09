/* const arr = ["egy", "ketto", "harom", "negy"]
console.log(arr.includes("ketto"))

console.log(["one", "two", "three", "four"].includes("text"))

const obj = {
  key1: "value",
  key2: 10,
  key3: function() {
    console.log("hello")
  }
}
console.log(obj.key3()) */

const arr = ["alma", "körte", "uborka"]
/* arr.push("szilva", "birs", "szőlő") // a tömb legvégére beilleszti, egy arrayre kerül

console.log(arr) */

const arrElement = arr.pop() //legutolsó elemet kiszedi

console.log(arrElement, arr)

for (const key of Object.keys(obj)) {
  console.log(key, obj[key])
}

const userNames = users.map((user) => user.name) //a map visszaad egy másik tömböt

console.log(userNames)