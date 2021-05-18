rootDir=$(pwd)
if [ -d "./RELEASE" ]; then
  sudo rm -R ./RELEASE
  echo "./RELEASE removed"
fi
rsync -av --progress ./ ./RELEASE --exclude-from ./rsync_exclude.txt
cd ./RELEASE
dir=$(pwd)
read -p "Enter the ec2 plubic ipv4: "  ipv4
read -p "Enter the pem filename: "  pemName
scp -r -i ../$pemName.pem $dir ec2-user@$ipv4:~/
ssh -i ../$pemName.pem ec2-user@$ipv4
cd RELEASE