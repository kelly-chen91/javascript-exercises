const removeFromArray = function(list, ...args) {
    let remove_list = [];
    let to_remove = false;
    for(let i = 0; i < list.length; i++){
        to_remove = false;
        for(remove of args){ //loops through the args to match with the element. 
            if(list[i] === remove){
                to_remove = true; //it is better to have a boolean marker because if we were to append to the list right away, it will keep appending the same element
            }
        }
        if(!to_remove) remove_list.push(list[i])
    }
    return remove_list;
};

// Do not edit below this line
module.exports = removeFromArray;
