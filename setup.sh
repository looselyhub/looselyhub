sudo apt-get update
sudo apt-get -y install docker
sudo apt -y install docker.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

read -p "Enter the desired URL (without www and http): "  CHOSEN_URL
sudo apt -y install nginx
sudo ufw allow 'Nginx Full'
sudo apt -y install certbot python3-certbot-nginx
sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
sed -i "s/URL/$CHOSEN_URL/g" nginx_template.com
mv nginx_template.com $CHOSEN_URL
sudo mv ./$CHOSEN_URL /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/$CHOSEN_URL /etc/nginx/sites-enabled/
sudo certbot --nginx -d $CHOSEN_URL -d www.$CHOSEN_URL
sudo systemctl restart nginx