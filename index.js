// Write your solution here!

    let cats= ["Milo", "Otis", "Garfield"]
function cat (){
    return cats
}
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop(cat.length -1)
}
function destructivelyRemoveFirstCat(){
    cats.shift(0)
}
l
function appendCat(){
return [...cats,"Broom"]
}
function prependCat(){
    return ["Arnold",...cats]
}
function removeLastCat(){
   return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1,4)
}

