sudo sh ./start.sh
cd ../RELEASE
dir=$(pwd)
read -p "Enter the ec2 plubic ipv4: "  ipv4
scp -r $dir root@$ipv4:~/
ssh root@$ipv4