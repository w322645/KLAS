const reqEvent = event => require(`../events/${event}`);
module.exports = client => {
  client.on("message", reqEvent("message"));
  client.on("clickbutton", reqEvent("buttons"));
  client.on("ready", () => reqEvent("ready")(client, "message"));
};
