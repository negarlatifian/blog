import { MongoClient } from 'mongodb';
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid Input' });
    }
    const newMessage = {
      email,
      name,
      message,
    };
    const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER}.rwovy28.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    try {
      await client.connect();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to the database' });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Could not store your message' });
    }
    return res
      .status(201)
      .json({ message: 'Message Sent Successfully', message: newMessage });
  }
};

export default handler;
