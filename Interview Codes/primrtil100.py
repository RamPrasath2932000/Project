no=int(input("Enter the number:"))
if(no==0):
    print("zero is not prime number")
elif(no==1):
    print("one is not prime number")
for num in range(0,no+1):
    if(num>1):
        for i in range(2,num):
            if(num%i==0):
                break
        else:
            print(num)   