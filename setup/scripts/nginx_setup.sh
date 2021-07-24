cd /root/setup

sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
mv nginx_template.com default
sudo mv ./default /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
sudo systemctl restart nginx