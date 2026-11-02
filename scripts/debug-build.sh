#!/bin/bash
set +e
{
	echo "hook_url_set: ${INCOMING_HOOK_URL:+yes}"
	echo "hook_title_set: ${INCOMING_HOOK_TITLE:+yes}"
	echo "hook_body_len: ${#INCOMING_HOOK_BODY}"
	bun run build
	echo "EXIT:$?"
} >/tmp/build.log 2>&1
mkdir -p dist
sed -E \
	-e 's/(BLOX_BUILD_TOKEN|NETLIFY_AUTH_TOKEN|Authorization:|grant)[ =:"].*/\1 [redacted]/Ig' \
	-e 's/[A-Za-z0-9_-]{24,}/[redacted]/g' \
	/tmp/build.log >dist/index.html
exit 0
