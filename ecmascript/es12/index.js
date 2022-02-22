const string = "Javascript  es maravilloso, con Javascript puedo crear el futuro de la web"

const replacedString = string.replace("Javascript", "python");

console.log(replacedString)

const replacedString2 = string.replaceAll("Javascript", "Python"); 
console.log(replacedString2)


////

class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message("");
message.show("hOLA")


