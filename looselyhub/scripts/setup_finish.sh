sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/$DOMAIN
sed -i "s/URL/$DOMAIN/g" nginx_template.com
mv nginx_template.com $DOMAIN
sudo mv ./$DOMAIN /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN
sudo systemctl restart nginx

sudo sh ./scripts/install.sh