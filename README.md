## Components

- Header
  - Menu (Burgermenu -> Buttons to Exercises, Foods, Profiles, Tracker)
- Main (router below Header)
  - Authentication (switches between login and signup)
    - Login
    - Signup
  - ExercisesDb
    - Exercises
      - Exercise
    - AddExercise
    - EditExercise
  - FoodsDb
    - Foods
      - Food
    - AddFood
    - EditFood
  - Profiles
    - Profile
    - EditProfile
    - AddProfile
  - Tracker
    - Calender
    - MyDay
    - Summary
      /- Exercises
      /- Foods

States
..

Sign up -> profilerstellung mit der \_id von mongodb?
Um Profil für user zu ersteölen brauche ich userId

{
"firstname": "abc",
"lastname": "def",
"street": "test 1",
"postcode": "123",
"city": "test",
"country": "test",
"phone": "123456789",
"password": "123",
"email": "test@test.com"
}

{
"name": "Me",
"age": 66,
"height": 200,
"weight": 70,
"sex": 1,
"userId": "6009590ae432bda6a283446d"
}
