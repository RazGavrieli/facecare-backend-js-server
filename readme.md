# FaceCare Local Backend
this backend project uses firebase server-less cloud function to create a backend server for android app project. <br>
The code for running the database is also contained in this repository, even though it would be implemeneted physically on a different node. <br>

## THIS IS FOR THE TESTING ENVIROMENT
This repo contains the testing environment of the project. <br> When deployed to production, all of the services will be cloud base and NOT LOCAL. <br>
The following describes the local test environment: <br>
<img width="385" alt="image" src="https://user-images.githubusercontent.com/90526270/209804514-ea532e85-fadb-43d9-b3e9-e418ba1ec302.png">

# how to run 
install and configure firebase modules: <br>
`curl -sL https://firebase.tools | bash` <br>
`firebase login` <br>
Make sure to have java  <br>
`git clone` the project <br>
CD into the cloned project <br>
`firebase emulators:start --import=./dir --export-on-exit` <br>
<br>
