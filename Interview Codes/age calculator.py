from datetime import datetime
current_year=datetime.now().year
birth_year=int(input("Enter the birth year:"))
print(current_year-birth_year)