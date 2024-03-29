const skills = [
    {id: 2345, skill: 'Reading Code', done: true},
    {id: 6789, skill: 'Writing Code', done: false},
    {id: 9012, skill: 'Do HW', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll(){
    return skills;
}