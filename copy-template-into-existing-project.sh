#!/usr/bin/env bash
set -eu

# Usage
# Go to the project you want to improve via this template
# cd ~/git/my-project
# Run this script from the working directory of that project
# ~/git/telegram-typescript-bot-template/copy-template-into-existing-project.sh

name=$(basename "$PWD")
templatedir="$(dirname "$0")"

cp -r \
    "$templatedir/"{package.json,tsconfig.json,.editorconfig,.gitattributes,.github,.gitignore,.dockerignore,Dockerfile,install-systemd.sh} \
    .

cp "$templatedir/"telegram-typescript-bot-template.service "./$name.service"

echo "everything copied"

# Replace template name with folder name
# macOS: add '' after -i like this: sed -i '' "s/…
sed -i "s/telegram-typescript-bot-template/$name/g" package.json Dockerfile .github/**/*.yml install-systemd.sh ./*.service

git --no-pager status --short
