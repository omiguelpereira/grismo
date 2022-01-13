function objectIterate(object, callback){
    for(key in object){
        if(typeof object[key] === 'object') objectIterate(object[key],callback)
        else object[key] = callback(object[key])
    }
    return object
}


function NumberConverter(number){
    if(!isNaN(Number(number)) && typeof number != number ) return Number(number)
    else return number
}