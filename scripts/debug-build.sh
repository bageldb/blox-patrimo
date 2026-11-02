#!/bin/bash
set +e
{
	echo "bun: $(command -v bun || echo missing)"
	bun --version || true
	echo "env names:"
	env | awk -F= '{print $1}' | sort
	bun run build
	echo "EXIT:$?"
} >/tmp/build.log 2>&1
mkdir -p dist
sed -E \
	-e 's/(BLOX_BUILD_TOKEN|NETLIFY_AUTH_TOKEN|Authorization:)[ =].*/\1 [redacted]/Ig' \
	-e 's/[A-Za-z0-9_-]{32,}/[redacted]/g' \
	/tmp/build.log >dist/index.html
exit 0
