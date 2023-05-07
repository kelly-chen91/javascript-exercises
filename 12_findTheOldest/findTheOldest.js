const findTheOldest = function(ppl_list) {
    return ppl_list.reduce((p1, p2) => {
        let p1_age = get_age(p1);
        let p2_age = get_age(p2);
        if(p1_age >= p2_age) return p1;
        if(p1_age < p2_age) return p2;
    });
};

const get_age = function(person){
    if(typeof person.yearOfDeath === "undefined"){
        let date = new Date();
        return curr_age = date.getFullYear() - person.yearOfBirth;
    }
    return curr_age = person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
