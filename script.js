//Create a class named Student that takes in name, age, and major as constructor parameters.
//Create an instance of student saved to a variable and console.log the variable

//class is named student with 3 constructor parameters
//create a variable named student and console.log the variable
//Use the keyword class to create a class.
class student{
    //Always add a method named constructor():
      constructor(name, age, major){
        this.name = name;
        this.age = age;
        this.major = major;
      }
    }
        //when you have a class you can use the class to create objects
    //while creating a new instance of the student class this refers to the student1 object
        const student1 = new student("Alexandra", 24, "Web Developer");
    //while creating a new instance of the student class this refers to the student2 object
        const student2 = new student("Jake", 20, "Sociology");
    //the student class is used to create two student objects
       console.log(student1);
       console.log(student2);
    
    document.getElementById("test").innerHTML=
    "Both " + student1.name + " and " + student2.name + " have a test this week they do not want to fail."
    