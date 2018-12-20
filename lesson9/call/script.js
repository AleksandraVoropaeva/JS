let age = document.getElementById('age');

function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let he = {
        surname : 'Ershov',
        name : 'Pavel'


};

showUser.call(age, [he.surname], [he.name] );