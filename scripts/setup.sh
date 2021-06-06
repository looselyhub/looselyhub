cd ..
sudo apt-get update
sudo apt-get -y install docker
sudo apt -y install docker.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

read -p "Enter the desired URL DOMAIN (without www and http): "  DOMAIN
read -p "Enter the SMTP EMAIL_PORT [default:465]: "  EMAIL_PORT
EMAIL_PORT="${EMAIL_PORT:-465}"

read -p "Enter the SMTP EMAIL_HOST [default: smtp.gmail.com] "  EMAIL_HOST
EMAIL_HOST="${EMAIL_HOST:-smtp.gmail.com}"

read -p "Enter the SMTP EMAIL_USERNAME: "  EMAIL_USERNAME
read -p "Enter the SMTP EMAIL_PASSWORD: "  EMAIL_PASSWORD
read -p "Enter the SMTP EMAIL_FROM: "  EMAIL_FROM
read -p "Enter the AUTHORIZED_DOMAINS array [default: []]: "  AUTHORIZED_DOMAINS
AUTHORIZED_DOMAINS="${AUTHORIZED_DOMAINS:-[]}"

cat >.env.local <<EOL
DOMAIN=https://${DOMAIN}
EMAIL_PORT=${EMAIL_PORT}
EMAIL_HOST=${EMAIL_HOST}
EMAIL_USERNAME=${EMAIL_USERNAME}
EMAIL_PASSWORD=${EMAIL_PASSWORD}
EMAIL_FROM=${EMAIL_FROM}
AUTHORIZED_DOMAINS=${AUTHORIZED_DOMAINS}
EOL
cat .env.local

sudo apt -y install nginx
sudo ufw allow 'Nginx Full'
sudo ufw limit ssh
sudo ufw --force enable
sudo apt -y install certbot python3-certbot-nginx
sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/$DOMAIN
sed -i "s/URL/$DOMAIN/g" nginx_template.com
mv nginx_template.com $DOMAIN
sudo mv ../$DOMAIN /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN
sudo systemctl restart nginx

sudo sh ./install.sh