rootDir=$(pwd)
if [ -d "./DEBUG" ]; then
  sudo rm -R ./DEBUG
  echo "./DEBUG removed"
fi
rsync -av --progress ./ ./DEBUG --exclude-from ./rsync_exclude.txt
cd ./DEBUG
sudo yum update
sudo yum install docker
sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-`uname -s`-`uname -m` | sudo tee /usr/local/bin/docker-compose > /dev/null
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo service docker start
sudo docker system prune -a
sudo docker-compose up --build