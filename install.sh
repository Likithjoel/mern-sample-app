#!/usr/bin/env bash
# Install ChromeDriver.
wget -N http://chromedriver.storage.googleapis.com/2.35/chromedriver_linux64.zip -P ~/
unzip ~/chromedriver_linux64.zip -d ~/
rm ~/chromedriver_linux64.zip
sudo mv -f ~/chromedriver /usr/local/bin/chromedriver
# Install Node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
#sudo apt-get update
#sudo apt-get install nodejs
#install forever
# wget -qO- https://deb.nodesource.com/setup_8.x | sudo bash -
# sudo apt-get install -y nodejs
# sudo npm install forever -g
# # Install Chrome.
# sudo rm /var/lib/apt/lists/lock
# sudo rm /var/cache/apt/archives/lock
# sudo rm /var/lib/dpkg/lock
sudo curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
sudo echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
sudo apt-get -y update
# sudo apt-get -y install google-chrome-stable

