function getTimeString(time){
    const hour =parseInt(time) / 3600; // 1hour = 3600 second
    let second = hour % 60
    return `${hour} hour ${second} second`
}

console.log(getTimeString(900))