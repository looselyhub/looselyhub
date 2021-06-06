sudo sh ./start.sh
cd ../RELEASE
dir=$(pwd)
read -p "Enter the ec2 plubic ipv4: "  ipv4
read -p "Enter the pem filename: "  pemName
scp -r -i ../$pemName.pem $dir ubuntu@$ipv4:~/
ssh -i ../$pemName.pem ubuntu@$ipv4