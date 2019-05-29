# node-test

# Requirement
- nodejs (https://nodejs.org/en/)
- nodemon (https://www.npmjs.com/package/nodemon) --> to make developer a lot easier

# How to use
- create database as you wish, then change /config/db.js with your configuration
- import /sql/users.sql into mysql
- then open terminal or cmd and make sure you are in this file directory
- first we need to install required npm using command bellow
	"npm install"
- type command bellow to start node
	"node index.js"
- in this repo there was 3 task :
	1. fibonacci prime can be accessed from link bellow
		"localhost:8000/fibonacci_prima/20"
		change number as you like
	2. check if an array is sub array from another array
		"localhost:8000/isSubArray"
		to change test array do manual change from code
	3. crud to users here is the field
		Fields ( id, name , email, password, address, phone, created_at, updated_at )

		Here is the endpoints :
		- GET localhost:8000/users ( list all users )
		- GET localhost:8000/users/:id ( get one user )
		- POST localhost:8000/users ( create one user )
		- PUT localhost:8000/users/:id ( update one user )
		- DELETE localhost:8000/users/:id ( delete one user )