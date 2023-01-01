FROM docker.io/library/node:18-alpine AS builder
WORKDIR /build

COPY package.json package-lock.json tsconfig.json ./
RUN npm ci

COPY source source
RUN node_modules/.bin/tsc


FROM docker.io/library/node:18-alpine AS packages
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --omit=dev


FROM docker.io/library/node:18-alpine
ENV NODE_ENV=production
RUN apk upgrade --no-cache

WORKDIR /app
VOLUME /app/persist

COPY package.json ./
COPY --from=packages /build/node_modules ./node_modules
COPY locales locales
COPY --from=builder /build/dist ./

ENTRYPOINT ["node", "--enable-source-maps"]
CMD ["index.js"]
