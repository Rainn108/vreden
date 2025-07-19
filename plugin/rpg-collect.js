let handler = async (m, { vreden, usersdb, rpgdb }) => {
  let __timers = new Date() - rpgdb[m.sender].lastclaim;
  let _timers = 43200000 - __timers;
  let timers = clockString(_timers);
  if (new Date() - rpgdb[m.sender].lastclaim > 43200000) {
    vreden.sendTextWithMentions(
      m.chat,
      `Kamu sudah mengclaim dan mendapatkan *1000* 💵saldo dan *20* 🎟️limit`,
      m,
    );
    usersdb[m.sender].saldo += 1000;
    usersdb[m.sender].limit += 20
    rpgdb[m.sender].lastclaim = new Date() * 1;
  } else
    vreden.sendTextWithMentions(
      m.chat,
      `silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`,
      m,
    );
};
handler.help = ["collect"];
handler.tags = ["rpg"];
handler.command = ["collect"];
module.exports = handler;

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
