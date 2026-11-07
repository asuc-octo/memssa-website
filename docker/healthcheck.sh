#!/bin/sh
set -eu

if [ -n "${SOCKET_PATH:-}" ]; then
    curl --fail --silent --show-error --max-time 2 \
        --unix-socket "$SOCKET_PATH" \
        http://localhost/healthz >/dev/null
else
    port="${PORT:-8080}"
    curl --fail --silent --show-error --max-time 2 \
        "http://127.0.0.1:${port}/healthz" >/dev/null
fi
