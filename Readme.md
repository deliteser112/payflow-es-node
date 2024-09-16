# Welcome to Payflow's Node.js Developer Skill Assesment

We prepared a simple project and would like you add a small feature.
This project is using plain javascript, express and jest/supertest to keep it simple.
But you are free add any dependencies that you might need!

This task is fairly close to what you might expect to be working on at Payflow and as such we'd like you to treat this like a feature that is going to production tomorrow.

You should be able to complete this within 90 minutes but if you do need a bit more time that is no problem either!

# How to use this project?

Run `npm install` to install the dependencies
Run `npm run start` to start the server
Run `npm run test` to run the test suite

# What is the task?

This project pretends we have a database of users (we implemented a mock "database" that you can use for this) and we want to be able to sync our users with external systems.
At Payflow we have a similar use case when we need to sync employees from the employer HR software - for this excercise we'll use the public Github API instead.

This Api has two endpoints:
`GET /users`
`GET /users/sync`

The second endpoint is the one you should implement:

Search for `payflow` and sync all users that come up in that search, using the github v3 API you can use this call: `https://api.github.com/search/users?q=payflow`

Whenever that endpoint is called it should sync our internal "database" with the results of that call, that means:
 - Add new users that are not in our database yet
 - Update information that changed
 - Remove users that are in our internal database but got removed in the source system

For this excercise you can assume that our user property `userName` is unique in the system.

You can do this however you would approach this in a real-world situation, so structure your code as you think is best, add dependencies when it makes sense and change whatever needs changing to get to the best end result.

# How to submit your solution?

Please create a private repository on bitbucket and give access to peter@payflow.es and ben@payflow.es
If you don't want to use bitbucket you can also send it to us directly as email