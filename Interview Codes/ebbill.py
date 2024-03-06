unit=int(input("Enter the unit:"))
if(unit<100):
    print("There is no charge for "+str(unit))
else:
    cal=unit/100
    charge=cal*160
    print("The charge for "+str(unit)+" unit is "+str(charge)+" ruppees")