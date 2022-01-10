function RoomCalc(){
    let width = prompt("Please enter your room's width")
    let length = prompt("Please enter the room's length");

    let perimeter = 2*(width) + 2*(length);
    let area = (length*width);
    let paintCans = area/5;
    console.log("Room's perimeter: "+perimeter);
    console.log("Room's area: "+area);
    console.log("Number of paint cans: "+paintCans);
}