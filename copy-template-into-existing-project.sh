#!/usr/bin/env bash
set -e

# Usage
# Go to the project you want to improve via this template
# cd ~/git/my-project
# Run this script from the working directory of that project
# ~/git/telegram-typescript-bot-template/copy-template-into-existing-project.sh

pwd=$(pwd)
name=$(basename "$pwd")

cd "$(dirname "$0")"

cp -rv \
    {package.json,tsconfig.json,.gitignore,.github,.dockerignore,Dockerfile,install-systemd.sh} \
    "$pwd"

cp -rv telegram-typescript-bot-template.service "$pwd/$name.service"

echo "everything copied"

cd -

# Replace template name with folder name
# macOS: add '' after -i like this: sed -i '' "s/…
sed -i "s/telegram-typescript-bot-template/$name/g" package.json Dockerfile .github/**/*.yml install-systemd.sh ./*.service

git --no-pager diff --stat
