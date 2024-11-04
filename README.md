# 🔥 NextJS 15 + Cloudflare + DrizzleORM

This boilerplate SaaS template stack is **designed for developers** seeking a streamlined, **high-performance** setup with **minimal dependencies**. Perfect for modern web applications 💪🏻

## ✨ Features

- ☁️ **Serverless** deployment with [Cloudflare Pages](https://pages.cloudflare.com/) and **SQLite** database with [Cloudflare D1](https://developers.cloudflare.com/d1/)
- 🔥 Latest [NextJS](https://nextjs.org/) **v15** & Server Actions
- 🌧 [Drizzle](https://orm.drizzle.team/) as **SQLite ORM**
- 🛡 [Zod](https://zod.dev/) **validator**
- 🦄 [Tailwind](https://tailwindcss.com/) + [Shadcn](https://ui.shadcn.com/) **styles**
- 🔐 Username + password cookies auth

## 🛠 Getting Started

First, create your production and preview databases, and update your wrangler configuration file:

```
npm i -g wrangler                           # Install Cloudflare Wrangler CLI
wrangler login                              # Login to Cloudflare
wrangler d1 create next-cloudflare-prod-db        # Create Prod database, and don't forget to update [[d1_databases]] section in wrangle.toml with your database_id and database_name
wrangler d1 create next-cloudflare-preview-db     # Create Preview database, and  don't forget to update [[env.preview.d1_databases]] section in wrangle.toml with your database_id and database_name
cp .dev.vars.example .dev.vars              # Create a .dev.vars and don't forget to fill it with your secret variables
```

Then, simply install dependencies, run the migrations and launch it!

```
npm ci                          # Install dependencies
npm run db:migrate:local        # Run database migrations locally
npm run dev                     # Launch project locally
```

## 🚀 Release and deploy a new version

Add environment variables vía dashboard [(docs)](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard), run migrations and then:

```
npm run db:migrate:preview  # Run database migrations (preview environment)
npm run deploy:preview      # Deploy to preview environment

npm run db:migrate:prod     # Run database migrations (prod environment)
npm run deploy:prod         # Deploy to prod environment
```
