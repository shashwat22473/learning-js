const marvel_heroes=["Thor", "Ironman", "spiderman"]
const dc_heroes=["superman",'flash',"batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)

marvel_heroes.pop()

console.log(marvel_heroes);

// There are two ways to merge existing arrays
// first is concat, this can only merge two array at a time 
console.log(marvel_heroes.concat(dc_heroes))

// other method , can join multiple arrays
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

const weird_arr = [1,2,3,[4,5,6],[6,[7,8,9]]]
const flat_weird_arr=weird_arr.flat(Infinity)
console.log(flat_weird_arr)

console.log(Array.isArray("Shashwat"))

console.log(Array.from("Shashwat"))

console.log(Array.from({name: "shashwat"})) 
// The above case is interesting , this will return an empty array, the reason being that we can decide what to make an array of , keys or values.


// this also creates an array
console.log(Array.of(1,2,3))

