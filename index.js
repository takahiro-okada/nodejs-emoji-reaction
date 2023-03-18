const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

const emojiList = ["tada", "confetti_ball", "sparkles"];

// ランダムな絵文字名を選択するヘルパー関数
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[randomIndex];
}

app.event("app_mention", async ({ event, client }) => {
  const randomEmoji = getRandomEmoji();
  try {
    await client.reactions.add({
      channel: event.channel,
      name: randomEmoji,
      timestamp: event.ts,
    });
    console.log("Reaction added!");
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  await app.start();
  console.log("App is running!");
})();
