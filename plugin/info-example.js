let handler = async (m, { vreden, args, prefix, command }) => {
  let code =
    '```javascript\nlet handler = async (m, { vreden, text, prefix, command }) => {\n  // Kode Anda\n}\nhandler.help = ["Help"]\nhandler.tags = ["tags menu"]\nhandler.command = ["command"]\nmodule.exports = handler```';
  await m.reply(code);
};
handler.help = ["example"].map((a) => a + " *[example code]*");
handler.tags = ["info"];
handler.command = ["example"];
module.exports = handler;
