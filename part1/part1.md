### Variables & Scoping
1) Line 11 will print the value of prices.length since that is the last thing i is set to, since var has no block scope.
2) Line 12 prints discountedPrice even though it's in a differencet code block since var has no block scope. 
3) Line 13 prints the last thing finalPrice was set to inside the for loop because var have no block scope.
4) The function will return each price listed in prices array as half of original because of the .5. Therefore discountPrices will return [50, 100, 150] in this case.
5) Line 11 will give an error because let has block scope. The block scope of i is the for loop.
6) Line 12 will give an error because let has block scope. The block scope of i is the for loop.
7) Line 13 will not give an error. It will run properly because it is in the same block scope as where it was declared with let.
8) Gets TyperError: Assignment to constant variable. This error is returned because finalPrice is a const, and we were trying to assign it a value in the for loop.
9) Line 11 will give an error because let has block scope. The block scope of i is the for loop.
10) Line 12 will give an error because const has block scope. The block scope of discountedPrice is the for loop.
11) Line 13 will only run if it gets past the for loop, which it will not if its a const. If it does get out of the for loop, 150 will be printed because is the last thing finalPrice is set to inside the for loop.
12) If line 14 gets to run without error, it will return [50, 100, 150], because it multiplied everything by .5 inside the array.

### Data Types
13) 
- A. student.name;
- B. student['Grad Year'];
- C. student.greeting();
- D. (student['Favorite Teacher']).name;
- E. (student.courseLoad)[0];

### Basic Operators & Type Conversion 
14)  
- A. '3' + 2 = '3' + '2' = '32' , 3 stays a string and 2 turns into a string
- B. '3' - 2 = 3 - 2 = 1 , 3 turns into an int and 2 stays an int
- C. 3 + null = 3 , 3 stays an int and null evals to 0
- D. '3' + null = '3null' , 3 stays a string and null turns into a string
- E. true + 3 = 1 + 3 = 4 , true evals to 1 and 3 stays an int
- F. false + null = 0 + 0 = 0 , false and null evals to 0
- G. "3" + undefined = '3undefined' , 3 stays a string and undefined turns into a string
- H. "3" - undefined = NaN , 3 stays a string and undefined has no value
15)  
- A. '2' > 1 = true, '2' evals to 2
- B. '2' < '12' = false, '2' has a higher lexicographical order than '12'
- C. 2 == '2' = true, value is the same even if type is diff
- D. 2 === '2' = false, not the same type
- E. true == 2 = false, true evals to 1 and 1 != 2
- F. true === Boolean(2) = true, Boolean(2) evals to true
16)  == checks that the value is equal. === checks that both the type and value are equal.

### Conditionals
17) Line 1 will check if 2 == true, since this is false because true == 1, it will not go to line 2. It will now go to the else if statement on line 3, and check if 2 is true, which it is because anything != 0 is true. Therefore line 4 will run. The else statement on line 5 and 6 will not run since the else if is true and has ran. In conclusion, the only thing that gets printed is 'How are you?'.

### Functions
19) [6, 8, 10]
    An empty array is declared in modifyArray and the for loop goes through the array given and add 2 in doSomething then multiply by 2 in modifyArray for loop and push onto the newArr.

21) output is: 
    1
    4
    3
    2
    This is because 1 and 4 run without delay. Then 3 is outputted because it has the smallest number for setTimeout. Last, 2 is outputted because it has the greatest number for setTimeout.