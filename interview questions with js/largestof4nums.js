num1=10
num2=15
num3=20
num4=1200
if((num1>num2)  && (num1>num3) && (num1>num4))
    {
        console.log("The first number "+num1+" is greater than other numbers.")
    }
else if((num2>num1)  && (num2>num3) && (num2>num4))
    {
        console.log("The second number "+num2+" is greater than other numbers.")
    }
else if((num4>num1)  && (num4>num2) && (num4>num3))
    {
        console.log("The fourth number "+num4+" is greater than other numbers.")
    }
else
    {
        console.log("The third number "+num3+" is greater than other numbers.")
    }