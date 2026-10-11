#!/usr/bin/env bash
set -eu

# Usage
# Go to the project you want to improve via this template
# cd ~/git/my-project
# Run this script from the working directory of that project
# ~/git/telegram-typescript-bot-template/copy-template-into-existing-project.sh

git diff --quiet || (echo "repo unclean. stage or commit first" && exit 1)

name=$(basename "$PWD")
templatedir="$(dirname "$0")"

cp -r \
	"$templatedir/"{package.json,tsconfig.json,.editorconfig,.ox*rc.json,.gitattributes,.github,.gitignore,.dockerignore,Dockerfile} \
	.
rm -f deno.jsonc deno.lock .github/workflows/deno.yml

echo "everything copied"

# Replace template name with folder name
# macOS: add '' after -i like this: sed -i '' "s/…
sed -i "s/telegram-typescript-bot-template/$name/g" package.json Dockerfile .github/**/*.yml

git --no-pager status --short
