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
## 構成
PrismaのUserに保存されたデータで認証を行っています。

NextAuthの認証機能でサインインした際にセッションデータを暗号化して保存。リロード後も情報が保持されます。

## ページ

### /
ログインしているかどうか・ログインユーザーの情報の表示。
また、ログインしている場合はボタンをクリックすることでPrisma DB上のデータを取得することができます。
（こちらのデータは手動で作成してください）

### /auth/signin
ログインページ

### /auth/signup
新規作成ページ

### /user
ログインしている場合のみ閲覧できるページ

# NextAuth & Prisma credentials example

This is an example of authentication using NextAuth with user information (email address and password) stored in Prisma.

## Assumption

- PostgresSQL is running.
- Recommended: pnpm is installed.
  - You may be able to start PostgresSQL with tools other than pnpm. If so, replace the command with your own tool.

````
$ pnpm install

$ npx auth secret

$ npx prisma generate

$ npx prisma db push

$ pnpm run dev
````
## Configuration
Authentication is done using the credentials stored in Prisma's user.

Session data is encrypted and stored when logging in with NextAuth's authenticator. The information is retained even after a reload.

## Page.

### /
Displays whether the user is logged in and information about the logged in user.
If you are logged in, you can also retrieve data on Prisma DB by clicking the button.
(Please create this data manually.)

### /auth/signin
Login page

### /auth/signup
Create a new page

### /user
Page only visible if you are logged in
