i=0
Total=0
sub=["Tamil","English","Maths","Science","Social"]
marks=[90,95,50,60,30]
while i<len(marks):
    print(sub[i]+" mark is "+str(marks[i]))
    if(marks[i]>=90 and marks[i]<=100):
            print("The grade is A.")
    elif(marks[i]>=80 and marks[i]<=89):
            print("The grade is B.")
    elif(marks[i]>=70 and marks[i]<=79):
            print("The grade is C.")
    elif(marks[i]>=60 and marks[i]<=69):
            print("The grade is D.")
    elif(marks[i]>=50 and marks[i]<=59):
            print("The grade is E.")
    elif(marks[i]>=40 and marks[i]<=49):
            print("The grade is F.")
    elif(marks[i]>=30 and marks[i]<=39):
            print("The grade is G.")
    else:
            print("Fail")
    print(" ")
    Total=Total+marks[i]
    i=i+1

    
    
print("The total is "+str(Total))
Avg=Total/5
if(Avg>=90 and Avg<=100):
    print("The grade is A.") 
elif(Avg>=80 and Avg<=89):
    print("The grade is B.")
elif(Avg>=70 and Avg<=79):
    print("The grade is C.")
elif(Avg>=60 and Avg<=69):
    print("The grade is D.")
elif(Avg>=50 and Avg<=59):
    print("The grade is E.")
elif(Avg>=40 and Avg<=49):
    print("The grade is F.")
elif(Avg>=30 and Avg<=39):
    print("The grade is G.")
else:
    print("Fail")