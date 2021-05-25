sudo service docker start
sudo docker system prune -a -f
sudo docker volume prune -f
sudo docker-compose up --build -d