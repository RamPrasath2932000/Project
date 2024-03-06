num=int(input("Enter the number:"))
flag=False
if(num==0):
    print("zero is not prime number")
elif(num==1):
    print("one is not prime number")
elif(num>1):
    for i in range(2,num):
        if(num%i==0):
            flag=True
            break
        
    if flag:
        print("number is not prime number.")
    else:
        print("The number "+str(num)+" is prime.")