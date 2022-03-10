# IndexCRM System
## Getting Started 🎬
Welcome to IndexCRM! This project was developed to help busy professionals track their client contact information, conversations had with clients, and daily to-do list items. 

### 👀  Take a look at Index CRM [HERE](https://index-crm-system.herokuapp.com)

---

## Background 🏞
This project was developed in one week's time and is meant to mimic a client management system that might be used by a busy sales professional on a day to day basis. 

The project includes space for tracking contact information, the ability to edit and add new contacts as needed, as well as a to-do list feature, and space to add and read conversations had with a specific client. These features allow for professionals to seamlessly track basic client information in one application. 

This CRUD application was developed using RESTful architecture principles and MEN stack technologies (MongoDB, ExpressJS & Node.js)

Planning materials for this project were organized on a public Trello board (view [here](https://trello.com/b/F0MMmDzB/unit-2-project-crm-system))


## Technologies Used 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)


---
## Application Details 📝
Upon starting the application, the user will be brought to an un-authenticated landing page where they can learn more about the application before logging in with Google OAuth. 

At any time when using the application, the user can expand or contract the left navigation bar using the menu icon at the top-left of the page.

![Pre-Login Homepage](https://i.imgur.com/97R2LCz.png)

Once a user has logged in with Google OAuth, they will be brought to an index view of all clients they have added. Users will not be able to see clients that they have not entered into the database. 

![Client Index View](https://i.imgur.com/vacMt7N.png)

From the index view of all clients, the user is able to navigate throughout the application. 

The user can choose to add a new client, move to their to-do list using the left navigation bar, delete a client, or enter the client's profile view. 

Clicking the "Add a New Client" button (located at the top of the client index view) will bring the user to a basic form where they can enter client details. 

![New Client View](https://i.imgur.com/vjBbYXE.png)

Upon submitting this form, the user is automatically redirected to the client index view, where they can see all of their clients. 

To view or edit a choosen client, the user simply needs to click on their name (highlighed in blue) on the client index page. 

![Client Profile View](https://i.imgur.com/47A0hKb.png)

The client profile page allows the user to see all information about a particular client, as well as add conversations had with this client. 

Client conversations added on this page are specific to this client only, and not shared throughout the remainder of clients in the application. 

Should the user need to edit information for this client, clicking on the green pencil button in the top-left screen will produce an edit client page. 

![Edit Client View](https://i.imgur.com/XVFS0u4.png)

Editing a client will automatically change information previously entered when the client was created or last edited. After updating necessary fields and clicking "Save Client" the user will be redirected to that client's profile page to view recent changes. 

At any time during application use, the user can seamlessly navigate to their to-do list using the left navigation bar. Expanding this bar will show navigation options in English, however, the user can also click on the "clipboard" icon as well.

![To-Do View](https://i.imgur.com/pbuViVh.png)

This page utilizes an embedded form for entering new to-do list items and will automatically update the following to-do list after a new item has been added. 

Clicking the checkbox to the left of an active to-do item will "cross the item off." This action will not remove the to-do from view, but will only "cross it off." In order to remove a to-do list item permanently, click on the green "X" button to the right of the specified to-do. 

---

## Icebox Features 🧊
While this application accomplishes a lot of user-functionality, there are a number of icebox features which will be added as availability permits. Here are some of the future upgrades... 

- Add functionality to delete specific client conversations 
- Add search capability to find clients by name
- Add "pop-up" verification when deleting a client (as a double check for user)
- Add dark/light mode toggle (with respect to user settings)
- Allow users to upload a document for specific clients (such as a resume, or cover letter)
- Add navigation to an integrated Google Calendar (which will allow users to integrate meeting scheduling)


---

## Credits 🙏
Thank you to the following artists and organizations! 

- Canva: graphic image elements for favicon build
- Font Awesome: icons used for primary navigation and buttons (find out more [here](https://fontawesome.com/))
- Google Fonts: font name used: Roboto (more about this font [here](https://fonts.google.com/specimen/Roboto?query=robot))
- Bedimcode: source code adapted to create responsive navigation bar. Also credited in specific files where source code was adapted. ([open source GitHub repo](https://github.com/bedimcode/responsive-sidebar-menu))
- Boostrap Library: for use in buttons, cards, and form styling (find out more [here](https://getbootstrap.com/))

