function isObject(subject){
    return typeof subject == "object";
}
function isArray(subject){
    return Array.isArray(subject)
}
function requiredParam(param){
    throw new Error(param + " es obligatorio")
}


function LearningPath({
    name = requiredParam("name"),
    courses = [],
}){
    this.name = name;
    this.courses = courses;  
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    }
    if(isArray(learningPaths)){
        this.learningPaths = [];
        for(learningPath in learningPaths){
            if(learningPaths[learningPath] instanceof LearningPath ){
                this.learningPaths.push(learningPaths[learningPath]);
            }
    
        }    
    }
    
}

const escuela = new LearningPath({name: "Escuela web"})
const escuelaDs = new LearningPath({name: "Escuela DS"})
// Se pureba para saber si agrega un objeto que no es instancia de LearningPath
const juan = new Student({email:"juanito@gmail.com",
                        name:"Juanito",
                        learningPaths: [
                            escuela,
                            escuelaDs,
                            {
                                name: "fake school",
                                courses: [],
                            }
                        ]});
// Al final solo agrega las escuelas que fueron instancias de LearningPath