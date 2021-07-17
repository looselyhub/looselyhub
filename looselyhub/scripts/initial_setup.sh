sudo apt-get update
sudo apt-get -y install docker
sudo apt -y install docker.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo apt -y install nginx
sudo apt -y install certbot python3-certbot-nginx

sudo ufw allow 'Nginx Full'
sudo ufw limit ssh
sudo ufw --force enable