// Create Array for student name 

let student: string []= ["Suresh","Mahesh","naresh"];

// console.log(student.length);
// console.log(student[0]);
// console.log(student);

let marks : number [] = [75,82,80];

// // console.log(marks.length);
// // console.log(marks[0]);

let marksupdated : number [] = [marks[0]!+10,marks[1]!+10,marks[2]!+10];
// console.log(marksupdated);


// for (let i = 0; i < student.length; i++){

//        console.log(student[i] + " : " + marksupdated[i]);
// }


for (let i = 0;i < student.length;i++)
            {
                console.log(student[i] + " : " + marksupdated[i]);
                }

    let total : number = 0;
    let average : number = 0;
             for (let j = 0;j < marks.length;j++)      
    
    {       
             total = total + marks[j]!;
             average = total/marks.length;
       

    }
          console.log("Total : " + total)
           console.log("Average  : " + average)