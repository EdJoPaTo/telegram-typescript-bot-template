#!/usr/bin/env bash
set -e

nice npm ci
nice npm run build

echo
echo WARNING
echo Service will fail when some values are not filled out
echo

# systemd
sudo cp -uv ./*.service /etc/systemd/system
sudo systemctl daemon-reload

# start
sudo systemctl restart telegram-typescript-bot-template.service
sudo systemctl enable telegram-typescript-bot-template.service
