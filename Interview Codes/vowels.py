letter=str(input("Enter the letter:"))
if(letter=="a" or letter=="A" or letter=="e" or letter=="E" or letter=="i" or letter=="I" or letter=="o" or letter=="O" or letter=="u" or letter=="U"):
    {
        print(letter+" is a vowel.")
    }
elif(letter.isalpha()==True):{
    print(letter+" is not a vowel")
}
else:{
    print("This is improper datatype")
}