# Slack Reaction Bot

これは、ランダムな絵文字でメッセージにリアクションする簡単な Slack ボットです。

## 必要なもの

- Node.js (v14 以上)
- @slack/bolt パッケージ
- Slack ボットトークンとアプリトークン

## インストール方法

このリポジトリをクローンします。

1. npm install を実行して、依存関係をインストールします。
2. .env.example を .env にリネームし、Slack ボットトークンとアプリトークンを入力します。
3. npm start でアプリを実行します。

## 使い方

アプリが実行されると、コードで定義された emojiList 配列からランダムな絵文字で Slack チャンネルでのメッセージにリアクションします。

emojiList 配列を編集することで、リアクションに使われる絵文字をカスタマイズできます。

## Slack API の設定

このアプリを動作させるためには、Slack API の設定が必要です。

1. Slack API にアクセスして、アプリを作成します。
2. アプリの設定画面から、"Add features and functionality" ページに移動し、"Event Subscriptions" を有効にします。
3. "Request URL" フィールドに、このアプリが実行される URL を入力します。
4. "Subscribe to bot events" セクションで、"app_mention" イベントを有効にします。
5. "Install App" ページで、アプリを Slack チームにインストールします。
