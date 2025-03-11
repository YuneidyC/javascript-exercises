const findTheOldest = function(people) {
    return people.reduce((acc, person) => {
        const oldest = getOldestPerson(acc.yearOfBirth, acc.yearOfDeath);
        const current = getOldestPerson(
            person.yearOfBirth,
            person.yearOfDeath
        );

        if (oldest < current)
        {
            return person;
        }

        return acc;
    });
};

function getOldestPerson(birth, death) {
    if (!death)
    {
        death = new Date().getFullYear();
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
