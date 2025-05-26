//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

const person = {
    fullName: function(){
        return this.firstName + this.lastName
    }
}
const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

person.fullName.apply(person1);