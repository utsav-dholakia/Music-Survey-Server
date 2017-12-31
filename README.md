# Music-Survey-Server
This project creates a server utilizing Node.js that provides REST services such as Admin login authorization, Post survey data and Get survey data digest for admin interface. 
This server is created for storing user's music preference data using sqlite database. The data is stored into database called 'UserSurvey' (into db directory) into table called 'UserSurvey' which has columns such as: First Name, Last Name, Age, Region and Favourite music artist.
This simple database can give a digest of data like: Total number of surveys submitted, Average age of submitter, Most popular and Least popular music artitst and Most frequent region from where this surveys originate.
For testing this server, I'm using Mocha and Chai frameworks. 


### __ASSUMPTIONS__
* UserSurvey table is a very rudimentary table with simple columns.
* Admin login authorization is not performed using Database access, it simply checks username and password values to be: 'admin' and 'password' respectively.
* In the case of tie in the results of Most popular / Least popular artist or Most frequent region, the first row in the result set is returned. This can be modified easily to accomodate any changes necessary.
* This Node.js server only sends HTTP OK status code(200) for post services if successful, otherwise HTTP INTERNAL SERVER ERROR status code(500) if unsuccessful. In the case of fetching data for Admin interface, it returns JSON object.


### __STEPS TO RUN__
* Install Node.js and npm(preferrably node version : 6.11.4 and npm version : 3.10.10).
* Clone this repository.
* Run __npm update__ command at the root of the project. This will download and update all the dependacies needed to run/test this server.
* To run the server, use __npm start__ command at the root of project directory.
* To test the server, use __npm test__ command at the root of project directory. You have to keep the server running for performing tests.


## __Note__
* This project is built using Node version : 6.11.4 and npm version : 3.10.10.
* This project is built using Webstorm IDE from JetBrains.
* To go to the client for this project, use [Music-Survey-Client](https://github.com/utsav-dholakia/Music-Survey-Client)
