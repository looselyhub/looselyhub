sudo apt-get update
sudo apt-get -y install docker
sudo apt -y install docker.io

sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo apt -y install nginx
sudo apt -y install certbot python3-certbot-nginx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.nvm/nvm.sh
source ~/.profile
source ~/.bashrc
nvm install 14.17.3

cd /root/setup
npm install
npm run build
npm install pm2 -g
pm2 startup
pm2 --name Setup start npm -- start
pm2 save