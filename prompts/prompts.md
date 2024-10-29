@workspace

# Prompt 1

You're an expert backend in Node.js working with typescript Given the context of the whole workspace I want to create a new endpoint to get candidates in certain position example: GET /position/:id/candidates

This endpoint will retrieve all the candidates in progress for a specific position, meaning all the applications for a particular positionID. It should provide the following basic information:

Candidate’s full name (from the candidate table).
current_interview_step: the phase of the process the candidate is in (from the application table).
The candidate's average score. Remember that each interview (interview) conducted with the candidate has a score.
Given that information, before start writing code, do you have any question ?

# Prompt 2

okey. Create the endpoint and all the related code to get candidates for a specific position. Include a suite of tests.

Take into account:

if the position ID don't exist throw an error like "No position ${id} exist"
If no candidate exists in the position show the following message "No candidates exists for the id ${id}"

# Prompt 3

/fix Cannot find name 'prisma'.

# Prompt 4

Use the SOLID and DRY principles to work within controller and service to avoid business logic inside the controller

# Prompt 5

/fix 'error' is of type 'unknown'.

# Prompt 6

/fix Cannot find module 'supertest' or its corresponding type declarations.

# Prompt 7

now I want to create a new enpoint PUT /candidate/:id This endpoint will update the stage of the moved candidate. It allows modification of the current interview process phase for a specific candidate.

Used the same principles SOLID and DRY and in this case use all the information related to candidate, its controller and service to work within.

Before writing the code, do you have any question?
