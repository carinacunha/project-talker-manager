# :sparkles: Talker Manager #

In this project, a talker registration application was developed in which it is possible to register, view, search, edit and delete information through the development of an API of a CRUD (Create, Read, Update and Delete) of speakers (talkers) some endpoints that read and write to a file using the fs module.

## :bulb: Guidelines to runnig API ##
This project can be run locally or using docker. Whichever resource you choose, both use environment variables. To runnig this API, follow these steps below:

### :whale: Docker ###
1. Clone the repository 
  - git@github.com:carinacunha/project-blogs-api.git
  - Go into the repository folder you just cloned
2. make sure you have installed docker version 1.29 or higher
3. Run the node and db services with the command docker-compose up -d --build
4. Create an interactive terminal from the container: docker exec -it blogs_api bash
5. Install the dependencies: npm install

### :computer: Local ###
1. Clone the repository 
  - git@github.com:carinacunha/project-blogs-api.git
  - Go into the repository folder you just cloned
2. Make sure you have installed node version 16
3. Install the dependencies: npm install
4. Rename the file .env.example to .env and set the environment variables

:point_right: This project was developed during the Full Stack Web Development course at Trybe.
