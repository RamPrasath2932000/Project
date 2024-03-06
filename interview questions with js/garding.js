i=0
Total=0
sub=["Tamil","English","Maths","Science","Social"]
marks=[90,95,50,60,20]
for(i;i<marks.length;i++)
{
console.log(sub[i]+" mark is "+marks[i])
if(marks[i]>=90 && marks[i]<=100)
{
    console.log("The grade is A.")
}
else if(marks[i]>=80 && marks[i]<=89)
{
    console.log("The grade is B.")
}   
else if(marks[i]>=70 && marks[i]<=79)
{
    console.log("The grade is C.")
}
else if(marks[i]>=60 && marks[i]<=69)
{
    console.log("The grade is D.")
}     
else if(marks[i]>=50 && marks[i]<=59)
{
    console.log("The grade is E.")
}
else if(marks[i]>=40 && marks[i]<=49)
{
    console.log("The grade is F.")
} 
else if(marks[i]>=30 && marks[i]<=39)
{
    console.log("The grade is G.")
}     
else
{
    console.log("Fail")
}
console.log("   ")
Total=Total+marks[i]
}
    
    
console.log("The total is "+Total)
Avg=Total/5
if(Avg>=90 && Avg<=100)
{
    console.log("The overall grade is A.")
}
else if(Avg>=80 && Avg<=89)
{
    console.log("The overall grade is B.")
}   
else if(Avg>=70 && Avg<=79)
{
    console.log("The overall grade is C.")
}
else if(Avg>=60 && Avg<=69)
{
    console.log("The overall grade is D.")
}     
else if(Avg>=50 && Avg<=59)
{
    console.log("The overall grade is E.")
}
else if(Avg>=40 && Avg<=49)
{
    console.log("The overall grade is F.")
} 
else if(Avg>=30 && Avg<=39)
{
    console.log("The overall grade is G.")
}     
else
{
    console.log("Fail")
}