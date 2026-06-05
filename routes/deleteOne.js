const { MongoClient } = require("mongodb");

// あなた専用の接続文字列に書き換え済みです
const uri = "mongodb+srv://2501310060of_db_user:hoOQGNHHZ6kNNKum@cluster0.zjbyrxs.mongodb.net/?appName=Cluster
"

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('notes');
    const notes = database.collection('notes');

    // idが2のドキュメント（ノート2）を削除する
    const result = await notes.deleteOne({ id: 2 });
    
    // 実行結果をターミナルに表示する
    console.log(result);

  } finally {
    // 最後に接続を閉じる
    await client.close();
  }
}
run().catch(console.dir);