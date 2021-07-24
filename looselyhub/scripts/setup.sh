cd /root/looselyhub

sudo sh ./scripts/install.sh

sudo ufw allow 'Nginx Full'
sudo ufw limit ssh
sudo ufw --force enable

sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/$1
sed -i "s/URL/$1/g" nginx_template.com
mv nginx_template.com $1
sudo mv ./$1 /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/$1 /etc/nginx/sites-enabled/
sudo certbot --nginx -d $1 -d www.$1 --non-interactive --agree-tos -m $2 --redirect