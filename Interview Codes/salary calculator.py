Annual_salary=float(input("Enter annual salary:"))
monthly_salary=Annual_salary/12
daily_salary=monthly_salary/26
hourly_salary=(Annual_salary/52)/40
weekly_salary=Annual_salary/52
print("Annual Salary is "+str(Annual_salary))
print("Monthly Salary is "+str(monthly_salary))
print("Weekly Salary is "+str(weekly_salary))
print("Daily Salary is "+str(daily_salary))
print("Hourly Salary is "+str(hourly_salary))