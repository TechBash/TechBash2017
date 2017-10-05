docker image build -t anoop/signup-web:1.0 .

docker container run --detach -e ACCEPT_EULA=Y --env-file=..\..\app\db-credentials.env --name signup-db microsoft/mssql-server-windows-express
docker container run --detach -p 80:80 --env-file=..\..\app\db-credentials.env --name web anoop/signup-web:1.0

start http://$(docker inspect -f '{{.NetworkSettings.Networks.nat.IPAddress}}' web)/ProductLaunch

docker exec signup-db powershell "Invoke-SqlCmd -Query 'SELECT * FROM Prospects' -Database SignUp"
