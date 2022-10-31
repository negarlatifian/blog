const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Input" });
    }
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    return res
      .status(201)
      .json({ message: "Message Sent Successfully", message: newMessage });
  }
};

export default handler;
