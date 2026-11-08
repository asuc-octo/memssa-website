# MEMSSA website container

This container builds the Vite site and serves the finished files with nginx.
Nothing in this setup contacts the OCF or changes a live site.

The image does not run as root.
It has no application secrets and no database.
Use it to build the site and to check it on your own machine.
The live host is `ssh.ocf.berkeley.edu`.
Apache on that host serves `~/public_html`.
It does not run this container.

## Production review

There are no `localhost`, `127.0.0.1`, or build-time API URLs in the site source.
Routes, footer links, and the favicon are absolute paths such as `/office/team` and `/assets/images/MemssaLogo.svg`.
The site has to be served at the domain root.
Hosting it under a prefix such as `https://www.ocf.berkeley.edu/~account/` will break navigation and the favicon.
An OCF virtual host such as `yourgroup.studentorg.berkeley.edu` serves the site at `/`, which matches this build.

The container does not call other services.
The visitor's browser loads Google Fonts, and the pages embed Google Docs and Google Calendar.
Those addresses are already in the site.
The nginx policy allows those fonts and frames, and it blocks everything else.

The footer email link is `mailto:contact@salrai@asuc.org`.
That address has two `@` signs, so it will not open a usable message.
It was left as written because the repository does not say which address should replace it.

Before you request a `berkeley.edu` virtual host, compare the site with the [OCF virtual hosting rules](https://www.ocf.berkeley.edu/docs/services/vhost/).
The footer shows the OCF logo, but the logo is not a link to `https://www.ocf.berkeley.edu`.
The required student-group disclaimer is not on the pages.
The bills, constitution, and calendar pages embed large Google Docs and Google Calendar frames.
OCF's published rule disallows substantial iframes of non-berkeley.edu sites on a virtual host.
Those are content issues.
This container does not change them.

## Test locally

Docker Desktop or another local Docker engine is required.

```sh
docker compose up --build
```

The site is at `http://127.0.0.1:8080`.
Open `/`, then open a client route such as `/office/team` by clicking the navigation.
Reloading that route should still show the page, not a server 404.

In another terminal:

```sh
curl -fsS http://127.0.0.1:8080/healthz
curl -fsS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8080/office/team
curl -fsS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8080/assets/images/MemssaLogo.svg
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8080/assets/does-not-exist.png
curl -sI http://127.0.0.1:8080/ | head
```

Expect `ok`, then status `200`, `200`, and `404`.
The headers should include `X-Content-Type-Options: nosniff` and should not include a `Server` version.
`docker inspect --format '{{.State.Health.Status}}' memssa-website-web-1` should report `healthy` after the first check.
The container name can differ.
Use `docker compose ps` if it does.

Stop it with `docker compose down`.

## Publish to ssh.ocf.berkeley.edu

Do not run this section until you intend to publish.
These commands are not part of the local test.

Log in at `ssh.ocf.berkeley.edu`.
Apache serves the group account's `~/public_html` directory.
Copy the built site there.
Do not start the container on that server.

Build the image locally if you have not already:

```sh
docker compose build
```

Then copy the finished files out of the image and upload them.
Replace `ACCOUNT` with the OCF account name.

```sh
rm -rf /tmp/memssa-public
docker create --name memssa-dist memssa-website:local
docker cp memssa-dist:/usr/share/nginx/html/. /tmp/memssa-public
docker rm memssa-dist
rsync -av --delete /tmp/memssa-public/ ACCOUNT@ssh.ocf.berkeley.edu:~/public_html/
```

`--delete` removes files in `~/public_html` that are not in this build.
Check that directory before the first upload if anything else lives there.

`public/.htaccess` is included in the build.
Apache uses it so a request for `/office/team` returns the app instead of a 404.
Confirm the upload with the account you use on that host:

```sh
ssh ACCOUNT@ssh.ocf.berkeley.edu 'test -f ~/public_html/index.html && test -f ~/public_html/.htaccess && echo ready'
```

To publish a newer build, run the same copy and `rsync` again.
