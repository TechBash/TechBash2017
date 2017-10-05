# Techbash 2017
Modernizing Traditional.NET Apps with Docker

Slides: https://www.slideshare.net/anoopkumarv/techbash-2017-modernizing-traditionalnet-apps-with-docker

## Introduction

As of 2016, Docker is available natively on Windows 10 & Windows Server 2016. This repo is to demonstrate the steps required to run a legacy, monolithic ASP.Net Windows application in Docker without making any code modifications.

Any application that would have run on Windows can be dockerized, but the focus here is to run a basic, old ASP.Net application.

## The Application
The sample application to be used in this demo is an ASP Webforms application serving a web front end, connected to an MS SQL Server backened. The application is a marketing website for a product launch and allows users who are interested to sign up to a fictional newsletter.

The application is a very standard, simple, quite barebones web application, that uses the entity framework to gather the information from the filled out and insert it into a table in SQL Server.

This demo will focus on taking this application and dockerizing it without making any code changes and once running on docker, leverage the benefits of docker and use that version as the foundation to build several additional features into the application.

## Pre-requisites
In order to run through these steps, you will need a Windows 10 or Windows Server 2016 host. You may use a virtual machine or a cloud instance. Ensure that the latest version of docker is installed as documented [here](https://github.com/docker/labs/blob/master/windows/windows-containers/Setup-Server2016.md).

Ensure that you have setup environment variables for `DOCKER_HOST` and `dockerId`. The value of `dockerId` should be your docker hub handle.

On Windows, you can run the following in a powershell terminal: 

`$env:DOCKER_HOST='tcp://127.0.0.1:2375'`

`$env:dockerId='anoop'`

## Strategy
The application modernization process will be split into two phases. Phase 1 will concern itself about running the webforms application and the sql server backend as docker containers. The docker related configuration and code can be found under `phase-1/web-1.0`, `phase-1/web-1.1` and `phase-1/web-1.2` folders.
Phase-2 will focus on adding features incrementally using Phase-1 as the foundation layer.

## Phase-1

Convert application components into Docker containers.
### v1.1
To build the image, run the following commands inside a powershell terminal:

`cd phase-1/web-1.0`
`docker build -t $dockerId/signup-web:1.0 .`

To run the application, we need to first run the SQL Server database using:

`docker container run --detach --name signup-db --env ACCEPT_EULA=Y --env-file ..\..\app\db-credentials.env microsoft/mssql-server-windows-express`

Now we can run the web application using:

`docker container run --detach --name web -p 80:80 --env-file ..\..\app\db-credentials.env $dockerId/signup-web:1.0`

The web application can be accessed by accessing the `web` container's ip address on port `80`. A quick way to start a browser tab with the required url is below.

`start http://$(docker inspect -f '{{.NetworkSettings.Networks.nat.IPAddress}}' web)/ProductLaunch`

Click on the "Sign Up" button and fill out the form before clicking on "Go". The newsletter signup details would be written to the SQL Server database. To pull up the records inside the SQL Server database, we can run a query inside the database container as follows:

`docker exec signup-db powershell "Invoke-SqlCmd -Query 'SELECT * FROM Prospects' -Database SignUp"`

The same application can be run more easily by running a single command to bring up all containers in the application stack. For this we will use `docker-compose`. `docker-compose` is a tool that can be used to bring up multi-container applications using as input a `yaml` file that has the setup instructions.

Navigate up to the root of this repository and then run this command:

`docker-compose -f app/docker-compose-1.0.yml up -d`

Running the application using `docker-compose` will rename the containers using a different format based on the folder name container the `yaml` file. So the `web` container will be named as `app_signup-web_1` and the sql server db container will be named as `app_signup-db_1`. So we need to use these names to access the containers in the commands below.

The web application can be accessed in the same way by looking up the `app_signup-web_1` container's ip address on port `80`. A quick way to start a browser tab with the required url is below.

`start http://$(docker inspect -f '{{.NetworkSettings.Networks.nat.IPAddress}}' web)/ProductLaunch`

Click on the "Sign Up" button and fill out the form before clicking on "Go". The newsletter signup details would be written to the SQL Server database. To pull up the records inside the SQL Server database, we can run a query inside the database container as follows:

`docker exec app_signup-db_1 powershell "Invoke-SqlCmd -Query 'SELECT * FROM Prospects' -Database SignUp"`
