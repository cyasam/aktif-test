ARG VARIANT=16-bullseye

FROM node:${VARIANT} as dependencies
WORKDIR /aktif-test
COPY package.json package-lock.json ./
RUN npm install

FROM node:${VARIANT} as builder
WORKDIR /aktif-test
COPY . .
COPY --from=dependencies /aktif-test/node_modules ./node_modules
RUN npm run build

FROM node:${VARIANT} as runner
WORKDIR /aktif-test
ENV NODE_ENV production

COPY --from=builder /aktif-test/next.config.js ./
COPY --from=builder /aktif-test/next-i18next.config.js ./
COPY --from=builder /aktif-test/locales ./locales
COPY --from=builder /aktif-test/public ./public
COPY --from=builder /aktif-test/.next ./.next
COPY --from=builder /aktif-test/node_modules ./node_modules
COPY --from=builder /aktif-test/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]