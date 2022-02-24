// Literal object
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

// --- --- --- ///

//  Syntaxis of prototype
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function(newcourse){
    //    this.cursosAprobados.push(newcourse);
    //}
}

// another way to create a method
Student.prototype.aprobarCurso = function(newcourse){
    this.cursosAprobados.push(newcourse);
}

// Instance of prototype
const juanita = new Student(
    "Juanita",
    15,
    [
        "curso intro videojuegos",
        "Curso de creación de personajes",
    ]
)


// --- --- --- ///

// Prototypes with syntaxes of class
class Student2 {
    constructor(name, age, courses){
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    aprobarCurso(course){
        this.courses.push(course);
    }    
}

// instance of the last prototype (class)
const migue = new Student2 (
    "migue",
    26,
    [
        "course_1",
        "course_2",
        "course_3"
    ],
)

//ROR
class Student3 {
    constructor({
        name,
        age,
        twitter,
        insta,
        courses = [],
        email
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.twitter = twitter;
        this.insta = insta;
        this.courses = courses;
        
    }
    aprobarCurso(course){
        this.courses.push(course);
    }
    
}

// Instance with ROR
const migue2 = new Student3({
    name:"migue2",
    age: 33,
    email:"aa@",
    twitter:"account",
})


// Final example
class StudentFinal {
    constructor(
        {
            name,
            email,
            username,
            twitter = undefined,
            instagram = undefined,
            facebook = undefined,
            aprovedCourses = [],
            learningPaths = [],
        }
    ) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.aprovedCourses = aprovedCourses;
        this.learningPaths =learningPaths;
    }
}

class Courses {
    constructor(
        {
            name,
            teacher,
            lessons = [],
        }
    ){
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}

class LearningPath {
    constructor(
        {
            name,
            courses = [],
        }
    ){
        this.name = name;
        this.courses = courses;
    }

    addCourse(newcourse){
        this.courses.push(newcourse);
    }
}

const escuelaWeb = new LearningPath({
    name: "desarrollo web",
    courses: [new Courses({
            name: "Curso definitivo de HTML y CSS",
            teacher: "Diego"
    })]
});

const escuelaDS = new LearningPath({
    name: "desarrollo web",
    courses:  [
        "Curso intro",
        "Curso ds",
        "Curso tableu"
    ]
});

const AngelRicar = new StudentFinal({
    name: "AngelRicar",
    username: "AngelRic",
    email: "angel@com",
    twitter: "an@",
    learningPaths: escuelaDS
});


const dog = new StudentFinal({
    name: "dogr",
    username: "dog2",
    email: "dog@com",
    twitter: "dog@",
    learningPaths:escuelaWeb
});



