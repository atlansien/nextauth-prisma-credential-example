# NextAuth & Prisma Credentials Example

Next Auth を利用して Prisma に保存されているユーザー情報（メールアドレス・パスワード）で認証を行うサンプルです。

## 前提

- PostgresSQL を起動している
- 推奨: pnpm を導入している
  - pnpm 以外でも多分起動します。その場合はコマンドを各自のツールに置き換えてください

```
$ pnpm install

$ npx auth secret

$ npx prisma generate

$ npx prisma db push

$ pnpm run dev
```
