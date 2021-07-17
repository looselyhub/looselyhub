IP=$(ip -4 addr | grep -oP '(?<=inet\s)\d+(\.\d+){3}' | head -n 1)
echo $IP