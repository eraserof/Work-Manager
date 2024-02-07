# Work-Manager
A simple Work Manager application to gain exposure to developing a simple java application based on MVC using servlets, JSPs, and Beans
			
# Goal:
	Learn how to build a simple java application using the following:
		- Servlets
		- JSPs
		- Bean
		
# Technology Used (planned):
    Frontend: HTML, CSS, ReactJs, Java Server Pages (JSPs)
    Backend: Java Servlets, Java Models, Postgres
    Webservices: REST services
    Security Features: SQL Injection, Cross-Site Scripting (XSS
	
	
# General Ideas:
	- create/add/update/delete work order requests. An admin user adds a work request and assigns it to a worker.
		- Worker that gets assigned needs to exist
		- Worker field can be changed
		- Record who created the work order, who assined the work order out
	- Work Orders should have a chat dialog page between them and the customer
		- Permissions:
			- Any worker or admin can add a comment
			- The customer can add a comment
	- Work Orders have a chat dialog between only them.
		- Purpose:
			- To allow an audit of the communication between the workers without letting the customer see
		- Permissions:
			- Any Worker or admin
	- Customer view:
		- Work Request:
			- cannot assign
			- Priority: how many days the work needs to be completed in (1), (2-5), (6+)
		- Work Orders:
			- a list of work orders that were accepted to work on
			- Clicking on a work order will bring up the work order details
			- Has access to the commnets made
# Application Flow:
	- Customer
		- Customer signs up
			- Gets added to the db
		- Customer logins in
			- Customer View:
				- shows a landing page of current work orders that were accepted, and work request
				- There are 3 tabs:
					- Work Orders
					- Work Requests
					- Settings
					
			- Work Orders:
				- Show a list of open/in progress work orders;
				- a search bar to search the work orders
			- Work Orders Detail:
				- Shows fields:
					- Work Order number:
					- Description
					- Start Date
					- Request Date
				- Tabs:
					- Details
					- Chat
			- Add Requset:
				- Title:
				- Description
				- Request Date:
				- Priority
				- Price (set by the Admins)
				- Any Changes to the Request blanks out the Quote for it
			- Request Details:
				- All the deatils of the request
	- Service Request
		- Account given to them by Admins
		- Login
			- Service Request View
				- Landing page of all the work orders. At any stage
				- Has 3 tabs:
					- Service Request
					- Settings
					- Pay?
			- Service Request
				- Shows a list of work orders
				- has search bar
			- Service Request Details:
				- Shows fields: (a	ll fields are not editable)
					- Service Request number: 
					- Description
					- Start Date
					- Request Date
				- Status:
					- Done
					- In progress
					- Reject
				- Tabs:
					- Details
					- Chat with Stake Holders
					- Chat
	- Admin:
		- Login (intial admin is given)
			- Landing page is a list of Service Request
			- Has 4 Tabs:
				- Employees
				- Service Request
				- Work Orders
				- Settings
		- Employees:
			- Permissions: Create, Read, Update, Delete
			- Fields:
				- username: (required)
				- Name:
				- Last Name:
				- Address
				- Phone Number
			
		- Service Request:
			- Permissions: (Reads, update)
			- Fields:
				- All the fields the both the Customer and Employees sees. Both
				- Edits the Quote
				- Approves, Rejects
		- Work Orders:
			- Permissions: Read, Update
			- Fields:
				- Both fields that Customer and Worker see
			- 
			


