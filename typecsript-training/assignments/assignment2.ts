let employeename : string = "anil";
let creditscore : number = 400;
let income : number = 55000;
let employmentstatus : boolean = false;
let dtiratio : number = 50;


if (creditscore >= 750)
     
        console.log(`${employeename } is elible for loan as his credit is > than 750`);

else if (creditscore >= 650 && creditscore <= 750 )

        {
            if (income >= 50000)           

                {
                    if (employmentstatus)

                    {
                           if (dtiratio <= 40)

                            console.log(`${employeename } is  eligible for loan as his dtiratio is <40`);
                            else (console.log(`${employeename } is  not eligible for loan as his dtiratio is > 40`));
                    }

                            

                  else (console.log(`${employeename } is not eligible for loan as his employestatus is false`));


                }

                  else (console.log(`${employeename } is not eligible for loan as his income is < 50k`));
             
        }

if (creditscore <= 650)
     
        console.log(`${employeename } is not elible for loan as his credit is < than 650`);
