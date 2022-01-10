function StudentDB(){
class Student{
constructor(name, hometown, favFood, favColor){
    this.fullName = name;
    this.hometown = hometown;
    this.favFood = favFood;
    this.favColor = favColor;
}
}
let students = [];
    students[0] = new Student("Andy Beer", "Berkley MI", "French Fries","red");
    students[1] = new Student("Andfwefway Beer", "jerkley MI", "Belgian Fries", "not red");
    students[2] = new Student("Andy Be6666er", "blererkley MI", "French-Fried Pertaters", "opposite of red");
    students[3] = new Student ("Andy Beernmnmnmnm", "Smirkley MI", "French Bakes", "der");
    

    let index = prompt("Which student would you like to learn about?  Index 0 through "+(students.length-1));
    
    if (index > students.length)
    {
        console.log("No student exists at index "+index);
    }
    else{

    let specifics = prompt("Make a selection: [1] Name, [2] Home Town, [3] Favorite Food, [4] Favorite Color");
    switch(specifics){
        case "1":
        {
            console.log(students[index].fullName);
            break;
        }
        case "2":
        {
            console.log(students[index].hometown);
            break;
        }
        case "3":
        {
            console.log(students[index].favFood);
            break;
        }
        case "4":
        {
            console.log(students[index].favColor);
            break;
        }
        default:{
            console.log("That's not a valid input.")
            break;
        }
    }
    }
}