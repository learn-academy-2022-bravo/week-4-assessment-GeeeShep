# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# method -even or odd
# parameter - number
# 
# num1 = 7
# # Expected output: '7 is odd'
# num2 = 42
# # Expected output: '42 is even'
# num3 = 221
# # Expected output: '221 is odd'

# def num_test car
#     if car.odd?
#         "#{car} is odd" 
#     else
#         "#{car} is even" 
#     end
# end
# p num_test num1
# p num_test num2
# p num_test num3



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# method - deletes_vowels
# parameter - string
# use delete methodand pass it vowels

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def deletes_vowels monkey
    monkey.delete 'aeiouAEIOU'
end

p deletes_vowels album1
p deletes_vowels album2
p deletes_vowels album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided

# method - palindrome or not
# parameter - string
# use conditionals - does string equal to string reversed

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def front_back(word)
    if word == word.reverse.capitalize
       "#{word} is a palindrome"
    else 
       "#{word} is not a palindrome"
    end
end
p front_back(palindrome_tester1)
p front_back(palindrome_tester2)
p front_back(palindrome_tester3)