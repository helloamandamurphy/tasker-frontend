# Dev Log

## What's Left To Do
* Add/view tasks
* Address time conformity issue (see screenshot for error)
* In Redux store, Lists: and MyLists look identical. Both aren't necessary.

#### Home Page (Logged out)
~~Description of the application~~

#### Signup / Login Forms
~~Add text and an image to differentiate each page~~
~~Change field to password instead of text~~
~~Add sample email and password for guests~~

#### Home Page (Logged in)
* Add Clock as a secondary NavBar?
* Change Home Page to boards of existing lists. (My Lists)
* First board should include a link to Create a New List
* Revise NavBar to include: Home icon, Logo, and Logged in as.., Logout Button

#### List Create Page
* Rework Form
* Add approximate start time field
* When you add the End Time, there should be a message that says how much time you have to work based on start/end times.
* There should also be an error message if the end time is before the start time.
* Is the time format correct on the front and back ends?
* Add the ability to add tasks to the creation page (front-end/back-end)
* Subtract time from total work time

#### List Edit Page
* Add the ability to edit tasks to the edit page (front-end/back-end)
* Add the ability to delete tasks to the edit page
* Add estimated start time.

#### List Show Page
* Needs to have a list of tasks with their times
* Needs to show total amount of time
* Needs to show start and end times
* Needs a start button that starts the first task and a timer
* Needs an alert when the task timer is at zero, and maybe a completed button
* Needs to include a list of upcoming tasks / completed tasks--probably need to add a status to the tasks on the backend, like a boolean or something that defaults to false (not complete)

#### Backend Notes
* No need for task show page/route
* Maybe the task estimated time should be a percentage of the time to adapt to total time changes.

### For Project Completion
* Write Blog Post
* Record Demo Video
* Submit Project
* Schedule Assessment
* Pass Assessment

## What Can Wait For Later Development


## What to Review for Assessment
* Types of React Components
* Async vs. sync actions / action creators
* Dispatch
* Connect
* Redux Module
* Switch

## Progress
### 2 April
-Made progress on Video 8

### 3 April
-Completed Video 8; Added to NavBar; cleared up issue with Logout not clearing the lists in the Redux store

### 23 April
-Finally completed Video 10; Added a show page for the individual lists; started working on the edit functionality for a List.
-Completed Video 11; Have issues to resolve with Edit List feature that will be resolved with video 12, and then it will be time to assess what's left to do.

### 23 May (Woof, that was a long break)
-Finally resolved Edit Form issues
-Updated dependencies due to security issues

### 25 May
-COMPLETED WALKTHROUGH VIDEO. WHOOHOO.
-Added delete functionality to Lists
-Left to do:
* Evaluate what needs to happen to make the app look the right way on the front end
* Add changes to front-end / back-end
* Add notes re: what everything does
* Add ability to add tasks in list creation / edit screens
* Review project requirements

### 26 May
-Reviewed site to see what's left.

### Notes from the Study Session on May 27
-Look into Moment.js, especially for timer
-Locally store timer info

### May 28
-Continued working on site review
-New issue where the login/signup forms are rendering under the Home Component. (Look at the Switch case in App.js)
-Need to go through each component/container and identify type or move to the correct folder as necessary
