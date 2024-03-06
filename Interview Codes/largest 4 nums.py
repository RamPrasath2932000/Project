num1=int(input("Enter the first number:"))
num2=int(input("Enter the second number:"))
num3=int(input("Enter the third number:"))
num4=int(input("Enter the fourth number:"))
if((num1>num2)  and (num1>num3) and (num1>num4)):
    {
        print("The first number "+str(num1)+" is greater than other numbers.")
    }
elif((num2>num1)  and (num2>num3) and (num2>num4)):
    {
        print("The second number "+str(num2)+" is greater than other numbers.")
    }
elif((num4>num1)  and (num4>num2) and (num4>num3)):
    {
        print("The fourth number "+str(num4)+" is greater than other numbers.")
    }
else:
    {
        print("The third number "+str(num3)+" is greater than other numbers.")
    }