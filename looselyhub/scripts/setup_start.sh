cd /root/looselyhub

IP=$(ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}' | head -n 1)
cat >.env.local <<EOL
DOMAIN=http://${IP}:3000
EOL
cat .env.local

sudo sh ./scripts/install.sh