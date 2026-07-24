const { MongoClient } = require("mongodb");

// ★ここをあなた専用の接続文字列に書き換えてください
const uri = "mongodb+srv://2501310060of_db_user:hoOQGNHHZ6kNNKum@cluster0.zjbyrxs.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        // 接続を開始
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db('notes');
        const notes = database.collection('notes');

        // データを登録
        const query = [
            { id: 1, name: 'Yasushi', mail: 'osonoi@cu', tel: '1111' },
            { id: 2, name: 'Koh', mail: 'kojima@cu', tel: '2222' },
            { id: 3, name: 'Alice', mail: 'alice@example.com', tel: '3333' },
            { id: 4, name: 'Bob', mail: 'bob@example.com', tel: '4444' },
            { id: 5, name: 'Charlie', mail: 'charlie@example.com', tel: '5555' },
            { id: 6, name: 'David', mail: 'david@example.com', tel: '6666' },
            { id: 7, name: 'Eve', mail: 'eve@example.com', tel: '7777' },
            { id: 8, name: 'Frank', mail: 'frank@example.com', tel: '8888' },
            { id: 9, name: 'Grace', mail: 'grace@example.com', tel: '9999' },
            { id: 10, name: 'Henry', mail: 'henry@example.com', tel: '0000' },  
        ];

        const note = await notes.insertMany(query);
        console.log("Inserted count:", note.insertedCount);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        // 最後にクローズする
        await client.close();
    }
}
run();