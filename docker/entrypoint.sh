#!/bin/sh
set -eu

template=/opt/nginx/nginx.conf.template
rendered=/tmp/nginx.conf

if [ -n "${SOCKET_PATH:-}" ] && [ -n "${PORT:-}" ]; then
    echo "Set only one of SOCKET_PATH or PORT." >&2
    exit 1
fi

if [ -n "${SOCKET_PATH:-}" ]; then
    case "$SOCKET_PATH" in
        /*) ;;
        *)
            echo "SOCKET_PATH must be an absolute path." >&2
            exit 1
            ;;
    esac
    case "$SOCKET_PATH" in
        *[!A-Za-z0-9_./-]*)
            echo "SOCKET_PATH may contain only letters, numbers, underscores, dots, slashes, and hyphens." >&2
            exit 1
            ;;
    esac
    case "$SOCKET_PATH" in
        *..*)
            echo "SOCKET_PATH must not contain '..'." >&2
            exit 1
            ;;
    esac
    mkdir -p "$(dirname "$SOCKET_PATH")"
    rm -f "$SOCKET_PATH"
    listen="unix:${SOCKET_PATH}"
    # Another local process connects to this socket as a different user.
    umask 000
else
    port="${PORT:-8080}"
    case "$port" in
        ''|*[!0-9]*)
            echo "PORT must be a number." >&2
            exit 1
            ;;
    esac
    if [ "$port" -lt 1024 ] || [ "$port" -gt 65535 ]; then
        echo "PORT must be between 1024 and 65535. This image does not run as root." >&2
        exit 1
    fi
    listen="${port} default_server"
fi

mkdir -p /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp
sed "s#__LISTEN__#${listen}#" "$template" > "$rendered"

exec "$@"
