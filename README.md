<a href="https://quanlychitieu.fun">
<p align="center"><img alt="Quanlychitieu.fun – An open source expense tracker application to track your incomes, investments, subscriptions, and expenses at ease." width="100" height="100" src="./public/static/icons/logo.svg"></p>
  <h1 align="center">Quanlychitieu.fun</h1>
</a>

<p align="center">
  Quanlychitieu.fun is an open-source expense tracker application to effortlessly track and manage your expenses.
</p>

<p align="center">
  <a href="https://github.com/gokulkrishh/quanlychitieu.fun/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/gokulkrishh/quanlychitieu.fun?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#routes"><strong>App Routes</strong></a> ·
  <a href="#contributions"><strong>Contributions</strong></a>
</p>
<br/>

## Introduction

Quanlychitieu.fun is an open-source application to effortlessly track and manage your incomes, expenses, investments, and subscriptions.

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [Tailwind](https://tailwindcss.com/) – CSS
- [Supabase](https://supabase.com/) – database
- [Vercel](https://vercel.com/) – hosting
- [Resend](https://resend.com/) – emails

## Implementation

- Quanlychitieu.fun is built using [NextJs](https://nextjs.org) from scratch.
- [Postgresql](https://www.postgresql.org/) is used as the ORM for easily communicating with the database for storing user, subscription data, etc. You can refer to the Prisma schema [here](/prisma/schema.prisma).
- [Supabase](https://supabase.com/) is an open-source Firebase alternative, the data is stored in the Postgres database (private data are encrypted) and uses a magic link for authentication provided by supabase.
- [LemonSqueezy](https://lemonsqueezy.com/) is used as the payment system. Its implementation is super simple.

## Routes

| Path      | Production             | Local                     |
| --------- | ---------------------- | ------------------------- |
| Home      | /                      | /                         |
| Signup    | app.quanlychitieu.fun/signup | app.localhost:3000/signup |
| Signin    | app.quanlychitieu.fun/signin | app.localhost:3000/signin |
| Dashboard | app.quanlychitieu.fun        | app.localhost:3000        |

## Contributions

Here's how you can contribute:

- [Open an issue](https://github.com/gokulkrishh/quanlychitieu.fun/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/gokulkrishh/quanlychitieu.fun/pull) to add new features/make quality-of-life improvements/fix bugs.

<a href="https://github.com/gokulkrishh/quanlychitieu.fun/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gokulkrishh/quanlychitieu.fun" alt="contributors" />
</a>

## Author

- Gokulakrishnan Kalaikovan ([@gokul_i](https://twitter.com/gokul_i))

## License

Quanlychitieu.fun is an open source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/gokulkrishh/quanlychitieu.fun/blob/main/LICENSE).
