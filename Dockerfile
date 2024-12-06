FROM docker.io/library/node:23-alpine AS builder
RUN apk upgrade --no-cache
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --no-update-notifier
COPY . ./
RUN node_modules/.bin/tsc


FROM docker.io/library/node:23-alpine AS packages
RUN apk upgrade --no-cache
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --no-update-notifier --omit=dev


FROM docker.io/library/alpine:3.21 AS final
RUN apk upgrade --no-cache \
	&& apk add --no-cache nodejs

WORKDIR /app
VOLUME /app/persist

COPY package.json ./
COPY --from=packages /build/node_modules ./node_modules
COPY locales locales
COPY --from=builder /build/dist ./

ENTRYPOINT ["node", "--enable-source-maps"]
CMD ["telegram-typescript-bot-template.js"]
