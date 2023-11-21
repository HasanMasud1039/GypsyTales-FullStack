app.post("/users", async (req, res) => {
    const user = req.body;

    const query = { email: user.email };

    const existingUser = await manageUsersCollection.findOne(query);
    if (existingUser) {
      return res.send({
        message: ` ${user.name} already exists in the Champions database`,
      });
    }

    const result = await manageUsersCollection.insertOne(user);
    res.send(result);
  });