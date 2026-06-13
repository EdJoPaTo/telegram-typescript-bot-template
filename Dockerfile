FROM docker.io/library/alpine:3.24 AS packages
RUN apk upgrade --no-cache \
	&& apk add --no-cache npm
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --no-update-notifier --omit=dev


FROM docker.io/library/alpine:3.24 AS final
RUN apk upgrade --no-cache \
	&& apk add --no-cache nodejs \
	&& addgroup -S -g 923 runner \
	&& adduser -S -D -u 923 -G runner runner \
	&& rm -f -- /etc/*-

WORKDIR /app
VOLUME /app/persist

COPY package.json ./
COPY --from=packages /build/node_modules ./node_modules
COPY locales locales
COPY source ./

USER runner
ENTRYPOINT ["node", "--enable-source-maps"]
CMD ["telegram-typescript-bot-template.ts"]
