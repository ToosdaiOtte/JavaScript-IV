// CODE here for your Lambda Classes
class Person{
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs)
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning ${this.subject}.`);
    }
    grade(){
        console.log(`${student.name} recieves a perfect score on ${this.subject}`);
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className =  studentAttrs.className;
        this.favSubjects = [];
        this.grade = Math.floor(Math.random() * 100) + 1;
        } 
        
        listsSubjects(){
            let listsSubjects = this.favSubjects;
            for(i = 0; i < favSubjects.length; i++){
            console.log(listsSubjects[i]);
            }
        }
        PRAssignment(subject){
            console.log(`${student.name} has submitted a PR for ${subject}.`);
        }
        
    }

    class projectManagers extends Instructor{
        constructor(prAttrs){
        super(prAttrs)
        this.gradClassName = prAttrs.gradClassName;
        this.favInstructor = prAttrs.favInstructor;
        }
        standUp(name, channel){
            console.log(`${name} announces to ${channel}, @${channel} study times!`);
        }
        debugs(subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }
    }





    const dan = new Instructor({
        name: 'Dan',
        age: 32,
        location: 'US',
        favLanguage: 'JavaScript',
        catchPhrase: "I'm gonna go juicy."

    });

    const toosdai = new Student ({
        name: 'Toosdai',
        age: 22,
        location: 'US',
        previousBackground: 'Cook',
        className: 'WebPT7',
        favSubjects: ['HTML', 'CSS', 'JavaScript']
    });

    const jacob = new projectManagers({
        name: 'Jacob',
        age: 27,
        location: 'US',
        favLanguage: 'React',
        gradClassName: 'CS3',
        favInstructor: 'Dan'
    });

    console.log(jacob.standUp('Jacob', 'WebPT7'));
    console.log(toosdai.grade);
