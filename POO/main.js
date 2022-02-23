const natalia = {
    name: "Natalia",
    age:20,
    cursosAprobados: [
        "Curso definitivo de HTML",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(newcourse) {
        // Hacer que natalia apruebe otro curso
        this.cursosAprobados.push(newcourse);


    }

};


function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function(newcourse){
    //    this.cursosAprobados.push(newcourse);
    //}


}


// antoher way to create a method
Student.prototype.aprobarCurso = function(newcourse){
    this.cursosAprobados.push(newcourse);
}


const juanita = new Student(
    "Juanita",
    15,
    [
        "curso intro videojuegos",
        "Curso de creación de personajes",
    ]
    
)
