# Deploy process (AWS or similar)
## Creating the server

1. Create an EC2 machine with at least 2GB or RAM. Follow **Step 3** with the details bellow prints and 
  > https://medium.com/@umairnadeem/deploy-to-aws-using-docker-compose-simple-210d71f43e67
   1. On image select **Ubuntu 20.04**
   2. O security group don't open all traffic. Add 2 rules, HTTP and HTTPs
   3. After everything use the command on the downloaded .pem file ```chmod 400 yourkeyname.pem```
2. Redirect your domain on the host to the instance IPv4 created by EC2.
   1. On EC2 use the type A and the value is the instance IPv4.
   
## Uploading server

1. Move the .pem file to the root of the looselyhub project
2. Create the ```.env.local``` file replacing when necessary the ```<xxx>``` tags with the following content:
  ```
  NEXTAUTH_URL=https://<IPv4>:3000
  AUTHORIZED_DOMAINS=[<EMPTY ARRAY OR DOMAINS, example ["gmail.com","msn.com"]>]
  EMAIL_FROM=<Email_FROM, format "xxx <xxx@domain.com>">
  NEXT_PUBLIC_YANDEX=<YANDEX ID>
  NEXT_PUBLIC_GTAG=<G ANALYTICS TAG>
  NEXT_PUBLIC_PUSHER=<PUSHER_PUBLIC_SECRET>
  PUSHER_SECRET=<PUSHER_SECRET>
  PUSHER_APP_ID=<PUSHER_ID>
  ```
3. Add to ```.env.local``` and configure the SMTP email to use on login. Use your SMTP password and email:
  ```
  EMAIL_USERNAME=<Admin email>
  EMAIL_PASSWORD=<Admin password>
  ```
4. Add any of the following optional lines if necessary to ```.env.local```:
  ```
  NEXT_PUBLIC_LOGO=<URL_TO_LOGO>
  NEXT_PUBLIC_FAVICON=<URL_TO_FAVICON>
  NEXT_PUBLIC_PRIMARY_COLOR=<#HEX_PRIMARY_COLOR>
  NEXT_PUBLIC_SECONDARY_COLOR=<#HEX_SECONDARY_COLOR>
  ```
5. Run the SH command ```sh deploy.sh``` on the root of the project. Fill the IP info with the IPV4 from EC2 and the name of the pem file without the extension.
6. Run the command ```cd RELEASE```
7. Run the command ```sh setup.sh```. This command will setup everything required for the server.
8. Run the command ```sh install.sh```. This command will install the server and start.
9. Access the application with the URL.

## Setting the URL and SSL (TODO)
