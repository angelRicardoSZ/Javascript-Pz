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
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",

    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + "likes" );
        console.log(this.content);
    }
}


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
    publicarComentario(comentario){
        const comment = new Comment({
            content:comentario,
            studentName: this.name,

        });
        comment.publicar();
    }
}
// Inheritance

class FreeStudent extends StudentFinal{
    constructor(props){
        super(props);
    }
    aprovedCourse(newcourse){
        if(newcourse.isfree){
            this.aprovedCourses.push(newcourse);
        } else {
            console.warn("lo sentimos, "+ this.name +" solo puedes tomar cursos gratis")
        }

    }
}

class BasicStudent extends StudentFinal{
    constructor(props){
        super(props);
    }
    aprovedCourse(newcourse){
        if(newcourse.lang !=="english" ){
            this.aprovedCourses.push(newcourse);
        } else {
            console.warn("lo sentimos, "+ this.name +" no puedes tomar cursos en inglés")
        }

    }
}

class ExpertStudent extends StudentFinal{
    constructor(props){
        super(props);
    }
    aprovedCourse(newcourse){
        this.aprovedCourses.push(newcourse);
    }
}


class teacherStudent extends StudentFinal{
    constructor(props){
        super(props);
    }
    aprovedCourse(newcourse){
        this.aprovedCourses.push(newcourse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content:commentContent,
            studentName: this.name,
            studentRole: "profesor"
        })
        comment.publicar();
    }


}


class lessons {
    constructor(
        {
            name,
            teacher
        }
    ){
        this.name = name;
        this.teacher = teacher;
    }
}
//AbstractionAndencapsulation
class Courses {
    constructor(
        {
            name,
            teacher,
            lessons = [],
            isfree = false,
            lang = "spanish",
        }
    ){
        this._name = name; //no llamar 
        this.teacher = teacher;
        this.lessons = lessons;
        this.isfree = isfree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName === "nombre raro"){
            console.error("no")
        }else{
            this._name = newName;
        }
        
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

const Clase1 = new lessons ({
    name: "Clase1",
    teacher: "Teacher1"
})
const Clase2 = new lessons ({
    name: "Clase2",
    teacher: "Teacher2"
})



const cursoPrograBasic = new Courses({
    name: "Curso Gratis de programación básica",
    lessons: Clase1,
    teacher: "Teacher_program_basic",
    isfree:true,
})

const cursoPrograBasicEnglish = new Courses({
    name: "Curso Gratis de programación básica",
    lessons: Clase1,
    teacher: "Teacher_program_basic",
    lang:"english"
})

const cursodefinitivoHTML = new Courses({
    name: "Curso definitivo de HTML y CSS",
    lessons: Clase2,
    teacher:"Teacher_program_basic2"
})



const escuelaWeb = new LearningPath({
    name: "desarrollo web",
    courses: [
        cursoPrograBasic,
        cursodefinitivoHTML,
    ],
    lang:"english"
});

const escuelaDS = new LearningPath({
    name: "data science",
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

const Studentbasic = new BasicStudent({
    name: "AngelRicar",
    username: "AngelRic",
    email: "angel@com",
    twitter: "an@",
    learningPaths: escuelaDS
});


const StudentExpert = new ExpertStudent({
    name: "AngelRicar",
    username: "AngelRic",
    email: "angel@com",
    twitter: "an@",
    learningPaths: escuelaDS
});


const freedy = new teacherStudent({
    name: "Freddy vega",
    username: "fredy@",
    email: "f@com",
    twitter: "fv@",
    learningPaths: escuelaDS
});

// function videoPlay(id) {
//     const urlSecreta = "https://url"+id;
//     console.log("reproduciendo:" + urlSecreta)
// }

// function videoStop(id) {
//     const urlSecreta = "https://url"+id;
//     console.log("pausando"+ urlSecreta)
// }


// export class PlatziClass {
//     constructor({
//         name,
//         videoID,
//     }){
//         this.name = name;
//         this.videoID = videoID;
//     }

//     reproducir(){
//         videoPlay(this.videoID);
//     }
//     pausar(){
//         videoStop(this.videoID);
//     }
// }
