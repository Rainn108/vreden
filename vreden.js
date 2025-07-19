const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
    useMultiFileAuthState,
	generateWAMessage,
	prepareWAMessageMedia,
	downloadContentFromMessage,
	areJidsSameUser,
	getContentType,
	delay,
	getDevice
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const {
	exec,
	spawn,
	execSync
} = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const os = require('os')
const dns = require("dns")
const ms = require("parse-ms");
const nou = require("node-os-utils");
const gtts = require('node-gtts')
const crypto = require('crypto')
const moment = require('moment-timezone')
const ytdl = require("@vreden/youtube_scraper")
const speed = require('performance-now')
const cron = require('node-cron')
const PhoneNumber = require('awesome-phonenumber')
const gsmarena = require('gsmarena-api');
const {
	tiktokdl
} = require('tiktokdl')
const {
	performance
} = require('perf_hooks')
const similarity = require('similarity')
const didyoumean = require('didyoumean');
const ffmpeg = require('fluent-ffmpeg')
const threshold = 0.72
var dbs = []
global.dbc = dbs

//▢━━━━━━━━━━━━━━「 LOCAL MODULE 」━━━━━━━━━━━━━━▢
const {
	generateProfilePicture,
	tanggal,
	format,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	bytesToSize,
	fetchJson,
	getBuffer,
	jsonformat,
	parseMention,
	getRandom,
	getGroupAdmins
} = require('./lib/myfunc')
const {
	tools,
	downloader,
	imageAi,
	ai,
	internet,
	panel,
	stalk
} = require('./lib/vreden-core')
const {
	pickRandom,
	isEmoji,
	hitungmundur,
	kapital,
	randomNomor,
	totalFitur,
	getCase,
	dellCase,
	addCase,
	addFunc,
	pangkat
} = require('./lib/function')
const {
	casinoSave,
	setCasino,
	deleteCasino
} = require("./lib/casino");
const {
	pomfCDN,
	CatBox,
	tmpFiles,
	TelegraPh,
	webp2mp4File,
	UploadFileUgu
} = require('./lib/uploader')
const {
	gempa,
	jadwalsholat,
	pinterest,
	wallpaper,
	wikimedia,
	quotesAnime,
	happymod,
	android1,
	cariresep,
	webtoons,
	trendtwit,
	mangatoon,
	mediafire,
	artinama,
	wattpad,
	kiryu,
	corona
} = require('./lib/scraper')
const {
	getCountryFromPhoneNumber
} = require("./lib/country")
const {
	color,
	bgcolor
} = require('./lib/color')
const remini = require('./lib/remini')
const google = require('./lib/gemini')
const cd = require('./lib/countdown')
const spams = require("./lib/antispam");
const snake = require("./lib/ular-tangga")
const hit = require('./lib/hit')

//▢━━━━━━━━━━━━━━「 DATA BASE  」━━━━━━━━━━━━━━▢
let mediaMsg = JSON.parse(fs.readFileSync('./database/media.json'))
let stickerMsg = mediaMsg.sticker
let audioMsg = mediaMsg.audio
let videoMsg = mediaMsg.video
let imageMsg = mediaMsg.image
let toxicKata = JSON.parse(fs.readFileSync('./database/toxic.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));

//▢━━━━━━━━━━━━━━「 GAME DATABASE 」━━━━━━━━━━━━━━▢
let tictactoe = [];
let kuis = []
const _family100 = {}
const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakkabupaten = {}
const tebakjkt48 = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const kuisioner = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const petakbom = {}
const pirates = {}
const mathgame = {}
const verifyNumber = {}

let players = {}
let words = {}
let spyWord = {}
let spy = {}
let gameStarted = {}
let votes = {};
let currentPlayerIndex = {}
let roundTimer = {}
let votingTimer = {}
let descriptions = {}

//▢━━━━━━━━━━━━━━「 MODULE EXPORTS 」━━━━━━━━━━━━━━▢
module.exports = vreden = async (vreden, m, chatUpdate, chat, store) => {
	try {
		let setting = JSON.parse(fs.readFileSync('./setting.json'));
		const {
			owner,
			links,
			bots,
			mediaPath,
			ptero,
			apikey,
			general,
			count,
			reward,
			mess
		} = setting
		const content = JSON.stringify(chat.message)
		const type = Object.keys(chat.message)[0];
		if (m && type == "protocolMessage") vreden.ev.emit("message.delete", m.message.protocolMessage.key);
		const body = m.body
		const budy = m.text
		const botNumber = await vreden.decodeJid(vreden.user.id)
		const isCreator = [owner.nomor, ...owner.number].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? true : m.isChecking ? true : false
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body?.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
		const isCmd = body?.startsWith(prefix)
		const isCommand = isCmd ? body?.slice(1).trim().split(' ').shift().toLowerCase() : ""
		const isCommand2 = body?.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const command = general.prefix ? isCommand : isCommand2
		const commandNoprefix = body?.trim().split(/ +/).shift().toLowerCase()
		const args = body?.trim().split(/ +/).slice(1)
		const text = q = args?.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || (quoted.msg || quoted).message?.imageMessage?.mimetype || (quoted.msg || quoted).message?.videoMessage?.mimetype || (quoted.msg || quoted).message?.audioMessage?.mimetype || ""
		let timestamp = speed();
		let latensi = speed() - timestamp;
		const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const time2 = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const jam = moment().tz('Asia/Jakarta').format("HH:mm z")
		const date = moment.tz('Asia/Jakarta').format(`DD MMM yyyy`)

		if (time2 < "23:59:00") {
			var ucapanWaktu = `[ ${jam} ] Malam 🌌`
		}
		if (time2 < "19:00:00") {
			var ucapanWaktu = `[ ${jam} ] Sore 🌃`
		}
		if (time2 < "18:00:00") {
			var ucapanWaktu = `[ ${jam} ] Sore 🌅`
		}
		if (time2 < "15:00:00") {
			var ucapanWaktu = `[ ${jam} ] Siang 🏙`
		}
		if (time2 < "11:00:00") {
			var ucapanWaktu = `[ ${jam} ] Pagi 🌄`
		}
		if (time2 < "05:00:00") {
			var ucapanWaktu = `[ ${jam} ] Pagi 🌉`
		}

		dbs.push({
			id: m.key.id,
			m
		});
		//━━━━━━━━━━━━━━━[ DATABASE USER ]━━━━━━━━━━━━━━━━━//
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!('banned' in user)) user.banned = false
				if (!('blacklist' in user)) user.blacklist = false
				if (!('whitelist' in user)) user.whitelist = false
				if (!('rpg' in user)) user.rpg = false
				if (!('daftar' in user)) user.daftar = false
				if (!('pctime' in user)) user.pctime = ''
				if (!('nama' in user)) user.nama = 'Guest'
				if (!('pacar' in user)) user.pacar = ""
				if (!('askot' in user)) user.askot = "jakarta"
				if (!('afkReason' in user)) user.afkReason = ""
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!isNumber(user.umur)) user.umur = 0
				if (!isNumber(user.glimit)) user.glimit = count.game.free
				if (!isNumber(user.limit)) user.limit = count.limit.free
				if (!isNumber(user.coins)) user.coins = 0
				if (!isNumber(user.saldo)) user.saldo = 0
				if (!isNumber(user.exp)) user.exp = 0
				if (!isNumber(user.rank)) user.rank = 700
				if (!isNumber(user.antilinkcount)) user.antilinkcount = 0
				if (!isNumber(user.toxiccount)) user.toxiccount = 0
				if (!isNumber(user.premiumExpiry)) user.premiumExpiry = 0
				if (!isNumber(user.level)) user.level = 0
			} else global.db.data.users[m.sender] = {
				banned: false,
				blacklist: false,
				whitelist: false,
				rpg: false,
				daftar: false,
				pctime: '',
				nama: 'Guest',
				pacar: "",
				askot: "jakarta",
				afkReason: "",
				afkTime: -1,
				umur: 0,
				glimit: count.game.free,
				limit: count.limit.free,
				coins: 0,
				saldo: 0,
				exp: 0,
				rank: 700,
				antilinkcount: 0,
				toxiccount: 0,
				premiumExpiry: 0,
				level: 0
			}
		} catch (e) {
			console.log(e)
		}
		//━━━━━━━━━━━━━━━[ DATABASE CHAT ]━━━━━━━━━━━━━━━━━//
		try {
			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('goodbye' in chats)) chats.goodbye = general.autoWelcome
				if (!('welcome' in chats)) chats.welcome = general.autoLeave
				if (!('antilink' in chats)) chats.antilink = false
				if (!('antibot' in chats)) chats.antibot = false
				if (!('antibot2' in chats)) chats.antibot2 = false
				if (!('antilinktt' in chats)) chats.antilinktt = false
				if (!('antiaudio' in chats)) chats.antiaudio = false
				if (!('antisticker' in chats)) chats.antisticker = false
				if (!('antiimage' in chats)) chats.antiimage = false
				if (!('antivideo' in chats)) chats.antivideo = false
				if (!('antidocument' in chats)) chats.antidocument = false
				if (!('antitoxic' in chats)) chats.antitoxic = false
				if (!('antivirtex' in chats)) chats.antivirtex = false
				if (!('antipromosi' in chats)) chats.antipromosi = false
				if (!('antiwame' in chats)) chats.antiwame = false
				if (!('antiwame2' in chats)) chats.antiwame2 = false
				if (!('antipolling' in chats)) chats.antipolling = false
				if (!('antilinkall' in chats)) chats.antilinkall = false
				if (!('antilink2' in chats)) chats.antilink2 = false
				if (!('autodl' in chats)) chats.autodl = false
				if (!('autoaigc' in chats)) chats.autoaigc = false
				if (!('autoaipc' in chats)) chats.autoaipc = false
				if (!('kickme' in chats)) chats.kickme = false
				if (!('keamanan' in chats)) chats.keamanan = false
				if (!('mute' in chats)) chats.mute = false
				if (!('setproses' in chats)) chats.setproses = false
				if (!('setdone' in chats)) chats.setdone = false
				if (!('setclose' in chats)) chats.setclose = false
				if (!('setopen' in chats)) chats.setopen = false
				if (!('setleft' in chats)) chats.setleft = false
				if (!('setwelcome' in chats)) chats.setwelcome = false
				if (!('sewaExpiry' in chats)) chats.sewaExpiry = 0
				if (!('liststore' in chats)) chats.liststore = {}
				if (!('nsfw' in chats)) chats.nsfw = false
			} else global.db.data.chats[m.chat] = {
				goodbye: general.autoWelcome,
				welcome: general.autoLeave,
				antilink: false,
				antibot: false,
				antibot2: false,
				antilinktt: false,
				antiaudio: false,
				antisticker: false,
				antiimage: false,
				antivideo: false,
				antidocument: false,
				antitoxic: false,
				antivirtex: false,
				antipromosi: false,
				antiwame: false,
				antiwame2: false,
				antipolling: false,
				antilinkall: false,
				antilink2: false,
				autodl: false,
				autoaigc: false,
				autoaipc: false,
				kickme: false,
				keamanan: false,
				mute: false,
				setproses: false,
				setdone: false,
				setclose: false,
				setopen: false,
				setleft: false,
				setwelcome: false,
				sewaExpiry: 0,
				liststore: {},
				nsfw: false
			}
		} catch (e) {
			console.log(e)
		}
		//━━━━━━━━━━━━━━━[ DATABASE RPG ]━━━━━━━━━━━━━━━━━//
		try {
			let rpgdata = global.db.data.rpg
			if (typeof rpgdata !== 'object') global.db.data.rpg = {}
			let rpg = rpgdata[m.sender]
			if (typeof rpg !== 'object') global.db.data.rpg[m.sender] = {}
			if (rpg) {
				if (!('kapal' in rpg)) rpg.kapal = false
				if (!('darahkapal' in rpg)) rpg.darahkapal = 100
				if (!('pickaxe' in rpg)) rpg.pickaxe = false
				if (!('darahpickaxe' in rpg)) rpg.darahpickaxe = 100
				if (!('kapak' in rpg)) rpg.kapak = false
				if (!('darahkapak' in rpg)) rpg.darahkapak = 100
				if (!('bzirah' in rpg)) rpg.bzirah = false
				if (!('darahbzirah' in rpg)) rpg.darahbzirah = 100
				if (!('pedang' in rpg)) rpg.pedang = false
				if (!('darahpedang' in rpg)) rpg.darahpedang = 100
				if (!('darahuser' in rpg)) rpg.darahuser = 100
				if (!('rumah' in rpg)) rpg.rumah = 0
				if (!('besi' in rpg)) rpg.besi = 4
				if (!('kayu' in rpg)) rpg.kayu = 2
				if (!('emas' in rpg)) rpg.emas = 0
				if (!('perak' in rpg)) rpg.perak = 0
				if (!('batubara' in rpg)) rpg.batubara = 0
				if (!('bulu' in rpg)) rpg.bulu = 0
				if (!('kain' in rpg)) rpg.kain = 0
				if (!('wilayah' in rpg)) rpg.wilayah = "indonesia"
				if (!('wilayahrumah' in rpg)) rpg.wilayahrumah = "indonesia"
				if (!('musuh' in rpg)) rpg.musuh = 0
				if (!('ikan' in rpg)) rpg.ikan = 0
				if (!('domba' in rpg)) rpg.domba = 0
				if (!('sapi' in rpg)) rpg.sapi = 0
				if (!('ayam' in rpg)) rpg.ayam = 0
				if (!('bank' in rpg)) rpg.bank = 0
				if (!('burutime' in rpg)) rpg.burutime = 0
				if (!('lastclaim' in rpg)) rpg.lastclaim = 0
				if (!('lastdagang' in rpg)) rpg.lastdagang = 0
				if (!('lastbansos' in rpg)) rpg.lastbansos = 0
				if (!('lastkerja' in rpg)) rpg.lastkerja = 0
				if (!('mingguanExpiry' in rpg)) rpg.mingguanExpiry = 0
				if (!('bulananExpiry' in rpg)) rpg.bulananExpiry = 0
				if (!('lastrampok' in rpg)) rpg.lastrampok = 0
			} else global.db.data.rpg[m.sender] = {
				kapal: false,
				darahkapal: 100,
				pickaxe: false,
				darahpickaxe: 100,
				kapak: false,
				darahkapak: 100,
				bzirah: false,
				darahbzirah: 100,
				pedang: false,
				darahpedang: 100,
				darahuser: 100,
				rumah: 0,
				besi: 4,
				kayu: 2,
				emas: 0,
				perak: 0,
				batubara: 0,
				bulu: 0,
				kain: 0,
				wilayah: "indonesia",
				wilayahrumah: "indonesia",
				musuh: 0,
				ikan: 0,
				domba: 0,
				sapi: 0,
				ayam: 0,
				bank: 0,
				burutime: 0,
				lastclaim: 0,
				lastdagang: 0,
				lastbansos: 0,
				lastkerja: 0,
				mingguanExpiry: 0,
				bulananExpiry: 0,
				lastrampok: 0
			}
		} catch (e) {
			console.log(e)
		}

		let usersdb = global.db.data.users
		let chatsdb = global.db.data.chats
		let rpgdb = global.db.data.rpg
		fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))

		//━━━━━━━━━━━━━━━[ CONST AND IS ]━━━━━━━━━━━━━━━━━//
		const groupMetadata = m.isGroup ? await vreden.groupMetadata(m.chat).catch(e => null) : null;
		const groupName = m.isGroup ? groupMetadata?.subject : '';
		const participants = m.isGroup ? groupMetadata?.participants : [];
		const groupAdmins = m.isGroup && participants.length > 0 ? getGroupAdmins(participants) : [];

		const isMedia = /image|video|sticker|audio/.test(mime)
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
		const isBan = usersdb[m.sender].banned
		const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
		const isSewa = cd.isSewa(chatsdb, m.chat)
		const isBlacklist = usersdb[m.sender].blacklist
		const isWhitelist = usersdb[m.sender].whitelist

		let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')
		let ownnomor = await PhoneNumber('+' + owner.nomor.replace('@s.whatsapp.net', '')).getNumber('international')

		const fbot = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${bots.nameFull}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${usersdb[m.sender].nama},;;;\nFN:${usersdb[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': mediaPath.thumbnail,
					thumbnail: mediaPath.thumbnail,
					sendEphemeral: true
				}
			}
		}
		const repPy = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				fromMe: false,
				id: `628555`,
				participant: '0@s.whatsapp.net'
			},
			message: {
				requestPaymentMessage: {
					currencyCodeIso4217: "USD",
					amount1000: 999999999,
					requestFrom: '0@s.whatsapp.net',
					noteMessage: {
						extendedTextMessage: {
							text: `*${bots.nameFull}*\n👤 *${usersdb[m.sender].nama}*\n🔢 *${usernomor}*`
						}
					},
					expiryTimestamp: 999999999,
					amount: {
						value: 91929291929,
						offset: 1000,
						currencyCode: "INR"
					}
				}
			}
		}
		let fconver = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `👤 *${usersdb[m.sender].nama}*\n🔢 *${usernomor}*`
			}
		};
		let fhalo = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `Hallo User👋`
			}
		};
		let fchannel = {
			key: {
				fromMe: false,
				participant: m.sender,
				...(m.chat ? {
					remoteJid: m.sender
				} : {})
			},
			message: {
				newsletterAdminInviteMessage: {
					newsletterJid: bots.idsaluran,
					newsletterName: bots.namasaluran,
					caption: body
				}
			}
		};

		//━━━━━━━━━━━━━━━[ PUBLIC OR SELF ]━━━━━━━━━━━━━━━━━//
		if (!vreden.public) {
			if (!isCreator) return
		}

		const reply = (teks) => {
			return vreden.sendMessage(m.chat, {
				text: teks,
				mentions: vreden.ments(teks)
			}, {
				quoted: m
			})
		}

		//━━━━━━━━━━━━━━━[ GENERAL SETTINGS ]━━━━━━━━━━━━━━━━━//
		if (general.autoBio) {
			let settingstatus = 0;
			if (new Date() * 1 - settingstatus > 1000) {
				await vreden.setStatus(`I'm ${vreden.user.name} 🤖 | ${runtime(os.uptime())} ⏰ | Status : ${vreden.mode ? "Public Mode" : "Self Mode"}`)
				settingstatus = new Date() * 1
			}
		}

		if (!m.key.fromMe && general.autoRead) {
			const readkey = {
				remoteJid: m.chat,
				id: m.key.id,
				participant: m.isGroup ? m.key.participant : undefined
			}
			await vreden.readMessages([readkey]);
		}

		if (general.autoSholat) {
			vreden.autosholat = vreden.autosholat ? vreden.autosholat : {}
			if (!(m.chat in vreden.autosholat)) {
				let jadwalSholat = {
					Fajr: "04:31",
					Dhuhr: "11:45",
					Asr: "15:06",
					Maghrib: "17:39",
					Isha: "19:09",
				}
				const timeNow = moment().tz('Asia/Jakarta').format("HH:mm")
				for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
					if (timeNow === waktu) {
						if (sholat === "Fajr") {
							thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
						} else if (sholat === "Dhuhr") {
							thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
						} else if (sholat === "Asr") {
							thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
						} else if (sholat === "Maghrib") {
							thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
						} else if (sholat === "Isha") {
							thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
						} else {
							thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
						}
						vreden.autosholat[m.chat] = [
							vreden.sendMessage(m.chat, {
								audio: {
									url: "https://www.vreden.web.id/database/islamic/y2mate.com%20-%20Adzan%20Merdu%20Irama%20Jiharkah%20%20menyejukkan%20hati%20.mp3"
								},
								mimetype: 'audio/mpeg',
								contextInfo: {
									externalAdReply: {
										title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah shalat🙂`,
										body: "untuk wilayah Semarang dan sekitarnya",
										mediaType: 1,
										previewType: 0,
										renderLargerThumbnail: true,
										thumbnailUrl: thumbislam,
										sourceUrl: "-"
									}
								}
							}, {
								quoted: m
							}),
							setTimeout(() => {
								delete vreden.autosholat[m.chat]
							}, 57000)
						]
					}
				}
			}
		}

		vreden.task = vreden.task ? vreden.task : false
		if (!vreden.task) {
			async function clearTmp() {
				try {
					let directoryPath = path.join('./')
					fs.readdir(directoryPath, async function(err, files) {
						if (err) {
							return console.log(err)
						}
						let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
						if (filteredArray.length == 0) return console.log('Sampah Tidak Ditemukan')
						await filteredArray.forEach(function(file) {
							fs.unlinkSync(`./${file}`)
						});
					});
					let directoryPath2 = path.join('./tmp')
					fs.readdir(directoryPath2, async function(err, files) {
						if (err) {
							return console.log(err)
						}
						let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
						if (filteredArray.length == 0) return console.log('Sampah2 Tidak Ditemukan')
						await filteredArray.forEach(function(file) {
							fs.unlinkSync(`./tmp/${file}`)
						});
					});
				} catch (error) {
					console.error('Error clear cache:', error);
				}
			}

			if (general.autoBackup) {
				async function uploadData() {
					const FILE_PATH = './database/database.json';
					let botNumber = await vreden.decodeJid(vreden.user.id)
					const fileName = `${botNumber.split('@')[0]}.json`;
					try {
						let data = await tools.uploadFileToGitHub(FILE_PATH, fileName);
						console.log("database backup!");
					} catch (error) {
						console.error('Error uploading file database:', error);
					}
				}
				setInterval(uploadData, 28800000);
			}
			setInterval(clearTmp, 21600000)
			cd.checkPremiumStatus(usersdb, vreden)
			cd.checkSewaStatus(chatsdb, vreden)
			cd.checkMingguanStatus(rpgdb, vreden)
			cd.checkBulananStatus(rpgdb, vreden)
			vreden.task = true
		}

		//━━━━━━━━━━━━━━━[ MEDIA DOWNLOADER ]━━━━━━━━━━━━━━━━━//
		const YouTubeMp3 = async (Link, Quality = 128) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk tulisan kamu, itu salah!")
				let data = await ytdl.ytmp3(Link, Quality);
				await vreden.sendMessage(m.chat, {
					audio: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YTMP3 - ${data.download.quality}`,
							body: data.metadata.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: data.metadata.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};

		const YouTubeDoc = async (Link, Quality = 128) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk tulisan kamu, itu salah!")
				let data = await ytdl.ytmp3(Link, Quality);
				const caption = `*${data.metadata.title}*

*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Quality* : ${data.download.quality}
*⌬ Channel* : ${data.metadata.author.name}

_*Nihh Omm...*_`;
				vreden.sendMessage(m.chat, {
					document: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					fileName: data.download.filename,
					caption: caption,
					contextInfo: {
						mentionedJid: [m.sender],
						externalAdReply: {
							title: `YouTube ${data.download.quality} 🍟`,
							previewType: "PHOTO",
							thumbnailUrl: `https://files.catbox.moe/bi2r4m.jpg`,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				})
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};

		const YouTubeMp4 = async (Link, Quality = 360) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk tulisan kamu, itu salah!")
				let data = await ytdl.ytmp4(Link, Quality);
				const caption = `*${data.metadata.title}*

*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Quality* : ${data.download.quality}
*⌬ Channel* : ${data.metadata.author.name}

_*Nihh Omm...*_`;

				await vreden.sendMessage(m.chat, {
					video: {
						url: data.download.url
					},
					caption: caption,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};

		const TikTokMp4 = async (Link) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk tulisan kamu, itu salah!")
				let data = await fetchJson(`https://api.vreden.web.id/api/tiktok?url=${Link}`);
				let counter = 0;
				for (let item of data.result.data) {
					if (item.type === "nowatermark") {
						vreden.sendMessage(m.chat, {
							video: {
								url: item.url
							},
							caption: `*Video Info* :
- Region : ${data.result.region}
- Duration : ${data.result.duration}
- Taken : ${data.result.taken_at}

*Statistik Info* :
- Views : ${data.result.stats.views}
- Likes : ${data.result.stats.likes}
- Comment : ${data.result.stats.comment}
- Share : ${data.result.stats.share}
- Download : ${data.result.stats.download}

*Author Info* :
- Fullname : ${data.result.author.fullname}
- Nickname : ${data.result.author.nickname}

*Music Info* :
- Title : ${data.result.music_info.title}
- Author : ${data.result.music_info.author}
- Album : ${data.result.music_info.album}

*Caption* :
${data.result.title}
`
						}, {
							quoted: m
						});
						counter += 1;
					} else if (item.type === "photo") {
						if (counter === 0) {
							await vreden.sendMessage(m.chat, {
								image: {
									url: item.url
								},
								caption: `*Photo Info* :
- Region : ${data.result.region}
- Duration : ${data.result.duration}
- Taken : ${data.result.taken_at}

*Statistik Info* :
- Views : ${data.result.stats.views}
- Likes : ${data.result.stats.likes}
- Comment : ${data.result.stats.comment}
- Share : ${data.result.stats.share}
- Download : ${data.result.stats.download}

*Author Info* :
- Fullname : ${data.result.author.fullname}
- Nickname : ${data.result.author.nickname}

*Music Info* :
- Title : ${data.result.music_info.title}
- Author : ${data.result.music_info.author}
- Album : ${data.result.music_info.album}

*Caption* :
${data.result.title}
${m.isGroup ? data.result.data.length > 1 ? "\n_Sisa media dikirim ke private chat_\n" : "\n" : "\n"}`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.sender, {
								image: {
									url: item.url
								}
							}, {
								quoted: m
							});
						}
						counter += 1;
						await sleep(2000);
					}
				}
			} catch (error) {
				try {
					const data = await tiktokdl(Link);
					vreden.sendMessage(m.chat, {
						video: {
							url: data.video
						},
						caption: `*[ V2 ]* Done boss ✅`
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command);
				}
			}
		}

		const InstagramMp4 = async (Link) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk tulisan kamu, itu salah!")
				let data = await fetchJson(`https://api.vreden.web.id/api/igdownload?url=${Link}`);
				let counter = 0;
				for (let item of data.result.response.data) {
					if (item.type === 'video') {
						if (counter === 0) {
							await vreden.sendMessage(m.chat, {
								video: {
									url: item.url
								},
								caption: `*Instagram Video🚀*`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.sender, {
								video: {
									url: item.url
								},
							}, {
								quoted: m
							});
						}
						counter += 1;
					} else if (item.type === 'image') {
						if (counter === 0) {
							await vreden.sendMessage(m.chat, {
								image: {
									url: item.url
								},
								caption: `*Instagram Photo🚀*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.sender, {
								image: {
									url: item.url
								}
							}, {
								quoted: m
							});
						}
						counter += 1;
					}
				}
			} catch (error) {
				try {
					let data = await downloader.igdown(Link);
					let counter = 0;
					for (let item of data.data) {
						if (item.type === 'video') {
							if (counter === 0) {
								await vreden.sendMessage(m.chat, {
									video: {
										url: item.url
									},
									caption: `*SaveIG Video🚀*`
								}, {
									quoted: m
								});
							} else {
								await vreden.sendMessage(m.sender, {
									video: {
										url: item.url
									},
								}, {
									quoted: m
								});
							}
							counter += 1;
						} else if (item.type === 'image') {
							if (counter === 0) {
								await vreden.sendMessage(m.chat, {
									image: {
										url: item.url
									},
									caption: `*SaveIG Photo🚀*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
								}, {
									quoted: m
								});
							} else {
								await vreden.sendMessage(m.sender, {
									image: {
										url: item.url
									}
								}, {
									quoted: m
								});
							}
							counter += 1;
						}
					}
				} catch (error) {
					await m.errorReport(util.format(error), command);
				}
			}
		}

		async function newReply(teks, options = {}) {
			vreden.sendMessage(m.chat, {
				document: fs.readFileSync('./media/file.pdf'),
				fileName: `${ucapanWaktu}`,
				mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				fileLength: 777000,
				pageCount: 77,
				jpegThumbnail: fs.readFileSync('./media/thumbnail2.jpg'),
				description: 'hello',
				caption: teks,
				...options
			}, {
				quoted: m
			});
		}
		
		async function chatEdit(Array, quoted = m) {
			let {
				key
			} = await vreden.sendMessage(m.chat, {
				text: 'Loading'
			}, {
				quoted: quoted
			})

			for (let i = 0; i < Array.length; i++) {
				await delay(2000)
				await vreden.sendMessage(m.chat, {
					text: Array[i],
					edit: key
				});
			}
		}

		async function cekgame(gamejid) {
			const gameCategories = [{
					name: tekateki,
					text: 'Soal ini belum selesai'
				},
				{
					name: caklontong,
					text: 'Soal ini belum selesai'
				},
				{
					name: susunkata,
					text: 'Soal ini belum selesai'
				},
				{
					name: kuisioner,
					text: 'Soal kuisioner belum selesai'
				},
				{
					name: mathgame,
					text: 'Soal Mathgame belum selesai'
				},
				{
					name: tebaktebakan,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebaklirik,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakkimia,
					text: 'Soal ini belum selesai'
				},
				{
					name: siapaaku,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakkalimat,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakbendera,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakkata,
					text: 'Soal ini belum selesai'
				},
				{
					name: asahotak,
					text: 'Soal ini belum selesai'
				},
				{
					name: lengkapikalimat,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakgame,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakhero,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakff,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakkabupaten,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakjkt48,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakhewan,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakml,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakchara,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebaklogo,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakaplikasi,
					text: 'Soal ini belum selesai'
				},
				{
					name: tebakgambar,
					text: 'Soal ini belum selesai'
				},
			];

			for (const {
					name,
					text
				}
				of gameCategories) {
				if (name[gamejid]) {
					await vreden.sendMessage(gamejid, {
						text: text
					}, {
						quoted: name[gamejid][0]
					});
					return true;
				}
			}

			return false;
		}
const waktuHabis = (jawaban) => {
			let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
			const context = {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `Waktu Habis ⏰`,
						body: "Dasar Kroco",
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
						sourceUrl: "-"
					}
				}
			};
			return vreden.sendMessage(m.chat, context, {
				quoted: m,
			});
		}
		const JawabanBenar = (tebak, exp, tambahan) => {
			let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp ${exp} saldo` + tambahan
			const context = {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `Jawaban Benar🥳`,
						body: tebak,
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
						sourceUrl: "-"
					}
				}
			};
			return vreden.sendMessage(m.chat, context, {
				quoted: m,
			});
		}
		
		function ribuan(bilangan) {
			var reverse = bilangan.toString().split('').reverse().join(''),
				ribuan = reverse.match(/\d{1,3}/g);
			ribuan = ribuan.join('.').split('').reverse().join('');
			return ribuan
		}
		//━━━━━━━━━━━━━━━[ ANTILINK ALL ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilinkall) {
			if (isUrl(budy)) {
				if (!isAdmins || !isCreator) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTI MEDIA ]━━━━━━━━━━━━━━━━━//

		if (chatsdb[m.chat].antidocument) {
			if (m.mtype === "documentWithCaptionMessage" || m.mtype === "documentMessage") {
				if (!(m.key.fromMe || isAdmins || isCreator || isBotAdmins)) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antiaudio) {
			if (m.mtype === "audioMessage") {
				if (!(m.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					let buffer = await quoted.download();
					await vreden.sendMessage(m.chat, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: true,
						viewOnce: true
					}, {
						quoted: m
					});
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antiimage) {
			if (m.mtype === "imageMessage") {
				if (!(m.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					let buffer = await quoted.download();
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: `*「 ANTI CHAT IMAGE 」*\n\n*Caption:*\n${budy}`,
						viewOnce: true
					}, {
						quoted: m
					});
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antisticker) {
			if (m.mtype === "stickerMessage") {
				if (!(m.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antivideo) {
			if (m.mtype === "videoMessage") {
				if (!(m.key.fromMe || isAdmins || isCreator || isBotAdmins)) {
					let buffer = await quoted.download();
					await vreden.sendMessage(m.chat, {
						video: buffer,
						caption: `*「 ANTI CHAT VIDEO 」*\n\n*Caption:*\n${budy}`,
						viewOnce: true
					}, {
						quoted: m
					});
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antipolling) {
			if (m.mtype === "pollCreationMessageV3") {
				if (!(m.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					m.danger(`*「 POLLING DETECTOR 」*\n\nDilarang Kirim Polling\n\n`)
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (m.mtype == 'viewOnceMessageV2') {
			if (general.antiViewOnce) {
				let buffer = await m.download()
				let type = await getContentType(m.message.viewOnceMessageV2.message)
				let teks = `「 *ANTI VIEWONCE CHAT* 」

*Message Info* :
- Name : ${m.pushName}
- User : @${m.sender.split("@")[0]}
- Time : ${jam}
- Caption : ${budy ? budy : "no caption"}
`
				if (type == "videoMessage") {
					await vreden.sendMessage(m.chat, {
						video: buffer,
						caption: teks,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} else if (type == "imageMessage") {
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: teks,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} else if (type == "audioMessage") {
					await vreden.sendMessage(m.chat, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
				}
			}
		}
		//━━━━━━━━━━━━━━━[ ANTIPROMOSI ]━━━━━━━━━━━━━━━━━//
		const pattern = /(?:OPEN\s+MURID\s+SEKS|PROMO|DISKON|SALE|KEUNTUNGAN|SEKS|LISENSI|LEGAL|PREMIUM|PASS|TRX|REFF|RUGIMU|GSH\s+BCT|MISKIN\s+DIEM|list\s+harga|harga|vps|note|panel|nokos|bot|sewa|murnokos|murubug|murunbanned|jasa|fix\s+fitur|rec|add\s+fitur|rename|recode|panel\s+private|adp|permanen|server|pembuat\s+SC|ready\s+nokos|work|free\s+fix|fitur\s+jamin|stok\s+\d+\s+biji|minat\s+pm)\b.*?(\d{1,3}[.,]?\d{0,3}[Kk]?|⚡[\w\s]+⚡|\d+[-\d]+\s?[^\d\s]+|(?<=\b(?:minat|chat|wa\.me|PM)\b.*?\d+))/i;

		function isPromosi(text) {
			return pattern.test(text);
		}
		if (chatsdb[m.chat].antipromosi) {
			if (isPromosi(budy)) {
				if (!(m.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					m.danger(`*「 ANTI PROMOSI 」*\n\n*Dilarang Promosi!*\n\n> beta version`)
					await vreden.sendMessage(m.chat, {
						delete: m.key
					})
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTIBOT ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antibot) {
			const id = m.key.id;
			const idLength = id.length;

			if (m.isBaileys) {

				if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;

				m.danger(`*「 ANTIBOT DETECTOR 」*\n\n*Message Info:*\n- Type: ${m.mtype}\n- isBaileys: ${m.isBaileys}\n- BaileysDetection: ${idLength}\n- Jenis: ${m.typeBaileys}\n\n#${id}`);
				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				await sleep(1000);
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ ANTIBOT V2 ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antibot2) {
			if (m.isBaileys) {
				if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;

				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				await sleep(1000);
				await vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ ANTIVIRTEX ]━━━━━━━━━━━━━━━━━//
		const regVirtex = /ﱣﱣﱣﱣﱣﱣﱣ|؀؁؀؁|᥋᥋᥋᥋᥋᥋᥋᥋᥋|[🎩]-𝑬𝒙𝒑𝒍𝒐𝒔𝒊𝒐𝒏-💥|ผิด| ⃢|𒅒ܷܷܷܷܷ֭֭֭֭֭֭֭֭֭ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊ࠝࠝࠝࠝࠝࠝࠝ𒅒ܷܷܷܷܷۣۣۣۣۣۣۣۣۣۣۣۣۣۣٚٚٚٚٚٚٚٚٚٚٚٚٚٚٚٚ̂̂̂̂̂̂̂̂̂̂̂̂̂̂̂ۜۜۜۜۜۜ˳֗֗֗֗֗ࠧࠧࠧࠧࠬࠬࠬࠬࠬࠬࠬͦͦͦͦͦͦͦͦࠝࠝࠝࠝ𒅒ۣۣۣۣۣۣۣۣۣ֗֗̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊ 𑂺𑂺𑂺𑂺𑂺ۣۣۣۣۣۣۣۣۣۣۣۣۣۜۜۜۜۜۜۜۜۜۜۜ̂̂̂̂̂̂̂̂̂̂̂ࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧ֯֯֯֯֯˳ْْْْْ֛֛֛ۨۨۨۨۨۨۨۨۨۨۨ |؛*.*ࣨࣨ|৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ|ท้่เึางื|𖣘𝓜꙰⃢⃠⃠⃠⃠⃠/i // tambahin sendiri
		let isVirtexOn = regVirtex.exec(budy)
		if (chatsdb[m.chat].antivirtex && isVirtexOn) {
			if (budy.length > 4000) {
				m.danger(`*「 VIRTEX DETECTOR 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
				if (!isBotAdmins) return m.sendForward(`Anjir lupa gw bukan admin`)
				if (isAdmins) return m.sendForward(`Gajadi, Kamu admin`)
				if (isCreator) return m.sendForward(`Gajadi, Kamu ownerku`)
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}

		//━━━━━━━━━━━━━━━[ BLACKLIST ]━━━━━━━━━━━━━━━━━//
		if (isBlacklist) {
			if (!isAdmins || !isCreator || isBotAdmins) {
			    m.danger('*「 BLACKLIST 」*\n\nTerdeteksi Nomor Blacklist, Mohon Maaf Anda Akan Dikick');
			    vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ ANTITOXIC ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antitoxic) {

			function cektoxic(text) {
				return toxicKata.includes(text)
			}

			if (cektoxic(budy)) {
				if (!isBotAdmins) return
				if (isAdmins) return
				if (isCreator) return
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				if (usersdb[m.sender].toxiccount > count.toxic) {
					m.danger(`*「 TOXIC DETECTOR 」*\n\nSepertinya kamu berkata kasar lebih dari *${count.toxic}X*, maaf kamu akan di kick`)
					usersdb[m.sender].toxiccount = 0
					vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				} else {
					m.danger(`*「 TOXIC DETECTOR 」*\n\nHayoo toxic, tobat bangg inget dosa lohh ^_^`)
					usersdb[m.sender].toxiccount += 1
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTILINK 1 ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilink) {
			if (budy.includes('chat.whatsapp.com')) {
				if (isAdmins || isCreator) return;
				m.danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`);
				if (!isBotAdmins) return m.warning(`Bot bukan admin`);

				let gclink = `https://chat.whatsapp.com/${await vreden.groupInviteCode(m.chat)}`;
				if (budy.includes(gclink)) return;

				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}
		//━━━━━━━━━━━━━━━[ ANTILINK 2 ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilink2 && !chatsdb[m.chat].antilink) {
			if (budy.includes('chat.whatsapp.com')) {
				if (!isBotAdmins) {
					return m.danger(`*Bot Bukan Admin!*\n\nKali ini Anda selamat🥸`);
				}

				let gclink = `https://chat.whatsapp.com/${await vreden.groupInviteCode(m.chat)}`;
				if (budy.includes(gclink)) return;

				if (isAdmins || isCreator) return;

				if (usersdb[m.sender].antilinkcount > count.antiLink) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
					await sleep(1000);
					m.danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup lebih dari *${count.antiLink}X*\n\nByee byee parasitt~~`);
					usersdb[m.sender].antilinkcount = 0;
					vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
				} else {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
					await sleep(1000);
					m.danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf pesan kamu telah kami hapus`);
					usersdb[m.sender].antilinkcount += 1;
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTI LINK TIKTOK ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilinktt) {
			if (budy.includes('tiktok.com')) {
				if (!isBotAdmins) return;
				if (isAdmins || isCreator) return;

				m.danger(`*「 TIKTOK LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link TikTok, maaf kamu akan di-kick`);
				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				await vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ ANTILINK WA ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antiwame) {
			if (budy.match(`wa.me|Wa.me`)) {
				m.danger(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
				if (!isBotAdmins) return m.warning(`Anjir lupa gw bukan admin`)
				if (isAdmins) return m.warning(`Gajadi, Kamu admin`)
				if (isCreator) return m.warning(`Gajadi, Kamu ownerku`)
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}
		if (m.isGroup && chatsdb[m.chat].antiwame2 && !chatsdb[m.chat].antiwame && !isCreator && !isAdmins && isBotAdmins) {
			if (budy.match(`wa.me`)) {
				if (!isBotAdmins) return
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}

		vreden.sendPresenceUpdate('available', m.chat)
		if (m.isBaileys) {
		    if (!m.isGroup) {
		        vreden.updateBlockStatus(m.sender, 'block')
		    }
		    return
		}
		
		if (!isCreator && m.quoted && (m.quoted.mtype == "interactiveMessage") && (m.quoted.sender == botNumber) && (m.quoted.text.includes("-"))) {
		    await vreden.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					id: m.quoted.id,
					participant: m.quoted.sender
				}
			})
			usersdb[m.sender].banned = false
		}

		//━━━━━━━━━━━━━━━[ KICK ME ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].kickme) {
			if (budy.includes('in kel')) {
				await m.reply('Siap laksanakan');

				if (!isBotAdmins) {
					return m.warning('Anjir, lupa gw bukan admin');
				}

				if (isAdmins || isCreator) {
					return m.warning('Kenapa mau out, sayang🥺');
				}

				await m.reply('Done Awokwok');
				await vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ AUTO BLOCK 212 ]━━━━━━━━━━━━━━━━━//
		if (m.sender.startsWith('212') && general.autoBlock212) {
			return vreden.updateBlockStatus(m.sender, 'block')
		}

		//━━━━━━━━━━━━━━━[ PRIVATE ONLY, GROUP ONLY, MUTE ]━━━━━━━━━━━━━━━━━//
		if (isCreator && !isPremium) {
			if (!(command === "request") && !(command === "menfes") && !(command === "report") && !(command === "balasmenfes") && !(command === "tolakmenfes")) {
				if (!isCreator && general.grupOnly && !m.isGroup) {
					let teks = `
Bot hanya dapat digunakan
didalam grup, chat owner
untuk info lebih lanjut.
`
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Tolong+Matikan+Mode+Grup+Onlynya+Cuyy\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Tolong+Matikan+Mode+Grup+Onlynya+Cuyy\"}`
					}]
					let buffer = await getBuffer("https://files.catbox.moe/kt74cz.jpg")
					return vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `${ucapanWaktu}`,
					}, button, teks, bots.footer, m)
				}
			}

			if (!isCreator && general.privateOnly && m.isGroup) {
				return
			}

			if (m.isGroup && chatsdb[m.chat].mute) {
				if (!isAdmins && !isCreator) return
			}
		}

		//━━━━━━━━━━━━━━━[ DIDYOUMEAN ]━━━━━━━━━━━━━━━━━//
		if (isBan && budy) {
			if (!global.help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
				let mean = didyoumean(command, global.help);
				let sim = similarity(command, mean);
				let similarityPercentage = parseInt(sim * 100);
				if (mean && command.toLowerCase() !== mean.toLowerCase()) {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"${mean}\",\"id\":\"${prefix + mean}\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Command Kamu Salah*\n_Mungkin Maksud Anda:_\n\n➠  *${prefix + mean}* (${similarityPercentage}%)\n\n_Ketik ${prefix}allmenu Untuk_\n_Melihat Daftar Fitur_`, bots.footer, m)
				}
			} else if (global.help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
				usersdb[m.sender].exp += await randomNomor(20);
				hit.addCommandCount(`${command}`, m.sender, _cmd)
				if (!isCreator && !isPremium && spams.isFiltered(m.sender)) return vreden.sendMessage(m.chat, {
					react: {
						text: "⚠️",
						key: m.key,
					}
				})
				spams.addFilter(m.sender)
				if (isBan) return m.danger(`Akun Anda Telah Dibanned!!`)
				if (!isCreator && !isPremium && usersdb[m.sender].limit > 1) {
					usersdb[m.sender].limit -= 1
				}
				if (general.onlyRegister) {
					if (!(command === "daftar") && !(command === "regis") && !(command === "registrasi") && !(command === "register") && !(command === "regkode") && !(command === "captcha") && !(command === "regmail") && !(command === "regismail") && !(command === "regemail") && !(command === "regcode") && !isCreator && !isAdmins) {
						if (!usersdb[m.sender].daftar) return m.warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
					}
				}
			}
		}

		//━━━━━━━━━━━━━━━[ LIST COMMAND (🗿SORRY RIBET BIAR URUT ABC) ]━━━━━━━━━━━━━━━━━//
		const cmdGrup = ["fitnah", "quoted", "fakehidetag", "react", "welcome", "left", "goodbye", "setwelcome", "delsetwelcome", "setleft", "delsetleft", "linkgc", "setppgc2", "setppgc", "setsubject", "setdesk", "autoaigc", "autoaipc", "antibot", "antibot2", "antilink", "antipolling", "antilinkall", "antilink2", "antivirtex", "antipromosi", "autodl", "keamanan", "antilinktt", "antiaudio", "antisticker", "antiimage", "antivideo", "antidocument", "antitoxic", "kickme", "mute", "antiwame", "antiwame2", "opentime", "buka", "setopen", "delsetopen", "tutupjam", "bukajam", "closetime", "tutup", "setclose", "delsetclose", "cekasalmember", "gcsider", "kick", "acc", "add", "promote", "demote", "revoke", "tagall", "totag", "hidetag", "delete", "infogc", "afk", "getpp", "getppgc", "getname", "getnamegc", "getdeskripsigc", "getidgc", "intro", "sendch"]
		const cmdGame = ["spy", "war", "attack", "ulartangga", "tebakgambar", "tebakgame", "tebakhero", "tebakff", "tebakkabupaten", "tebakjkt48", "tebakhewan", "tebakhero2", "tebakml", "tebakanime", "tebakchara", "tebaklogo", "tebakaplikasi", "tebakkata", "asahotak", "lengkapikalimat", "family100", "tebakbendera", "tebakkalimat", "tebaksiapa", "tebakkimia", "tebaklirik", "tebaktebakan", "susunkata", "caklontong", "tekateki", "kuis", "math", "bantuan", "nyerah", "tebakbom", "deltebakbom", "tictactoe", "delttt", "suitpvp", "wwpc", "werewolf", "slot", "casino", "delcasino"]
		const cmdAi = ["ai", "photoleap", "replicate", "ocr", "cococlip", "animediffusion4", "animediffusion3", "animediffusion2", "animediffusion", "diffusion", "stabledif", "diff", "text2anime", "text2waifu", "text2emoji", "text2img", "hd", "hdr", "upscale", "dehaze", "recolor", "bingimage", "aidrawing", "faceswap", "img2img", "autoai", "bot", "simisimi", "gpt", "toanime", "toghibli"]
		const cmdDown = ["play", "getvideo", "getmusic", "ytmp3", "ytdocument", "ytmp4", "facebook", "fb2", "twitter", "capcut", "igstory", "igslide", "igphoto", "instagram", "spotifydl", "spotify", "spotifysearch", "playspotify", "ttget", "ttslide", "tiktok", "tiktokaudio", "gdrive", "mediafire", "gitclone"]
		const cmdPanel = ["listusr", "listsrv", "addusr", "addusradmin", "addsrv", "delsrv", "delusr", "startsrv", "stopsrv", "restartsrv", "1gb", "2gb", "3gb", "4gb", "5gb", "6gb", "7gb", "8gb", "9gb", "10gb", "11gb", "12gb", "13gb", "14gb", "15gb", "16gb", "17gb", "18gb", "19gb", "20gb", "21gb", "22gb", "23gb", "24gb", "25gb", "26gb", "27gb", "28gb", "29gb", "30gb", "31gb", "32gb", "33gb", "34gb", "35gb", "36gb", "37gb", "38gb", "39gb", "40gb", "41gb", "42gb", "43gb", "44gb", "45gb", "46gb", "47gb", "48gb", "49gb", "50gb", "unli"]
		const cmdRPG = ["joinrpg", "mining", "heal", "crafting", "berlayar", "repair", "nebang", "berburu", "adventure", "mancing", "jual", "buy", "beli", "bekerja", "merampok", "redeem", "redeemset", "redeemdel", "inventory", "mingguan", "bulanan", "jadian", "terima", "tolak", "putus", "cekpacar"]
		const cmdSystem = ["donasi", "aturan", "daftar", "regmail", "captcha", "setprofil", "infobot", "database", "owner", "cekdrive", "cekbandwidth", "katalog", "dashboard", "script", "sewabot", "buyprem", "cekpremium", "listpremium", "checksewa", "listsewa", "clearram", "speed", "ping", "tes", "cekwaktu", "tester", "totalfitur"]
		const cmdSimple = ["menu", "simplemenu", "allmenu", "pluginmenu", "mainmenu", "rpgmenu", "panelmenu", "convertmenu", "anonymousmenu", "storemenu", "gamemenu", "groupmenu", "downloadmenu", "searchmenu", "randommenu","balancemenu", "ownermenu", "storagemenu", "randomsticker", "stalkingmenu", "islammenu", "ephotomenu", "aimenu"]
		const cmdSearch = ["liriklagu", "gimage", "pinterest2", "pinterest", "ytsearch", "tiktoksearch","capcutsearch","capcutsearch2", "kusonime", "jarak", "ramalancuaca", "infocuaca", "google", "infogempa", "get", "get2", "whois", "tempmail", "spoiler", "pastebin", "pastegg", "cekip", "cekhp", "hpdetail", "cekhost", "ceksubdo", "sendngl", "cekdns", "cekweb", "urlscan", "ssweb"]
		const cmdConvert = ["emojimix", "texttosound", "translate", "tourl", "tovideo", "toimage", "readviewonce", "toptv", "tovn", "tinyurl", "toaudio", "resize", "listbahasa", "bass", "blown", "deep", "earrape", "fast", "fat", "nightcore", "reverse", "robot", "slow", "smooth", "tupai", "removebg"]
		const cmdEphoto = ["glitchtext", "writetext", "advancedglow", "typographytext", "pixelglitch", "neonglitch", "flagtext", "flag3dtext", "deletingtext", "blackpinkstyle", "glowingtext", "underwatertext", "logomaker", "cartoonstyle", "papercutstyle", "watercolortext", "effectclouds", "blackpinklogo", "gradienttext", "summerbeach", "luxurygold", "multicoloredneon", "sandsummer", "galaxywallpaper", "1917style", "makingneon", "royaltext", "freecreate", "galaxystyle", "lighteffects", "ytcomment", "carbon"]
		const cmdIslamic = ["kisahnabi", "asmaulhusna", "asmaulhusna2", "listsurah", "randomquran", "alquranaudio", "jadwalsholat"]
		const cmdOwner = ["restart", "autobio", "prefix", "gconly", "pconly", "autobackup", "anticall", "autorespond", "autoblok212", "onlyregister", "notifregister", "autoread", "addcmd", "delcmd", "savefile", "listgc", "listpc", "join", "getinfogc", "getinfochannel", "leavegc", "public", "self", "whitelist", "unwhitelist", "listwhitelist", "blacklist", "unblacklist", "listblacklist", "listbanned", "banned", "unbanned", "gantifile", "addfunction", "listcase", "addcase", "delcase", "getcase", "block", "unblock", "listblock", "report", "balasreport", "tolakreport", "stopreport", "request", "sampah", "delsampah", "clearsesi", "sampah2", "delsampah2", "clearallgc", "clearallpc", "setppbot2", "setppbot", "autosholat", "vnowner","vnmenu","antidelete", "antiviewonce", "addowner", "delowner", "addpremium", "delpremium", "addsewa", "delsewa", "addcoins", "kurcoins", "addbalance", "kurbalance", "addlimit", "addgamelimit", "bcimage", "bcvideo", "bcaudio", "bcvn", "bcsticker", "broadcast", "bcgc", "bcsewa", "delchat", "set"]
		const cmdStorage = ["addsticker", "delsticker", "liststiker", "addimage", "delimage", "listimage", "addvideo", "delvideo", "listvideo", "addaudio", "delaudio", "listaudio"]
		const cmdSticker = ["ttp", "patrick", "doge", "popoci", "sponsbob", "awoawo", "dino-kuning", "kucing", "meow", "manusia-lidi", "qccode", "qc", "sticker", "stickergif", "stickerwm", "stickergifwm", "stikersearch", "stickermeme", "brat", "bratvid"]
		const cmdStalk = ["ffstalk", "mlstalk", "githubstalk", "igstalk", "ttstalk"]			
		const cmdBalance = ["transfer", "transferlimit", "transfergamelimit", "topglobal", "buylimit", "buygamelimit", "saldo", "limit", "balance", "ceklimit", "cekbalance"]
		const cmdAnonym = ["anonymouschat", "keluar", "mulai", "lanjut", "sendprofil", "menfess", "balasmenfess", "tolakmenfess", "stopmenfess"]
		const cmdStore = ["nokos","jpm", "jpm2", "list", "store", "dellist", "addlist", "updatelist", "tambah", "kurang", "kali", "bagi", "setproses", "delsetproses", "setdone", "delsetdone", "proses", "done"]
		const cmdEval = ["=>", ">", "$", ]

		switch (command) {
			//━━━━━━━━━━━━━━━[ CASE COMMAND GROUP ]━━━━━━━━━━━━━━━━━//
			case 'sendch': {
if (!isPremium) return m.reply(mess.prem)
if (!m.isGroup) return m.reply('Buat Di Group!')
let media = await quoted.download()
if (args[0] === 'audio') {
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
await vreden.sendMessage("120363318609563898@newsletter", { audio: media, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
} else if (args[0] === 'image') {
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
await vreden.sendMessage("120363318609563898@newsletter", { image: media})
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
} else if (args[0] === 'video') {
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
await vreden.sendMessage("120363318609563898@newsletter", { video: media})
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
} else {
m.reply('Error Bangg')
}
}
break;
case'tagall': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa?')
				if (!isBotAdmins) return m.tolak('Bot Harus Jadi Admin!')
				let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*

@${m.chat}`
				vreden.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: participants.map(a => a.id),
						groupMentions: [{
							groupJid: m.chat,
							groupSubject: "semua orang"
						}]
					}
				}, {
					quoted: m
				})
			}
			break
			case 'fitnah': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!text) return vreden.sendTextWithMentions(m.chat, `*Penggunaan salah!*\n\nTutorial:\n${prefix+command} <@tag|pesantarget|pesanbot>\n\nContoh:\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
				var org = text.split("|")[0]
				var target = text.split("|")[1];
				var bot = text.split("|")[2];
				if (!org.startsWith('@')) return m.warning('Tag orangnya')
				if (!target) return m.warning(`Masukkan pesan target!`)
				if (!bot) return m.warning(`Masukkan pesan bot!`)
				var mens = parseMention(target)
				var msg1 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						extemdedTextMessage: {
							text: `${target}`,
							contextInfo: {
								mentionedJid: mens
							}
						}
					}
				}
				var msg2 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						conversation: `${target}`
					}
				}
				vreden.sendMessage(m.chat, {
					text: bot,
					mentions: mens
				}, {
					quoted: mens.length > 2 ? msg1 : msg2
				})
			}
			break
			case 'q':
			case 'quoted': {
				if (!m.quoted) return m.warning('Reply Pesannya!!')
				let mesej = await vreden.serializeM(await m.getQuotedObj())
				if (!mesej.quoted) return m.warning('Pesan Yang anda reply tidak mengandung reply')
				await mesej.quoted.copyNForward(m.chat, true)
			}
			break
			case 'fakehidetag': {
				if (!isPremium) return m.warning(mess.OnlyPrem)
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!text) return vreden.sendTextWithMentions(m.chat, `*Penggunaan salah!*\n\nTutorial:\n${prefix + command} <@tag|text>\n\nContoh:\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
				var org = text.split("|")[0]
				var teks = text.split("|")[1];
				if (!org.startsWith('@')) return m.warning('Tag orangnya')
				var mem2 = []
				groupMembers.map(i => mem2.push(i.id))
				var mens = parseMention(target)
				var msg1 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						extemdedTextMessage: {
							text: `${prefix}hidetag ${teks}`,
							contextInfo: {
								mentionedJid: mens
							}
						}
					}
				}
				var msg2 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						conversation: `${prefix}hidetag ${teks}`
					}
				}
				vreden.sendMessage(m.chat, {
					text: teks ? teks : '',
					mentions: mem2
				}, {
					quoted: mens.length > 2 ? msg1 : msg2
				})
			}
			break
			case 'react': {
				if (!isPremium) return rely(mess.OnlyPrem)
				if (!m.quoted) return m.warning(`Balas pesannya`)
				if (!text) return m.warning(`Masukkan 1 emoji`)
				if (!isEmoji(text)) return m.warning(`Itu bukan emoji!`)
				if (isEmoji(text).length > 1) return m.warning(`Satu aja emojinya`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: text,
						key: m.quoted.key
					}
				})
			}
			break
			case 'welcome':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].welcome) return m.reply(`Udah on`)
					chatsdb[m.chat].welcome = true
					m.reply('Sukses mengaktifkan welcome di grup ini')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].welcome) return m.reply(`Udah off`)
					chatsdb[m.chat].welcome = false
					m.reply('Sukses menonaktifkan welcome di grup ini')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				break
			case 'left':
			case 'goodbye':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].goodbye) return m.reply(`Udah on`)
					chatsdb[m.chat].goodbye = true
					m.reply('Sukses mengaktifkan goodbye di grup ini')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].goodbye) return m.reply(`Udah off`)
					chatsdb[m.chat].goodbye = false
					m.reply('Sukses menonaktifkan goodbye di grup ini')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				break
			case 'setwelcome': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`*Masukan teks welcome!*\n\nContoh:\n${prefix+command} Halo @user, Selamat datang di @group`)
				chatsdb[m.chat].setwelcome = text
				m.reply(`Welcome text di ubah ke:\n\n${text}`)
			}
			break
			case 'delsetwelcome': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setwelcome) return m.warning("Pesan left sudah default sebelumnya")
				chatsdb[m.chat].setwelcome = false
				m.reply(`Welcome text di ubah ke default`)
			}
			break
			case 'setleft': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`*Masukan teks left!*\n\nContoh:\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
				chatsdb[m.chat].setleft = text
				m.reply(`GoodBye text di ubah ke:\n\n${text}`)
			}
			break
			case 'delsetleft': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setleft) return m.warning("Pesan left sudah default sebelumnya")
				chatsdb[m.chat].setleft = false
				m.reply(`GoodBye text di ubah ke default`)
			}
			break
			case 'linkgrup':
			case 'linkgroup':
			case 'linkgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				let response = await vreden.groupInviteCode(m.chat)
				vreden.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
					detectLink: true
				})
			}
			break
			case 'pppanjanggc':
			case 'ppgcfull':
			case 'setppgc2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!quoted) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				var {
					img
				} = await generateProfilePicture(media)
				await vreden.query({
        			tag: 'iq',
        			attrs: {
        				target: m.chat,
        				to: "@s.whatsapp.net",
        				type: 'set',
        				xmlns: 'w:profile:picture'
        			},
        			content: [{
        				tag: 'picture',
        				attrs: { type: 'image' },
        				content: img
        			}]
        		})
				m.reply("Done!!!")
			}
			break
			case 'setppgroup':
			case 'setppgrup':
			case 'setppgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!quoted) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				await vreden.updateProfilePicture(m.chat, {
					url: media
				}).catch((err) => fs.unlinkSync(media))
				m.reply("Berhasil mengganti pp group")
			}
			break
			case 'setname':
			case 'setsubject': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} WhatsApp Bot`)
				await vreden.groupUpdateSubject(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'setdesc':
			case 'setdesk': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} WhatsApp Bot`)
				await vreden.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'autoaigrup':
			case 'aigrup':
			case 'autoaigc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].autoaigc) return m.reply(`Udah aktif`)
					chatsdb[m.chat].autoaigc = true
					m.reply('Successfully Activate Auto AI')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].autoaigc) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].autoaigc = false
					m.reply('Successfully Disabling Auto AI')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'autoaijapri':
			case 'aipc':
			case 'autoaipc': {
				if (m.isGroup) return m.warning('Fitur Khusus Japri!')
				if (args[0] === "on") {
					if (chatsdb[m.chat].autoaipc) return m.reply(`Udah aktif`)
					chatsdb[m.chat].autoaipc = true
					m.reply('Successfully Activate Auto AI')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].autoaipc) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].autoaipc = false
					m.reply('Successfully Disabling Auto AI')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antibot': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antibot) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antibot = true
					m.reply('Successfully Activate Antibot In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antibot) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antibot = false
					m.reply('Successfully Disabling Antibot In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antibot2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antibot2) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antibot2 = true
					m.reply('Successfully Activate Antibot V2 In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antibot2) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antibot2 = false
					m.reply('Successfully Disabling Antibot V2 In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antilink': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilink) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilink = true
					chatsdb[m.chat].antilink2 = false
					m.reply('Successfully Activate Antilink In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilink) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilink = false
					m.reply('Successfully Disabling Antilink In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antipolling': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antipolling) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antipolling = true
					m.reply('Successfully Activate Anti Polling In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antipolling) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antipolling = false
					m.reply('Successfully Disabling Anti Polling In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antilinkall': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilinkall) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilinkall = true
					m.reply('Successfully Activate Antilink All In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilinkall) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilinkall = false
					m.reply('Successfully Disabling Antilink All In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antilink2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilink2) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilink2 = true
					chatsdb[m.chat].antilink = false
					m.reply('Successfully Activate Antilink2 In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilink2) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilink2 = false
					m.reply('Successfully Disabling Antilink2 In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antivirtex': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antivirtex) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antivirtex = true
					m.reply('Successfully Activate Antivirtex In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antivirtex) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antivirtex = false
					m.reply('Successfully Disabling Antivirtex In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antipromosi': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antipromosi) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antipromosi = true
					m.reply('Successfully Activate Antipromosi In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antipromosi) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antipromosi = false
					m.reply('Successfully Disabling Antipromosi In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'autodl': {
				if (args[0] === "on") {
					if (chatsdb[m.chat].autodl) return m.reply(`Udah aktif`)
					chatsdb[m.chat].autodl = true
					m.reply('Successfully Activate Autodl In This Chat')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].autodl) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].autodl = false
					m.reply('Successfully Disabling Autodl In This Chat')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'keamanan': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].keamanan) return m.reply(`Udah aktif`)
					chatsdb[m.chat].keamanan = true
					if (!chatsdb[m.chat].antivirtex) {
						chatsdb[m.chat].antivirtex = true
					}
					if (!chatsdb[m.chat].mute) {
						chatsdb[m.chat].mute = true
					}
					if (!chatsdb[m.chat].antilink2) {
						chatsdb[m.chat].antilink2 = true
					}
					m.reply('Successfully Activate Keamanan In This Chat\n\n*Hard Mode*')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].keamanan) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].keamanan = false
					if (chatsdb[m.chat].antilink2) {
						chatsdb[m.chat].antilink2 = false
					}
					if (chatsdb[m.chat].mute) {
						chatsdb[m.chat].mute = false
					}
					if (chatsdb[m.chat].antivirtex) {
						chatsdb[m.chat].antivirtex = false
					}
					m.reply('Successfully Disabling Keamanan In This Chat')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antilinktt': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilinktt) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilinktt = true
					m.reply('Successfully Activate antilinktt In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilinktt) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilinktt = false
					m.reply('Successfully Disabling antilinktt In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antiaudio': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiaudio) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiaudio = true
					m.reply('Successfully Activate Anti Audio In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiaudio) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiaudio = false
					m.reply('Successfully Disabling Anti Audio In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antisticker': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antisticker) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antisticker = true
					m.reply('Successfully Activate Anti Sticker In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antisticker) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antisticker = false
					m.reply('Successfully Disabling Anti Sticker In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antiimage': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiimage) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiimage = true
					m.reply('Successfully Activate Anti Image In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiimage) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiimage = false
					m.reply('Successfully Disabling Anti Image In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antivideo': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antivideo) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antivideo = true
					m.reply('Successfully Activate Anti Video In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antivideo) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antivideo = false
					m.reply('Successfully Disabling Anti Video In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antidocument': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antidocument) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antidocument = true
					m.reply('Successfully Activate Anti Document In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antidocument) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antidocument = false
					m.reply('Successfully Disabling Anti Document In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antitoxic': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antitoxic) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antitoxic = true
					m.reply('Successfully Activate Antitoxic In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antitoxic) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antitoxic = false
					m.reply('Successfully Disabling Antitoxic In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'kickme': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].kickme) return m.reply(`Udah aktif`)
					chatsdb[m.chat].kickme = true
					m.reply('Successfully Activate Kickme In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].kickme) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].kickme = false
					m.reply('Successfully Disabling Kickme In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'mute': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].mute) return m.reply(`Udah Mute`)
					chatsdb[m.chat].mute = true
					m.reply('Successfully Mute In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].mute) return m.reply(`Udah Unmute`)
					chatsdb[m.chat].mute = false
					m.reply('Successfully Unmute In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antiwame': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiwame) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiwame = true
					m.reply('Successfully Activate Antiwame In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiwame) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiwame = false
					m.reply('Successfully Disabling Antiwame In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'antiwame2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiwame2) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiwame2 = true
					m.reply('Successfully Activate antiwame2 In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiwame2) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiwame2 = false
					m.reply('Successfully Disabling antiwame2 In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'opentime': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return m.warning('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
				}
				m.reply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
				setTimeout(() => {
					var nomor = m.participant
					const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
					vreden.groupSettingUpdate(m.chat, 'not_announcement')
					m.reply(open)
				}, timer)
			}
			break
			case 'open':
			case 'buka': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				vreden.groupSettingUpdate(m.chat, 'not_announcement')
				const textOpen = chatsdb[m.chat].setopen
				m.reply(textOpen ? textOpen : `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				break
			}
			case 'setopen': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan teks buka grup!*\n\nContoh:\n${prefix+command} Halo Semuanya, group sudah buka`)
				chatsdb[m.chat].setopen = text
				m.reply(`✅ Done set open!`)
			}
			break
			case 'delsetopen': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!chatsdb[m.chat].setopen) return m.warning(`Belum ada set open di sini..`)
				chatsdb[m.chat].setopen = false
				m.reply(`Sukses delete set open`)
			}
			break
			case 'tutupjam': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				var jm = text.split(':')[0]
				var mnt = text.split(':')[1]
				if (jm > 23) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.tutupjam 18:00`)
				if (mnt > 59) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.tutupjam 18:00`)
				if ((isNaN(jm))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if ((isNaN(mnt))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if (!jm && !mnt) return m.warning(`Masukan Jam nya\n*Contoh:*\n\n.tutupjam 18:00`)
				m.reply(`Group Akan Ditutup Jam ${jm}:${mnt} WIB`)
				cron.schedule(`0 ${mnt} ${jm} * * *`, async () => {
					vreden.groupSettingUpdate(m.chat, 'announcement')
					m.reply(`Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`)
				}, {
					scheduled: true,
					timezone: 'Asia/Jakarta'
				})
			}
			break
			case 'bukajam': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				var jm = text.split(':')[0]
				var mnt = text.split(':')[1]
				if (jm > 23) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if (mnt > 59) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if ((isNaN(jm))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if ((isNaN(mnt))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if (!jm && !mnt) return m.warning(`Masukan Jam nya\n*Contoh:*\n\n.bukajam 18:00`)
				m.reply(`Group Akan Dibuka Jam ${jm}:${mnt} WIB`)
				cron.schedule(`0 ${mnt} ${jm} * * *`, async () => {
					vreden.groupSettingUpdate(m.chat, 'not_announcement')
					m.reply(`Grup Di Buka Oleh Admin\nSekarang Semua Peserta Dapat Mengirim Pesan`)
				}, {
					scheduled: true,
					timezone: 'Asia/Jakarta'
				})
			}
			break
			case 'closetime': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return m.warning('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
				}
				m.reply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
				setTimeout(() => {
					var nomor = m.participant
					const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
					vreden.groupSettingUpdate(m.chat, 'announcement')
					m.reply(close)
				}, timer)
			}
			break
			case 'close':
			case 'tutup': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				vreden.groupSettingUpdate(m.chat, 'announcement')
				const textClose = chatsdb[m.chat].setclose
				m.reply(textClose ? textClose : `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
			}
			break
			case 'setclose': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan teks Close!*\n\nContoh:\n${prefix+command} Halo Semuanya, group close dulu ya`)
				chatsdb[m.chat].setclose = text
				m.reply(`✅ Done set close!`)
			}
			break
			case 'delsetclose': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!chatsdb[m.chat].setclose) return m.warning(`Belum ada set close di sini..`)
				chatsdb[m.chat].setclose = false
				m.reply(`Sukses delete set close`)
			}
			break
			case 'cekasalmember': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				const participants = await vreden.groupMetadata(m.chat).then(metadata => metadata.participants);

				let teks = `*GLOBAL COUNTRY MEMBER:*\n\n`
				const hitungNegara = {};
				const total = participants.length;

				participants.forEach(participant => {
					const phoneNumber = "+" + participant.id.split('@')[0];
					const negara = getCountryFromPhoneNumber(phoneNumber);
					if (hitungNegara[negara]) {
						hitungNegara[negara]++;
					} else {
						hitungNegara[negara] = 1;
					}
				});

				const hasil = {};
				for (const [negara, jumlah] of Object.entries(hitungNegara)) {
					hasil[negara] = {
						jumlah: jumlah,
						persentase: ((jumlah / total) * 100).toFixed(2) + "%"
					};
				}

				Object.entries(hasil).map(([negara, {
					jumlah,
					persentase
				}]) => {
					teks += `*${negara}:*\n- jumlah: ${jumlah} (${persentase})\n\n`
				})
				m.sendForward(teks)
			}
			break;
			case 'sider':
			case 'gcsider': {
				var lama = 86400000 * 7
				const now = new Date().toLocaleString("en-US", {
					timeZone: "Asia/Jakarta"
				});
				const milliseconds = new Date(now).getTime();

				let member = groupMetadata.participants.map(v => v.id)
				if (!text) {
					var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
				} else {
					var pesan = text
				}
				var sum
				sum = member.length
				var total = 0
				var sider = []
				for (let i = 0; i < sum; i++) {
					let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
					if ((typeof usersdb[member[i]] == 'undefined' || milliseconds * 1 - usersdb[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
						if (typeof usersdb[member[i]] !== 'undefined') {
							if (usersdb[member[i]].banned == true) {
								total++
								sider.push(member[i])
							}
						} else {
							total++
							sider.push(member[i])
						}
					}
				}
				if (total == 0) return m.reply(`*Digrup ini tidak terdapat sider.*`)
				m.sendMentions(`*${total}/${sum}* anggota grup *${groupName}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof usersdb[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - usersdb[v].lastseen))).join('\n')}`)
			}
			break
			case 'hedsot':
			case 'buang':
			case 'kick': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di kick!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (owner.number.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('🗿 Done Kick :v')).catch((err) => m.reply('Tag/reply pesan target yang ingin di kick!'))
			}
			break
			case 'acc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				const groupId = m.chat;
				const [subCommand, options] = args;
				const joinRequestList = await vreden.groupRequestParticipantsList(groupId);

				switch (subCommand) {
					case 'list': {
						const formattedRequests = joinRequestList.length > 0 ?
							joinRequestList.map((request, i) => {
								const timestamp = request.request_time;
								return `*${i + 1}.*\n• Nomor: ${request.jid.split('@')[0]}\n• Metode Permintaan: ${request.request_method}\n• Waktu Permintaan: ${new Intl.DateTimeFormat('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(new Date(1e3 * timestamp))}\n\n`;
							}).join('') :
							'Tidak ada permintaan bergabung yang tertunda.';
						reply(`*Daftar Permintaan Bergabung:*\n\n${formattedRequests}`);
						break;
					}
					case 'reject':
					case 'approve': {
						if (options === 'all') {
							for (const request of joinRequestList) {
								await vreden.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
								console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
							}
							reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
						} else {
							const participants = options.split('|').map(action => action.trim()).map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
							if (participants.length > 0) {
								let formattedResponse = '';
								for (const request of participants) {
									const response = await vreden.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
									const status = response[0]?.status === 'success' ? 'Gagal' : 'Berhasil';
									formattedResponse += `*${participants.indexOf(request) + 1}.*\n• Status: ${status}\n• Nomor: ${request.jid.split('@')[0]}\n\n`;
									console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
								}
								reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
							} else {
								reply('Tidak ada anggota yang cocok untuk reject/approve.');
							}
						}
						break;
					}
					default:
						reply('*Perintah tidak valid.*\nGunakan:\n- *acc list*\n- *acc approve [number]*\n- *acc reject [number]*\n- *acc reject [JID]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.');
				}
			}
			break
			case 'add': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di add!')
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Sukses Add Sepuh ✅')).catch((err) => m.reply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
			}
			break
			case 'promote':
			case 'pm': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di jadikan admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			break
			case 'demote':
			case 'dm': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di un admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			break
			case 'revoke':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				await vreden.groupRevokeInvite(m.chat)
					.then(res => {
						m.reply(`Sukses menyetel tautan undangan grup ini`)
					}).catch(() => m.reply(mess.error.api))
				break
			
			case 'totag': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.warning('Bot Harus Admin!')
				if (!m.quoted) return m.warning(`Replay Pesan Dengan Caption ${prefix + command}`)
				vreden.sendMessage(m.chat, {
					forward: m.quoted.fakeObj,
					mentions: participants.map(a => a.id)
				})
			}
			break
			case 'h':
			case 'hidetag': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (m.quoted) {
					vreden.sendMessage(m.chat, {
						forward: m.quoted.fakeObj,
						mentions: participants.map(a => a.id)
					})
				}
				if (!m.quoted) {
					vreden.sendMessage(m.chat, {
						text: q ? q : '',
						mentions: participants.map(a => a.id)
					}, {
						quoted: fchannel
					})
				}
			}
			break
			case 'delete':
			case 'd':
			case 'del': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di hapus')
				await vreden.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
			case 'infogc':
			case 'infogrup': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let data = await vreden.groupMetadata(m.chat)
					var infogc = `----------- » *GRUP INFO* « -----------

*PLUGINS INSPECT* :
- *antibot* : ${chatsdb[m.chat].antibot ? 'true' : ''}
- *antibot 2* : ${chatsdb[m.chat].antibot2 ? 'true' : ''}
- *antilink* : ${chatsdb[m.chat].antilink ? 'true' : ''}
- *antilink tiktok* : ${chatsdb[m.chat].antilinktt ? 'true' : ''}
- *antitoxic* : ${chatsdb[m.chat].antitoxic ? 'true' : ''}
- *antiaudio* : ${chatsdb[m.chat].antiaudio ? 'true' : ''}
- *antisticker* : ${chatsdb[m.chat].antisticker ? 'true' : ''}
- *antiimage* : ${chatsdb[m.chat].antiimage ? 'true' : ''}
- *antivideo* : ${chatsdb[m.chat].antivideo ? 'true' : ''}
- *antidocument* : ${chatsdb[m.chat].antidocument ? 'true' : ''}
- *antivirtex* : ${chatsdb[m.chat].antivirtex ? 'true' : ''}
- *antipromosi* : ${chatsdb[m.chat].antipromosi ? 'true' : ''}
- *antiwame* : ${chatsdb[m.chat].antiwame ? 'true' : ''}
- *antiwame2* : ${chatsdb[m.chat].antiwame2 ? 'true' : ''}
- *antipolling* : ${chatsdb[m.chat].antipolling ? 'true' : ''}
- *antilinkall* : ${chatsdb[m.chat].antilinkall ? 'true' : ''}
- *antilink2* : ${chatsdb[m.chat].antilink2 ? 'true' : ''}
- *autodownload* : ${chatsdb[m.chat].autodl ? 'true' : ''}
- *auto ai gc* : ${chatsdb[m.chat].autoaigc ? 'true' : ''}
- *kick me* : ${chatsdb[m.chat].kickme ? 'true' : ''}
- *keamanan* : ${chatsdb[m.chat].keamanan ? 'true' : ''}
- *mute* : ${chatsdb[m.chat].mute ? 'true' : ''}
- *welcome* : ${chatsdb[m.chat].welcome ? 'true' : ''}
- *left* : ${chatsdb[m.chat].goodbye ? 'true' : ''}

*GROUP INFO* :
- *name* : ${data.subject}
- *ID* : ${data.id}
- *dibuat* : ${moment(data.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
- *owner grup* : ${data.owner !== undefined ? '@' + data.owner.split`@`[0] : 'Unknown'}
- *jumlah admin* : ${data.participants.filter(x => x.admin === 'admin').length} Ekor
- *jumlah peserta* : ${data.participants.filter(x => x.admin === null).length} Ekor

`
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
  "title": "Setting Group",
  "sections": [
    {
      "title": "AntiLink Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilink on",
          "description": "nyalakan antilink",
          "id": ".antilink on"
        },
        {
          "header": "Off 🔴",
          "title": "antilink off",
          "description": "matikan antilink",
          "id": ".antilink off"
        }
      ]
    },
    {
      "title": "AntiBot Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antibot on",
          "description": "nyalakan antibot",
          "id": ".antibot on"
        },
        {
          "header": "Off 🔴",
          "title": "antibot off",
          "description": "matikan antibot",
          "id": ".antibot off"
        }
      ]
    },
    {
      "title": "AntiBot V2 Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antibot2 on",
          "description": "nyalakan antibot2",
          "id": ".antibot2 on"
        },
        {
          "header": "Off 🔴",
          "title": "antibot2 off",
          "description": "matikan antibot2",
          "id": ".antibot2 off"
        }
      ]
    },
    {
      "title": "AntiLink2 Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilink2 on",
          "description": "nyalakan antilink2",
          "id": ".antilink2 on"
        },
        {
          "header": "Off 🔴",
          "title": "antilink2 off",
          "description": "matikan antilink2",
          "id": ".antilink2 off"
        }
      ]
    },
    {
      "title": "AntiVirtext Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antivirtex on",
          "description": "nyalakan antivirtex",
          "id": ".antivirtex on"
        },
        {
          "header": "Off 🔴",
          "title": "antivirtex off",
          "description": "matikan antivirtex",
          "id": ".antivirtex off"
        }
      ]
    },
    {
      "title": "AntiLink TikTok Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilinktt on",
          "description": "nyalakan antilinktt",
          "id": ".antilinktt on"
        },
        {
          "header": "Off 🔴",
          "title": "antilinktt off",
          "description": "matikan antilinktt",
          "id": ".antilinktt off"
        }
      ]
    },
    {
      "title": "AntiToxic Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antitoxic on",
          "description": "nyalakan antitoxic",
          "id": ".antitoxic on"
        },
        {
          "header": "Off 🔴",
          "title": "antitoxic off",
          "description": "matikan antitoxic",
          "id": ".antitoxic off"
        }
      ]
    },
    {
      "title": "AntiWaMe Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiwame on",
          "description": "nyalakan antiwame",
          "id": ".antiwame on"
        },
        {
          "header": "Off 🔴",
          "title": "antiwame off",
          "description": "matikan antiwame",
          "id": ".antiwame off"
        }
      ]
    },
    {
      "title": "AntiWaMe2 Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiwame2 on",
          "description": "nyalakan antiwame2",
          "id": ".antiwame2 on"
        },
        {
          "header": "Off 🔴",
          "title": "antiwame2 off",
          "description": "matikan antiwame2",
          "id": ".antiwame2 off"
        }
      ]
    },
    {
      "title": "AntiLinkall Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilinkall on",
          "description": "nyalakan antilinkall",
          "id": ".antilinkall on"
        },
        {
          "header": "Off 🔴",
          "title": "antilinkall off",
          "description": "matikan antilinkall",
          "id": ".antilinkall off"
        }
      ]
    },
    {
      "title": "Antisticker Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antisticker on",
          "description": "nyalakan antisticker",
          "id": ".antisticker on"
        },
        {
          "header": "Off 🔴",
          "title": "antisticker off",
          "description": "matikan antisticker",
          "id": ".antisticker off"
        }
      ]
    },
    {
      "title": "AntiImage Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiimage on",
          "description": "nyalakan antiimage",
          "id": ".antiimage on"
        },
        {
          "header": "Off 🔴",
          "title": "antiimage off",
          "description": "matikan antiimage",
          "id": ".antiimage off"
        }
      ]
    },
    {
      "title": "AntiAudio Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiaudio on",
          "description": "nyalakan antiaudio",
          "id": ".antiaudio on"
        },
        {
          "header": "Off 🔴",
          "title": "antiaudio off",
          "description": "matikan antiaudio",
          "id": ".antiaudio off"
        }
      ]
    },
    {
      "title": "AntiVideo Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antivideo on",
          "description": "nyalakan antivideo",
          "id": ".antivideo on"
        },
        {
          "header": "Off 🔴",
          "title": "antivideo off",
          "description": "matikan antivideo",
          "id": ".antivideo off"
        }
      ]
    },
    {
      "title": "AntiDocument Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antidocument on",
          "description": "nyalakan antidocument",
          "id": ".antidocument on"
        },
        {
          "header": "Off 🔴",
          "title": "antidocument off",
          "description": "matikan antidocument",
          "id": ".antidocument off"
        }
      ]
    },
    {
      "title": "AntiPromosi Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antipromosi on",
          "description": "nyalakan antipromosi",
          "id": ".antipromosi on"
        },
        {
          "header": "Off 🔴",
          "title": "antipromosi off",
          "description": "matikan antipromosi",
          "id": ".antipromosi off"
        }
      ]
    },
    {
      "title": "AntiPolling Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antipolling on",
          "description": "nyalakan antipolling",
          "id": ".antipolling on"
        },
        {
          "header": "Off 🔴",
          "title": "antipolling off",
          "description": "matikan antipolling",
          "id": ".antipolling off"
        }
      ]
    },
    {
      "title": "Auto Download Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autodl on",
          "description": "nyalakan autodl",
          "id": ".autodl on"
        },
        {
          "header": "Off 🔴",
          "title": "autodl off",
          "description": "matikan autodl",
          "id": ".autodl off"
        }
      ]
    },
    {
      "title": "Auto Ai Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autoaigrup on",
          "description": "nyalakan autoaigrup",
          "id": ".autoaigrup on"
        },
        {
          "header": "Off 🔴",
          "title": "autoaigrup off",
          "description": "matikan autoaigrup",
          "id": ".autoaigrup off"
        }
      ]
    },
    {
      "title": "Auto Kick Me",
      "rows": [
        {
          "header": "On 🟢",
          "title": "kickme on",
          "description": "nyalakan kickme",
          "id": ".kickme on"
        },
        {
          "header": "Off 🔴",
          "title": "kickme off",
          "description": "matikan kickme",
          "id": ".kickme off"
        }
      ]
    },
    {
      "title": "Keamanan Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "keamanan on",
          "description": "nyalakan keamanan",
          "id": ".keamanan on"
        },
        {
          "header": "Off 🔴",
          "title": "keamanan off",
          "description": "matikan keamanan",
          "id": ".keamanan off"
        }
      ]
    },
    {
      "title": "Mute Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "mute on",
          "description": "nyalakan mute",
          "id": ".mute on"
        },
        {
          "header": "Off 🔴",
          "title": "mute off",
          "description": "matikan mute",
          "id": ".mute off"
        }
      ]
    },
    {
      "title": "Welcome Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "welcome on",
          "description": "nyalakan welcome",
          "id": ".welcome on"
        },
        {
          "header": "Off 🔴",
          "title": "welcome off",
          "description": "matikan welcome",
          "id": ".welcome off"
        }
      ]
    },
    {
      "title": "GoodByee Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "left on",
          "description": "nyalakan left",
          "id": ".left on"
        },
        {
          "header": "Off 🔴",
          "title": "left off",
          "description": "matikan left",
          "id": ".left off"
        }
      ]
    }
  ]
}`
					}, {
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"Copy ID\",\"id\":\"123456789\",\"copy_code\":\"${data.id}\"}`
					}]
					let buffer = await getBuffer("https://files.catbox.moe/kgibdb.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "image/png",
						fileLength: 10000000000,
						jpegThumbnail: buffer,
						fileName: `👥 Group Info 👥`,
					}, button, infogc, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'afk': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				let user = usersdb[m.sender]
				user.afkTime = +new Date
				user.afkReason = text
				m.reply(`${m.pushName} Telah Afk\nAlasan: ${text ? text : "nothing"}`)
			}
			break
			case 'getpp': {
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					avatar = await vreden.profilePictureUrl(users, "image")
				} catch {
					avatar = 'https://.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}
				try {
					vreden.sendMessage(m.chat, {
						image: {
							url: avatar
						},
						caption: `*Profile Photos 💫*\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getppgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					avatar = await vreden.profilePictureUrl(m.chat, "image")
				} catch {
					avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				try {
					vreden.sendMessage(m.chat, {
						image: {
							url: avatar
						},
						caption: `*Profile Photos Grup💫*\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getname': {
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					let name = vreden.getName(users)
					m.sendForward(`${name}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getnamegc':
			case 'getsubjekgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					m.sendForward(`${groupName}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getdesk':
			case 'getdeskripsigc':
			case 'getdesc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let iya = `DESKRIPSI GRUB *${groupName}*\n\n${groupMetadata.desc}`
					m.sendForward(iya)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekid':
			case 'getid':
			case 'getidgrup':
			case 'getidgc':
			case 'cekidgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let tod = `*GET ID GRUB*\n${groupMetadata.id}\n\n*GRUB NAME :* ${groupName}`
					m.sendForward(tod)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'intro': {
				var intro = `⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ۪⸙ ━ ━ ━ ━ ꪶ ̷⸙
`
				vreden.sendMessage(m.chat, {
					text: intro
				}, {
					quoted: fchannel
				})
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND GAME ]━━━━━━━━━━━━━━━━━//
			case'tebakkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					let quest = `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await vreden.sendMessage(m.chat, {
 text: quest,
 caption: "chihiro",
 footer: bots.footer,
 buttons: [
 {
 buttonId: ".nyerah", 
 buttonText: { 
 displayText: 'Nyerah 👎🏻' 
 }
 }, {
 buttonId: ".bantuan", 
 buttonText: {
 displayText: "Bantuan 💩"
 }
 }
],
 viewOnce: true,
 headerType: 1,
}, { quoted: fchannel }), result, reward.game,
						setTimeout(() => {
							if (tebakkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'spy': {
				players[m.chat] = players[m.chat] ? players[m.chat] : []
				words[m.chat] = words[m.chat] ? words[m.chat] : []
				spyWord[m.chat] = spyWord[m.chat] ? spyWord[m.chat] : null
				spy[m.chat] = spy[m.chat] ? spy[m.chat] : null
				gameStarted[m.chat] = gameStarted[m.chat] ? gameStarted[m.chat] : false
				votes[m.chat] = votes[m.chat] ? votes[m.chat] : {}
				currentPlayerIndex[m.chat] = currentPlayerIndex[m.chat] ? currentPlayerIndex[m.chat] : 0
				roundTimer[m.chat] = roundTimer[m.chat] ? roundTimer[m.chat] : null
				votingTimer[m.chat] = votingTimer[m.chat] ? votingTimer[m.chat] : null
				descriptions[m.chat] = descriptions[m.chat] ? descriptions[m.chat] : []

				const data = await fetchJson("https://www.vreden.web.id/database/game/spyWord.json")

				function resetGame() {
					players[m.chat] = [];
					spy[m.chat] = null;
					gameStarted[m.chat] = false;
					votes[m.chat] = {};
					currentPlayerIndex[m.chat] = 0;
					descriptions[m.chat] = [];
					clearTimeout(roundTimer[m.chat]);
					clearTimeout(votingTimer[m.chat]);
				}

				function assignWords() {
					const randomIndex = Math.floor(Math.random() * data.words.length);
					const selectedPair = data.words[randomIndex];

					words[m.chat] = players[m.chat].map((player, index) => (index === spy[m.chat] ? selectedPair.spyWord : selectedPair.worldWord));
				}

				async function startGame() {
					if (players[m.chat].length === 4) {
						gameStarted[m.chat] = true;
						spy[m.chat] = Math.floor(Math.random() * players[m.chat].length);
						assignWords();

						players[m.chat].forEach((player, index) => {
							const word = words[m.chat][index];
							vreden.sendText(player, `Kata kamu adalah "${word}". Cari tahu siapa Spy di antara kalian.`);
						});

						m.reply('Permainan dimulai! Setiap pemain akan menyebutkan ciri-ciri kata mereka satu per satu.');

						await sleep(3000)
						currentPlayerIndex[m.chat] = 0;
						await startTurn();
					} else {
						m.reply(`Harus ada 4 pemain untuk memulai permainan! Saat ini ada ${players[m.chat].length} pemain.`);
					}
				}

				async function startTurn() {
					if (currentPlayerIndex[m.chat] >= players[m.chat].length) {
						let descriptionList = "List Deskripsi:\n";
						players[m.chat].forEach((player, index) => {
							descriptionList += `@${player.split("@")[0]}: ${descriptions[m.chat][index] || "Belum memberikan deskripsi"}\n`;
						});

						vreden.sendTextWithMentions(m.chat, descriptionList);
						await sleep(3000)
						vreden.sendText(m.chat, "Semua pemain sudah menyebutkan ciri-ciri kata mereka. Sekarang saatnya vote!\n\nGunakan *" + prefix + command + " vote @tag*\nuntuk vote siapa Spy.");
						startVoting();
						return;
					}

					const currentPlayer = players[m.chat][currentPlayerIndex[m.chat]];
					if (!descriptions[m.chat][currentPlayerIndex[m.chat]]) {
						vreden.sendTextWithMentions(m.chat, `Giliran @${currentPlayer.split("@")[0]}!\nKamu punya 30 detik untuk menyebutkan ciri-ciri kata kamu.\n\nKetik *${prefix + command} describe*`);
					} else {
						currentPlayerIndex[m.chat]++;
						await startTurn();
					}

					roundTimer[m.chat] = setTimeout(() => {
						currentPlayerIndex[m.chat]++;
						startTurn();
					}, 30000);
				}

				function addDescription(player, description) {
					const playerIndex = players[m.chat].indexOf(player);
					if (playerIndex !== -1) {
						descriptions[m.chat][playerIndex] = description;
					}
				}

				function startVoting() {
					votes[m.chat] = {};

					votingTimer[m.chat] = setTimeout(() => {
						if (Object.keys(votes[m.chat]).length === 0) {
							m.reply('Tidak ada vote yang dilakukan. Permainan akan direset.');
							resetGame();
							return;
						}

						let maxVotes = 0;
						let votedOutPlayer = null;
						let voteCounts = {};

						for (let player in votes[m.chat]) {
							if (!voteCounts[votes[m.chat][player]]) {
								voteCounts[votes[m.chat][player]] = 0;
							}
							voteCounts[votes[m.chat][player]]++;
							if (voteCounts[votes[m.chat][player]] > maxVotes) {
								maxVotes = voteCounts[votes[m.chat][player]];
								votedOutPlayer = votes[m.chat][player];
							}
						}

						if (Object.values(voteCounts).includes(maxVotes) && Object.values(voteCounts).filter(v => v === maxVotes).length > 1) {
							m.reply('Voting seri! Mari kita lakukan voting ulang.');
							startVoting()
							return;
						}

						if (votedOutPlayer === players[spy]) {
							vreden.sendTextWithMentions(m.chat, `@${votedOutPlayer.split("@")[0]} adalah Spy!

*Kalian menang🏆*
• + Rp 1000 saldo

*Denda spy😹*
• - Rp 1000 saldo
`);

							players[m.chat].forEach(player => {
								if (player !== votedOutPlayer) {
									usersdb[player].saldo += 1000
								}
							});
						} else {
							vreden.sendTextWithMentions(m.chat, `@${votedOutPlayer.split("@")[0]} bukan Spy😂

*Spy menang🏆*
• + Rp 1000 saldo

*Denda warga😹*
• - Rp 1000 saldo
`);

							players[m.chat].forEach(player => {
								if (player !== votedOutPlayer) {
									usersdb[player].saldo -= 1000
								}
							});
						}
						resetGame()
					}, 120000)
				}

				switch (args[0]) {
					case 'join': {
						if (players[m.chat].length < 4 && !players[m.chat].includes(m.sender)) {
							players[m.chat].push(m.sender);
							vreden.sendTextWithMentions(m.chat, `Player @${m.sender.split("@")[0]} telah bergabung! (${players[m.chat].length}/4)`);

							await sleep(3000)
							if (players[m.chat].length === 4 && !gameStarted[m.chat]) {
								await startGame();
							}
						} else if (players[m.chat].includes(m.sender)) {
							m.reply('Kamu sudah terdaftar sebagai pemain.');
						} else {
							m.reply('Permainan sudah penuh. Tunggu permainan berikutnya.');
						}
					}
					break

					case 'describe': { // Tambahkan case untuk pemain ngasih deskripsi
						if (!gameStarted[m.chat]) return m.reply('Permainan belum dimulai.');
						if (!players[m.chat].includes(m.sender)) return m.reply('Kamu bukan bagian dari permainan ini.');
						if (!args[1]) return m.reply('Tolong masukkan deskripsi kata.');

						addDescription(m.sender, args.slice(1).join(' ')); // Simpan deskripsi dari pemain
						m.reply('Deskripsi kamu telah disimpan.');
					}
					break

					case 'vote': {
						let votedPlayerName = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

						if (!gameStarted[m.chat]) return m.reply('Belum ada permainan yang dimulai.')
						if (!votingTimer[m.chat]) return m.reply('Vote game belum dimulai.')
						if (!players[m.chat].includes(m.sender)) return m.reply('Kamu bukan bagian dari permainan ini.')
						if (!votedPlayerName) return m.reply("Masukan user yang mo di vote")

						const votedPlayerIndex = players[m.chat].findIndex(player =>
							(player === votedPlayerName)
						);

						if (votedPlayerIndex === -1) {
							m.reply('Pemain yang kamu vote tidak ada.');
							return;
						}

						votes[m.chat][m.sender] = players[m.chat][votedPlayerIndex]

						vreden.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} telah memilih @${votedPlayerName.split("@")[0]}.`);

						if (Object.keys(votes[m.chat]).length === players[m.chat].length) {
							clearTimeout(votingTimer[m.chat]);
						}
					}
					break

					case 'reset': {
						resetGame()
						m.reply('Permainan telah direset. Gunakan /join untuk memulai permainan baru.');
					}
					break
					default:
						let teks = `*🕵🏻‍♂️WHO THE SPY 🕵🏻‍♀️*

Permainan "Who's the Spy?" adalah permainan berbasis kata-kata di mana sekelompok pemain mencoba menebak siapa di antara mereka yang menjadi "mata-mata" atau "spy".

*Command* :
${prefix + command} join
${prefix + command} describe
${prefix + command} vote
${prefix + command} reset
`
						const contentText = {
							text: teks,
							contextInfo: {
								mentionedJid: vreden.ments(teks),
								externalAdReply: {
									title: `WePlay Games 🎮`,
									previewType: "PHOTO",
									thumbnailUrl: `https://files.catbox.moe/6gh3nw.jpg`,
									sourceUrl: links.website
								}
							}
						};
						vreden.sendMessage(m.chat, contentText, {
							quoted: m,
						});
				}
			}
			break

			case 'war': {
				vreden.war = vreden.war ? vreden.war : {};
				vreden.war2 = vreden.war2 ? vreden.war2 : {};

				if (!args[0] || args[0] == "help") {
					await vreden.sendMessage(m.chat, {
						text: `*⚔️ WAR BATTLE SQUAD ⚔️*

*War Zone :*
game perang dengan sistem
_turn attack_ (menyerang secara
bergiliran), dimulai dengan 1v1
sampai 5v5, modal perang
diperoleh dari harta rampasan
jika menang, 5k Healthy Point.

keberhasilan tergantung levelmu
dan level musuh yang akan
diserang, waktu menyerang
adalah 40 detik, lebih dari itu 
di anggap AFK (-2500HP).

Tim akan menang jika
Tim lawan kalah semua (0HP)
dan Tim Kamu mendapatkan
harta rampasan perang.

*❏  C O M M A N D S*
*${prefix + command} join A/B* = join game
*${prefix + command} left* = left game
*${prefix + command} money 10xx* = uang taruhan
*${prefix + command} player* = player game
*${prefix + command} start* = start game`,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG - CLASH SQUAD🛡️",
								body: 'Battle royale, bertempur dengan gaya',
								thumbnailUrl: "https://files.catbox.moe/lrzs4y.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					break;
				}

				if (args[0] == "money") {
					if (!(m.chat in vreden.war)) {
						await vreden.sendMessage(m.chat, {
							text: `*Silahkan buat room terlebih dahulu (Ketik .war join)*`
						}, {
							quoted: m
						});
						break;
					}
					if (m.sender == vreden.war[m.chat][0].user) {
						if (args[1] != "undefined" && !isNaN(args[1])) {
							args[1] = parseInt(args[1]);
							if (args[1] < 1000) {
								await vreden.sendMessage(m.chat, {
									text: '*Minimal Rp. 1.000*'
								}, {
									quoted: m
								});
								break;
							}
							vreden.war2[m.chat].money = args[1];
							await vreden.sendMessage(m.chat, {
								text: "*Berhasil menetapkan modal perang sebesar Rp. " + Number(args[1]).toLocaleString() + "*"
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.chat, {
								text: "*Masukkan modal taruhan perang berupa angka (Tidak boleh menggunakan titik)*\n\n.war money 100000"
							}, {
								quoted: m
							});
						}
					} else {
						await vreden.sendMessage(m.chat, {
							text: `*Hanya @${vreden.war[m.chat][0].user.split('@')[0]} sebagai pembuat room yang bisa mengganti modal awal perang*`,
							contextInfo: {
								mentionedJid: [vreden.war[m.chat][0].user]
							}
						}, {
							quoted: m
						});
					}
					break;
				}

				if (args[0] == "join") {
					if (usersdb[m.sender].saldo < 1000) {
						await vreden.sendMessage(m.chat, {
							text: "*Uang kamu minimal Rp. 1000 untuk bermain game ini.*"
						}, {
							quoted: m
						});
						break;
					}
					if (!(m.chat in vreden.war)) {
						vreden.war2[m.chat] = {
							"war": false,
							"turn": 0,
							"time": 0,
							"money": 0
						};
						vreden.war[m.chat] = [];
						let exp = usersdb[m.sender].exp;
						vreden.war[m.chat][0] = {
							"user": m.sender,
							"hp": 5000,
							"lvl": usersdb[m.sender].level,
							"turn": false
						};
						for (let i = 1; i < 10; i++) {
							vreden.war[m.chat][i] = {
								"user": "",
								"hp": 0,
								"lvl": 0,
								"turn": false
							};
						}
						await vreden.sendMessage(m.chat, {
							text: `*Berhasil masuk ke dalam game sebagai Team A*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
						}, {
							quoted: m
						});
						break;
					} else {
						if (vreden.war2[m.chat].war) {
							await vreden.sendMessage(m.chat, {
								text: `*Permainan sudah dimulai, tidak bisa join.*`
							}, {
								quoted: m
							});
							break;
						}
						for (let i = 0; i < vreden.war[m.chat].length; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								let total = 0;
								for (let i = 0; i < 10; i++) {
									if (vreden.war[m.chat][i].user == "") {
										total += 1;
									}
								}
								await vreden.sendMessage(m.chat, {
									text: `*Anda sudah masuk ke dalam game*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
								}, {
									quoted: m
								});
								break;
							}
						}

						if (args[1]) {
							if (args[1].toLowerCase() == "a") {
								if (vreden.war2[m.chat].money == 0) {
									await vreden.sendMessage(m.chat, {
										text: `*Tolong @${vreden.war[m.chat][0].user.split('@')[0]} tetapkan modal awal perang (minimal Rp. 1.000.000)*\n\n.war money 1000000`,
										contextInfo: {
											mentionedJid: [vreden.war[m.chat][0].user]
										}
									}, {
										quoted: m
									});
									break;
								}
								if (usersdb[m.sender].saldo < vreden.war2[m.chat].money) {
									await vreden.sendMessage(m.chat, {
										text: `*Uang kamu minimal Rp. ${vreden.war2[m.chat].money.toLocaleString()} untuk bermain game ini.*`
									}, {
										quoted: m
									});
									break;
								}
								for (let i = 1; i < 5; i++) {
									if (vreden.war[m.chat][i].user == "") {
										let exp = usersdb[m.sender].exp;
										vreden.war[m.chat][i] = {
											"user": m.sender,
											"hp": 5000,
											"lvl": usersdb[m.sender].level,
											"turn": false
										};
										let total = 0;
										for (let i = 0; i < 10; i++) {
											if (vreden.war[m.chat][i].user == "") {
												total += 1;
											}
										}
										await vreden.sendMessage(m.chat, {
											text: `*Berhasil masuk ke dalam game sebagai Team A*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
										}, {
											quoted: m
										});
										break;
									}
								}
							} else if (args[1].toLowerCase() == "b") {
								if (vreden.war2[m.chat].money == 0) {
									await vreden.sendMessage(m.chat, {
										text: `*Tolong @${vreden.war[m.chat][0].user.split('@')[0]} tetapkan modal awal perang (minimal Rp. 1000000)*\n\n.war money 1000000`,
										contextInfo: {
											mentionedJid: [vreden.war[m.chat][0].user]
										}
									}, {
										quoted: m
									});
									break;
								}
								if (usersdb[m.sender].saldo < vreden.war2[m.chat].money) {
									await vreden.sendMessage(m.chat, {
										text: `*Uang kamu minimal Rp. ${vreden.war2[m.chat].money.toLocaleString()} untuk bermain game ini.*`
									}, {
										quoted: m
									});
									break;
								}
								for (let i = 5; i < 10; i++) {
									if (vreden.war[m.chat][i].user == "") {
										let exp = usersdb[m.sender].exp;
										vreden.war[m.chat][i] = {
											"user": m.sender,
											"hp": 5000,
											"lvl": usersdb[m.sender].level,
											"turn": false
										};
										let total = 0;
										for (let i = 0; i < 10; i++) {
											if (vreden.war[m.chat][i].user == "") {
												total += 1;
											}
										}
										await vreden.sendMessage(m.chat, {
											text: `*Berhasil masuk ke dalam game sebagai Team B*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
										}, {
											quoted: m
										});
										break;
									}
								}
							} else {
								await vreden.sendMessage(m.chat, {
									text: `*Pilih salah satu tim A atau B*\n\n.war join A\n.war join B`
								}, {
									quoted: m
								});
							}
						} else {
							await vreden.sendMessage(m.chat, {
								text: `*Pilih salah satu tim A atau B*\n\n.war join A\n.war join B`
							}, {
								quoted: m
							});
						}

						let total = 0;
						for (let i = 0; i < vreden.war[m.chat].length; i++) {
							if (vreden.war[m.chat][i].user != "") {
								total += 1;
							}
							if (total == 10) {
								vreden.war2[m.chat].war = true;
							}
						}
					}
					break;
				}

				if (args[0] == "left") {
					if (vreden.war2[m.chat].war) {
						await vreden.sendMessage(m.chat, {
							text: `*Perang sudah dimulai, anda tidak bisa keluar*`
						}, {
							quoted: m
						});
					} else {
						let found = false;
						for (let i = 0; i < 10; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								found = true;
								break;
							}
						}
						if (found) {
							await vreden.sendMessage(m.chat, {
								text: `*Berhasil keluar dari game*`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.chat, {
								text: `*Kamu tidak sedang berada di dalam game*`
							}, {
								quoted: m
							});
						}
					}
					break;
				}

				if (args[0] == "player") {
					if (!(m.chat in vreden.war)) {
						await vreden.sendMessage(m.chat, {
							text: `*Tidak ada pemain yang join room War Zone*`
						}, {
							quoted: m
						});
						break;
					}
					let teamA = [];
					let teamB = [];
					let teamAB = [];
					for (let i = 0; i < vreden.war[m.chat].length; i++) {
						if (i < 5) {
							if (vreden.war[m.chat][i].user != "") teamA.push(vreden.war[m.chat][i].user);
						} else {
							if (vreden.war[m.chat][i].user != "") teamB.push(vreden.war[m.chat][i].user);
						}
						teamAB.push(vreden.war[m.chat][i].user);
					}
					await vreden.sendMessage(m.chat, {
						text: `${vreden.war2[m.chat].war ? '*Giliran : ' + '@' + vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0] + '*\n*Taruhan : Rp. ' + Number(vreden.war2[m.chat].money).toLocaleString() + '*\n\n' : '*Taruhan : Rp. ' + Number(vreden.war2[m.chat].money).toLocaleString() + '*\n\n' }*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${vreden.war[m.chat][i].lvl} HP: ${vreden.war[m.chat][i].hp})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${vreden.war[m.chat][i+5].lvl} HP: ${vreden.war[m.chat][i+5].hp})`).join`\n`,
						contextInfo: {
							mentionedJid: teamAB
						}
					}, {
						quoted: m
					});
					break;
				}

				if (args[0] == "start") {
					if (vreden.war2[m.chat].war) {
						await vreden.sendMessage(m.chat, {
							text: `*Perang sudah dimulai, tidak bisa join.*`
						}, {
							quoted: m
						});
						break;
					}
					let teamA = 0;
					let teamB = 0;
					for (let i = 0; i < 10; i++) {
						if (i < 5) {
							if (vreden.war[m.chat][i].user != "") teamA += 1;
						} else {
							if (vreden.war[m.chat][i].user != "") teamB += 1;
						}
					}

					if (teamA == teamB && teamA > 0) {
						vreden.war2[m.chat].war = true;
						for (let i = 0; i < 5; i++) {
							if (vreden.war[m.chat][i].user != "") {
								let user = vreden.war[m.chat][i].user;
								await vreden.sendMessage(m.chat, {
									text: `*Permainan berhasil dimulai*\n*Silahkan @${user.split('@')[0]} untuk menyerang musuh*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`,
									contextInfo: {
										mentionedJid: [user]
									}
								}, {
									quoted: m
								});
								break;
							}
						}
					} else {
						if (teamA > teamB) {
							await vreden.sendMessage(m.chat, {
								text: `*Team B kurang ${teamA - teamB} orang lagi agar permainan adil.*`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.chat, {
								text: `*Team A kurang ${teamB - teamA} orang lagi agar permainan adil.*`
							}, {
								quoted: m
							});
						}
					}
					break;
				} else {
					return m.warning("Join Duluu")
				}
			}
			break

			case 'attack': {
				vreden.war = vreden.war ? vreden.war : {}
				vreden.war2 = vreden.war2 ? vreden.war2 : {}

				function RandomNo(min, max) {
					min = Math.ceil(min)
					max = Math.floor(max)
					return Math.floor(Math.random() * (max - min + 1)) + min
				}

				async function cekAFK(x) {
					let turn = x
					let time = vreden.war2[m.chat].time
					await sleep(90000)
					let turnNow = vreden.war2[m.chat].turn
					let timeNow = vreden.war2[m.chat].time
					if (turn == turnNow && time == timeNow) {
						vreden.war[m.chat][turn].hp -= 2500
						vreden.sendText(m.chat, `*@${vreden.war[m.chat][turn].user.split('@')[0]} sedang AFK (Denda -2500 HP)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, null, {
							contextInfo: {
								mentionedJid: [vreden.war[m.chat][turn].user]
							}
						})
						await sleep(3000)
						if (vreden.war[m.chat][turn].hp <= 0) {
							vreden.sendText(m.chat, `*@${vreden.war[m.chat][turn].user.split('@')[0]} sudah mati karena HP (Health Point) habis.*`, null, {
								contextInfo: {
									mentionedJid: [vreden.war[m.chat][turn].user]
								}
							})
							// cek tim nya
							let playerTotal = 0
							let playerKalah = 0
							if (turn < 5) {
								for (let i = 0; i < 5; i++) {
									if (vreden.war[m.chat][i].user != "") {
										playerTotal += 1
										if (vreden.war[m.chat][i].hp <= 0)
											playerKalah += 1
									}
								}
								// m.reply(playerTotal + "T-K" + playerKalah)
								if (playerTotal > 0 && playerTotal == playerKalah) {
									var teamA = []
									var teamB = []
									var teamAB = []
									for (let j = 0; j < 5; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
											teamA.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									for (let j = 5; j < 10; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
											teamB.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									vreden.sendText(m.chat, `*TEAM B MENANG KARENA TEAM A GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
										contextInfo: {
											mentionedJid: teamAB
										}
									})
									delete vreden.war[m.chat]
									delete vreden.war2[m.chat]
								}
							} else {
								for (let i = 5; i < 10; i++) {
									if (vreden.war[m.chat][i].user != "") {
										playerTotal += 1
										if (vreden.war[m.chat][i].hp <= 0)
											playerKalah += 1
									}
								}
								m.reply(playerTotal + "T-K" + playerKalah)
								if (playerTotal == playerKalah) {
									var teamA = []
									var teamB = []
									var teamAB = []
									for (let j = 0; j < 5; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
											teamA.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									for (let j = 5; j < 10; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
											teamB.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									vreden.sendText(m.chat, `*TEAM A MENANG KARENA TEAM B GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
										contextInfo: {
											mentionedJid: teamAB
										}
									})
									delete vreden.war[m.chat]
									delete vreden.war2[m.chat]
								}
							}
						}
						let pergantian = false
						if (turn < 5) {
							for (let i = 5; i < 10; i++) {
								if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
									vreden.war2[m.chat].turn = i
									vreden.war2[m.chat].time = +1
									pergantian = true
								}
							}
						} else {
							for (let i = 0; i < 5; i++) {
								if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
									vreden.war2[m.chat].turn = i
									vreden.war2[m.chat].time = +1
									pergantian = true
								}
							}
						}
						if (pergantian == false) {
							for (let l = 9; l >= 0; l--) {
								if (vreden.war[m.chat][l].user != "" && vreden.war[m.chat][l].hp > 0) {
									vreden.war2[m.chat].turn = l
									vreden.war2[m.chat].time = +1
								}
								vreden.war[m.chat][l].turn == false
							}
						}
						await sleep(3000)
						vreden.sendText(m.chat, `*Giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, null, {
							contextInfo: {
								mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
							}
						})
						cekAFK(vreden.war2[m.chat].turn)
					}
				}

				if (!(m.chat in vreden.war)) return m.reply(`*Tidak ada game di grup ini.*`)
				if (!vreden.war2[m.chat].war) return m.reply(`*War belom dimulai, ketik ".war start" untuk memulai pertarungan.*`)
				for (let i = 0; i < 10; i++) {
					if (m.sender == vreden.war[m.chat][i].user) {
						if (i != vreden.war2[m.chat].turn) {
							vreden.sendText(m.chat, `*Sekarang adalah giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang.*`, m, {
								contextInfo: {
									mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
								}
							})
							cekAFK(vreden.war2[m.chat].turn)
						}
					}
				}
				if (!args[0]) return m.reply(`*Tag musuh yang akan diserang*\n*Ketik .war player*`)
				args[0] = args[0].split('@')[1]
				args[0] += "@s.whatsapp.net"
				let success = false

				if (vreden.war2[m.chat].turn < 5) {
					// return m.reply(args[0])
					for (let i = 5; i < 10; i++) {
						if (vreden.war[m.chat][i].user == args[0] && vreden.war[m.chat][i].hp > 0) {
							let attacker = m.sender
							let target = args[0]

							let opportunity = []
							for (let i = 0; i < usersdb[attacker].level; i++) {
								opportunity.push(attacker)
							}
							for (let i = 0; i < usersdb[target].level; i++) {
								opportunity.push(target)
							}

							let pointAttacker = 0
							let pointTarget = 0
							for (let i = 0; i < 10; i++) {
								if (opportunity[RandomNo(0, opportunity.length)] == attacker) pointAttacker += 1
								else pointTarget += 1
							}

							for (let i = 0; i < 10; i++) {
								if (vreden.war[m.chat][i].user == target) {
									vreden.war[m.chat][i].hp -= pointAttacker * 500
									vreden.war[m.chat][vreden.war2[m.chat].turn].turn = true
									vreden.sendText(m.chat, `*@${attacker.split('@')[0]} menyerang @${target.split('@')[0]} sampai nyawanya berkurang ${pointAttacker * 500} (Sisa HP: ${vreden.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*Level sangat mempengaruhi keberhasilan.*`, m, {
										contextInfo: {
											mentionedJid: [attacker, target]
										}
									})
									await sleep(2000)
									if (vreden.war[m.chat][i].hp <= 0) vreden.sendText(m.chat, `*@${target.split(`@`)[0]} sudah mati dalam pertarungan.*`, m, {
										contextInfo: {
											mentionedJid: [target]
										}
									})
									success = true
								}
							}
						}
					}
					if (success == false) {
						return m.reply(`*Masukkan list pemain game yang benar bos.*\n\n*Cek ".war player"*`)
					} else {
						for (let i = 0; i < 10; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								vreden.war[m.chat][i].turn = true
							}
						}
					}
				} else {
					for (let i = 0; i < 5; i++) {
						if (vreden.war[m.chat][i].user == args[0] && vreden.war[m.chat][i].hp > 0) {
							let attacker = m.sender
							let target = args[0]

							let opportunity = []
							for (let i = 0; i < usersdb[attacker].level; i++) {
								opportunity.push(attacker)
							}
							for (let i = 0; i < usersdb[target].level; i++) {
								opportunity.push(target)
							}

							let pointAttacker = 0
							let pointTarget = 0
							for (i = 0; i < 10; i++) {
								if (opportunity[RandomNo(0, opportunity.length)] == attacker) pointAttacker += 1
								else pointTarget += 1
							}

							for (let i = 0; i < 10; i++) {
								if (vreden.war[m.chat][i].user == target) {
									vreden.war[m.chat][i].hp -= pointAttacker * 500
									vreden.sendText(m.chat, vreden.war[m.chat][vreden.war2[m.chat].turn].turn, m)
									vreden.war[m.chat][vreden.war2[m.chat].turn].turn = true
									vreden.sendText(m.chat, vreden.war[m.chat][vreden.war2[m.chat].turn].turn, m)
									vreden.sendText(m.chat, `*@${attacker.split('@')[0]} menyerang @${target.split('@')[0]} sampai nyawanya berkurang ${pointAttacker * 500} (Sisa HP: ${vreden.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*Level sangat mempengaruhi keberhasilan.*`, m, {
										contextInfo: {
											mentionedJid: [attacker, target]
										}
									})
									await sleep(2000)
									if (vreden.war[m.chat][i].hp <= 0) vreden.sendText(m.chat, `*@${target.split(`@`)[0]} sudah mati dalam pertarungan.*`, m, {
										contextInfo: {
											mentionedJid: [target]
										}
									})
									success = true
								}
							}
						}
					}
					if (success == false) {
						return m.reply(`*Masukkan list pemain game yang benar bos.*\n\n*Cek ".war player"*`)
					} else {
						for (let i = 0; i < 10; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								vreden.war[m.chat][i].turn = true
							}
						}
					}
				}

				if (vreden.war2[m.chat].turn < 5) {
					let userAktif = 0
					let userMati = 0
					for (let i = 5; i < 10; i++) {
						if (vreden.war[m.chat][i].user != "") {
							userAktif += 1
							if (vreden.war[m.chat][i].hp <= 0) {
								userMati += 1
							}
						}
					}
					// m.reply(userAktif + "/" + userMati)
					if (userAktif == userMati) {
						var teamA = []
						var teamB = []
						var teamAB = []
						for (let j = 0; j < 5; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
								teamA.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						for (let j = 5; j < 10; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
								teamB.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						vreden.sendText(m.chat, `*TEAM A MENANG KARENA TEAM B GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
							contextInfo: {
								mentionedJid: teamAB
							}
						})
						delete vreden.war[m.chat]
						delete vreden.war2[m.chat]
					}
					let turn1 = vreden.war2[m.chat].turn
					let turn2 = vreden.war2[m.chat].turn
					for (let k = 5; k < 10; k++) {
						if (vreden.war[m.chat][k].hp > 0 && vreden.war[m.chat][k].user != "" && vreden.war[m.chat][k].turn == false) {
							vreden.war2[m.chat].turn = k
							vreden.war2[m.chat].time = +1
							turn2 = vreden.war2[m.chat].turn
						}
					}
					if (turn1 == turn2) {
						for (i = 0; i < 10; i++) {
							vreden.war[m.chat][i].turn = false
						}
						for (i = 0; i < 5; i++) {
							if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
								vreden.war2[m.chat].turn = i
								vreden.war2[m.chat].time = +1
							}
						}
					}
					await sleep(2000)
					vreden.sendText(m.chat, `*Giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, m, {
						contextInfo: {
							mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
						}
					})
					cekAFK(vreden.war2[m.chat].turn)
				} else {
					let userAktif = 0
					let userMati = 0
					for (let i = 0; i < 5; i++) {
						if (vreden.war[m.chat][i].user != "") {
							userAktif += 1
							if (vreden.war[m.chat][i].hp <= 0) {
								userMati += 1
							}
						}
					}
					if (userAktif == userMati) {
						var teamA = []
						var teamB = []
						var teamAB = []
						for (let j = 0; j < 5; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
								teamA.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						for (let j = 5; j < 10; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
								teamB.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						vreden.sendText(m.chat, `*TEAM B MENANG KARENA TEAM A GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
							contextInfo: {
								mentionedJid: teamAB
							}
						})
						delete vreden.war[m.chat]
						delete vreden.war2[m.chat]
					}
					let turn1 = vreden.war2[m.chat].turn
					let turn2 = vreden.war2[m.chat].turn
					for (let k = 0; k < 5; k++) {
						if (vreden.war[m.chat][k].hp > 0 && vreden.war[m.chat][k].user != "" && vreden.war[m.chat][k].turn == false) {
							vreden.war2[m.chat].turn = k
							vreden.war2[m.chat].time = +1
							turn2 = vreden.war2[m.chat].turn
						}
					}
					if (turn1 == turn2) {
						for (let i = 0; i < 10; i++) {
							vreden.war[m.chat][i].turn = false
						}
						for (let i = 0; i < 5; i++) {
							if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
								vreden.war2[m.chat].turn = i
								vreden.war2[m.chat].time = +1
							}
						}
					}
					await sleep(2000)
					vreden.sendText(m.chat, `*Giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, m, {
						contextInfo: {
							mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
						}
					})
					cekAFK(vreden.war2[m.chat].turn)
				}

				let totalUser = 0
				let totalTurn = 0
				for (let i = 0; i < 10; i++) {
					if (vreden.war[m.chat][i].user != "") totalUser += 1
					if (vreden.war[m.chat][i].turn == true) totalTurn += 1
				}
				if (totalTurn == totalUser) {
					for (i = 0; i < 10; i++) {
						vreden.war[m.chat][i].turn = false
					}
				}

			}
			break

			case 'ulartangga': {
				vreden.ulartangga = vreden.ulartangga || {};
				const sessions = vreden.ulartangga;
				const sessionId = m.chat;
				const session = sessions[sessionId] || (sessions[sessionId] = new snake.GameSession(sessionId, vreden));
				const game = session.game;
				const state = session.state || false;
				try {
					switch (args[0]) {
						case "join":
							if (state) {
								return await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help\",\"id\":\"${prefix + command} help\"}`
								}], "🛑 Permainan sudah dimulai.\nTidak dapat bergabung.", "⚡ Pilih aksi:", m)
							}
							const playerName = m.sender;
							const joinMessage = game.addPlayer(playerName) ? `👋 ${game.formatPlayerName(playerName)}\nbergabung ke dalam game.` : "*Anda sudah bergabung\natau permainan ini\nsudah penuh.*\n\nTidak dapat bergabung.";
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
							}], joinMessage, "⚡ Pilih aksi:", m)
							break;
						case "start":
							if (state) {
								return await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], "🛑 Permainan sudah dimulai.\nTidak dapat memulai ulang.", "⚡ Pilih aksi:", m)
							}
							if (game.players.length >= 2) {
								await game.startGame(m, game.players[0], game.players[1]);
								sessions[sessionId].state = true;
								await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], "🟢 Permainan dimulai!\nRoll dadu untuk bergerak.", "⚡ Pilih aksi:", m)
							} else {
								await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], "👥 Tidak cukup pemain\nuntuk memulai permainan.\n\nDiperlukan minimal 2 pemain.", "⚡ Pilih aksi:", m)
							}
							break;
						case "roll":
							if (!state) {
								return await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], `🛑 Permainan belum dimulai.\nKetik *${prefix + command} start* untuk memulai.`, "⚡ Pilih aksi:", m)
							}
							if (game.isGameStarted()) {
								const currentPlayer = game.players[game.currentPlayerIndex];
								if (m.sender !== currentPlayer) {
									await vreden.sendButtonText(m.chat, [{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
									}, {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
									}, {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
									}], `🕒 Bukan giliranmu Gblk.\nSekarang giliran ${game.formatPlayerName(currentPlayer)}`, "⚡ Pilih aksi:", m)
								} else {
									await game.playTurn(m, currentPlayer);
								}
							} else {
								await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], `🛑 Permainan belum dimulai.\nKetik *${prefix + command} start* untuk memulai.`, "⚡ Pilih aksi:", m)
							}
							break;
						case "reset":
						case "stop":
						case "end":
							sessions[sessionId].state = false;
							session.game.resetSession();
							delete sessions[sessionId];
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
							}], "🔄 Sesi permainan direset.\n\nKamu dapat memulai game\nulartangga baru kapan saja.", "⚡ Pilih aksi:", m)
							break;
						case "help":
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
							}], `🎲🐍 Game Ular Tangga 🐍🎲\n\n*Commands:*\n- *${prefix + command} join :*\nBergabung ke dalam game.\n\n- *${prefix + command} start :*\nMemulai game.\n\n- *${prefix + command} roll :*\nRoll dadu untuk bergerak.\n\n- *${prefix + command} reset :*\nMereset sesi Game.`, "⚡ Pilih aksi:", m)
							break;
						default:
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
							}], `❓ Perintah tidak valid.\n\nGunakan *${prefix + command} help*\nuntuk melihat daftar perintah.`, "⚡ Pilih aksi:", m)
					}
				} catch (error) {
					console.error("Error in ular tangga handler:", error);
					await vreden.sendButtonText(m.chat, [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
					}], "Terjadi kesalahan dalam permainan Ular Tangga. Silakan coba lagi nanti.", "⚡ Pilih aksi:", m)
				}
			}
			break

			case 'tebakgambar': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakgambar[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakgame[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakhero': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://api.vreden.web.id/api/tebakhero')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakhero[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah hero?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakhero[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakhero[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakff': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://api.vreden.web.id/api/tebakff')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakff[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Karakter Apa Ini?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakff[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakff[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakkabupaten': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/tebakkabupaten.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakkabupaten[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Logo Kabupaten Manakah ini?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakkabupaten[m.chat]) {
								waktuHabis(result.title)
								delete tebakkabupaten[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakjkt48': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/memberjkt48.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakjkt48[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Siapakah Nama Member JKT48 Ini?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakjkt48[m.chat]) {
								waktuHabis(result.name)
								delete tebakjkt48[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakhewan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/tebakhewan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakhewan[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Hewan Apakah Ini?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakhewan[m.chat]) {
								waktuHabis(result.title)
								delete tebakhewan[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakhero2':
			case 'tebakml': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/tebakhero2.json')
					let result = await pickRandom(anu)
					let audio = await pickRandom(result.url)
					console.log("Jawaban: " + result.title)
					let key = await vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
					tebakml[m.chat] = [
						await vreden.sendMessage(m.chat, {
							text: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: key
						}), result, reward.game,
						setTimeout(() => {
							if (tebakml[m.chat]) {
								waktuHabis(result.title)
								delete tebakml[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakanime':
			case 'tebakchara': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let res = await fetchJson('https://www.vreden.web.id/database/game/characters.json')
					let anu = res.data
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakchara[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.images.jpg.image_url
							},
							caption: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakchara[m.chat]) {
								waktuHabis(result.name)
								delete tebakchara[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebaklogo': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/tebaklogo.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklogo[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `*Logo Apa Ini?*\n\n${result.deskripsi}\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebaklogo[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklogo[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'tebakaplikasi': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/tebakaplikasi.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakaplikasi[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.image
							},
							caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakaplikasi[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakaplikasi[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			
			case 'asahotak': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/asahotak.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					asahotak[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (asahotak[m.chat]) {
								waktuHabis(result.jawaban)
								delete asahotak[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'lengkapikalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/lengkapikalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					lengkapikalimat[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (lengkapikalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete lengkapikalimat[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'family100': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if ('family100' + m.chat in _family100) {
					m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					throw false
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
					let random = await pickRandom(anu)
					let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
					_family100['family100' + m.chat] = {
						id: 'family100' + m.chat,
						pesan: await vreden.sendText(m.chat, hasil, m),
						...random,
						terjawab: Array.from(random.jawaban, () => false),
						hadiah: 6,
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakbendera': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, reward.game,
						setTimeout(() => {
							if (tebakbendera[m.chat]) {
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakkalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (tebakkalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaksiapa': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (siapaaku[m.chat]) {
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakkimia': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await vreden.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (tebakkimia[m.chat]) {
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaklirik': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await vreden.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (tebaklirik[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaktebakan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (tebaktebakan[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'susunkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await vreden.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'caklontong': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await vreden.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (caklontong[m.chat]) {
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tekateki': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(reward.timeGame / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, reward.game,
						setTimeout(() => {
							if (tekateki[m.chat]) {
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kuis':
			case 'quiz':
			case 'kuisioner': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.web.id/database/game/quiz.json')
					let result = anu.quiz[Math.floor(Math.random() * anu.quiz.length)]
					let teks = `*乂 Quizioner Game*\n\n${result.question}\n\n_pilih A, B, Atau C_`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ A ] ${result.choices.A}\",\"id\":\"A\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ B ] ${result.choices.B}\",\"id\":\"B\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ C ] ${result.choices.C}\",\"id\":\"C\"}`
					}]
					console.log("Jawaban: " + result.correctAnswer)
					kuisioner[m.chat] = [
						vreden.sendButtonText(m.chat, button, teks, bots.footer, m), result, reward.game,
						setTimeout(() => {
							if (kuisioner[m.chat]) {
								waktuHabis(result.correctAnswer)
								delete kuisioner[m.chat]
							}
						}, reward.timeGame)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'math':
			case 'mathgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				let {
					generateQuestion,
					modes
				} = require('./lib/math')
				if (!text) return m.warning(`*Pilih Modenya Ngabb!*\n- ${Object.keys(modes).join('\n- ')}\n\ncontoh:\n${prefix}math hard`)
				if (!(Object.keys(modes)).includes(args[0])) return m.warning('Pilih mode yang bener GOBLOK!')
				try {
					var {
						soal,
						pilihan_jawaban,
						jawaban_benar,
						waktu,
						hadiah
					} = await generateQuestion(text.toLowerCase())
					let teks = `*乂 Matematika Game*\n\n${soal}\n\n_pilih A, B, Atau C_`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ A ] ${pilihan_jawaban[0].jawaban}\",\"id\":\"A\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ B ] ${pilihan_jawaban[1].jawaban}\",\"id\":\"B\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ C ] ${pilihan_jawaban[2].jawaban}\",\"id\":\"C\"}`
					}]
					console.log("Jawaban: " + jawaban_benar)
					mathgame[m.chat] = [
						vreden.sendButtonText(m.chat, button, teks, bots.footer, m), jawaban_benar, hadiah,
						setTimeout(() => {
							if (mathgame[m.chat]) {
								waktuHabis(jawaban_benar)
								delete mathgame[m.chat]
							}
						}, waktu)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bantuan': {
				try {
					if (m.chat in tebakgambar) {
						let json = tebakgambar[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame) {
						let json = tebakgame[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhero) {
						let json = tebakhero[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakff) {
						let json = tebakff[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkabupaten) {
						let json = tebakkabupaten[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakjkt48) {
						let json = tebakjkt48[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhewan) {
						let json = tebakhewan[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakml) {
						let json = tebakml[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakchara) {
						let json = tebakchara[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklogo) {
						let json = tebaklogo[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakaplikasi) {
						let json = tebakaplikasi[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata) {
						let json = tebakkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in asahotak) {
						let json = asahotak[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in lengkapikalimat) {
						let json = lengkapikalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera) {
						let json = tebakbendera[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat) {
						let json = tebakkalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku) {
						let json = siapaaku[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia) {
						let json = tebakkimia[m.chat][1]
						m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik) {
						let json = tebaklirik[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan) {
						let json = tebaktebakan[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata) {
						let json = susunkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong) {
						let json = caklontong[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki) {
						let json = tekateki[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'nyerah': {
				try {
					if (m.chat in siapaaku) {
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkalimat) {
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakbendera) {
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkata) {
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in asahotak) {
						clearTimeout(asahotak[m.chat][3])
						delete asahotak[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in lengkapikalimat) {
						clearTimeout(lengkapikalimat[m.chat][3])
						delete lengkapikalimat[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakgame) {
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakhero) {
						clearTimeout(tebakhero[m.chat][3])
						delete tebakhero[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakff) {
						clearTimeout(tebakff[m.chat][3])
						delete tebakff[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkabupaten) {
						clearTimeout(tebakkabupaten[m.chat][3])
						delete tebakkabupaten[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakjkt48) {
						clearTimeout(tebakjkt48[m.chat][3])
						delete tebakjkt48[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakhewan) {
						clearTimeout(tebakhewan[m.chat][3])
						delete tebakhewan[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakml) {
						clearTimeout(tebakml[m.chat][3])
						delete tebakml[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakchara) {
						clearTimeout(tebakchara[m.chat][3])
						delete tebakchara[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebaklogo) {
						clearTimeout(tebaklogo[m.chat][3])
						delete tebaklogo[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakaplikasi) {
						clearTimeout(tebakaplikasi[m.chat][3])
						delete tebakaplikasi[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkimia) {
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebaklirik) {
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebaktebakan) {
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in susunkata) {
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in caklontong) {
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakgambar) {
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tekateki) {
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakbom':
			case 'petakbom': {
				if (petakbom[m.sender]) return m.reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);

				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				petakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0]),
					board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
					bomb: 3,
					lolos: 6,
					pick: 0,
					hadiah: randomNomor(5000, 10000),
					nyawa: ["❤️", "❤️", "❤️"],
					chat: await m.reply(`*PETAK BOM*

1️⃣2️⃣3️⃣
4️⃣5️⃣6️⃣
7️⃣8️⃣9️⃣

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : 3
Nyawa : ❤️❤️❤️`)
				}
			}
			break
			case 'deltebakbom':
			case 'delpetakbom': {
				if (!(petakbom[m.sender])) return m.sendForward(`kamu sedang tidak bermain petakbom!`)
				delete petakbom[m.sender];
				m.reply(`Petakbom di akhiri, hadiah Rp. 0`)
			}
			break
			case 'ttc':
			case 'ttt':
			case 'tictactoe': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				let TicTacToe = require("./lib/tictactoe")
				this.game = this.game ? this.game : {}
				if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.warning('Kamu masih didalam game')
				let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {
							X: '❌',
							O: '⭕',
							1: '1️⃣',
							2: '2️⃣',
							3: '3️⃣',
							4: '4️⃣',
							5: '5️⃣',
							6: '6️⃣',
							7: '7️⃣',
							8: '8️⃣',
							9: '9️⃣',
						} [v]
					})
					let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await vreden.sendText(room.x, str, m, {
						mentions: parseMention(str)
					})
					await vreden.sendText(room.o, str, m, {
						mentions: parseMention(str)
					})
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING'
					}
					if (text) room.name = text
					m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
					this.game[room.id] = room
				}
			}
			break
			case 'delttc':
			case 'delttt': {
				let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
				if (!roomnya) return m.warning(`Kamu sedang tidak berada di room tictactoe !`)
				delete this.game[roomnya.id]
				m.reply(`Berhasil delete session room tictactoe !`)
			}
			break
			case 'suitpvp':
			case 'suit': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (m.mentionedJid[0] === m.sender) return m.warning(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.warning(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @0`, m.chat, {
					mentions: '0@s.whatsapp.net'
				})
				this.suit = this.suit ? this.suit : {}
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.warning(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				this.suit[id] = {
					chat: await m.reply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (this.suit[id]) m.reply(`_Waktu suit habis_`)
						delete this.suit[id]
					}, 60000),
					poin,
					poin_lose,
					timeout
				}
			}
			break
			case 'wwpc':
			case 'ww':
			case 'werewolf': {
				let jimp = require("jimp")
				const resize = async (image, width, height) => {
					const read = await jimp.read(image);
					const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
					return data;
				};

				let {
					emoji_role,
					sesi,
					playerOnGame,
					playerOnRoom,
					playerExit,
					dataPlayer,
					dataPlayerById,
					getPlayerById,
					getPlayerById2,
					killWerewolf,
					killww,
					dreamySeer,
					sorcerer,
					protectGuardian,
					roleShuffle,
					roleChanger,
					roleAmount,
					roleGenerator,
					addTimer,
					startGame,
					playerHidup,
					playerMati,
					vote,
					voteResult,
					clearAllVote,
					getWinner,
					win,
					pagi,
					malam,
					skill,
					voteStart,
					voteDone,
					voting,
					run,
					run_vote,
					run_malam,
					runprefixagi
				} = require('./lib/werewolf.js')

				// [ Thumbnail ] 
				let thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

				const {
					sender,
					chat
				} = m;
				vreden.werewolf = vreden.werewolf ? vreden.werewolf : {};
				const ww = vreden.werewolf ? vreden.werewolf : {};
				const data = ww[chat];
				const value = args[0];
				const target = args[1];
				let byId = getPlayerById2(sender, parseInt(target), ww);
				// [ Membuat Room ]
				if (value === "create") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (chat in ww) return reply("Group masih dalam sesi permainan");
					if (playerOnGame(sender, ww) === true)
						return reply("Kamu masih dalam sesi game");
					ww[chat] = {
						room: chat,
						owner: sender,
						status: false,
						iswin: null,
						cooldown: null,
						day: 0,
						time: "malem",
						player: [],
						dead: [],
						voting: false,
						seer: false,
						guardian: [],
					};
					await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

					// [ Join sesi permainan ]
				} else if (value === "join") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Belum ada sesi permainan");
					if (ww[chat].status === true)
						return reply("Sesi permainan sudah dimulai");
					if (ww[chat].player.length > 16)
						return reply("Maaf jumlah player telah penuh");
					if (playerOnRoom(sender, chat, ww) === true)
						return reply("Kamu sudah join dalam room ini");
					if (playerOnGame(sender, ww) === true)
						return reply("Kamu masih dalam sesi game");
					let data = {
						id: sender,
						number: ww[chat].player.length + 1,
						sesi: chat,
						status: false,
						role: false,
						effect: [],
						vote: 0,
						isdead: false,
						isvote: false,
					};
					ww[chat].player.push(data);
					let player = [];
					let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
					for (let i = 0; i < ww[chat].player.length; i++) {
						text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")}\n`;
						player.push(ww[chat].player[i].id);
					}
					text += "\nJumlah player minimal adalah 5 dan maximal 15";
					vreden.sendMessage(
						m.chat, {
							text: text.trim(),
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
									mediaUrl: thumb,
								},
								mentionedJid: player,
							},
						}, {
							quoted: m
						}
					);

					// [ Game Play ]
				} else if (value === "start") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Belum ada sesi permainan");
					if (ww[chat].player.length === 0)
						return reply("Room belum memiliki player");
					if (ww[chat].player.length < 5)
						return reply("Maaf jumlah player belum memenuhi syarat");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu belum join dalam room ini");
					if (ww[chat].cooldown > 0) {
						if (ww[chat].time === "voting") {
							clearAllVote(chat, ww);
							addTimer(chat, ww);
							return await run_vote(vreden.chat, ww);
						} else if (ww[chat].time === "malem") {
							clearAllVote(chat, ww);
							addTimer(chat, ww);
							return await run_malam(vreden.chat, ww);
						} else if (ww[chat].time === "pagi") {
							clearAllVote(chat, ww);
							addTimer(chat, ww);
							return await runprefixagi(vreden.chat, ww);
						}
					}
					if (ww[chat].status === true)
						return reply("Sesi permainan telah dimulai");
					if (ww[chat].owner !== sender)
						return reply(
							`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
						);
					let list1 = "";
					let list2 = "";
					let player = [];
					roleGenerator(chat, ww);
					addTimer(chat, ww);
					startGame(chat, ww);
					for (let i = 0; i < ww[chat].player.length; i++) {
						list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")}\n`;
						player.push(ww[chat].player[i].id);
					}
					for (let i = 0; i < ww[chat].player.length; i++) {
						list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[chat].player[i].role === "werewolf" || ww[chat].player[i].role === "sorcerer" ? `[${ww[chat].player[i].role}]` : ""}\n`;
						player.push(ww[chat].player[i].id);
					}
					for (let i = 0; i < ww[chat].player.length; i++) {
						// [ Werewolf ]
						if (ww[chat].player[i].role === "werewolf") {
							if (ww[chat].player[i].isdead != true) {
								var textt = `Hai ${vreden.getName(ww[chat].player[i].id)}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role("werewolf")} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
								await vreden.sendMessage(ww[chat].player[i].id, {
									text: textt,
									mentions: player,
								});
							}
							// [ villager ]
						} else if (ww[chat].player[i].role === "warga") {
							if (ww[chat].player[i].isdead != true) {
								let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${vreden.getName(ww[chat].player[i].id)} Peran kamu adalah *Warga Desa* ${emoji_role("warga")}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
								await vreden.sendMessage(ww[chat].player[i].id, {
									text: texttt,
									mentions: player,
								});
							}

							// [ Penerawangan ]
						} else if (ww[chat].player[i].role === "seer") {
							if (ww[chat].player[i].isdead != true) {
								let texxt = `Hai ${vreden.getName(ww[chat].player[i].id)} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role("seer")}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

								await vreden.sendMessage(ww[chat].player[i].id, {
									text: texxt,
									mentions: player,
								});
							}

							// [ Guardian ]
						} else if (ww[chat].player[i].role === "guardian") {
							if (ww[chat].player[i].isdead != true) {
								let teext = `Hai ${vreden.getName(ww[chat].player[i].id)} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role("guardian")}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;

								await vreden.sendMessage(ww[chat].player[i].id, {
									text: teext,
									mentions: player,
								});
							}

							// [ Sorcerer ]
						} else if (ww[chat].player[i].role === "sorcerer") {
							if (ww[chat].player[i].isdead != true) {
								let textu = `Hai ${vreden.getName(ww[chat].player[i].id)} Kamu terpilih sebagai Penyihir ${emoji_role("sorcerer")}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

								await vreden.sendMessage(ww[chat].player[i].id, {
									text: textu,
									mentions: player,
								});
							}
						}
					}
					await vreden.sendMessage(m.chat, {
						text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
						contextInfo: {
							externalAdReply: {
								title: "W E R E W O L F",
								mediaType: 1,
								renderLargerThumbnail: true,
								thumbnail: await resize(thumb, 300, 175),
								sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
								mediaUrl: thumb,
							},
							mentionedJid: player,
						},
					});
					await run(vreden.chat, ww);
				} else if (value === "kill") {
					if (dataPlayer(sender, ww).role !== "werewolf")
						return m.reply("Peran ini bukan untuk kamu");
					if (byId.db.role === "sorcerer")
						return m.reply("Tidak bisa menggunakan skill untuk teman");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					reply("Berhasil membunuh player " + parseInt(target))
						.then(() => {
							dataPlayer(sender, ww).status = true;
							killWerewolf(sender, parseInt(target), ww);
						});
				} else if (value === "dreamy") {
					if (dataPlayer(sender, ww).role !== "seer")
						return m.reply("Peran ini bukan untuk kamu");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					let dreamy = dreamySeer(m.sender, parseInt(target), ww);
					reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
						.then(() => {
							dataPlayer(sender, ww).status = true;
						});
				} else if (value === "deff") {
					if (dataPlayer(sender, ww).role !== "guardian")
						return m.reply("Peran ini bukan untuk kamu");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					reply(`Berhasil melindungi player ${target}`).then(() => {
						protectGuardian(m.sender, parseInt(target), ww);
						dataPlayer(sender, ww).status = true;
					});
				} else if (value === "sorcerer") {
					if (dataPlayer(sender, ww).role !== "sorcerer")
						return m.reply("Peran ini bukan untuk kamu");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					let sorker = sorcerer(sesi(m.sender), target);
					reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
						.then(() => {
							dataPlayer(sender, ww).status = true;
						});
				} else if (value === "vote") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Belum ada sesi permainan");
					if (ww[chat].status === false)
						return reply("Sesi permainan belum dimulai");
					if (ww[chat].time !== "voting")
						return reply("Sesi voting belum dimulai");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu bukan player");
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati");
					if (!target || target.length < 1)
						return reply("Masukan nomor player");
					if (isNaN(target)) return reply("Gunakan hanya nomor");
					if (dataPlayer(sender, ww).isvote === true)
						return reply("Kamu sudah melakukan voting");
					b = getPlayerById(chat, sender, parseInt(target), ww);
					if (b.db.isdead === true)
						return reply(`Player ${target} sudah mati.`);
					if (ww[chat].player.length < parseInt(target))
						return reply("Invalid");
					if (getPlayerById(chat, sender, parseInt(target), ww) === false)
						return reply("Player tidak terdaftar!");
					vote(chat, parseInt(target), sender, ww);
					return reply("✅ Vote");
				} else if (value == "exit") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Tidak ada sesi permainan");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu tidak dalam sesi permainan");
					if (ww[chat].status === true)
						return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
					let exitww = `${sender.split("@")[0]} Keluar dari permainan`
					vreden.sendMessage(
						m.chat, {
							text: exitww,
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
									mediaUrl: thumb,
								},
								mentionedJid: sender,
							},
						}, {
							quoted: m
						}
					);
					playerExit(chat, sender, ww);
				} else if (value === "delete") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Tidak ada sesi permainan");
					if (ww[chat].owner !== sender)
						return reply(`Hanya @${ww[chat].owner.split("@")[0]} yang dapat menghapus sesi permainan ini`);
					reply("Sesi permainan berhasil dihapus").then(() => {
						delete ww[chat];
					});
				} else if (value === "player") {
					if (!ww[chat]) return reply("Tidak ada sesi permainan");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu tidak dalam sesi permainan");
					if (ww[chat].player.length === 0)
						return reply("Sesi permainan belum memiliki player");
					let player = [];
					let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
					for (let i = 0; i < ww[chat].player.length; i++) {
						text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[chat].player[i].isdead === true ? `☠️ ${ww[chat].player[i].role}` : ""}\n`;
						player.push(ww[chat].player[i].id);
					}
					vreden.sendMessage(
						m.chat, {
							text: text,
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
									mediaUrl: thumb,
								},
								mentionedJid: player,
							},
						}, {
							quoted: m
						}
					);
				} else {
					let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
					text += ` • ww create\n`;
					text += ` • ww join\n`;
					text += ` • ww start\n`;
					text += ` • ww exit\n`;
					text += ` • ww delete\n`;
					text += ` • ww player\n`;
					text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
					vreden.sendMessage(
						m.chat, {
							text: text.trim(),
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: `${global.saluran}`,
									mediaUrl: thumb,
								},
							},
						}, {
							quoted: m
						}
					);
				}
			}
			break
			case 'slot': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (usersdb[m.sender].saldo < 2000) return m.warning(`*Balance Kamu Tidak Cukup Untuk Deposit Slot Sebanyak Rp 2000*`)
				usersdb[m.sender].saldo -= 2000
				try {
					let spin1 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin2 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin3 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin4 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin5 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin6 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin7 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin8 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin9 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let WinOrLose
					if (spin1 == "🍊" && spin2 == "🍊" && spin3 == "🍊" && spin4 == "🍊" && spin5 == "🍊" && spin6 == "🍊" && spin7 == "🍊" && spin8 == "🍊" && spin9 == "🍊" || spin1 == "🍇" && spin2 == "🍇" && spin3 == "🍇" && spin4 == "🍇" && spin5 == "🍇" && spin6 == "🍇" && spin7 == "🍇" && spin8 == "🍇" && spin9 == "🍇" || spin1 == "🍉" && spin2 == "🍉" && spin3 == "🍉" && spin4 == "🍉" && spin5 == "🍉" && spin6 == "🍉" && spin7 == "🍉" && spin8 == "🍉" && spin9 == "🍉" || spin1 == "🍌" && spin2 == "🍌" && spin3 == "🍌" && spin4 == "🍌" && spin5 == "🍌" && spin6 == "🍌" && spin7 == "🍌" && spin8 == "🍌" && spin9 == "🍌" || spin1 == "🍍" && spin2 == "🍍" && spin3 == "🍍" && spin4 == "🍍" && spin5 == "🍍" && spin6 == "🍍" && spin7 == "🍍" && spin8 == "🍍" && spin9 == "🍍") {
						usersdb[m.sender].rank += 300
						usersdb[m.sender].saldo += 15000
						WinOrLose = "_*Kamu menang lagi*_\n_*dan mendapatkan*_\n_*Mega Jackpot!*_\n+ 300 Points Rank\n+ Rp 15.000 Saldo"
					} else if (spin7 == "🍊" && spin8 == "🍊" && spin9 == "🍊" || spin7 == "🍇" && spin8 == "🍇" && spin9 == "🍇" || spin7 == "🍉" && spin8 == "🍉" && spin9 == "🍉" || spin7 == "🍌" && spin8 == "🍌" && spin9 == "🍌" || spin7 == "🍍" && spin8 == "🍍" && spin9 == "🍍") {
						usersdb[m.sender].rank += 200
						usersdb[m.sender].saldo += 7000
						WinOrLose = "_*Kamu menang dan*_\n_*mendapatkan Jackpot!*_\n+ 200 Points Rank\n+ Rp 7.000 Saldo"
					} else if (spin4 == "🍊" && spin5 == "🍊" && spin6 == "🍊" || spin4 == "🍇" && spin5 == "🍇" && spin6 == "🍇" || spin4 == "🍉" && spin5 == "🍉" && spin6 == "🍉" || spin4 == "🍌" && spin5 == "🍌" && spin6 == "🍌" || spin4 == "🍍" && spin5 == "🍍" && spin6 == "🍍") {
						usersdb[m.sender].rank += 200
						usersdb[m.sender].saldo += 7000
						WinOrLose = "_*Kamu jackpot*_\n+ 200 Points Rank\n+ Rp 7.000 Saldo"
					} else if (spin1 == "🍊" && spin2 == "🍊" && spin3 == "🍊" || spin1 == "🍇" && spin2 == "🍇" && spin3 == "🍇" || spin1 == "🍉" && spin2 == "🍉" && spin3 == "🍉" || spin1 == "🍌" && spin2 == "🍌" && spin3 == "🍌" || spin1 == "🍍" && spin2 == "🍍" && spin3 == "🍍") {
						usersdb[m.sender].rank += 150
						usersdb[m.sender].saldo += 4000
						WinOrLose = "_*Kamu menang dalam*_\n_*Pertandingan ini!*_\n+ 150 Points Rank\n+ Rp 4.000 Saldo"
					} else {
						WinOrLose = "_*Kamu Kalah!*_"
					}
					var contentText = `*── 「 SLOT 」 ──*

${spin1} ${spin2} ${spin3}
${spin4} ${spin5} ${spin6}
${spin7} ${spin8} ${spin9}

${WinOrLose}`
					m.sendForward(contentText)
				} catch (e) {
					m.reply(mess.error.api)
				}
			}
			break
			case 'casino': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!text) return m.warning(`Kirim perintah *${prefix+command}* @tag nominal`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (fs.existsSync(`./database/${m.chat}.json`)) return m.warning(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
				if (!args[1]) return m.warning('Masukan Nominal Nya')
				if (args[1].includes('-')) return m.warning(`Jangan menggunakan -`)
				if (isNaN(parseInt(args[1]))) return m.warning('Nominal Harus Berupa Angka!')
				var anu = usersdb[m.sender].saldo
				var ani = usersdb[users].saldo
				if (anu < args[1] || anu == 'undefined') return m.warning(`Saldo Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}saldo, untuk mengecek Saldo mu!`)
				if (ani < args[1] || ani == 'undefined') return m.warning(`Saldo Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}saldo @tag untuk mengecek Saldo lawanmu`)
				var casinoo = setCasino(`${m.chat}`)
				casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
				casinoo.Y = users
				casinoo.nominal = parseInt(args[1])
				fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				var starGame = `*🎰 Game Casino 💰*\n\n• @${m.sender.replace("@s.whatsapp.net", "")}\n*Menantang ⚔️*\n• ${args[0]}\n\nDengan Nominal: *Rp ${parseInt(args[1])}*\n${args[0]}\n_Silahkan Pilih Opsi_`
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Yes\",\"id\":\"Y\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"No\",\"id\":\"N\"}`
				}]
				vreden.sendButtonText(m.chat, button, starGame, bots.footer, m)
			}
			break
			case 'delcasino':
				if (fs.existsSync('./database/casino/' + m.chat + '.json')) {
					var csn = JSON.parse(fs.readFileSync('./database/casino/' + m.chat + '.json'))
					if (csn.Z.includes(m.sender)) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else if (csn.Y.includes(m.sender)) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else if (isAdmins) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else if (isCreator) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else {
						m.reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
					}
				} else {
					m.reply('Tidak ada sesi yang berlangsung')
				}
				break
				
					case 'jadian': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				vreden.jadian = vreden.jadian ? vreden.jadian : {}
				let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
				if (!user) return m.warning(`*Tag/Reply Seseorang!*\n\nContoh:\n${prefix + command} @0`)
				if (user === m.sender) return reply("Anyingg mawunya jadian sama diri sendiri 😂")
				if (user === botNumber) return reply("😓Aku hanya sebuah bot maaf")
				let pasangan = usersdb[user].pacar
				let pasangan2 = usersdb[m.sender].pacar
				if (pasangan2 === user) {
					reply(`Loee kan udah jadian smaa dia 😑`)
				} else if (pasangan) {
					reply(`Target wes duwe pacar mbokk🥶\n\n@${pasangan.split("@")[0]} ayangmu mo diambil🙈`)
				} else if (pasangan2) {
					reply(`Hayoloo mo selingkuh🙈\n\n@${pasangan2.split("@")[0]} tengok nihh kelakuan ayangmu🤢`)
				} else {
					let ktnmbk = ["Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.", "Aku baru sadar ternyata selama ini kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?", "Aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.", "Aku boleh kirim CV ke kamu nggak? Soalnya aku mau ngelamar jadi pacar.", "Aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?", "Aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku?", "Aku ingin bilang sesuatu. Udah lama aku suka sama aku, tapi aku nggak berani ngomong. Jadi, kuputuskan untuk WA saja. Aku pengin kamu jadi pacarku.", "Aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. Aku mencintaimu, maukah kamu menjadi pacarku?", "Aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. Maukah kau jadi pacarku?", "Aku mau chat serius sama kamu. Selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. Kalau nggak keberatan, kamu mau jadi pacarku?", "Aku melihatmu dan melihat sisa hidupku di depan mataku.", "Aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.", "Aku menyukaimu dari dulu. Kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. Akan sempurna jika kamu yang menjadi spesial di hati.", "Aku naksir banget sama kamu. Maukah kamu jadi milikku?", "Aku nggak ada ngabarin kamu bukan karena aku gak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. Mungkin kamu akan kaget mendengarnya. Selama ini aku menyukaimu.", "Aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. Aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. Aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.", "Aku nggak tahu sampai kapan usiaku berakhir. Yang aku tahu, cintaku ini selamanya hanya untukmu.", "Aku sangat menikmati waktu yang dihabiskan bersama hari ini. Kita juga sudah lama saling mengenal. Di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.", "Aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. Namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. Maukah kamu menjadi kekasihku?", "Aku siapkan mental untuk hari ini. Kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.", "Aku tahu kita gak seumur, tapi bolehkan aku seumur hidup sama kamu?", "Aku tahu kita sudah lama sahabatan. Tapi nggak salah kan kalau aku suka sama kamu? Apa pun jawaban kamu aku terima. Yang terpenting itu jujur dari hati aku yang terdalam.", "Aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. Jika kau mengerti akan kode ini maka kita akan bersama.", "Aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.", "Apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. Karena berada di sampingmu, anugerah terindah bagiku. Jadilah kekasihku, hey kamu.", "Atas izin Allah dan restu mama papa, kamu mau nggak jadi pacarku?", "Bagaimana kalau kita jadi komplotan pencuri? Aku mencuri hatimu dan kau mencuri hatiku.", "Bahagia itu kalau aku dan kamu telah menjadi kita.", "Besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. Biar aku ada kerjaan buat selalu mikirin kamu.", "Biarkan aku membuatmu bahagia selamanya. Kamu hanya perlu melakukan satu hal: Jatuh cinta denganku.", "Biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. Biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!", "Biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?", "Bisakah kamu memberiku arahan ke hatimu? Sepertinya aku telah kehilangan diriku di matamu.", "Bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. Dijawab ya.", "Caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. Aku mau kamu jadi milikku.", "Cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.", "Cintaku ke kamu tuh kayak angka 5 sampai 10. Nggak ada duanya. Aku mau kamu jadi satu-satunya wanita di hatiku.", "Cowok mana yang berani-beraninya nyakitin kamu. Sini aku obati, asal kamu mau jadi pacar aku.", "Hai, kamu lagi ngapain? Coba deh keluar rumah dan lihat bulan malam ini. Cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. Gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?", "Hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. Senyummu menerangi hidupku dan semua kegelapan menghilang. Maukah kamu menjadi milikku?", "Ini bukan rayuan, tapi ini yang aku rasakan. Aku ingin bertukar tulang denganmu. Aku jadi tulang punggungmu, kamu jadi tulang rusukku. Jadian yuk!", "Ini cintaku, ambillah. Ini jiwaku, gunakan itu. Ini hatiku, jangan hancurkan. Ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.", "Izinkan aku mengatakan sesuatu yang menurutku sangat penting. Hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. Tetaplah di sana dan jadilah kekasihku. Mau?", "Jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. Biarkan aku melakukannya sekarang.", "Kalau aku matahari, kamu mau nggak jadi langitku? Biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.", "Kalau kamu membuka pesan ini, berarti kamu suka sama aku. Kalau kamu membalas pesan ini, artinya kamu sayang sama aku. Kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. Kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.", "Kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.", "Kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. Kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. Aku ingin kamu selalu bersamaku. Aku mencintaimu.", "Kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.", "Kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. Maukah kamu jadi pacar aku?", "Kamu kenal Iwan nggak? Iwan to be your boy friend.", "Kamu mau nggak jadi matahari di kehidupanku? Kalau mau, menjauhlah 149.6 juta KM dari aku sekarang!", "Kamu nggak capek HTS-an sama aku? Aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. Kita pacaran aja, yuk?", "Kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. Iya, aku.", "Kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. Apakah kamu akan membiarkan aku menjadi orangnya?", "Kamu tahu enggak kenapa aku ngambil jurusan elektro? Karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.", "Kamu tahu kenapa hari ini aku menyatakan semua ini padamu? Karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.", "Kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?", "Kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. Aku mau kamu jadi milikku.", "kepada cewek incaran bukanlah perkara yang mudah. Ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. Selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.", "Ketika aku bertemu denganmu, aku tak peduli dengan semuanya. Namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. Dan apakah ini cinta?", "Ketika engkau memandangku, engkau akan melihat fisikku. Tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.", "Ketika Hawa tercipta buat sang Adam, begitu indah kehidupan mereka izinkan aku menjadi sang Adam/Hawa buatmu karena aku sangat mencintaimu.", "Ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.", "Kita udah saling tahu masa lalu masing-masing. Tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. Mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?", "Ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. Resah jika kamu tak menjadi milikku selamanya.", "Lebih spesial dari nasi goreng, lebih indah dari purnama. Ya, jika kamu yang temani akhir hidupku.", "Maaf sebelumnya karena cuma bisa bilang lewat WA. Sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. Mau?", "Makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. Sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.", "Makan tahu bumbu petis. Merenung sambil makan buah duku. Aku bukan lelaki yang romantis. Namun, maukah kau jadi pacarku?", "Makasih, ya, selama ini sudah mau temani aku. Entah itu dalam suka ataupun duka. Tapi sekarang aku mau kamu berubah. Aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.", "Malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.", "Mataku mencarimu ketika kamu tidak ada. Hatiku sakit ketika aku tidak menemukanmu. Kamu adalah alasan untuk semua kebahagiaanku dan tanpamu hidupku akan sangat membosankan. Maukah kamu terus bersamaku?", "Mau jadi pacarku nggak, lagi gabut nih. Coba dulu 1 bulan kalau nyaman lanjut deh.", "Menjadi teman memang menyenangkan. Akan lebih membahagiakan jika kamu menjadi milikku.", "Meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. Tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - Zarry Hendrik", "Meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. Hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.", "Mungkin aku bukan Obama, tapi aku senang kalau bisa manggil kamu, o sayang. Kamu mau nggak mulai saat ini aku panggil seperti itu?", "Mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. Tapi satu yang aku sanggup, membuatmu bahagia. Izinkan aku membuktikannya, ya!", "Neng, bakar-bakaran yuk! | Bakar apa? | Kita bakar masa lalu dan buka lembaran baru dengan cinta kita.", "Nggak perlu basa basi. Kita udah kenal lama, aku suka kamu apa adanya. Jadian yuk!", "Pepatah mengatakan, empat sehat lima sempurna. Namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.", "Saatnya aku mengungkapkan perasaan yang terdalam kepadamu. Aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.", "Saking jatuh cintanya aku sama kamu. Mendengar kamu kentut aja aku sudah bahagia.", "Satu tambah satu sama dengan dua. Aku tanpamu nggak bisa apa-apa. Satu dua tiga sepuluh. Aku maunya kamu jadi pacarkuh.", "Secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.", "Sejak kenal kamu, bawaannya pengin belajar terus. Belajar jadi yang terbaik. Untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?", "Senjata bertuah amatlah sakti. Kalah oleh iman nan hakiki. Maukah kau jadi orang yang aku kasihi? Aku janji cintaku sampai mati.", "Seseorang bermimpi tentangmu setiap malam. Seseorang tidak bisa bernapas tanpamu, kesepian. Seseorang berharap suatu hari kau akan melihatnya. Seseorang itu adalah aku.", "Setelah hari berlalu, aku yakin kamu pilihanku.", "Setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. Aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. Aku mencintaimu.", "Suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. Akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. Perempuan itu adalah kamu.", "Suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?", "Tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.", "Tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. Ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. Apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.", "Tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.", "Tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. Itu adalah kamu.", "Telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. Karena aku mau kamu jadi pacar aku?", "Tidak peduli seberapa sederhanya dan ketidakjelasan kamu. Tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. Aku mau kamu jadi pacarku.", "Untuk apa memajang foto berdua? Yang aku mau fotomu ada dalam buku nikahku kelak. Maukah kamu jadi pacarku?"];
					let katakata = await pickRandom(ktnmbk)
					let teks = `*Love Message...*\n\n@${m.sender.split("@")[0]}\n❤️❤️\n@${user.split("@")[0]}\n\n"${katakata}"`
					vreden.jadian[user] = [
						reply(teks),
						m.sender
					]
					reply(`Kamu baru saja mengajak @${user.split("@")[0]} jadian\n\n@${user.split("@")[0]} silahkan beri keputusan🎉\n${prefix}terima\n${prefix}tolak`)
				}
			}
			break
			case 'terima': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (vreden.jadian[m.sender]) {
					let user = vreden.jadian[m.sender][1]
					usersdb[user].pacar = m.sender
					usersdb[m.sender].pacar = user
					reply(`Horeee🎉🎉\n\n${m.sender.split("@")[0]} jadian dengan\n❤️ ${user.split("@")[0]}\n\nSemoga langgeng 🙈😋`)
					delete vreden.jadian[m.sender]
				} else {
					reply("Gak ada yang nembak lu 😂")
				}
			}
			break
			case 'tolak': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (vreden.jadian[m.sender]) {
					let user = vreden.jadian[m.sender][1]
					reply(`@${user.split("@")[0]} ditolak ngabb 😓`)
					delete vreden.jadian[m.sender]
				} else {
					reply("Gak ada yang nembak lu 😂")
				}
			}
			break
			case 'putus': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				let pasangan = usersdb[m.sender].pacar
				if (pasangan) {
					usersdb[m.sender].pacar = ""
					usersdb[pasangan].pacar = ""
					reply(`Kamu putus sama @${pasangan.split("@")[0]} 😓🤔`)
				} else {
					reply("Lu jomblo ngapain putus🥸")
				}
			}
			break
			case 'cekpacar': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					if (!user) return m.warning(`*Tag/Reply Seseorang!*\n\nContoh:\n${prefix + command} @0`)
					let pasangan = usersdb[user].pacar
					if (pasangan) {
						reply(`@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`)
					} else {
						reply(`@${user.split("@")[0]} masih jomblo 😋`)
					}
				} catch (error) {
					reply(`@${user.split("@")[0]} tidak ada didalam database😞`)
				}
			}
			break
				//━━━━━━━━━━━━━━━[ CASE COMMAND OPEN AI ]━━━━━━━━━━━━━━━━━//
							

				case 'upscale': {
				const availableScales = [2, 4, 6];
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				try {
					let media = await quoted.download()
					let scale = availableScales.includes(parseInt(text)) ? parseInt(text) : 2;
					let tag = `@${m.sender.split("@")[0]}`;
					let result = await imageAi.upscale(media, scale);
					let versionInfo = `✨ *Source*: imageupscaler.com\n🔍 *Skala*: ${scale}`;
					await vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *Skala available*: ${availableScales.toString()}`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
				case'hd':
case'remini':
case'hdr': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let file = await tmpFiles(media)
					const { result } = await fetchJson(`https://api.vreden.web.id/api/artificial/hdr?url=${encodeURIComponent(file)}&pixel=4`)
					const teks = `🌟 *Action*: ${command.toUpperCase()}\n📩 *Request by*: @${m.sender.split("@")[0]}\n✨ *Source*: api.vreden.web.id\n🔍 *Skala*: 4\n📁 *Size*: ${bytesToSize(result.data.filesize)}\n🖼️ *Jenis*: ${result.data.imagemimetype}\n📏 *Skala available*: 4`;
					await vreden.sendMessage(m.chat, {
						image: { url: result.data.downloadUrls[0] },
						caption: teks,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
		        
            case 'ai':
case 'chatgpt': {
    if (!text) return m.reply('Iyaa kenafaa?');
    if (usersdb[m.sender].limit < 1) {
        return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`);
    }

    try {
        await vreden.sendPresenceUpdate("composing", m.chat);
        const FormData = require('form-data');
        let gpt;

        if (mime) {
            const fileBuffer = await quoted.download();
            const formData = new FormData();
            formData.append('file', fileBuffer, {
                filename: quoted.fileName || `filesdata.${mime.split("/")[1]}`,
                contentType: mime
            });
            formData.append('text', text);
            formData.append('sender', m.sender);

            const response = await axios.post('https://api.vreden.web.id/api/v1/vrexen', formData, {
                headers: formData.getHeaders(),
            });

            gpt = response.data.result;
        } else {
            const response = await axios.post('https://api.vreden.web.id/api/v1/vrexen', {
                text: text,
                sender: m.sender
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            gpt = response.data.result;
        }

        if (!gpt) return m.reply("⚠️ Gagal mendapatkan respon dari server.");
  
        if (gpt.isCode) {
            let button = [];
            for (let i = 0; i < gpt.sniplength; i++) {
                button.push({
                    name: "cta_copy",
                    buttonParamsJson: `{
                        "display_text": "Salin Code ${i + 1}",
                        "id": "123456789",
                        "copy_code": "${replaceName(gpt.snipheet[i])}"
                    }`
                });
            }

            await vreden.sendButtonDocument(m.chat, {
                document: fs.readFileSync('./media/file.pdf'),
                mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                fileLength: 10000000000,
                jpegThumbnail: await getBuffer("https://files.catbox.moe/sp1vys.png"),
                fileName: `ChatGPT 2.5`,
            }, button, gpt.text, bots.footer, m);

        } else {
            await m.sendForward(gpt.text);

            for (let action of gpt.flow) {
                await sleep(3000);
                if (action.type === "text") action.source = replaceName(action.source);

                if (action.type === "image") {
                    await vreden.sendMessage(m.chat, { image: { url: action.source }}, { quoted: m });
                }
                if (action.type === "video") {
                    await vreden.sendMessage(m.chat, { video: { url: action.source }}, { quoted: m });
                }
                if (action.type === "sticker-image") {
                    const buffer = await getBuffer(action.source);
                    await vreden.imgToSticker(m.chat, buffer, m, {
                        packname: `Sticker Maker\nNomor Bot :`,
                        author: `${bots.nameFull}\n${ownnomor}`
                    });
                }
                if (action.type === "sticker-video") {
                    const buffer = await getBuffer(action.source);
                    await vreden.vidToSticker(m.chat, buffer, m, {
                        packname: `Sticker Maker\nNomor Bot :`,
                        author: `${bots.nameFull}\n${ownnomor}`
                    });
                }
                if (action.type === "audio") {
                    await vreden.sendMessage(m.chat, {
                        audio: { url: action.source },
                        mimetype: 'audio/mpeg'
                    }, { quoted: m });
                }
            }
        }

    } catch (error) {
        await m.errorReport(util.format(error), command);
    }
}
break;

            
            case 'fluxai': {
   if (!text) return m.reply('Masukkan prompt nya\n\n*Example :* .fluxai Pemandangan Gunung')

   m.reply('Wait...')

   async function translateToEnglish(text) {
      try {
         const result = await translate(text, null, 'en')
         return result.translation
      } catch (error) {
         return text
      }
   }

   async function fluxAI(prompt) {
      try {
         const res = await axios.post('https://fluxai.pro/api/tools/fast', {
            prompt: prompt
         }, {
            headers: {
               'Content-Type': 'application/json',
               'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36',
               'Referer': 'https://fluxai.pro/fast-flux'
            },
            timeout: 30000,
            decompress: true
         })

         if (res.data?.ok === true && res.data?.data?.imageUrl) {
            return res.data.data.imageUrl
         }

         if (res.data?.data?.images?.[0]) {
            return res.data.data.images[0]
         }

         throw new Error('Yah Error')
      } catch (er) {
         throw new Error(`${er.message}`)
      }
   }

   try {
      const translatedPrompt = await translateToEnglish(text)
      const imageUrl = await fluxAI(translatedPrompt)

      await vreden.sendMessage(m.chat, { 
         image: { url: imageUrl }
      }, { quoted: m })

   } catch (error) {
      m.reply(`${error.message}`)
   }
}
break;


			case 'replicate': { // LAGI ERROR
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				if (!text) return m.warning(`Contoh : ${prefix+command} hello world`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await tmpFiles(media);
					let hasil = await imageAi.Replicate(anu, text, "3a4886dd3230e523600d3b555f651dc82aba3a4e");
					let id = hasil.id
					let url = hasil.generated
					await vreden.sendMessage(m.chat, {
						image: {
							url: url
						},
						caption: `*Replicate Image 🍟*`
					}, {
						quoted: m
					})
					await fs.unlinkSync(media);
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'ocr': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await tmpFiles(media);
					let result = await fetchJson(`https://api.ocr.space/parse/imageurl?apikey=K82806412188957&url=${anu}`)
					let teks = result.ParsedResults[0].ParsedText
					m.sendForward(teks)
					await fs.unlinkSync(media);
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'cococlip': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await CatBox(media);
					let result = await ai.cococlip(anu)
					m.sendForward(result)
					await fs.unlinkSync(media);
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'animediffusion4':
			case 'animedif4':
			case 'animediff4': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-anime-1.0.safetensors [4520e090]",
						prompt: text,
						style_preset: "fantasy-art",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion V4🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion3':
			case 'animedif3':
			case 'animediff3': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-anime-1.0.safetensors [4520e090]",
						prompt: text,
						style_preset: "digital-art",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion V3🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion2':
			case 'animedif2':
			case 'animediff2': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-anime-1.0.safetensors [4520e090]",
						prompt: text,
						style_preset: "anime",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion V2🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion':
			case 'animedif':
			case 'animediff': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "EimisAnimeDiffusion_V1.ckpt [4f828a15]",
						prompt: text,
						style_preset: "anime",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'diffusion':
			case 'stabledif':
			case 'diff': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]",
						prompt: text,
						style_preset: "3d-model",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Diffusion Image🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2anime':
			case 'txt2anime': {
				if (!q) return m.warning(`*Masukan Prompt!*\n\nContoh:\n${prefix + command} girls beautiful`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await imageAi.sdxlAnime(q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.data.url
						},
						caption: `Diffusion Anime 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2waifu':
			case 'txt2waifu': {
				if (!q) return m.warning(`*Masukan Prompt!*\n\nContoh:\n${prefix + command} girls beautiful`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await imageAi.sdxlWaifu(q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.data.url
						},
						caption: `Diffusion Waifu 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2emoji':
			case 'txt2emoji': {
				if (!q) return m.warning(`*Masukan Prompt!*\n\nContoh:\n${prefix + command} girls beautiful`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await imageAi.sdxlEmoji(q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.data.url
						},
						caption: `Emoji Generator 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2img':
			case 'txt2img': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				const input_data = await imageAi.listModels();
				const samplr = await imageAi.listSampler();
				const styler = await imageAi.getModels();
				let [urutan, tema] = text.split("|")
				try {
					let data = input_data.map((item, index) => ({
						title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
						id: item
					}));
					if (!urutan) return m.reply(`Masukan models!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (isNaN(urutan)) return m.reply(`Masukan Models Yang Valid!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (urutan > data.length) return m.reply(`Masukan Models Yang Valid!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (!tema) return m.warning(`*Masukan Prompt!*!\n\nContoh:\n${prefix + command} [nomor]|[prompt]`)
					let out = data[urutan - 1].id
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					const samp = await pickRandom(samplr)
					const sty = await pickRandom(styler[10].enum)
					const params = {
						model: out,
						prompt: tema,
						style_preset: sty,
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: samp,
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `*Image Effect*\n${out} 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
			
			case 'wink': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tag = `@${m.sender.split("@")[0]}`
					let versionInfo = `✨ *Source*: vyro.ai`;
					let media = await quoted.download()
					let prosess = await remini(media, "enhance");
					let proses = await remini(prosess, "enhance");
					await vreden.sendMessage(m.chat, {
						image: proses,
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *Enhance Persent*: 400%`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dehaze':
			case 'recolor': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tag = `@${m.sender.split("@")[0]}`
					let versionInfo = `✨ *Source*: vyro.ai`;
					let media = await quoted.download()
					let proses = await imageAi.processing(media, command);
					await vreden.sendMessage(m.chat, {
						image: proses,
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *${kapital(command)} Persent*: 150%`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bingimage':
			case 'bingimg': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning('Masukan Gambarannya\nContoh:\n1girl, with glasses, in beach')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let img = await fetchJson(`https://anabot.my.id/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
					let imgs = img.image
					let c = 0
					for (let ims of img.image) {
						if (c == 0) await vreden.sendMessage(m.chat, {
							image: {
								url: ims
							},
							caption: `*Bing Generator ✨*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
						}, {
							quoted: m
						})
						else await vreden.sendMessage(m.sender, {
							image: {
								url: ims
							}
						}, {
							quoted: m
						})
						c += 1
						await sleep(2000)
					}
				} catch (error) {
					try {
						let img = await fetchJson(`https://anabot.my.id/api/ai/bingAi?prompt=${text}&apikey=uhnKkdVjsVeICuI`)
						let imgs = img.image
						let c = 0
						for (let ims of img.image) {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: ims
								},
								caption: `*Bing Generator ✨*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: ims
								}
							}, {
								quoted: m
							})
							c += 1
							await sleep(2000)
						}
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'aidraw':
			case 'aidrawing':
			case 'image':
			case 'img':
			case 'chatgptimg':
			case 'openaiimg':
			case 'aiimg': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning('Masukan Gambarannya\nContoh:\n1 girl, with glasses, in beach')
				if (budy.match(`nigga|sexy|colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-photoreal-2.0.safetensors [fdcf65e7]",
						prompt: text,
						style_preset: "3d-model",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await imageAi.txt2img(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `AI Generator Image🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'faceswap': { //LAGI ERROR
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!args[0]) return m.warning(`*Masukan Link Source!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				if (!args[1]) return m.warning(`*Masukan Link Target!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				if (!isUrl(args[0])) return m.warning(`*Masukan Link Source Muka Yang Benar!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				if (!isUrl(args[1])) return m.warning(`*Masukan Link Muka Target Yang Benar!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						sourceUrl: args[0],
						targetUrl: args[1]
					};
					const generate = await imageAi.faceSwap(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Image Effect FaceSwap 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'img2img': { //LAGI ERROR
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Balas Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				const input_data = await imageAi.listModels();
				const samplr = await imageAi.listSampler();
				const styler = await imageAi.getModels();
				let media = await vreden.downloadAndSaveMediaMessage(quoted);
				let link = await CatBox(media);
				let [urutan, tema] = text.split("|")
				try {
					let data = input_data.map((item, index) => ({
						title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
						id: item
					}));
					if (!urutan) return m.reply("Masukan Models!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (isNaN(urutan)) return m.reply("Masukan Models Yang Valid!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (urutan > data.length) return m.reply("Masukan Models Yang Valid!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (!tema) return m.warning("*Masukan Teks!*!\n\nContoh:\n.img2img [nomor]|[query]")
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					let out = data[urutan - 1].id
					let imgdata = media.toString('base64')
					const samp = await pickRandom(samplr)
					const sty = await pickRandom(styler[10].enum)
					const params = {
						imageUrl: link,
						imageData: imgdata,
						model: out,
						prompt: tema,
						denoising_strength: 0.7,
						style_preset: sty,
						steps: 20,
						cfg_scale: 7,
						upscale: true,
						sampler: samp,
						width: 1024,
						height: 1024
					};
					const generate = await imageAi.transfrom(params);
					let result
					do {
						result = await imageAi.getJobs(generate.job);
					} while (result.status !== "succeeded")
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Image Effect ${out} 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'autoai': {
				vreden.autoai = vreden.autoai ? vreden.autoai : {}
				if (args[0] === "-start") {
					if (vreden.autoai[m.sender]) return m.reply(`Udah on`)
					vreden.autoai[m.sender] = true
					m.sendForward("*[ </> ]* Berhasil Diaktifkan")
				} else if (args[0] === "-stop") {
					if (!vreden.autoai[m.sender]) return m.reply(`Udah off`)
					vreden.autoai[m.sender] = false
					m.sendForward(`Bye byee ${usersdb[m.sender].nama}👋`)
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} -start\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} -stop\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'bot':
			case 'vreden': {
				const uploadFile = {
					upload: vreden.waUploadToServer
				};
				var imageMessage = await prepareWAMessageMedia({
						image: {
							url: "https://telegra.ph/file/eb4abdae5dbb792e3e4d9.jpg"
						},
					},
					uploadFile,
				);
				const product = {
					productImage: imageMessage.imageMessage,
					productId: "7066960336725723",
					title: "I'm Here Mastahhh 🍟",
					description: "Nyari Apa Dek?",
					currencyCode: "IDR",
					priceAmount1000: "30000000",
					productImageCount: 1,
				};
				const productData = {
					product: product,
					businessOwnerJid: "6287824695047@s.whatsapp.net",
				};
				const productMessage = {
					productMessage: productData
				};
				var response = await generateWAMessageFromContent(
					m.chat,
					proto.Message.fromObject(productMessage),
					m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo
						}
					} : {
						quoted: m
					},
				);
				await vreden.relayMessage(m.chat, response.message, {
					messageId: response.key.id,
				});
			}
			break
			case 'simi':
			case 'simisimi':
			case 'sim':
			case 'gpt': {
				try {
					if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
					if (!text) return m.reply('Iyaa kenafaa?')
					let result = await fetchJson(`https://api.vreden.web.id/api/simi?query=${encodeURIComponent(text)}&lang=id`)
					const gpt = result.result
					m.sendForward(gpt)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break		
			case'toghibli':
			case 'jadighibli': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await tmpFiles(media)
					vreden.sendMessage(m.chat, {
						image: {
							url: `https://fgsi1-restapi.hf.space/api/ai/toGhibli?apikey=fgsiapi-ccb4d1c-6d&url=${encodeURIComponent(anu)}`
						},
						caption: 'Done Jadi Ghibli Ayangg >///<'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case'toanime':
			case 'jadianime': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await tmpFiles(media)
					vreden.sendMessage(m.chat, {
						image: {
							url: `https://fgsi1-restapi.hf.space/api/ai/toAnime?apikey=fgsiapi-ccb4d1c-6d&url=${encodeURIComponent(anu)}`
						},
						caption: 'Done Jadi Anime Ayangg >///<'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
		
			//━━━━━━━━━━━━━━━[ CASE COMMAND DOWNLOADER ]━━━━━━━━━━━━━━━━━//
			case'yt':
			case'play':
			case 'ytplay': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} DJ melodi kane`)
				if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				var search = await ytdl.search(text);
				var data = search.results.filter(objek => objek.type === "video")
				var convert = data[0]
				if (!convert) return m.warning('Video/Audio Tidak Ditemukan')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
  "title": "Select Type",
  "sections": [
    {
      "title": "Download Audio YouTube",
      "rows": [
        {
          "header": "Audio Download (128kbps)",
          "title": "YouTube Audio Medium Quality",
          "id": ".ytmp3 ${convert.url} 128"
        },
        {
          "header": "Audio Download (192kbps)",
          "title": "YouTube Audio High Quality",
          "id": ".ytmp3 ${convert.url} 192"
        },
        {
          "header": "Audio Download (256kbps)",
          "title": "YouTube Audio Very High Quality",
          "id": ".ytmp3 ${convert.url} 256"
        },
        {
          "header": "Audio Download (320kbps)",
          "title": "YouTube Audio Ultra Quality",
          "id": ".ytmp3 ${convert.url} 320"
        }
      ]
    },
    {
      "title": "Download Document Mp3 YouTube",
      "rows": [
        {
          "header": "MP3 File Download (128kbps)",
          "title": "YouTube MP3 File Medium Quality",
          "id": ".ytdoc ${convert.url} 128"
        },
        {
          "header": "MP3 File Download (192kbps)",
          "title": "YouTube MP3 File High Quality",
          "id": ".ytdoc ${convert.url} 192"
        },
        {
          "header": "MP3 File Download (256kbps)",
          "title": "YouTube MP3 File Very High Quality",
          "id": ".ytdoc ${convert.url} 256"
        },
        {
          "header": "MP3 File Download (320kbps)",
          "title": "YouTube MP3 File Ultra Quality",
          "id": ".ytdoc ${convert.url} 320"
        }
      ]
    },
    {
      "title": "Download Video YouTube",
      "rows": [
        {
          "header": "Video Download (360p)",
          "title": "YouTube Video High Quality",
          "id": ".ytmp4 ${convert.url} 360"
        },
        {
          "header": "Video Download (480p)",
          "title": "YouTube Video Very High Quality",
          "id": ".ytmp4 ${convert.url} 480"
        },
        {
          "header": "Video Download (720p)",
          "title": "YouTube Video Ultra Quality",
          "id": ".ytmp4 ${convert.url} 720"
        }
      ]
    }
  ]
}`
					}]
					let caption = `*${convert.title}*\n\n*⌬ Ext* : Play\n*⌬ ID* : ${convert.videoId}\n*⌬ Durasi* : ${convert.timestamp}\n*⌬ Upload* : ${convert.ago}\n*⌬ Link* : ${convert.url}\n\n\n_*Choose your type...*_`
					await vreden.sendButtonCatalog(m.chat, {
					image: {
					    url: convert.thumbnail
					},
					title: "YouTube Play - Bot",
					price: 1000
				    }, button, caption, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case'ytstalk':
			case 'youtubestalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} ariyopratama`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await ytdl.channel(text)
					let post = await tools.convertAngka(`${result.statistics.videoCount}`)
					let subscribers = await tools.convertAngka(`${result.statistics.subscriberCount}`)
					let views = await tools.convertAngka(`${result.statistics.viewCount}`)
					vreden.sendMessage(m.chat, {
						image: {
							url: result.image
						},
						caption: `*\`乂 YOUTUBE - STALK\`*\n\n*Nickname :* ${result.details.title}\n*Username :* ${result.details.customUrl}\n*Video :* ${post}\n*Subscribe :* ${subscribers}\n*Views :* ${views}\n*Bio :* \n${result.details.description}`
					}, {
						quoted: m
					})
				} catch (error) {
					m.reply("*User name tidak ditemukan!*")
				}
			}
			break
			case 'getvideo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Contoh : ${prefix + command} 1`)
				if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
				let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
				if (!urls) return m.warning(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp4(urls[text - 1])
			}
			break
			case 'getmusic': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Contoh : ${prefix + command} 1`)
				if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
				let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
				if (!urls) return m.warning(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp3(urls[text - 1])
			}
			break
			case 'ytmp3':
			case 'yta':
			case 'ytaudio': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return m.warning('Link Kamu Salah!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp3(args[0], args[1])
			}
			break
			case 'ytmp3doc':
			case 'ytdoc':
			case 'ytdocument': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return m.warning('Link Kamu Salah!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeDoc(args[0], args[1])
			}
			break
			case 'ytmp4':
			case 'ytv':
			case 'ytvideo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return m.warning('Link Kamu Salah!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp4(args[0], args[1])
			}
			break
			case 'fbdl':
			case 'facebook':
			case 'fb': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan url link!*\n\nContoh:\n${prefix + command} https://facebook.com/reels/`)
				if (!isUrl(args[0])) return m.warning(`Apakah Itu Terlihat Seperti Link?`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await downloader.snapsave(text)
					vreden.sendMessage(m.chat, {
						video: {
							url: anu.links["Download High Quality"]
						},
						caption: '*SnapSave Facebook 🚀*'
					}, {
						quoted: m
					})
				} catch (error) {
					try {
						let anu = await downloader.snapsavev2(text)
						vreden.sendMessage(m.chat, {
							video: {
								url: anu.result[0].url
							},
							caption: '*SaveFrom Facebook 🚀*'
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'fb2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan url link!*\n\nContoh:\n${prefix + command} https://facebook.com/reels/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await downloader.snapsavev2(text)
					vreden.sendMessage(m.chat, {
						video: {
							url: anu.result[0].url
						},
						caption: '*[ V2 ]* Facebook ✅'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'twitter':
			case 'twittdl':
			case 'twdl': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan url link!*\n\nContoh:\n${prefix + command} https://twitter.com/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let twitter = await downloader.twiterdl(text)
					let buffer = await getBuffer(twitter.data.downloads[1].url)
					await vreden.sendMessage(m.chat, {
						video: buffer,
						caption: `*Twitter Downloader🚀*\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'capcut': {
				if (usersdb[m.sender].limit < 1) return m.reply(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan capcut link!*\n\nTutorial:\n${prefix + command} *url*\n\nContoh:\n${prefix + command} https://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await downloader.capcutdl(text)
					vreden.sendMessage(m.chat, {
						video: {
							url: `https://ssscap.net${anu.originalVideoUrl}`
						},
						caption: `*${anu.title}*\n\n- Desk: ${anu.description}\n- Digunakan: ${anu.usage}\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan links Insta!*\n\nContoh:\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				InstagramMp4(text)
			}
			break	
			
			case 'ttget': {
				if (!text) return m.warning(`Contoh : ${prefix + command} 1`)
				if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
				let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
				if (!urls) return m.warning(`Mungkin pesan yang anda reply tidak mengandung result tiktok search`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				TikTokMp4(urls[text - 1])
			}
			break
			case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Query Links!*\n\nContoh:\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				TikTokMp4(text)
			}
			
			break
			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Query Links!*\n\nContoh:\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.web.id/api/tiktok?url=${text}`)
					let audio = anu.result.music_info.url
					vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					try {
						const data = await tiktokdl(text)
						vreden.sendMessage(m.chat, {
							audio: {
								url: data.music
							},
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Query Links!*\n\nContoh:\n${prefix+command} url`)
				if (!text.includes('drive')) return m.warning(mess.error.input)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let res = await downloader.GDriveDl(text)
					if (res.error) return m.reply("Link Invalid!")
					vreden.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*</> GOOGLE DRIVE </>*

*Nama:* ${res.fileName}
*Size:* ${res.fileSize}
*Type:* ${res.mimetype}
`,
						contextInfo: {
							mentionedJid: [m.sender],
							externalAdReply: {
								title: `Google Drive🚀`,
								previewType: "PHOTO",
								thumbnailUrl: `https://files.catbox.moe/a6wcrg.jpg`,
								sourceUrl: text
							}
						}
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'mediafire':
			case 'mfire':
			case 'mfdl': {
				if (usersdb[m.sender].limit < 1) return m.tolak(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
				if (!text) return m.warning(`*Masukan Query Links!*\n\nContoh:\n${prefix+command} url`)
				if (!isUrl(text)) return m.warning(mess.error.input)
				if (!text.includes('mediafire.com')) return m.warning(mess.error.input)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let url = text.replace("https://www.mediafire.com/file/", "https://www.mediafire.com/download/")
				try {
					var data = await downloader.mediafireDl(url)
					fileNama = decodeURIComponent(data[0].nama)
					var document = await getBuffer(data[0].link)
					if (data[0].mime.includes('mp4')) {
						vreden.sendMessage(m.chat, {
							document: document,
							fileName: fileNama,
							mimetype: 'video/mp4',
							caption: `*</> MEDIAFIRE DOWN </>*

*Name* : ${data[0].nama}
*Size* : ${data[0].size}
*Jenis* : ${data[0].mime}
`
						}, {
							quoted: m
						})
					} else if (data[0].mime.includes('mp3')) {
						vreden.sendMessage(m.chat, {
							document: document,
							fileName: fileNama,
							mimetype: 'audio/mp3'
						}, {
							quoted: m
						})
					} else {
						vreden.sendMessage(m.chat, {
							document: document,
							fileName: fileNama,
							mimetype: 'application/' + data[0].mime,
							caption: `*</> MEDIAFIRE DOWN </>*

*Name* : ${data[0].nama}
*Size* : ${data[0].size}
*Jenis* : ${data[0].mime}
`,
							contextInfo: {
								mentionedJid: [m.sender],
								externalAdReply: {
									title: `MediaFire🔥`,
									previewType: "PHOTO",
									thumbnailUrl: `https://files.catbox.moe/p3bgsv.jpg`,
									sourceUrl: text
								}
							}
						}, {
							quoted: m
						})
					}
				} catch (error) {
					try {
						var {
							result
						} = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${url}`)
						fileNama = decodeURIComponent(result[0].nama)
						var document = await getBuffer(result[0].link)
						if (result[0].mime.includes('mp4')) {
							vreden.sendMessage(m.chat, {
								document: document,
								fileName: fileNama,
								mimetype: 'video/mp4'
							}, {
								quoted: m
							})
						} else if (result[0].mime.includes('mp3')) {
							vreden.sendMessage(m.chat, {
								document: document,
								fileName: fileNama,
								mimetype: 'audio/mp3'
							}, {
								quoted: m
							})
						} else {
							vreden.sendMessage(m.chat, {
								document: document,
								fileName: fileNama,
								mimetype: 'application/' + result[0].mime
							}, {
								quoted: m
							})
						}
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'gitclone': {
				let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
				if (!text) return m.warning(`*Masukan Query Links!*\n\nContoh:\n${prefix+command} url`)
				if (!regx.test(text)) return m.warning('Linknya salah')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let [, usr, repo] = text.match(regx) || []
					let repos = repo.replace(/.git$/, '')
					let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
					let namafile = (await fetch(hasdl, {
						method: 'HEAD'
					})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
					vreden.sendMessage(m.chat, {
						document: {
							url: hasdl
						},
						mimetype: 'application/zip',
						fileName: namafile
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND PANEL ]━━━━━━━━━━━━━━━━━//
			case 'unli':
 if (!isCreator) {
 if (usersdb[m.sender].coins < parseInt(`${ukuran}000`)) {
 return m.reply(`*Coins kamu tidak cukup untuk create ${command.toUpperCase()} panel*\n\n🪙 ${ukuran}000 Coins = ${command.toUpperCase()}`);
 }
 }
 
 if (!text) {
 return m.warning(`*Masukan nama/nomor yang valid!*\n\n*Contoh* :\n${prefix + command} bot,@0`);
 }
 
 let input = text.split(",");
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[1] ? input[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
 
 if (!input[0] || (!input[1] && !users)) {
 return m.warning(`*Masukan nama/nomor yang valid!*\n\n*Contoh* :\n${prefix + command} bot,@0`);
 }
 
 let onWA = await vreden.onWhatsApp(users);
 if (onWA.length < 1) {
 return m.warning("Penerima tidak ada di WhatsApp");
 }
 
 try {
 const email = input[0] + '@gmail.com';
 const username = input[0];
 const password = crypto.randomBytes(5).toString('hex');
 const memo = "0";
 const cpu = "0";
 const disk = "0";
 
 const userData = await panel.createUser(email, username, password);
 
 if (!userData.errors) {
 const eggData = await panel.getEggStartupCommand();
 const startup_cmd = eggData.attributes.startup;
 
 const serverData = await panel.createServer(`${username} ${command.toUpperCase()}`, userData.attributes.id, startup_cmd, memo, cpu, disk);
 
 if (serverData.errors) {
 return m.reply(JSON.stringify(serverData.errors[0], null, 2));
 }
 
 let buypanel = '';
 if (!isCreator) {
 usersdb[m.sender].coins -= parseInt(`${ukuran}000`);
 buypanel = `- Bayar : ${ukuran}000 Coins\n`;
 }
 
 let teks = `*</> SERVERS CREATED </>*
*User Info* :
- ID : ${userData.attributes.id}
- Username : ${userData.attributes.username}
- Email : ${userData.attributes.email}
- Tags : @${users.split("@")[0]}
${buypanel}
*Server Info* :
- ID : ${serverData.attributes.id}
- Identifier : ${serverData.attributes.identifier}
- Name : ${serverData.attributes.name}
- Memory : ${serverData.attributes.limits.memory}
- Disk : ${serverData.attributes.limits.disk}
- CPU : ${serverData.attributes.limits.cpu}%
`;
 
 let button = [{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Check Here\",\"url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split('@')[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split('@')[0]}\"}`
 }];
 
 let buffer = await getBuffer("https://files.catbox.moe/2gansy.jpg");
 
 vreden.sendButtonDocument(m.chat, {
 document: fs.readFileSync('./media/file.pdf'),
 mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
 fileLength: 10000000000,
 pageCount: 77,
 jpegThumbnail: buffer,
 fileName: `Pterodactyl Panel`,
 }, button, teks, "Data dikirim di private chat", m);
 
 let teks2 = `*</> SERVERS LOGIN </>*
Email : ${email}
Username : ${userData.attributes.username}
Password : ${password}
Login : ${ptero.links.replace("https://", "")}
`;
 
 let button2 = [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
 }, 
 {
 "name": "cta_copy",
 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
 },
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${ptero.links}\",\"merchant_url\":\"${ptero.links}\"}`
 }
 ];
 
 vreden.sendButtonText(users, button2, teks2, "Data hanya dikirim 1x", m);
 } else {
 m.reply(JSON.stringify(userData.errors[0], null, 2));
 }
 } catch (error) {
 await m.errorReport(util.format(error), command);
 }
break;
			case 'listusr': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let page = args[0] ? args[0] : '1'
				try {
					let response = await fetchJson(ptero.links + "/api/application/users?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + ptero.pltc
						}
					})
					let users = response.data
					let teks = `*</> LIST USERS PANEL </>*\n\n\n${"-".repeat(35)}\n`
					for (let user of users) {
						teks += `*Users Info* :
- ID : ${user.attributes.id}
- Name : ${user.attributes.first_name} ${user.attributes.last_name}
- Username : ${user.attributes.username}
- Email : ${user.attributes.email}
- Admin : ${user.attributes.root_admin}
- 2FA : ${user.attributes["2fa"]}

${"-".repeat(35)}
`
					}
					let txt = `*Page* : ${response.meta.pagination.current_page}/${response.meta.pagination.total_pages} pages
*Total* : ${response.meta.pagination.total}/${response.meta.pagination.per_page} server`
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${links.website}\",\"merchant_url\":\"${links.website}\"}`
					}]
					let buffer = await getBuffer("https://files.catbox.moe/f03qob.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Pterodactyl Panel`,
					}, button, teks, txt, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listsrv': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let page = args[0] ? args[0] : '1'
				try {
					let response = await fetchJson(ptero.links + "/api/application/servers?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + ptero.pltc
						}
					})
					let servers = response.data
					let teks = `*</> LIST SERVER PANEL </>*\n\n\n${"-".repeat(35)}\n`
					for (let server of servers) {
						teks += `*Servers Info* :
- ID : ${server.attributes.id}
- Identifier : ${server.attributes.identifier}
- Name : ${server.attributes.name}
- Desk : ${server.attributes.description}
- Suspend : ${server.attributes.suspended}

*Storage Info* :
- Memory : ${server.attributes.limits.memory == 0 ? "unlimited" : (server.attributes.limits.memory / 1000) + " GB"}
- Disk : ${server.attributes.limits.disk == 0 ? "unlimited" : (server.attributes.limits.disk / 1000) + " GB"}
- CPU : ${server.attributes.limits.cpu == 0 ? "unlimited" : server.attributes.limits.cpu + "%"}

${"-".repeat(35)}
`
					}
					let txt = `*Page* : ${response.meta.pagination.current_page}/${response.meta.pagination.total_pages} pages
*Total* : ${response.meta.pagination.total}/${response.meta.pagination.per_page} server`
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${links.website}\",\"merchant_url\":\"${links.website}\"}`
					}]
					let buffer = await getBuffer("https://files.catbox.moe/2gansy.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Pterodactyl Panel`,
					}, button, teks, txt, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addusr': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let input = text.split(",")
				let email = input[0]
				let username = input[1]
				let password = input[2]
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!email || !username || !password || !input[3] && !users) return m.warning(`*Masukan ${!email ? "email" : !username ? "username" : !password ? "password" : "penerima"} yang valid!*\n\n*Contoh* :\n${prefix + command} bot@gmail.com,bot,bot123,@0`)
				let onWA = await vreden.onWhatsApp(users)
				if (onWA.length < 1) return m.warning("Penerima tidak ada di WhatsApp")
				try {
					const userData = await panel.createUser(email, username, password);
					if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
					let teks = `*</> NEW USERS ADDED </>*

*User Info* :
- ID : ${userData.attributes.id}
- Username : ${userData.attributes.username}
- Email : ${userData.attributes.email}
- Admin : ${userData.attributes.root_admin}
- Tags : @${users.split("@")[0]}

`
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Check Here\",\"url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split`@`[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split`@`[0]}\"}`
					}]
					let buffer = await getBuffer("https://files.catbox.moe/2gansy.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Pterodactyl Panel`,
					}, button, teks, "Data dikirim di private chat", m)
					let teks2 = `*</> NEW USERS LOGIN </>*

Email : ${email}
Username : ${userData.attributes.username}
Password : ${password}
Login : ${ptero.links.replace("https://", "")}
`
					let button2 = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${ptero.links}\",\"merchant_url\":\"${ptero.links}\"}`
						}
					]
					vreden.sendButtonText(users, button2, teks2, "Data hanya dikirim 1x", m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addusradmin':
			case 'adp': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let input = text.split(",")
				let email = input[0]
				let username = input[1]
				let password = input[2]
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!email || !username || !password || !input[3] && !users) return m.warning(`*Masukan ${!email ? "email" : !username ? "username" : !password ? "password" : "penerima"} yang valid!*\n\n*Contoh* :\n${prefix + command} bot@gmail.com,bot,bot123,@0`)
				let onWA = await vreden.onWhatsApp(users)
				if (onWA.length < 1) return m.warning("Penerima tidak ada di WhatsApp")
				try {
					const adminData = await panel.createUser(email, username, password, true);
					if (adminData.errors) return m.reply(JSON.stringify(adminData.errors[0], null, 2));
					let teks = `*</> USERS ADMIN ADDED </>*

*User Info* :
- ID : ${adminData.attributes.id}
- Username : ${adminData.attributes.username}
- Email : ${adminData.attributes.email}
- Admin : ${adminData.attributes.root_admin}
- Tags : @${users.split("@")[0]}

`
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Check Here\",\"url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split`@`[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split`@`[0]}\"}`
					}]
					let buffer = await getBuffer("https://files.catbox.moe/2gansy.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Pterodactyl Panel`,
					}, button, teks, "Data dikirim di private chat", m)
					let teks2 = `*</> ADMIN PANEL LOGIN </>*

Email : ${email}
Username : ${adminData.attributes.username}
Password : ${password}
Login : ${ptero.links.replace("https://", "")}
`
					let button2 = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${ptero.links}\",\"merchant_url\":\"${ptero.links}\"}`
						}
					]
					vreden.sendButtonText(users, button2, teks2, "Data hanya dikirim 1x", m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addsrv': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let input = text.split(",")
				let name = input[0]
				let userid = input[1]
				let memo = input[2]
				let disk = input[3]
				let cpu = input[4]
				if (!name || !userid || !memo || !disk || !cpu) return m.warning(`*Masukan ${!name ? "name" : !userid ? "userId" : !memo ? "memory" : !disk ? "disk" : "cpu"} panel yang valid!*\n\n*Tutorial* :\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh* : ${prefix + command} bot,6,1200,1200,100`)
				if (isNaN(userid) || isNaN(memo) || isNaN(disk) || isNaN(cpu)) return m.warning(`*${isNaN(userid) ? "User ID" : isNaN(memo) ? "Memory" : isNaN(disk) ? "Disk" : "Cpu"} harus berupa angka!*\n\n*Tutorial* :\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh* : ${prefix + command} bot,6,1200,1200,100`)
				try {
					const eggData = await panel.getEggStartupCommand();
					const startup_cmd = eggData.attributes.startup
					let data = await panel.createServer(name, userid, startup_cmd, memo, cpu, disk)
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let teks = `*</> SERVERS ADDED </>*

*Server Info* :
- ID : ${data.attributes.id}
- Identifier : ${data.attributes.identifier}
- Name : ${data.attributes.name}
- Memory : ${data.attributes.limits.memory}
- Disk : ${data.attributes.limits.disk}
- CPU : ${data.attributes.limits.cpu}%

`
					let button = [{
						"name": "",
						"buttonParamsJson": ``
					}]
					let buffer = await getBuffer("https://files.catbox.moe/2gansy.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Pterodactyl Panel`,
					}, button, teks, "Server ditambahkan ke id user", m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'delsrv': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let srv = args[0];
				if (!srv) return m.reply('Silakan berikan *ID Server* yang ingin dihapus.');
				try {
					let res = await panel.deleteServer(srv);
					if (res.errors) return m.reply('⚠️ Server yang ditentukan tidak ditemukan. Silakan periksa ID dan coba lagi.');
					m.reply('✅ Server berhasil dihapus. Sampai jumpa!');
				} catch (error) {
					await m.errorReport(util.format(error), command);
				}
			}
			break;

			case 'delusr': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let usr = args[0];
				if (!usr) return m.reply('Silakan berikan *ID Pengguna* yang ingin dihapus.');
				try {
					let res = await panel.deleteUser(usr);
					if (res.errors) return m.reply('⚠️ Pengguna yang ditentukan tidak ditemukan. Silakan verifikasi ID dan coba lagi.');
					m.reply(`✅ Pengguna dengan ID *${usr}* berhasil dihapus dari sistem.`);
				} catch (error) {
					await m.errorReport(util.format(error), command);
				}
			}
			break;
			case 'startsrv':
			case 'stopsrv':
			case 'restartsrv': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let action = command.replace('srv', '')
				let srv = args[0]
				if (!srv) return m.reply('input *ID* from server')
				try {
					let data = await panel.manageServer(action, srv)
					m.reply(data)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '1gb':
			case '2gb':
			case '3gb':
			case '4gb':
			case '5gb':
			case '6gb':
			case '7gb':
			case '8gb':
			case '9gb':
			case '10gb':
			case '11gb':
			case '12gb':
			case '13gb':
			case '14gb':
			case '15gb':
			case '16gb':
			case '17gb':
			case '18gb':
			case '19gb':
			case '20gb':
			case '21gb':
			case '22gb':
			case '23gb':
			case '24gb':
			case '25gb':
			case '26gb':
			case '27gb':
			case '28gb':
			case '29gb':
			case '30gb':
			case '31gb':
			case '32gb':
			case '33gb':
			case '34gb':
			case '35gb':
			case '36gb':
			case '37gb':
			case '38gb':
			case '39gb':
			case '40gb':
			case '41gb':
			case '42gb':
			case '43gb':
			case '44gb':
			case '45gb':
			case '46gb':
			case '47gb':
			case '48gb':
			case '49gb':
			case '50gb': {
				const ukuran = command.replace("gb", "")
				if (!isCreator) {
					if (usersdb[m.sender].coins < `${ukuran}000`) return m.reply(`*Coins kamu tidak cukup untuk create ${command.toUpperCase()} panel*\n\n🪙 ${ukuran}000 Coins = ${command.toUpperCase()}`)
				}
				if (!text) return m.warning(`*Masukan nama/nomor yang valid!*\n\n*Contoh* :\n${prefix + command} bot,@0`)
				let input = text.split(",")
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!input[0] || !input[1] && !users) return m.warning(`*Masukan nama/nomor yang valid!*\n\n*Contoh* :\n${prefix + command} bot,@0`)
				let onWA = await vreden.onWhatsApp(users)
				if (onWA.length < 1) return m.warning("Penerima tidak ada di WhatsApp")
				try {
					const email = input[0] + '@gmail.com'
					const username = input[0]
					const password = crypto.randomBytes(5).toString('hex');
					const memo = `${ukuran}200`
					const cpu = ukuran * 2 * 10
					const disk = `${ukuran}200`
					const userData = await panel.createUser(email, username, password);
					if (!userData.errors) {
						const eggData = await panel.getEggStartupCommand();
						const startup_cmd = eggData.attributes.startup;

						const serverData = await panel.createServer(`${username} ${command.toUpperCase()}`, userData.attributes.id, startup_cmd, memo, cpu, disk);
						if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
						let buypanel
						if (!isCreator) {
							usersdb[m.sender].coins -= `${ukuran}000`
							buypanel = `- Bayar : ${ukuran}000 Coins\n`
						} else {
							buypanel = ``
						}
						let teks = `*</> SERVERS CREATED </>*

*User Info* :
- ID : ${userData.attributes.id}
- Username : ${userData.attributes.username}
- Email : ${userData.attributes.email}
- Tags : @${users.split("@")[0]}
${buypanel}
*Server Info* :
- ID : ${serverData.attributes.id}
- Identifier : ${serverData.attributes.identifier}
- Name : ${serverData.attributes.name}
- Memory : ${serverData.attributes.limits.memory}
- Disk : ${serverData.attributes.limits.disk}
- CPU : ${serverData.attributes.limits.cpu}%

`
						let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Check Here\",\"url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split`@`[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${botNumber.split`@`[0]}\"}`
						}]
						let buffer = await getBuffer("https://files.catbox.moe/2gansy.jpg")
						vreden.sendButtonDocument(m.chat, {
							document: fs.readFileSync('./media/file.pdf'),
							mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
							fileLength: 10000000000,
							pageCount: 77,
							jpegThumbnail: buffer,
							fileName: `Pterodactyl Panel`,
						}, button, teks, "Data dikirim di private chat", m)
						let teks2 = `*</> SERVERS LOGIN </>*

Email : ${email}
Username : ${userData.attributes.username}
Password : ${password}
Login : ${ptero.links.replace("https://", "")}
`
						let button2 = [{
								"name": "cta_copy",
								"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
							}, {
								"name": "cta_copy",
								"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
							},
							{
								"name": "cta_url",
								"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${ptero.links}\",\"merchant_url\":\"${ptero.links}\"}`
							}
						]
						vreden.sendButtonText(users, button2, teks2, "Data hanya dikirim 1x", m)
					} else {
						m.reply(JSON.stringify(userData.errors[0], null, 2));
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND RPG ]━━━━━━━━━━━━━━━━━//
			case 'joinrpg': {
				if (usersdb[m.sender].rpg) return m.warning(`Kamu Telah Join Sebelumnya`)
				usersdb[m.sender].rpg = true
				let joinedrpg = `*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang kamu dapat menggunakan command RPG\n\n`
				await vreden.sendMessage(m.chat, {
					text: joinedrpg,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: "RPG-GAME (Pirate Adventure)",
							body: 'Pirate adventure in search of riches',
							thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
							sourceUrl: "-",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break
			case 'mining': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].pickaxe) return m.reply('Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
				if (rpgdb[m.sender].darahpickaxe < 1) return m.reply('☹️Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_')
				let besi = [2, 1, 6, 1, 0, 3, 7, 8, 3, 2, 0, 7, 1, 9]
				let batubara = [1, 1, 2, 1, 0, 6, 0, 0, 2, 5, 1, 0, 1, 0]
				let emas = [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0]
				let perak = [2, 1, 3, 5, 0, 0, 0, 0, 0, 2, 1, 0, 8, 2]
				const besinyo = await pickRandom(besi)
				const batubaranyo = await pickRandom(batubara)
				const emasnyo = await pickRandom(emas)
				const peraknyo = await pickRandom(perak)
				let mining = `*MINING ADVENTURE*\n\nItem Yang Didapat :\n- Besi: ${besinyo}\n- Emas: ${emasnyo}\n- Perak: ${peraknyo}\n- Batu Bara: ${batubaranyo}\n\n_🧰 Disimpan Dalam Inventory..._\n_❤️ Darah Berkurang 20_\n_⛏️ Ketahanan Pickaxe ${rpgdb[m.sender].darahpickaxe}%_\n\n`
				await vreden.sendMessage(m.chat, {
					text: mining,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: "RPG-GAME (Mining Resource)",
							body: 'Mining natural resources',
							thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
							sourceUrl: "-",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
				rpgdb[m.sender].darahpickaxe -= 20
				rpgdb[m.sender].besi += besinyo
				rpgdb[m.sender].emas += emasnyo
				rpgdb[m.sender].perak += peraknyo
				rpgdb[m.sender].batubara += batubaranyo
			}
			break
			case 'heal': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].darahuser < 1) return m.reply('*😑 Kamu Masih Sehat!*')
				rpgdb[m.sender].darahuser += 100
				chatEdit(['Mengistirahatkan Tubuh...', 'Memulihkan...', 'Darah Kamu Sudah Terisi...'])
			}
			break
			case 'crafting':
			case 'craft': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (args[0] === "kain") {
					if (!args[1]) return m.reply(`*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					let bulu = Number(parseInt(args[1]) * 2)
					if (rpgdb[m.sender].bulu < bulu) return m.reply(`*Bulu Wol Kamu (${rpgdb[m.sender].bulu}) Tidak Cukup Untuk Membuat ${args[1]} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					rpgdb[m.sender].kain += parseInt(args[1])
					rpgdb[m.sender].bulu -= bulu
					m.sendForward(`Berhasil Membuat ${args[1]} Lembar Kain, Kamu Mempunyai ${rpgdb[m.sender].bulu} Bulu Lagi`)
				} else if (args[0] === "kapal") {
					if (rpgdb[m.sender].kapal) return m.reply('Kamu Sudah Memiliki Kapal!')
					let besi = Number(20)
					let kayu = Number(50)
					let kain = Number(2)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kain < kain) return m.reply(`*Kain Kamu (${rpgdb[m.sender].kain}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
					rpgdb[m.sender].kapal = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					rpgdb[m.sender].kain -= kain
					let kapal = `*Berhasil Membuat Kapal!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kain: ${rpgdb[m.sender].kain}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: kapal,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Pirate Ship)",
								body: 'Build a pirate ship',
								thumbnailUrl: "https://telegra.ph/file/6868733df8aa286682274.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "kapak") {
					if (rpgdb[m.sender].kapak) return m.reply('Kamu Sudah Memiliki Kapak!')
					let besi = Number(2)
					let kayu = Number(1)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].kapak = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let kapak = `*Berhasil Membuat Kapak!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: kapak,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/454b6bac735cd5c9e860e.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "rumah") {
					if (!(`${rpgdb[m.sender].wilayahrumah}` === `${rpgdb[m.sender].wilayah}`)) return m.reply(`Kamu Saat Ini Sedang Di ${rpgdb[m.sender].wilayah}, Kamu Hanya Dapat Membangun Rumah Di Indonesia, Silahkan Kembali Berlayar Ke Indonesia Untuk Membangun Rumah`)
					if (!args[1]) return m.reply('*Masukan Jumlahnya!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
					if (isNaN(args[1])) return m.reply('*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
					let besi = Number(parseInt(args[1]) * 6)
					let kayu = Number(parseInt(args[1]) * 20)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].rumah += parseInt(args[1])
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let rumah = `*Berhasil Membuat ${args[1]} Rumah!*\n\nJumlah: ${args[1]} Rumah\nLetak: Indonesia\n\n`
					await vreden.sendMessage(m.chat, {
						text: rumah,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (House Crafting)",
								body: 'Build a house to rest',
								thumbnailUrl: "https://telegra.ph/file/748043e987c3b38708d44.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pickaxe") {
					if (rpgdb[m.sender].pickaxe) return m.reply('Kamu Sudah Memiliki Pickaxe!')
					let besi = Number(2)
					let kayu = Number(1)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].pickaxe = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let pickaxe = `*Berhasil Membuat Pickaxe!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: pickaxe,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "bajuzirah") {
					if (rpgdb[m.sender].bzirah) return m.reply('Kamu Sudah Memiliki Baju Zirah!')
					let besi = Number(6)
					let kayu = Number(2)
					let kain = Number(10)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kain < kain) return m.reply(`*Kain Kamu (${rpgdb[m.sender].kain}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
					rpgdb[m.sender].bzirah = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					rpgdb[m.sender].kain -= kain
					let bajuzirah = `*Berhasil Membuat Baju Zirah!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n- Kain: ${rpgdb[m.sender].kain}\n\n`
					await vreden.sendMessage(m.chat, {
						text: bajuzirah,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pedang") {
					if (rpgdb[m.sender].pedang) return m.reply('Kamu Sudah Memiliki Pedang!')
					let besi = Number(3)
					let kayu = Number(1)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].pedang = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let pedang = `*Berhasil Membuat Pedang!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: pedang,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else {
					let craft = `*Apa Yang Ingin Kamu Buat?*

- kapal
- rumah
- kapak
- pickaxe
- pedang
- bajuzirah
- kain

*Contoh:*
.craft kapak

`
					await vreden.sendMessage(m.chat, {
						text: craft,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Crafting Item)",
								body: 'Make items for survival and adventure',
								thumbnailUrl: "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break
			case 'berlayar': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].kapal) return m.reply('Kamu Tidak Mempunyai Kapal, Silahkan Crafting Kapal Terlebih Dahulu!')
				if (rpgdb[m.sender].darahkapal < 1) return m.reply('Kapal Kamu Rusak, Perbaiki Terlebih Dahulu Kapal Mu\n\nKetik .rawat')
				if (pirates[m.sender]) return m.reply("Kamu sedang berlayar!!")
				if (rpgdb[m.sender].wilayah === args[0]) return m.reply(`Kamu Sedang Di ${args[0]} Saat Ini, Silahkan Pilih Destinasi Lain`)
				if (args[0] === "indonesia") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "india") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "brazil") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "rusia") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "australia") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "kanada") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "greenland") {
					chatEdit(['Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...'])
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, bots.footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else {
					let berlayar = `*Pilih Destinasi Berlayar!*

🔵 indonesia
🔴 kanada
⚪ rusia
⚫ india
🟣 brazil
🟠 australia
🟢 greenland

Contoh:
${prefix + command} rusia`
					await vreden.sendMessage(m.chat, {
						text: berlayar,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "PIRATE ADVENTURE",
								body: 'Sail across the ocean and go on adventures',
								thumbnailUrl: "https://telegra.ph/file/4275a0a1fcf450835b0ef.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break
			case 'repair':
			case 'rawat': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let rawat = args[0]
				switch (rawat) {
					case 'kapal':
						if (!rpgdb[m.sender].kapal) return m.warning(`*🙃 Kamu Gak Punya Kapal*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapal`)
						if (!rpgdb[m.sender].darahkapal < 1) return m.reply(`*😑 Kapal Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 5) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *5 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						if (rpgdb[m.sender].kayu < 10) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *10 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 5
						rpgdb[m.sender].kayu -= 10
						rpgdb[m.sender].darahkapal = 100
						chatEdit(['Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄'])
						break
					case 'pickaxe':
						if (!rpgdb[m.sender].pickaxe) return m.warning(`*🙃 Kamu Gak Punya Pickaxe*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pickaxe`)
						if (!rpgdb[m.sender].darahpickaxe < 1) return m.reply(`*😑 Pickaxe Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 1) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pickaxe*\n\nUntuk Perbaikan Pickaxe Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 1
						rpgdb[m.sender].darahpickaxe = 100
						chatEdit(['Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄'])
						break
					case 'kapak':
						if (!rpgdb[m.sender].kapak) return m.warning(`*🙃 Kamu Gak Punya Kapak*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapak`)
						if (!rpgdb[m.sender].darahkapak < 1) return m.reply(`*😑 Kapak Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 1) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapak*\n\nUntuk Perbaikan Kapak Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 1
						rpgdb[m.sender].darahkapak = 100
						chatEdit(['Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄'])
						break
					case 'armor':
						if (!rpgdb[m.sender].bzirah) return m.warning(`*🙃 Kamu Gak Punya Baju Zirah*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Baju Zirah`)
						if (!rpgdb[m.sender].darahbzirah < 1) return m.reply(`*😑 Baju Zirah Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 2) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Armor*\n\nUntuk Perbaikan Armor Diperlukan *2 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 2
						rpgdb[m.sender].darahbzirah = 100
						chatEdit(['Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄'])
						break
					case 'pedang':
						if (!rpgdb[m.sender].pedang) return m.warning(`*🙃 Kamu Gak Punya Pedang*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pedang`)
						if (!rpgdb[m.sender].darahpedang < 1) return m.reply(`*😑 Pedang Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 1) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pedang*\n\nUntuk Perbaikan Pedang Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 1
						rpgdb[m.sender].darahpedang = 100
						chatEdit(['Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄'])
						break
					default:
						let teks = `---------- » *PERBAIKAN* « ----------

*Pilih Barang Yang*
*Akan Di perbaiki*
- kapal
- pickaxe
- kapak
- armor
- pedang

*Contoh:*
${prefix + command} kapak

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: bots.idsaluran,
									serverMessageId: null,
									newsletterName: `${bots.namasaluran}`
								},
								externalAdReply: {
									title: "RPG TOOLS REPAIR",
									body: 'Repairs and upgrades tools',
									thumbnailUrl: "https://telegra.ph/file/08e78c20afd16dcebb33d.jpg",
									sourceUrl: "-",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'menebang':
			case 'nebang': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].kapak) return m.reply('Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
				if (rpgdb[m.sender].darahkapak < 1) return m.reply('☹️Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_')
				let kayu = await randomNomor(0, 20)
				rpgdb[m.sender].kayu += kayu
				rpgdb[m.sender].darahkapak -= 20
				m.sendForward(`*🌳 MENEBANG POHON 🌳*

Item Yang Didapat:
- Kayu: ${kayu} (Hasil Tebang)
- Kapak: -20 Healthy (Digunakan)

`)
			}
			break
			case 'berburu': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let domba = await randomNomor(0, 10)
				let sapi = await randomNomor(0, 10)
				let ayam = await randomNomor(0, 10)
				let buulu = domba + sapi + ayam
				let bulu = buulu / 2
				let waktuu = await clockString(new Date() - rpgdb[m.sender].burutime)
				if (new Date() - rpgdb[m.sender].burutime < 7200000) return m.reply(`Kamu Baru Saja Berburu ${waktuu} Yang Lalu, Silahkan Tunggu 2 Jam Setelah Terakhir Kali Berburu`)
				rpgdb[m.sender].burutime = new Date * 1
				rpgdb[m.sender].domba += domba
				rpgdb[m.sender].sapi += sapi
				rpgdb[m.sender].ayam += ayam
				rpgdb[m.sender].bulu += bulu
				m.sendForward(`*🏹 BERBURU 🏹*

Item Yang Didapat:
- Domba: ${domba}
- Sapi: ${sapi}
- Ayam: ${ayam}
- Bulu: ${bulu} (Hasil Pencabutan)

_Tunggu 2 jam untuk_
_berburu berikutnya_

`)
			}
			break
			case 'adventure': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (rpgdb[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
				var tuju = args.join(" ")
				let obj = ["villager", "zombie", "ghasts", "wither", "skeleton", "wolves"]
				let obje = await pickRandom(obj)
				let kayu = await randomNomor(15)
				let besi = await randomNomor(10)
				let rank = await randomNomor(100)
				let saldo = await randomNomor(2000)
				if (tuju === "savanah") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else if (tuju === "dessert") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/760e27568c0b2ccf07231.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else if (tuju === "boreal forest") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else if (tuju === "tropical forest") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else {
					let thumbadv = "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg"
					let adv = `---------- » *ADVENTURE* « ----------

*Pilih Lokasi Jelajahmu📍*
- savanah
- dessert
- boreal forest
- tropical forest

*Contoh:*
.adventure savanah

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break
			case 'memancing':
			case 'mancing': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (rpgdb[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
				let ikan = await randomNomor(0, 20)
				rpgdb[m.sender].ikan += ikan
				rpgdb[m.sender].darahuser -= 20
				let thum = ["https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg", "https://telegra.ph/file/2e772e9732c88e153e812.jpg", "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg", "https://telegra.ph/file/562adf3d43cde4d355e76.jpg", "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"]
				let thumn = await pickRandom(thum)
				let {
					key
				} = await vreden.sendMessage(m.chat, {
					text: 'Sedang Memancing...'
				}, {
					quoted: m
				})
				await sleep(5000)
				await vreden.sendMessage(m.chat, {
					text: `Memperoleh Hasil...`,
					edit: key
				});
				await sleep(5000)
				let txt = `--------- » *MEMANCING* « ---------

Berhasil mendapatkan ${ikan} ikan

_Stamina berkurang -20_

`
				vreden.sendMessage(m.chat, {
					text: txt,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: "RPG - FISHING",
							body: 'Looking for fish catch',
							thumbnailUrl: thumn,
							sourceUrl: "tes",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break
			/*case 'battle': {
			let ketahananuser = 
			let ketahananlawan = 
			}
			break*/
			case 'sell':
			case 'jual': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let jual = args[0]
				switch (jual) {
					case 'emas': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].emas}` < `${jumlh}`) return m.reply(`*Emas Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].emas -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Emas: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'besi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].besi}` < `${jumlh}`) return m.reply(`*Besi Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].besi -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Besi: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'batubara': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].batubara}` < `${jumlh}`) return m.reply(`*Batu Bara Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].batubara -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Batu Bara: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'perak': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].perak}` < `${jumlh}`) return m.reply(`*Perak Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].perak -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Perak: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'kayu': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].kayu}` < `${jumlh}`) return m.reply(`*Kayu Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].kayu -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Kayu: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ayam': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].ayam}` < `${jumlh}`) return m.reply(`*Ayam Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].ayam -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Ayam: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'sapi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 3000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].sapi}` < `${jumlh}`) return m.reply(`*Sapi Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].sapi -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Sapi: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'domba': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].domba}` < `${jumlh}`) return m.reply(`*Domba Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].domba -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Domba: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ikan': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 200)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].ikan}` < `${jumlh}`) return m.reply(`*Ikan Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].ikan -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Ikan: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					default:
						let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Pilih Barang Yang*
*Akan Di Jual*
- emas
- besi
- batubara
- perak
- kayu
- ayam
- sapi
- domba
- ikan

*Contoh:*
${prefix + command} ikan

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: bots.idsaluran,
									serverMessageId: null,
									newsletterName: `${bots.namasaluran}`
								},
								externalAdReply: {
									title: "SELLING MARKET",
									body: 'Sell goods to earn money',
									thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
									sourceUrl: "-",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'buy':
			case 'beli': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let beli = args[0]
				switch (beli) {
					case 'emas': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].emas += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Emas: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'besi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].besi += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Besi: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'batubara': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].batubara += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Batu Bara: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'perak': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].perak += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Perak: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'kayu': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].kayu += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Kayu: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ayam': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].ayam += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Ayam: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'sapi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 3000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].sapi += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Sapi: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'domba': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].domba += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Domba: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ikan': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 200)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].ikan += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Ikan: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					default:
						let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Pilih Barang Yang*
*Akan Di Beli*
- emas
- besi
- batubara
- perak
- kayu
- ayam
- sapi
- domba
- ikan

*Contoh:*
${prefix + command} ikan

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: bots.idsaluran,
									serverMessageId: null,
									newsletterName: `${bots.namasaluran}`
								},
								externalAdReply: {
									title: "BUY AN ITEM",
									body: 'Buy the necessary items',
									thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
									sourceUrl: "-",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'bekerja':
			case 'kerja': {
				let type = (args[0] || '').toLowerCase()
				let time = rpgdb[m.sender].lastkerja + 600000
				let __timers = (new Date - rpgdb[m.sender].lastkerja)
				let _timers = (0 - __timers)
				let timers = clockString(_timers)
				let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
				let penumpang = await pickRandom(penumpan)
				let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
				let dagangan = await pickRandom(daganga)
				let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
				let pasien = await pickRandom(pasie)
				let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
				let panen = await pickRandom(pane)
				let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
				let bengkel = await pickRandom(bengke)
				let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
				let rumah = await pickRandom(ruma)

				switch (type) {
					case 'ojek':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
						let hasilojek = Math.floor(Math.random() * 10000)
						m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasilojek
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'pedagang':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasildagang = Math.floor(Math.random() * 10000)
						m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasildagang
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'dokter':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasildokter = Math.floor(Math.random() * 10000)
						m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* 💰`).then(() => {
							usersdb[m.sender].saldo += hasildokter
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'petani':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasiltani = Math.floor(Math.random() * 10000)
						m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasiltani
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'montir':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasilmontir = Math.floor(Math.random() * 10000)
						m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* 💰`).then(() => {
							usersdb[m.sender].saldo += hasilmontir
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'kuli':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasilkuli = Math.floor(Math.random() * 10000)
						m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasilkuli
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					default:
						let teks = `
*💼 RPG - KERJA 💼*

*Select you job* :
- montir
- kuli
- petani
- dokter
- pedagang
- ojek

*Contoh* :
${prefix + command} kuli

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: bots.idsaluran,
									serverMessageId: null,
									newsletterName: `${bots.namasaluran}`
								},
								externalAdReply: {
									title: "RPG - JOB SIMULATOR",
									body: 'Choose a job and enjoy the results',
									thumbnailUrl: "https://files.catbox.moe/48fwnz.jpg",
									sourceUrl: "tes",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'merampok':
			case 'rampok': {
				let hasil = (Math.floor(Math.random() * 50000))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Tag/Reply Target!*\n\nContoh :\n${prefix + command} @0`)
				if (users == m.sender) return m.reply("Gak bisa ngerampok diri sendiri goblok 😑")
				let __timers = (new Date - rpgdb[m.sender].lastrampok)
				let _timers = (3600000 - __timers)
				let timers = clockString(_timers)
				if (new Date - rpgdb[m.sender].lastrampok > 3600000) {
					if (usersdb[users].saldo < 50000) return m.reply("Target kismin cokk🙀")
					usersdb[users].saldo -= hasil * 1
					usersdb[m.sender].saldo += hasil * 1
					rpgdb[m.sender].lastrampok = new Date * 1
					m.reply(`😈Target Berhasil Dirampok Dan Mendapatkan Rp ${hasil}`)
				} else m.reply(`Loe udah ngerampok ngabb😑\ntunggu ${timers} untuk merampok lagi`)
			}
			break
			case 'redeem': {
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (!db.redeem.isRedeem) return m.reply("*Gak ada redeem yang di berikan 😓*")
				if (!text) return m.reply("*Masukin kodenya wak!*")
				if (db.redeem.isRedeem) {
					let code = text.toLowerCase()
					let redeem = db.redeem.code.toLowerCase()
					if (code !== redeem) return m.reply("*Kode kamu gak valid!*")
					if (db.redeem.maxRedeem < 1) return m.reply("*Kode udah abiss cokk*")
					if (db.redeem.user.includes(m.sender)) return m.reply("*Loee udah tadi ngabb!*")
					db.redeem.user.push(m.sender)
					db.redeem.maxRedeem -= 1
					usersdb[m.sender].saldo += 10000
					usersdb[m.sender].exp += 1000
					usersdb[m.sender].rank += 300
					usersdb[m.sender].limit += 200
					usersdb[m.sender].glimit += 200
					let teks = `*CONGRATULATION 🥳*


*Kamu mendapatkan* :
-  Rp 10k balance
-  1000 EXP
-  300 Rank Points 
-  200 Limit
-  200 Game Limit

`
					m.reply(teks)
					if (db.redeem.maxRedeem < 1) {
						await timeout(600000)
						delete db.redeem
					}
				} else {
					m.reply("*Gak ada redeem yang di berikan 😓*")
				}
			}
			break
			case 'redeemset':
			case 'setredeem': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (!args[0]) return m.reply(`*Masukin Kode Redemnya!*\n\nContoh:\n${prefix + command} epep 10`)
				if (!args[1]) return m.reply(`*Masukin Jumlah Tersedia!*\n\nContoh:\n${prefix + command} epep 10`)
				if (isNaN(args[1])) return m.reply(`*Jumlah Harus Angka!*\n\nContoh:\n${prefix + command} epep 10`)
				db.redeem.isRedeem = true
				db.redeem.code = args[0]
				db.redeem.user = []
				db.redeem.maxRedeem = args[1]
				m.reply("*Code Redeem, Berhasil Di Setting*")
			}
			break
			case 'delredeem':
			case 'redeemdel': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (db.redeem.isRedeem) {
					m.reply("*Redeem Code Dihapus!*")
					delete db.redeem
				} else {
					m.reply("*Gak ada sesi redeem icik boss*")
				}
			}
			break
			case 'inventory':
			case 'inv':
			case 'profile':
			case 'profil': {
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
				if (!usersdb[users].rpg) return m.warning(`*User Belum Join RPG*\n\nketik _.joinrpg_`)
				let nonya = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
				let teks = `*⚔️ RPG - PROFILE ⚔️*

_*Crafting Item 🛠️*_
- Kapal: ${rpgdb[users].kapal ? `(${rpgdb[m.sender].darahkapal}% HP)` : 'Nothing'}
- Rumah: ${rpgdb[users].rumah} Unit
- Kapak: ${rpgdb[users].kapak ? `(${rpgdb[m.sender].darahkapak}% HP)` : 'Nothing'}
- Pickaxe: ${rpgdb[users].pickaxe ? `(${rpgdb[m.sender].darahpickaxe}% HP)` : 'Nothing'}
- Baju Zirah: ${rpgdb[users].bzirah ? `(${rpgdb[m.sender].darahbzirah}% HP)` : 'Nothing'}
- Pedang: ${rpgdb[users].pedang ? `(${rpgdb[m.sender].darahpedang}% HP)` : 'Nothing'}
- Kain: ${rpgdb[users].kain} Lembar

_*User About 🤺*_
- User Healthy: ${rpgdb[users].darahuser}/100
- Keberadaan: ${rpgdb[users].wilayah}

_*Sumber Daya 🧰*_
- Kayu: ${rpgdb[users].kayu} Batang
- Besi: ${rpgdb[users].besi} Biji
- Emas: ${rpgdb[users].emas} Biji
- Perak: ${rpgdb[users].perak} Biji
- Batubara: ${rpgdb[users].batubara} Biji

_*Hewan & Ternak🐄*_
- Ayam: ${rpgdb[users].ayam} Ekor
- Sapi: ${rpgdb[users].sapi} Ekor
- Domba: ${rpgdb[users].domba} Ekor
- Ikan: ${rpgdb[users].ikan} Ekor

> ID: ${nonya}
`
				await vreden.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: [users],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: "RPG-GAME (Inventory)",
							body: 'looking for supplies to survival',
							thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
							sourceUrl: "-",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break
			case 'weekly':
			case 'mingguan': {
				let isMingguan = cd.isMingguan(rpgdb, m.sender)
				if (isMingguan) {
					let mgn = ms(rpgdb[m.sender].mingguanExpiry - Date.now())
					return m.reply(`*Kamu dah claim minggu ini*\n\n*Claim Berikutnya*:\n${mgn.days} hari, ${mgn.hours} jam, ${mgn.minutes} menit`)
				}
				cd.addMingguan(rpgdb, m.sender, "7d")
				usersdb[m.sender].saldo += 7000
				usersdb[m.sender].limit += 100
				usersdb[m.sender].glimit += 100
				let teks = `*乂 MINGGUAN CLAIMS*

*Nih hadiah minggu ini 😋*
- Rp 7.000.00,-
- 100 Limits
- 100 Game Limits

`;
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: vreden.ments(teks),
						externalAdReply: {
							title: `MINGGUAN GIFT 🎁`,
							previewType: "PHOTO",
							thumbnailUrl: `https://files.catbox.moe/1racpg.png`,
							sourceUrl: "-"
						}
					}
				};
				vreden.sendMessage(m.chat, contentText, {
					quoted: fchannel
				});
			}
			break
			case 'moonthly':
			case 'bulanan': {
				let isBulanan = cd.isBulanan(rpgdb, m.sender)
				if (isBulanan) {
					let mgn = ms(rpgdb[m.sender].bulananExpiry - Date.now())
					return m.reply(`*Kamu dah claim bulan ini*\n\n*Claim Berikutnya*:\n${mgn.days} hari, ${mgn.hours} jam, ${mgn.minutes} menit`)
				}
				cd.addBulanan(rpgdb, m.sender, "30d")
				usersdb[m.sender].saldo += 10000
				usersdb[m.sender].limit += 150
				usersdb[m.sender].glimit += 100
				let teks = `*乂 BULANAN CLAIMS*

*Nih hadiah bulan ini 😋*
- Rp 10.000.00,-
- 150 Limits
- 100 Game Limits

`;
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: vreden.ments(teks),
						externalAdReply: {
							title: `BULANAN GIFT 🎁`,
							previewType: "PHOTO",
							thumbnailUrl: `https://files.catbox.moe/1racpg.png`,
							sourceUrl: "-"
						}
					}
				};
				vreden.sendMessage(m.chat, contentText, {
					quoted: fchannel
				});
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND MAIN / SYSTEM ]━━━━━━━━━━━━━━━━━//
			case'backup_': {
if (!isCreator) return m.tolak(mess.OnlyOwner)
let jir = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Mengumpulkan semua file ke folder...');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await m.reply('Script akan dikirim lewat PC!')
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await vreden.sendMessage(jir, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "Backup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break
			case 'donasi':
			case 'donate': {
				vreden.sendMessage(m.chat, {
					image: {
						url: mediaPath.donasi
					},
					caption: `*乂 DONASI BOT*\n\nHai Kak, Ingin Donasi?, Silahkan Donasi Ke Owner Bot, Ketik .owner\n\n_Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain_ >,<`
				}, {
					quoted: m
				})
			}
			break
			case 'rules':
			case 'aturan':
			case 'aturanbot': {
				var aturan = `*</> RULES BOTS </>*

- Dilarang spam
- Tidak menelpon bot
- Sopan kalau bercakap
- Bile error chat owner
- Privacy Protection

*Note* :
Bot berjalan otomatis 
jika kamu menemukan
balasan abstrak, itu
mungkin owner sedang
butuh kawan chat :)
`
				await vreden.sendMessage(m.chat, {
					text: aturan,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'register':
			case 'registrasi':
			case 'regis':
			case 'daftar': {
				if (usersdb[m.sender].daftar) return m.warning(`Anda Telah Terverifikasi!!`)
				let nama = text.split(".")[0]
				let umur = text.split(".")[1]
				if (!nama || !umur) return m.warning(`*Masukan ${!nama ? "nama" : !umur ? "umur" : "data"} dengan benar!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} yanto.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				if (isNaN(umur)) return m.warning(`*Masukan Umur Yang Valid!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} yanto.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				if (umur < 10) return m.warning(`*Bocil Gak Diajak!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} yanto.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				if (umur > 50) return m.warning(`*Udah Tua Mending Turu!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} yanto.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				try {
					usersdb[m.sender].nama = nama
					usersdb[m.sender].umur = Number(umur)
					usersdb[m.sender].daftar = true
					usersdb[m.sender].saldo += 5000
					usersdb[m.sender].limit += 20
					if (verifyNumber[m.sender]) {
						clearTimeout(verifyNumber[m.sender][4])
						delete verifyNumber[m.sender]
					}
					m.sendForward(`------------ » *VERIFY AKUN* « ------------\n\n📦 *User Info*\n- Name : ${nama}\n- Nomor : ${usernomor}\n- Umur : ${umur}\n\n🎁 *Bonus Verifikasi*\n- + Rp 5000\n- + 20 Limit\n\n> ${bots.footer}`)
					if (general.notifRegister) {
						try {
							avatar = await vreden.profilePictureUrl(m.sender, "image")
						} catch {
							avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
						}
						vreden.sendMessage(idsaluran, {
							text: "```" + `Notification Register

Nama : ${nama}
Umur : ${umur}
Tag : @${m.sender.split("@")[0]}

Registered via auto` + "```",
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999999,
								isForwarded: true,
								externalAdReply: {
								//	showAdAttribution: true,
									containsAutoReply: true,
									title: `System Notification`,
									body: `${date} ${jam}`,
									previewType: "PHOTO",
									thumbnailUrl: avatar,
									sourceUrl: links.channel
								}
							}
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'regemail':
			case 'regismail':
			case 'regmail': {
				if (usersdb[m.sender].daftar) return m.warning(`Anda Telah Terverifikasi!!`)
				if (!text) return m.warning(`Masukan Email Kamu\n\n*Contoh* :\n${prefix + command} QiooGen7@gmail.com`)
				if (!text.includes("@")) return m.warning(`Masukan Email Kamu\n\n*Contoh* :\n${prefix + command} QiooGen7@gmail.com`)
				try {
					avatar = await vreden.profilePictureUrl(m.sender, "image")
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
				}
				var angka = await randomNomor(1000, 9999)
				verifyNumber[m.sender] = [
					m.sender, angka, avatar, "email",
					setTimeout(() => {
						if (verifyNumber[m.sender]) {
							m.reply("*Waktu Verifikasi Habis!*")
							delete verifyNumber[m.sender]
						}
					}, 120000)
				]
				try {
					let data = await axios.get(`https://api.vreden.web.id/api/send-kode-email?kode=${angka}&nomorbot=${botNumber.split("@")[0]}&avatar=${encodeURIComponent(avatar)}&bots.footer=${encodeURIComponent("© 2024 Vreden. All rights reserved.")}&subject=Kode%20Verifikasi%20Email&background=https://telegra.ph/file/686d6dadc3c08e906c2aa.jpg&email=${text}`)
					if (data.status == 200) {
						let teks = `*📌 Email Terkirim*

1. Buka Email Anda
2. Cari Email Dari ${bots.nameCall}
3. Cek Inbox Utama/Spam
4. Klik Tautan Konfirmasi

Kode Hanya Berlaku
Selama 2 Menit`
						let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\"}`
						}]
						let buffer = await getBuffer("https://files.catbox.moe/gniik7.jpg")
						vreden.sendButtonDocument(m.chat, {
							document: fs.readFileSync('./media/file.pdf'),
							mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
							fileLength: 10000000000,
							pageCount: 77,
							jpegThumbnail: buffer,
							fileName: `Email Verification`,
						}, button, teks, bots.footer, m)
					} else {
						m.reply("*Transporter Email Error :(*\n\n" + data.data.error)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'captcha':
			case 'regkode':
			case 'regcode': {
				if (usersdb[m.sender].daftar) return m.warning(`Anda Telah Terverifikasi!!`)
				try {
					avatar = await vreden.profilePictureUrl(m.sender, "image")
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
				}
				var angka = await randomNomor(1000, 9999)
				verifyNumber[m.sender] = [
					m.sender, angka, avatar, "captcha",
					setTimeout(() => {
						if (verifyNumber[m.sender]) {
							m.reply("*Waktu Verifikasi Habis!*")
							delete verifyNumber[m.sender]
						}
					}, 120000)
				]
				try {
					const {
						CaptchaGenerator
					} = require("captcha-canvas");
					const captcha = new CaptchaGenerator()
						.setDimension(150, 450)
						.setCaptcha({
							text: `${angka}`,
							size: 60,
							color: "blue"
						})
						.setDecoy({
							opacity: 0.5
						})
						.setTrace({
							color: "blue"
						});
					const buffer = captcha.generateSync();
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\"}`
					}]
					await vreden.sendButtonImage(m.chat, buffer, button, `*CAPTCHA CODE*\n\nMasukan Kode Verifikasi\nDiatas Untuk Memverifikasi\nBahwa Anda Bukan Robot\n\n\n_Chat Owner Jika Kode_\n_Tidak Muncul Atau Error_`, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'setprofile':
			case 'setprofil': {
				if (args[0] === "nama") {
					if (args[1].length > 11) return m.warning('Maksimal 11 Karakter!')
					const serialUser = `${args[1]}`
					usersdb[m.sender].nama = serialUser
					m.reply(`Sukses Ubah Nama Anda`)
				} else if (args[0] === "kota") {
					usersdb[m.sender].askot = args[1]
					m.reply("Kota Diubah ke " + args[1])
				} else if (args[0] === "umur") {
					if (isNaN(args[1])) return m.warning("*Yang bener umurnya dongg*")
					if (args[1] < 10) return m.warning("*Bocil Gak Diajak!*")
					if (args[1] > 60) return m.warning("*Udah Tua Turu Ajah Sana!*")
					usersdb[m.sender].umur = Number(args[1])
					m.reply("Umur Kamu Di Setting Ke " + args[1])
				} else {
					m.sendForward(`*Masukan Custom Profile!*

- nama
- kota
- umur

Contoh:
${prefix + command} nama wangsaf

`)
				}
			}
			break
			case 'infobot':
			case 'info':
			case 'botinfo': {
				let teks = `----------- » *BOT INFO* « -----------

- *name :* ${vreden.user.name}
- *number :* ${botNumber.split("@")[0]}
- *owner :* ${prefix}owner
- *user :* ${Object.values(usersdb).length} users
- *prefix :* ${prefix}
- *total :* ${totalFitur()} Fitur
- *error :* 4 Fitur


------------ » *FITUR BOT* « ------------

- *antidelete :* ${general.antiDelete ? 'true' : ''}
- *anticall :* ${general.antiCall ? 'true' : ''}
- *antiviewonce :* ${general.antiViewOnce ? 'true' : ''}
- *autobio :* ${general.autoBio ? 'true' : ''}
- *autoblock212 :* ${general.autoBlock212 ? 'true' : ''}
- *autorespond :* ${general.autoRespond ? 'true' : ''}
- *autoread :* ${general.autoRead ? 'true' : ''}
- *register only :* ${general.onlyRegister ? 'true' : ''}
- *register notify:* ${general.notifRegister ? 'true' : ''}
- *auto backup :* ${general.autoBackup ? 'true' : ''}
- *PC only :* ${general.privateOnly ? 'true' : ''}
- *GC only :* ${general.grupOnly ? 'true' : ''}
`
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "Click Settings",
  "sections": [
    {
      "title": "Register Only",
      "rows": [
        {
          "header": "On 🟢",
          "title": "onlyregister on",
          "description": "nyalakan onlyregister",
          "id": ".onlyregister on"
        },
        {
          "header": "Off 🔴",
          "title": "onlyregister off",
          "description": "matikan onlyregister",
          "id": ".onlyregister off"
        }
      ]
    },
    {
      "title": "Register Notify",
      "rows": [
        {
          "header": "On 🟢",
          "title": "notifregister on",
          "description": "nyalakan notifregister",
          "id": ".notifregister on"
        },
        {
          "header": "Off 🔴",
          "title": "notifregister off",
          "description": "matikan notifregister",
          "id": ".notifregister off"
        }
      ]
    },
    {
      "title": "Anti Hapus/Delete",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antidelete on",
          "description": "nyalakan antidelete",
          "id": ".antidelete on"
        },
        {
          "header": "Off 🔴",
          "title": "antidelete off",
          "description": "matikan antidelete",
          "id": ".antidelete off"
        }
      ]
    },
    {
      "title": "Anti Telpon",
      "rows": [
        {
          "header": "On 🟢",
          "title": "anticall on",
          "description": "nyalakan anticall",
          "id": ".anticall on"
        },
        {
          "header": "Off 🔴",
          "title": "anticall off",
          "description": "matikan anticall",
          "id": ".anticall off"
        }
      ]
    },
    {
      "title": "Anti Sekali Lihat",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiviewonce on",
          "description": "nyalakan antiviewonce",
          "id": ".antiviewonce on"
        },
        {
          "header": "Off 🔴",
          "title": "antiviewonce off",
          "description": "matikan antiviewonce",
          "id": ".antiviewonce off"
        }
      ]
    },
    {
      "title": "Auto Bio",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autobio on",
          "description": "nyalakan autobio",
          "id": ".autobio on"
        },
        {
          "header": "Off 🔴",
          "title": "autobio off",
          "description": "matikan autobio",
          "id": ".autobio off"
        }
      ]
    },
    {
      "title": "Auto Block +212",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autoblok212 on",
          "description": "nyalakan autoblok212",
          "id": ".autoblok212 on"
        },
        {
          "header": "Off 🔴",
          "title": "autoblok212 off",
          "description": "matikan autoblok212",
          "id": ".autoblok212 off"
        }
      ]
    },
    {
      "title": "Auto Respond",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autorespond on",
          "description": "nyalakan autorespond",
          "id": ".autorespond on"
        },
        {
          "header": "Off 🔴",
          "title": "autorespond off",
          "description": "matikan autorespond",
          "id": ".autorespond off"
        }
      ]
    },
    {
      "title": "Auto Read Chat/SW",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autoread on",
          "description": "nyalakan autoread",
          "id": ".autoread on"
        },
        {
          "header": "Off 🔴",
          "title": "autoread off",
          "description": "matikan autoread",
          "id": ".autoread off"
        }
      ]
    },
    {
      "title": "Auto Backup Database",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autobackup on",
          "description": "nyalakan autobackup",
          "id": ".autobackup on"
        },
        {
          "header": "Off 🔴",
          "title": "autobackup off",
          "description": "matikan autobackup",
          "id": ".autobackup off"
        }
      ]
    },
    {
      "title": "Chat Pribadi Only",
      "rows": [
        {
          "header": "On 🟢",
          "title": "pconly on",
          "description": "nyalakan pconly",
          "id": ".pconly on"
        },
        {
          "header": "Off 🔴",
          "title": "pconly off",
          "description": "matikan pconly",
          "id": ".pconly off"
        }
      ]
    },
    {
      "title": "Chat Grup Only",
      "rows": [
        {
          "header": "On 🟢",
          "title": "gconly on",
          "description": "nyalakan gconly",
          "id": ".gconly on"
        },
        {
          "header": "Off 🔴",
          "title": "gconly off",
          "description": "matikan gconly",
          "id": ".gconly off"
        }
      ]
    },
    {
      "title": "Set Pengaturan setting.json",
      "rows": [
        {
          "header": "Settings Change 🛠️",
          "title": "Settings",
          "description": "tampilkan opsi setting",
          "id": ".set"
        }
      ]
    }
  ]
}`
				}]
				try {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "image/png",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail.jpg"),
						fileName: `${ucapanWaktu}`,
					}, button, teks, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'database':
			case 'db':
			case 'dbdata': {
				if (!isCreator) return m.tolak('Khusus Owner Bot')
				try {
					let subCmd = args[0];
					switch (subCmd) {
						case 'total': {
							let userLength = Object.keys(usersdb).length;
							let chatsLength = Object.keys(chatsdb).length;
							let regisLength = Object.keys(usersdb).filter(key => usersdb[key].daftar).length;
							let RPGLength = Object.keys(usersdb).filter(key => usersdb[key].rpg).length;

							let persentregis = userLength > 0 ? ((regisLength / userLength) * 100).toFixed(2) + '%' : '0%';
							let persentrpg = userLength > 0 ? ((RPGLength / userLength) * 100).toFixed(2) + '%' : '0%';

							let teks = `## *DATABASE COUNT* ##

*User Count:* ${userLength}
*Chats Count:* ${chatsLength}
*Register Count:* ${regisLength}
*Joined RPG:* ${RPGLength}

*${persentregis}* Terdaftar
*${persentrpg}* RPG Join
`;

							m.reply(teks);
						}
						break;

						case 'up':
						case 'upload':
						case 'backup': {
							const FILE_PATH = './database/database.json';
							const fileName = `${botNumber.split`@`[0]}.json`
							let data = await tools.uploadFileToGitHub(FILE_PATH, fileName);
							let teks = `# *DATABASE BACKUP* #

*Data ID* : ${data.content.name}
*Size Database* : ${bytesToSize(data.content.size)}
*Message* : ${data.commit.message}
*Download* : ${data.content.download_url}
*SHA* : ${data.content.sha}
`;
							m.reply(teks);
						}
						break;

						case 'reset': {
							m.reply("Database Reset!");
							await sleep(1000)
							let data = {};
							const outputPath = './database/database.json';
							fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
							process.exit(1);
						}
						break;

						case 'send': {
							let upbak = {
								key: {
									fromMe: false,
									participant: `0@s.whatsapp.net`,
									...(m.chat ? {
										remoteJid: "0@s.whatsapp.net"
									} : {}),
								},
								message: {
									conversation: `Succesfull backup database`,
								},
							};
							vreden.sendMessage(m.sender, {
								document: fs.readFileSync('./database/database.json'),
								fileName: 'database.json',
								mimetype: 'application/json'
							}, {
								quoted: upbak
							});
						}
						break;

						case 'recovery':
						case 'down':
						case 'recover': {
							const url = `https://raw.githubusercontent.com/cloudwhatsapp/database/main/${botNumber.split`@`[0]}.json`;
							const outputPath = './database/database.json';

							fetch(url)
								.then(response => {
									if (response.status === 404) {
										m.reply('File database tidak ditemukan di cloud.');
										return;
									}
									if (!response.ok) {
										throw new Error(`HTTP error! Status: ${response.status}`);
									}
									return response.json();
								})
								.then(data => {
									if (data) {
										fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
										db = data
										m.reply("Sukses memulihkan database dari cloud.");
									}
								})
								.catch(error => {
									console.error('Terjadi kesalahan:', error);
									m.reply("Terjadi kesalahan saat memulihkan database.");
								});
						}
						break;

						default: {
							let teks = `\`\`\`DATABASE OPTIONS\`\`\`

*total*
_hitung total database_

*reset*
_reset all database bot_

*send*
_get file database json_

*backup*
_backup database ke cloud_

*recovery*
_download database cloud_

*Contoh* :
${prefix + command} total
`;
							m.reply(teks);
						}
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'owner':
			case 'creator': {
				let teks = `*OWNER CONTACT*

Hai User
Ini Adalah Creator
Bot WhatsApp, Klik Disini
`
				let button = [{
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\"}`
				}, {
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${links.website}\",\"merchant_url\":\"${links.website}\"}`
				}]
				try {
					let buffer = await getBuffer("https://files.catbox.moe/zcsbah.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Developer Bot WhatsApp`,
					}, button, teks, bots.footer, m)
					if (general.audioOwner) {
					    await vreden.sendMessage(m.chat, {
				        	audio: { url: mediaPath.audioOwner },
				        	mimetype: 'audio/mpeg',
			        		ptt: true
			        	}, {
			        		quoted: m
				        })
				    }
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekdrive':
			case 'drive': {
				var result = await nou.drive.info();
				m.reply(`*Drive Server Info*\n\n - *Total :* ${result.totalGb} GB\n - *Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n - *Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
			}
			break
			case 'cekbandwidth':
			case 'bandwidth': {
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				});
				try {
					var {
						download,
						upload
					} = await tools.checkBandwidth();
					m.reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katalog': {
				const uploadFile = {
					upload: vreden.waUploadToServer
				};
				var imageMessage = await prepareWAMessageMedia({
						image: {
							url: "https://telegra.ph/file/951b678d8c410a5fb7280.jpg"
						},
					},
					uploadFile,
				);
				const product = {
					productImage: imageMessage.imageMessage,
					productId: "7066960336725723",
					title: "WhatsApp Bussines Api",
					description: "Nyari Apa Dek?",
					currencyCode: "IDR",
					priceAmount1000: "25000000",
					productImageCount: 1,
				};
				const productData = {
					product: product,
					businessOwnerJid: "6287824695047@s.whatsapp.net",
				};
				const productMessage = {
					productMessage: productData
				};
				var response = await generateWAMessageFromContent(
					m.chat,
					proto.Message.fromObject(productMessage),
					m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo
						}
					} : {
						quoted: m
					},
				);
				await vreden.relayMessage(m.chat, response.message, {
					messageId: response.key.id,
				});
			}
			break
			case 'dashboard': {
				try {
					let posi = await hit.getUserPosition(m.sender, _cmdUser);
					_cmdUser[posi].commandCounts.sort((a, b) => b.count - a.count);
					_cmd.sort((a, b) => b.count - a.count);
					let jumlahCmd = Math.min(10, _cmd.length);
					let jumlahUserCmd = Math.min(5, _cmdUser[posi].commandCounts.length);
					let totalUser = _cmdUser[posi].commandCounts.reduce((acc, cmd) => acc + cmd.count, 0);
					let totalGlobal = _cmd.reduce((acc, cmd) => acc + cmd.count, 0);
					let teks = `▢━━「 *DASHBOARD* 」━━▢\n\n*乂 PENGGUNAAN*\n- GLOBAL : ${totalGlobal}\n- ANDA : ${totalUser}\n\n`;
					teks += `*乂 COMMAND GLOBAL*\n\n`;

					for (let u = 0; u < jumlahCmd; u++) {
						teks += `- *#${_cmd[u].name} dipakai* ${_cmd[u].count} *kali*\n`;
					}

					teks += `\n*乂 COMMAND USER*\n\n`;
					for (let i = 0; i < jumlahUserCmd; i++) {
						teks += `- *#${_cmdUser[posi].commandCounts[i].name} dipakai* ${_cmdUser[posi].commandCounts[i].count} *kali*\n`;
					}

					let chartData = _cmd.slice(0, jumlahCmd).map(cmd => cmd.count).join(',');
					let chartImage = `https://quickchart.io/chart?bkg=white&c={type:'bar',data:{labels:[${_cmd.slice(0, jumlahCmd).map(cmd => `'${cmd.name}'`).join(',')}],datasets:[{label:'Penggunaan Command',data:[${chartData}]}]}}`;

					vreden.sendMessage(m.chat, {
						text: teks,
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: `👋Halo ${m.pushName}`,
								body: runtime(os.uptime()),
								thumbnailUrl: chartImage,
								sourceUrl: 'whatsapp.com',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					});
				} catch (error) {
					await m.errorReport(util.format(error), command);
				}
			}
			break;
			case 'sc':
			case 'price':
			case 'script': {
				let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Chat Owner💫\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\"}`
					},
					{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Newsletter 📣\",\"url\":\"${links.channel}\",\"merchant_url\":\"${links.channel}\"}`
					}
				]
				let teks = `*</> BOT SCRIPT ${bots.nameCall.toUpperCase()} V10</>*

*🛍️Price :* 100k Free Update

*Special Features And Benefits*
- Downloader
- Stalker
- Mini Games
- Role & Ranked
- Case Type
- Work All
- Mudah Diedit
- No encript
- 1000 case
- List Store Button
- Meta Button All
- Panel Create
- Always Free Update
- And Other ✨

*Terms Of Use Script*
- NodeJS V18
- Imagemagick
- FFmpeg
- Ram Min. 1GB
- Kesadaran (niat)
`
				await vreden.sendButtonCatalog(m.chat, {
					image: {
					    url: "https://files.catbox.moe/dzhz56.jpg"
					},
					title: "Script Bots WhatsApp",
					price: 100000
				    }, button, teks, bots.footer, m)
				}
			break
			case 'sewabot':
			case 'daftarprem':
			case 'buyprem':
			case 'sewa': {
				let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Chat Owner💫\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\"}`
					},
					{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Newsletter 📣\",\"url\":\"${links.channel}\",\"merchant_url\":\"${links.channel}\"}`
					}
				]
				let teks = `*</> SEWA & VVIP REGISTER </>*

*🛍️Sewa Bot Ke Group*
- Weekly : 7k
- Monthly : 12k
- Permanent : 25k

*💳 VVIP Membership*
- Weekly : 7k
- Monthly : 10k
- Permanent : 20k

`
				await vreden.sendButtonImage(m.chat, {
					url: "https://files.catbox.moe/hoeyov.jpg"
				}, button, teks, bots.footer, m)
			}
			break
			case 'cekprem':
			case 'cekpremium': {
				if (!isPremium) return m.tolak(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
				if (isCreator) return m.tolak(`Khusus user aja bkn untuk owner`)
				try {
					let vip = ms(usersdb[m.sender].premiumExpiry - Date.now())
					let teks = `*</> VIP USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Expired : ${vip.days}D
- Countdown :
${vip.days} hari, ${vip.hours} jam, ${vip.minutes} menit

*Benefit Info* :
- Download : 90MB++
- Limit : Unlimited
- Request : 10/s
- VIP Access : Yes
- User Priority : Yes
`
					const contentText = {
						text: teks,
						contextInfo: {
							mentionedJid: vreden.ments(teks),
							externalAdReply: {
								title: `PREMIUM USER 💳`,
								previewType: "PHOTO",
								thumbnailUrl: `https://files.catbox.moe/2gzvqw.jpg`,
								sourceUrl: links.website
							}
						}
					};
					return vreden.sendMessage(m.chat, contentText, {
						quoted: m,
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listprem':
			case 'listpremium': {
				try {
					let premium = await cd.listPremium(usersdb)
					let teks = `*</> PREMIUM LIST </>*\n\n`
					for (let i = 0; i < premium.length; i++) {
						let vip = ms(usersdb[premium[i]].premiumExpiry - Date.now())
						teks += `${i + 1}. @${premium[i].split("@")[0]}
Expired: ${vip.days} hari, ${vip.hours} jam, ${vip.minutes} menit

`
					}
					vreden.sendTextWithMentions(m.chat, teks, m)
				} catch (error) {
					m.errorReport(util.format(error), command)
				}
			}
			break
			case 'checksewa':
			case 'ceksewa': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isSewa) return m.tolak(`Bot tidak di sewa group ini!`)
				let sewa = ms(chatsdb[m.chat].sewaExpiry - Date.now())
				let teks = `*</> SEWA BOT INFO </>*

*Subscribe Info* :
- Grup : ${m.chat.split("@")[0]}
- Expired : ${sewa.days}D
- Countdown :
${sewa.days} hari, ${sewa.hours} jam, ${sewa.minutes} menit

*Benefit Info* :
- Feature : 1300++
- Management : Yes 
- Request : 1/5s
- VIP Access : No
- Grup Priority : Yes
- Protection : Yes
`
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: vreden.ments(teks),
						externalAdReply: {
							title: `GROUP SEWA 💫`,
							previewType: "PHOTO",
							thumbnailUrl: `https://files.catbox.moe/slr1qi.jpg`,
							sourceUrl: links.website
						}
					}
				};
				return vreden.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break
			case 'listsewa':
			case 'sewalist': {
				try {
					let sewa = await cd.listSewa(chatsdb)
					let teks = `*</> SEWA BOT LIST </>*\n\n`
					for (let i = 0; i < sewa.length; i++) {
						let vip = ms(chatsdb[sewa[i]].sewaExpiry - Date.now())
						teks += `${i + 1}. ${(await vreden.groupMetadata(sewa[i])).subject}
Expired: ${vip.days} hari, ${vip.hours} jam, ${vip.minutes} menit

`
					}
					vreden.sendTextWithMentions(m.chat, teks, m)
				} catch (error) {
					m.errorReport(util.format(error), command)
				}
			}
			break
			case 'clearram': {
				var ramUsage = process.memoryUsage().rss
				clearInterval(ramUsage)
				m.reply(`Succes Me-reset Ram Server...`)
			}
			break
			case 'speed':
			case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
						return cpu
					})
					const cpu = cpus.reduce((last, cpu, _, {
						length
					}) => {
						last.total += cpu.total
						last.speed += cpu.speed / length
						last.times.user += cpu.times.user
						last.times.nice += cpu.times.nice
						last.times.sys += cpu.times.sys
						last.times.idle += cpu.times.idle
						last.times.irq += cpu.times.irq
						return last
					}, {
						speed: 0,
						total: 0,
						times: {
							user: 0,
							nice: 0,
							sys: 0,
							idle: 0,
							irq: 0
						}
					})
					let software = await nou.os.oos();
					var drive = await nou.drive.info();
					let respon = `*\`JARINGAN SERVER\`*
- Ping: ${latensi.toFixed(4)} _Second_ 

*\`INFO SERVER\`*
- OS: ${software}
- IP Address: ${nou.os.ip()}
- Type OS: ${nou.os.type()}

*\`RAM :\`*
- Total: ${format(os.totalmem())}
- Digunakan: ${format(os.totalmem() - os.freemem())}

*\`PENYIMPANAN :\`*
- Total: ${drive.totalGb} GB
- Digunakan: ${drive.usedGb} GB (${drive.usedPercentage}%)
- Tersedia: ${drive.freeGb} GB (${drive.freePercentage}%)

*\`RUNTIME SERVER\`*
Aktif:
${runtime(os.uptime())}

*\`CPU USAGE (${cpus.length} CORE CPU)\`*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

> ${bots.footer}`.trim();
					let image = `https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B${drive.freePercentage}%2C%20${drive.usedPercentage}%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%27%2326AC00%27%2C%20%27red%27%5D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27A%27%2C%20%27C%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20circumference%3A%20Math.PI%2C%0A%20%20%20%20rotation%3A%20Math.PI%2C%0A%20%20%20%20cutoutPercentage%3A%2075%2C%0A%20%20%20%20layout%3A%20%7B%0A%20%20%20%20%20%20padding%3A%2080%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20display%3A%20false%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20%27%23404040%27%2C%0A%20%20%20%20%20%20%20%20anchor%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20align%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20formatter%3A%20(val)%20%3D%3E%20val%20%2B%20%27%25%27%2C%0A%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20doughnutlabel%3A%20%7B%0A%20%20%20%20%20%20%20%20labels%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5CnPing%20Status%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5Cn${latensi.toFixed(4)}s%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27%23000%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D`
					vreden.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: ucapanWaktu,
								thumbnailUrl: image,
								sourceUrl: 'https://control.vreden.web.id/plans.html',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
		case'tes':
        case 'test': {
let tek = `*Runtime* :\n${runtime(os.uptime())}`
 vreden.sendMessage(m.chat, {
 document: fs.readFileSync("./media/file.pdf"),
 mimetype: "application/pdf",
 fileName: `${bots.nameFull}`,
 caption: tek,
 footer: bots.footer,
 buttons: [
 {
 buttonId: ".menu", 
 buttonText: { displayText: "🤖 Menu" }
 },
 {
 buttonId: ".owner", 
 buttonText: { displayText: "👤 Owner" }
 }
 ],
 viewOnce: true,
 headerType: 6,
 jpegThumbnail: fs.readFileSync("./media/thumbnail2.jpg")
}, { quoted: fchannel });
}
break
			case 'bokep': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isPremium) return m.tolak('Tobat Bro Jangan Bokep Mulu:v')
				await await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const bok = await fetchJson(`https://www.vreden.web.id/database/random/bokep.json`)
					const kep = await pickRandom(bok)
					vreden.sendMessage(m.chat, {
						video: {
							url: kep
						},
						caption: `😱 Random ${command}`,
						gifPlayback: false
					}, {
						quoted: m
					})
					return m.reply(`Silahkan Cek Di Private Chat:v`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'waktu':
			case 'time':
			case 'cekwaktu': {
				let baru = hitungmundur(1, 1, 2025)
				let ramadhan = hitungmundur(12, 4, 2024)
				let natal = hitungmundur(25, 12, 2024)
				await vreden.sendMessage(m.chat, {
					text: `*WAKTU INFO*\n\n\n*Jam* : ${time}\n\n*Lebaran* :\nJangan Lupa THR nya kak >.<\n\n*Tahun Baru* :\n${baru}\n\n*Natal* :\n${natal}\n\n\n_Manfaatkan Lah Waktu Sempatmu, Sebelum Datang Waktu Sempitmu, Karena Momen Berharga Tak Mungkin Dapat Terulang Kembali_ >_<`,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'totalfeature':
			case 'totalfiture':
			case 'totalfitur': {
				if (m.isGroup) return m.warning('Fitur Khusus Di private chat!')
				let teks = `乂 FITUR - INFO\n\n- *Total Fitur:* ${totalFitur()}\n- *Total Error:* 4\n- *Fitur Online:* ${totalFitur() - 4}\n`
				let button = [{
					"name": "review_and_pay",
					"buttonParamsJson": `{\n  currency: 'IDR',\n  payment_configuration: '',\n  payment_type: '',\n  transaction_id: '',\n  total_amount: { value: 3000000, offset: 100 },\n  reference_id: '4N88TZPXWUM',\n  type: 'physical-goods',\n  payment_method: '',\n  order: {\n    status: 'pending',\n    description: '',\n    subtotal: { value: 3500000, offset: 100 },\n    tax: { value: 500000, offset: 100 },\n    discount: { value: 1100000, offset: 100 },\n    shipping: { value: 100000, offset: 100 },\n    order_type: 'ORDER',\n    items: [\n  {\n    retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n    name: 'Total All Fitur',\n    amount: { value: 3000, offset: 100 },\n    quantity: ${totalFitur()}\n  }\n]\n  },\n  additional_note: ''\n}`
				}]
				vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
			}
			break

			//━━━━━━━━━━━━━━━[ CASE COMMAND SIMPLE MENU ]━━━━━━━━━━━━━━━━━//
			case 'menu':
			case 'help': {
				let menu = bots.menu.replace("@botname", `${bots.nameFull}`).replace("@prefix", `${prefix}`).replace("@jam", `${time}`).replace("@totalfitur", `${totalFitur()}`).replace("@device", `${isCreator ? "web" : getDevice(m.key.id)}`).replace("@ucapan", `${ucapanWaktu}`).replace("@nomor", `${usernomor}`).replace("@pushname", `${m.pushName}`)
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "List Menu",
  "sections": [
    {
      "title": "Eksplorasi Semua Menu Bot WhatsApp",
      "highlight_label": "Bot WhatsApp",
      "rows": [
        {
          "header": "All Feature",
          "title": "Lihat All Menu Command Bots",
          "id": ".allmenu"
        },
        {
          "header": "Plugin Feature",
          "title": "Lihat All Menu Versi Plugin",
          "id": ".pluginmenu"
        },
        {
          "header": "Anonymous Menu",
          "title": "Chat Anonymous Global",
          "id": ".anonymousmenu"
        },
        {
          "header": "Balance Menu",
          "title": "Cek Limit Dan Saldo",
          "id": ".balancemenu"
        },  
        {
          "header": "Stalking Menu",
          "title": "Stalk Sosmed Dan Info",
          "id": ".stalkmenu"
        },
        {
          "header": "Sticker Menu",
          "title": "Convert Image To Sticker",
          "id": ".stickermenu"
        },
        {
          "header": "Storage Menu",
          "title": "Add Penyimpanan Ke Database",
          "id": ".storagemenu"
        },
        {
          "header": "Islamic Menu",
          "title": "Informasi Hadist Dan Al-Quran",
          "id": ".Islamimenu"
        },
        {
          "header": "Owner Menu",
          "title": "Feature Khusus Owner",
          "id": ".ownermenu"
        },
        {
          "header": "Convert Menu",
          "title": "Converting Text Dan Media",
          "id": ".convertmenu"
        },
        {
          "header": "Ephoto",
          "title": "Maker Image Feature",
          "id": ".ephotomenu"
        },
        {
          "header": "Search Menu",
          "title": "Search Informasi di internet",
          "id": ".searchmenu"
        },
        {
          "header": "Download Menu",
          "title": "Downloader Media Sosial",
          "id": ".downloadmenu"
        },
        {
          "header": "Panel Menu",
          "title": "Pterodactly Management",
          "id": ".panelmenu"
        },
        {
          "header": "Simple Menu",
          "title": "Sub Menu Command",
          "id": ".simplemenu"
        },
        {
          "header": "Main Menu",
          "title": "Bot System Information",
          "id": ".mainmenu"
        },
        {
          "header": "RPG Menu",
          "title": "RPG Games Survival",
          "id": ".rpgmenu"
        },
        {
          "header": "Game Menu",
          "title": "Mini Games On WhatsApp",
          "id": ".gamemenu"
        },
        {
          "header": "ChatGPT Menu",
          "title": "Asisten Ai ChatGPT",
          "id": ".aimenu"
        },
        {
          "header": "Evaled Feature",
          "title": "Eval JavaScript Owner",
          "id": ".evalmenu"
        },
        {
          "header": "Group Menu",
          "title": "Group Management",
          "id": ".grupmenu"
        },
        {
          "header": "Store Menu",
          "title": "Store online Management",
          "id": ".storemenu"
        },
        {
          "header": "Script Bot",
          "title": "Akses Script Bot",
          "id": ".script"
        }
      ]
    }
  ]
}`
				}, {
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner Bots\",\"url\":\"https://wa.me/message/Q2PGHU5OZHARA1\",\"merchant_url\":\"https://wa.me/message/Q2PGHU5OZHARA1\"}`
				}, {
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Website Links\",\"url\":\"${links.website}\",\"merchant_url\":\"${links.website}\"}`
				}]
				if (bots.style === "v1") {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "image/png",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail.jpg"),
						fileName: `${bots.namasaluran}`,
					}, button, menu, bots.footer, m, {
						contextInfo: {
							mentionedJid: vreden.ments(menu),
							externalAdReply: {
							//	showAdAttribution: true,
								containsAutoReply: true,
								title: ucapanWaktu,
								body: "Selamat Beraktifitas ~~",
								thumbnailUrl: mediaPath.thumbnail,
								sourceUrl: '',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					})
				} else if (bots.style === "v2") {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						fileName: `${bots.namasaluran}`,
					}, button, menu, bots.footer, m, {
						contextInfo: {
							mentionedJid: vreden.ments(menu),
							externalAdReply: {
							//	showAdAttribution: true,
								containsAutoReply: true,
								title: ucapanWaktu,
								body: "Selamat Beraktifitas ~~",
								thumbnailUrl: mediaPath.thumbnail,
								sourceUrl: '',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					})
				} else if (bots.style === "v3") {
					newReply(menu, {
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: bots.idsaluran,
								serverMessageId: null,
								newsletterName: `${bots.namasaluran}`
							},
							externalAdReply: {
								title: bots.nameFull,
								body: runtime(os.uptime()),
								thumbnailUrl: mediaPath.thumbnail,
								sourceUrl: links.channel,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					});
				} else if (bots.style === "v4") {
					await vreden.sendButtonImage(m.chat, {
						url: mediaPath.thumbnail
					}, button, menu, bots.footer, m)
				} else if (bots.style === "v5") {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/file.pdf'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail2.jpg"),
						fileName: `${bots.namasaluran}`,
					}, button, menu, bots.footer, m)
				} else if (bots.style === "v6") {
					vreden.sendButtonText(m.chat, button, menu, bots.footer, m)
				} else {
					m.reply("menu belum di set")
				}
				if (general.audioMenu) {
					await vreden.sendMessage(m.chat, {
				        audio: { url: mediaPath.audioMenu },
				        mimetype: 'audio/mpeg',
			        	ptt: true
			        }, {
			        	quoted: m
				    })
				}
			}
			break

			case 'allmenu': {
				let allmenu = `*_Silahkan Dilihat Alfiturnya..._*


╔━━「 *GRUP* 」━━▢
┃
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *GAME* 」━━▢
┃
${cmdGame.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *OPEN AI* 」━━▢
┃
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *DOWNLOAD* 」━━▢
┃
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *RPG GAME* 」━━▢
┃
${cmdRPG.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *PTERO* 」━━▢
┃
${cmdPanel.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *SYSTEM* 」━━▢
┃
${cmdSystem.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *SIMPLE* 」━━▢
┃
${cmdSimple.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *SEARCH* 」━━▢
┃
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *EPHOTO* 」━━▢
┃
${cmdEphoto.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *CONVERT* 」━━▢
┃
${cmdConvert.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *STICKER* 」━━▢
┃
${cmdSticker.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *STORAGE* 」━━▢
┃
${cmdStorage.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *OWNER* 」━━▢
┃
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *ISLAMIC* 」━━▢
┃
${cmdIslamic.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *BALANCE* 」━━▢
┃
${cmdBalance.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *STALKING* 」━━▢
┃
${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *EVALED* 」━━▢
┃
${cmdEval.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *ANONYMOUS* 」━━▢
┃
${cmdAnonym.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

╔━━「 *STORE MENU* 」━━▢
┃
${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

`
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "Click Here",
  "sections": [
    {
      "title": "Eksplorasi Semua Menu Bot WhatsApp ",
      "highlight_label": "",
      "rows": [
        {
          "header": "All Feature",
          "title": "Lihat All Menu Command Bots",
          "id": ".allmenu"
        },
        {
          "header": "Plugin Feature",
          "title": "Lihat All Menu Versi Plugin",
          "id": ".pluginmenu"
        },
        {
          "header": "Anonymous Menu",
          "title": "Chat Anonymous Global",
          "id": ".anonymousmenu"
        },
        {
          "header": "Balance Menu",
          "title": "Cek Limit Dan Saldo",
          "id": ".balancemenu"
        },   
        {
          "header": "Stalking Menu",
          "title": "Stalk Sosmed Dan Info",
          "id": ".stalkmenu"
        },
        {
          "header": "Sticker Menu",
          "title": "Convert Image To Sticker",
          "id": ".stickermenu"
        },
        {
          "header": "Storage Menu",
          "title": "Add Penyimpanan Ke Database",
          "id": ".storagemenu"
        },
        {
          "header": "Islamic Menu",
          "title": "Informasi Hadist Dan Al-Quran",
          "id": ".Islamimenu"
        },
        {
          "header": "Owner Menu",
          "title": "Feature Khusus Owner",
          "id": ".ownermenu"
        },
        {
          "header": "Convert Menu",
          "title": "Converting Text Dan Media",
          "id": ".convertmenu"
        },
        {
          "header": "Ephoto",
          "title": "Maker Image Feature",
          "id": ".ephotomenu"
        },
        {
          "header": "Search Menu",
          "title": "Search Informasi di internet",
          "id": ".searchmenu"
        },
        {
          "header": "Download Menu",
          "title": "Downloader Media Sosial",
          "id": ".downloadmenu"
        },
        {
          "header": "Panel Menu",
          "title": "Pterodactly Management",
          "id": ".panelmenu"
        },
        {
          "header": "Simple Menu",
          "title": "Sub Menu Command",
          "id": ".simplemenu"
        },
        {
          "header": "Main Menu",
          "title": "Bot System Information",
          "id": ".mainmenu"
        },
        {
          "header": "RPG Menu",
          "title": "RPG Games Survival",
          "id": ".rpgmenu"
        },
        {
          "header": "Game Menu",
          "title": "Mini Games On WhatsApp",
          "id": ".gamemenu"
        },
        {
          "header": "ChatGPT Menu",
          "title": "Asisten Ai ChatGPT",
          "id": ".aimenu"
        },
        {
          "header": "Evaled Feature",
          "title": "Eval JavaScript Onwer",
          "id": ".evalmenu"
        },
        {
          "header": "Group Menu",
          "title": "Group Management",
          "id": ".grupmenu"
        },
        {
          "header": "Store Menu",
          "title": "Store online Management",
          "id": ".storemenu"
        },
        {
          "header": "Script Bot",
          "title": "Akses Script Bot",
          "id": ".script"
        }
      ]
    }
  ]
}`
				}]
				vreden.sendButtonDocument(m.chat, {
					document: fs.readFileSync('./media/file.pdf'),
					mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
					fileLength: 10000000000,
					pageCount: 77,
					jpegThumbnail: fs.readFileSync("./media/thumbnail2.jpg"),
					fileName: `${ucapanWaktu}`,
				}, button, allmenu, bots.footer, m, {
					contextInfo: {
						mentionedJid: vreden.ments(allmenu),
						externalAdReply: {
						//	showAdAttribution: true,
							containsAutoReply: true,
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: '',
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				})
			}
			break
			case 'pluginmenu': {
				const tagsMap = {};

				global.handlers.forEach(handler => {
					const tag = handler.tags[0];
					if (!tagsMap[tag]) {
						tagsMap[tag] = [];
					}
					tagsMap[tag].push(...handler.help);
				});

				let result = '';

				for (const [tag, helps] of Object.entries(tagsMap)) {
					result += `╔━━「 *${tag.toUpperCase()} MENU* 」━━▢\n┃\n`;
					helps.forEach(help => {
						result += `┃⌬ ${prefix + help}\n`;
					});
					result += '╚━━━━━━━━━━━▢\n\n'
				}
				let plugin = `*List Plugin File Command:*

${result}

> ${bots.footer}`
				newReply(plugin, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'grupmenu': {
				let grupmenu = `╔━━「 *GRUP FEATURE* 」━━▢
┃
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(grupmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'evalmenu': {
				let evalmenu = `╔━━「 *EVALED* 」━━▢
┃
${cmdEval.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(evalmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'gamemenu': {
				let gamesmenu = `╔━━「 *GAMES* 」━━▢
┃
${cmdGame.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(gamesmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'aimenu': {
				let aimenu = `╔━━「 *OPEN AI* 」━━▢
┃
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(aimenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'downloadmenu': {
				let downloadmenu = `╔━━「 *DOWNLOAD* 」━━▢
┃
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(downloadmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'panelmenu': {
				let panelmenu = `╔━━「 *PTERO* 」━━▢
┃
${cmdPanel.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(panelmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'rpgmenu': {
				let rpgmenu = `╔━━「 *RPG GAME* 」━━▢
┃
${cmdRPG.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(rpgmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'mainmenu': {
				let mainmenu = `╔━━「 *SYSTEM* 」━━▢
┃
${cmdSystem.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(mainmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'simplemenu': {
				let simplemenu = `╔━━「 *SIMPLE* 」━━▢
┃
${cmdSimple.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(simplemenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'searchmenu': {
				let searchmenu = `╔━━「 *SEARCH* 」━━▢
┃
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(searchmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'convertmenu': {
				let convertmenu = `╔━━「 *CONVERT* 」━━▢
┃
${cmdConvert.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(convertmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'ephotomenu': {
				let ephotomenu = `╔━━「 *EPHOTO* 」━━▢
┃
${cmdEphoto.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(ephotomenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
	
			case 'ownermenu': {
				let ownermenu = `╔━━「 *OWNER* 」━━▢
┃
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(ownermenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'Islamimenu': {
				let Islamimenu = `╔━━「 *ISLAMIC* 」━━▢
┃
${cmdIslamic.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(Islamimenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'storagemenu': {
				let storagemenu = `╔━━「 *STORAGE* 」━━▢
┃
${cmdStorage.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(storagemenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			
			case 'stickermenu': {
				let stickermenu = `╔━━「 *STICKER* 」━━▢
┃
${cmdSticker.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(stickermenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'stalkmenu': {
				let stalkmenu = `╔━━「 *STALKING* 」━━▢
┃
${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(stalkmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break		
			case 'balancemenu': {
				let balancemenu = `╔━━「 *BALANCE* 」━━▢
┃
${cmdBalance.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(balancemenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'anonymousmenu': {
				let anonymousmenu = `╔━━「 *ANONYMOUS* 」━━▢
┃
${cmdAnonym.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(anonymousmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'storemenu': {
				let storemenu = `╔━━「 *STORE MENU* 」━━▢
┃
${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃⌬ ${prefix + v}`).join('\n')}
╚━━━━━━━━━━━▢

> ${bots.footer}`
				newReply(storemenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: bots.idsaluran,
							serverMessageId: null,
							newsletterName: `${bots.namasaluran}`
						},
						externalAdReply: {
							title: `👋Halo ${m.pushName}`,
							body: runtime(os.uptime()),
							thumbnailUrl: mediaPath.thumbnail,
							sourceUrl: links.channel,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND SEARCH ]━━━━━━━━━━━━━━━━━//
			case 'lirik':
			case 'liriklagu': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan nama lagu!*\n\nTutorial:\n${prefix+command} <judul>\n\nContoh:\n${prefix+command} Bila Nanti`)
				try {
					let result = await fetchJson(`https://api.vreden.web.id/api/lirik?lagu=${text}`)
					let anu = result.result
					if (anu.error) {
						m.reply("Tidak ada lagu tersebut di Genius")
					} else {
						vreden.sendMessage(m.chat, {
							image: {
								url: anu.image
							},
							caption: `*\`乂 LIRIK - LAGU\`*\n\n*Judul :* ${anu.title}\n*Artis :* ${anu.artist}\n*Lirik :* ${anu.lyrics}\n\n`
						}, {
							quoted: m
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
case 'ssweb':
 case 'sswebsite': {
 if (!args[0] || !args[1]) return m.warning(`*Penggunaan salah!*\n\nTutorial:\n${prefix+command} <type> <url web>\n\nList type:\n1. hp\n2. pc\n3. tab\n\nContoh:\n${prefix+command} hp https://bit.ly/420u6GX`)
 if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
 
 const validTypes = ['hp', 'pc', 'tab'];
 if (!validTypes.includes(args[0])) return m.reply(`Mau type apa lu?\n\n- hp\n- pc\n- tab\n\nContoh:\n${prefix + command} hp https://bit.ly/420u6GX`);
 
 await vreden.sendMessage(m.chat, {
 react: {
 text: "⏱️",
 key: m.key,
 }
 });
 
 try {
 const typeMap = {
 'hp': 'phone',
 'pc': 'desktop',
 'tab': 'tablet'
 };
 const type = typeMap[args[0]]
 await vreden.sendMessage(m.chat, {
 image: {
 url: `https://api.vreden.web.id/api/ssweb?url=${args[1]}&type=${type}`
 },
 caption: `*🍟 Fetching* : ${latensi.toFixed(4)}s`
 }, {
 quoted: m
 })
 } catch (error) {
 await m.errorReport(util.format(error), command)
 }
 }
 break;


			case'spotify':
			case 'spotifys':
			case 'spotifysearch': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} DJ melodi kane`)
				if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				if (text.startsWith("https://open.spotify.com")) {
					try {
						let spotify = await fetchJson(`https://api.vreden.web.id/api/spotify?url=${text}`)
						await vreden.sendMessage(m.chat, {
							audio: {
								url: spotify.result.music
							},
							mimetype: 'audio/mpeg',
							contextInfo: {
								forwardingScore: 9999999,
								isForwarded: true,
								externalAdReply: {
									title: "乂 SPOTIFY - DOWNLOAD",
									body: `${spotify.result.artists} - ${spotify.result.title}`,
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									thumbnailUrl: spotify.result.cover,
									sourceUrl: text
								}
							}
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				} else {
					let response = await fetchJson("https://api.vreden.web.id/api/spotifysearch?query=" + encodeURIComponent(text))
					let spotifyscard = []
					let no = 1
					let teks = `*乂 SPOTIFY SEARCH*\n\n${response.result[0].title}\n\n*⌬ Duration:* ${response.result[0].duration}\n*⌬ Artis:* ${response.result[0].artist}\n*⌬ Popularity:* ${response.result[0].popularity}\n*⌬ Release:* ${response.result[0].releaseDate}\n\n`;
					for (let x of response.result) {
						spotifyscard.push({
							title: `${no++}. ${x.artist}`,
							rows: [{
								header: `[ Audio ] ${x.duration}`,
								title: `${x.title}`,
								description: `Link: ${x.spotifyLink}`,
								id: `.spotify ${x.spotifyLink}`,
							}]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(spotifyscard)}\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://api.vreden.web.id/api/spotifyimage?image=https://files.catbox.moe/rrpq5i.jpg&title=${response.result[0].title}&author=Bot WhatsApp&album=${response.result[0].album}`
					}, button, teks, bots.footer, m)
				}
			}
			break



case'totalfitur2': {
				if (m.isPremium) return m.warning('Fitur Khusus Di private chat!')
				let teks = `乂 FITUR - INFO\n\n- *Total Fitur:* ${totalFitur()}\n- *Total Error:* 4\n- *Fitur Online:* ${totalFitur() - 4}\n`
				let button = [{
					"name": "review_and_pay",
					"buttonParamsJson": `{\n currency: 'IDR',\n payment_configuration: '',\n payment_type: '',\n transaction_id: '',\n total_amount: { value: 3000000, offset: 100 },\n reference_id: '4N88TZPXWUM',\n type: 'physical-goods',\n payment_method: '',\n order: {\n status: 'pending',\n description: '',\n subtotal: { value: 3500000, offset: 100 },\n tax: { value: 500000, offset: 100 },\n discount: { value: 1100000, offset: 100 },\n shipping: { value: 100000, offset: 100 },\n order_type: 'ORDER',\n items: [\n {\n retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n name: 'Total All Fitur',\n amount: { value: 3000, offset: 100 },\n quantity: ${totalFitur()}\n }\n]\n },\n additional_note: ''\n}`
				}]
				vreden.sendButtonText(m.chat, button, teks, setting.bots.footer, m)
			}
			break
case 'gimage':
			case 'gi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\nTutorial:\n${prefix+command} <text>\n\nContoh:\n${prefix+command} Anime`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await internet.GoogleImage(text)
					let result = await pickRandom(anu)
					vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `*Google Image ✨*\n\n*Link :* ${result}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pinterest2':
			case 'pin2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\nTutorial:\n${prefix+command} <text>\n\nContoh:\n${prefix+command} Anime`)
				if (budy.match(`colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let fotopin = await pinterest(text)
					let result = await pickRandom(fotopin)
					vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `*Pinterest Search✨*\n\n*Link :* ${result}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pinterest':
			case 'pin': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\n${prefix + command} doraemon\n*Atau:*\n${prefix + command} doraemon|5\n\nUntuk jumlah gambar`)
				if (budy.match(`colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				if (text.includes("|")) {
					var jmlh = text.split("|")[1]
					var cari = text.split("|")[0]
					if (isNaN(jmlh)) return m.warning(`*Jumlah harus berupa angka!*`)
					if (jmlh > 10) return m.warning(`*Jumlah maksimal 10 slide*`)
					if (jmlh < 1) return m.warning(`*Jumlah minimal 1 slide*`)
				}
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let cardpin = []
					let jumlah = jmlh ? jmlh : 5
					let cariin = cari ? cari : text
					let fotopin = await pinterest(cariin)
					for (let i = 0; i < jumlah; i++) {
						const uploadFile = {
							upload: vreden.waUploadToServer
						};
						var pinteres = await prepareWAMessageMedia({
								image: {
									url: fotopin[i]
								},
							},
							uploadFile,
						);
						cardpin.push({
							body: proto.Message.InteractiveMessage.Body.create({
								text: ``
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: bots.footer
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: `${i + 1}/${jumlah} Image`,
								subtitle: "Q100 VRD",
								imageMessage: pinteres.imageMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: [{
									"name": "cta_url",
									"buttonParamsJson": `{\"display_text\":\"📥 Download ( ${i + 1} )\",\"url\":\"${fotopin[i]}\",\"merchant_url\":\"${fotopin[i]}\"}`
								}],
							})
						})
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									body: proto.Message.InteractiveMessage.Body.create({
										text: `*Hasil Pinterest Dari :*\n${cariin}`
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: bots.footer
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: "*Pinterest Search*",
										subtitle: "Q100 VRD",
										hasMediaAttachment: false
									}),
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
										cards: cardpin,
									})
								})
							}
						}
					}, {
						quoted: m
					})

					await vreden.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'yts':
			case 'ytsearch': {
				if (!text) return m.warning(`Contoh : ${prefix + command} story wa anime`)
				try {
					let search = await ytdl.search(text)
					let uii = await search.results
					let ytscard = []
					let teks = `*乂 YOUTUBE SEARCH*\n\n${uii[0].title}\n\n*⌬ Video ID:* ${uii[0].videoId}\n*⌬ Views:* ${uii[0].views}\n*⌬ Duration:* ${uii[0].timestamp}\n*⌬ Upload At:* ${uii[0].ago}\n\n`
					let no = 1
					for (let i of uii.filter(objek => objek.type === "video")) {
						ytscard.push({
							title: `${no++}. ${i.title}`,
							rows: [{
									header: `[ ${i.timestamp} ] Download Audio`,
									title: `ID: ${i.videoId}`,
									description: `Link: ${i.url}`,
									id: `.ytmp3 ${i.url}`,
								},
								{
									header: `[ ${i.timestamp} ] Download Video`,
									title: `ID: ${i.videoId}`,
									description: `Link: ${i.url}`,
									id: `.ytmp4 ${i.url}`,
								}
							]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(ytscard)}\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: uii[0].thumbnail
					}, button, teks, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'yts2':
			case 'ytsearch2': {
				if (!text) return m.warning(`Contoh : ${prefix + command} story wa anime`)
				try {
					let search = await ytdl.search(text)
					let uii = await search.results
					let teks = '*乂 YOUTUBE SEARCH*\n\n'
					let no = 1
					for (let i of uii.filter(objek => objek.type === "video")) {
						teks += `*⌬ Nomor:* ${no++}\n*⌬ Type:* ${i.type}\n*⌬ Video ID:* ${i.videoId}\n*⌬ Title:* ${i.title}\n*⌬ View:* ${i.views}\n*⌬ Duration:* ${i.timestamp}\n*⌬ Upload At:* ${i.ago}\n*⌬ Links:* ${i.url}\n─────────────────\n`
					}
					vreden.sendMessage(m.chat, {
						image: {
							url: uii[0].thumbnail
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\nTutorial:\n${prefix+command} <query>\n\nContoh:\n${prefix+command} jj epep`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tiktoks = await internet.tiktokSearchVideo(text)
					let tiktoklist = []
					let teks = `*</> TIKTOK SEARCH </>*

*Video Info* :
- Username : ${tiktoks.videos[0].author.unique_id}
- Nickname : ${tiktoks.videos[0].author.nickname}
- Duration : ${tiktoks.videos[0].duration} detik

*Statistik Info* :
- Views : ${tiktoks.videos[0].play_count}
- Likes : ${tiktoks.videos[0].digg_count}
- Comment : ${tiktoks.videos[0].comment_count}
- Share : ${tiktoks.videos[0].share_count}

*Caption* :
${tiktoks.videos[0].title}

*Links Video* :
https://www.tiktok.com/@${tiktoks.videos[0].author.unique_id}/video/${tiktoks.videos[0].video_id}

`
					let no = 1
					for (let i of tiktoks.videos) {
						tiktoklist.push({
							title: `${no++}. ${i.title}`,
							rows: [{
									header: `[ ${i.duration} detik ] Download Audio | ${i.author.nickname}`,
									title: `ID: ${i.video_id}\n⌬ VT Like : ${i.digg_count}\n⌬ Comment : ${i.comment_count}\n⌬ Share : ${i.share_count}`,
									description: `Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
									id: `.ttaudio https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
								},
								{
									header: `[ ${i.duration} detik ] Download Video | ${i.author.unique_id}`,
									title: `ID: ${i.video_id}\n*⌬ VT Like* : ${i.digg_count}\n*⌬ Comment* : ${i.comment_count}\n⌬ Share : ${i.share_count}`,
									description: `Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
									id: `.tiktok https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
								}
							]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(tiktoklist)}\n}`
					}]
					vreden.sendButtonVideo(m.chat, {
						url: `https://tikwm.com${tiktoks.videos[0].play}`
					}, button, teks, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tiktoksearch2':
			case 'tiktoks2':
			case 'ttsearch2': {
				if (!text) return m.warning(`*Masukan Query*:\n\nContoh:\n${prefix+command} jj epep`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tiktoks = await internet.tiktokSearchVideo(text)
					let teks = "*</> TIKTOK SEARCH </>*\n\n"
					let no = 1
					for (let i of tiktoks.videos) {
						let sut = await JSON.stringify(i.author)
						teks += `*Video Info* :
- Nomor : ${no++}
- Username : ${i.author.unique_id}
- Nickname : ${i.author.nickname}
- Duration : ${i.duration} detik

*Statistik Info* :
- Views : ${i.play_count}
- Likes : ${i.digg_count}
- Comment : ${i.comment_count}
- Share : ${i.share_count}

*Caption* :
${i.title}

*Links Video* :
https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}

─────────────────
`
					}
					vreden.sendMessage(m.chat, {
						video: {
							url: `https://tikwm.com${tiktoks.videos[0].play}`
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'capcutsearch':
			case 'capcuts':
			case 'ccsearch': {
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\nTutorial:\n${prefix+command} <query>\n\nContoh:\n${prefix+command} jj epep`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let capcuts = await downloader.searchTemplates(text)
					let capcutlist = []
					let teks = `*</> CAPCUT SEARCH </>*

*Video Info* :
- Username : ${capcuts.data.video_templates[0].author.unique_id}
- Nickname : ${capcuts.data.video_templates[0].author.name}
- Duration : ${clockString(capcuts.data.video_templates[0].duration)}

*Statistik Info* :
- Views : ${await tools.convertAngka(capcuts.data.video_templates[0].play_amount)}
- Likes : ${await tools.convertAngka(capcuts.data.video_templates[0].like_count)}
- Favorite : ${await tools.convertAngka(capcuts.data.video_templates[0].favorite_count)}
- Dipakai : ${await tools.convertAngka(capcuts.data.video_templates[0].usage_amount)}

*Caption* :
${capcuts.data.video_templates[0].short_title}
${capcuts.data.video_templates[0].title}

*Links Video* :
https://www.capcut.net/sharevideo?template_id=${capcuts.data.video_templates[0].web_id}

`
					let no = 1
					for (let i of capcuts.data.video_templates) {
						capcutlist.push({
							title: `${no++}. ${i.short_title}`,
							rows: [{
									header: `[ ${clockString(i.duration)} ] ${i.author.name}`,
									title: `ID: ${i.web_id}\n⌬ CC Like : ${await tools.convertAngka(i.like_count)}\n⌬ Favorite : ${await tools.convertAngka(i.favorite_count)}\n⌬ Dipakai : ${await tools.convertAngka(i.usage_amount)}`,
									description: `Link: https://www.capcut.net/sharevideo?template_id=${i.web_id}`,
									id: `.capcut https://www.capcut.net/sharevideo?template_id=${i.web_id}`,
								}
							]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(capcutlist)}\n}`
					}]
					vreden.sendButtonVideo(m.chat, {
						url: `${capcuts.data.video_templates[0].video_url}`
					}, button, teks, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'capcutsearch2':
			case 'capcuts2':
			case 'ccsearch2': {
				if (!text) return m.warning(`*Masukan Query*:\n\nContoh:\n${prefix+command} jj epep`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let capcuts = await downloader.searchTemplates(text)
					let teks = "*</> CAPCUT SEARCH </>*\n\n"
					let no = 1
					for (let i of capcuts.data.video_templates) {
						teks += `*Video Info* :
- Nomor : ${no++}
- Username : ${i.author.unique_id}
- Nickname : ${i.author.name}
- Duration : ${clockString(i.duration)}

*Statistik Info* :
- Views : ${await tools.convertAngka(i.play_amount)}
- Likes : ${await tools.convertAngka(i.like_count)}
- Favorite : ${await tools.convertAngka(i.favorite_count)}
- Dipakai : ${await tools.convertAngka(i.usage_amount)}

*Caption* :
${i.short_title}
${i.title}

*Links Video* :
https://www.capcut.net/sharevideo?template_id=${i.web_id}

─────────────────
`
					}
					vreden.sendMessage(m.chat, {
						video: {
							url: `${capcuts.data.video_templates[0].video_url}`
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kusonime': {
				try {
					if (!text) return m.warning('Masukan anime yang ingin dicari!!\nContoh: .kusonime naruto');
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					let data = await internet.scrapKusonime(text)
					let caption = `*😋 KUSONIME ✨*

Title : ${data.title}
Views : ${data.view}
Type : ${data.type}
Season : ${data.season}
Status : ${data.status_anime}
Genre : ${data.genre}
Eps : ${data.total_episode}
Produser : ${data.producers}
Durasi : ${data.duration}
Score : ${data.score}
Rilis : ${data.released}
Sinopsis : ${data.description}
`
					vreden.sendMessage(m.chat, {
						image: {
							url: data.thumb
						},
						caption: caption
					}, {
						quoted: m
					})
				} catch (e) {
					m.reply("Pencarian gagal.")
				}
			}
			break
			case 'jarak': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan wilayah nya!*\n\nContoh:\n${prefix+command} jakarta|bandung`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let [from, to] = text.split(/[^\w\s]/g)
					if (!(from && to)) return m.warning(`Contoh: ${prefix+command} jakarta|bandung`)
					let data = await internet.jarak(from, to)
					if (data.img) return vreden.sendMessage(m.chat, {
						image: data.img,
						caption: data.desc
					}, {
						quoted: m
					})
					else m.reply(data.desc)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ramalancuaca':
			case 'cuacamendatang': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} Yogyakarta`)
				try {
					let teks = `*乂 RAMALAN CUACA*\n\n`
					const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=060a6bcfa19809c2cd4d97a212b19273&units=metric&cnt=${5 * 8}&lang=id`
					const response = await fetch(apiUrl);
					const data = await response.json();
					data.list.forEach((item, index) => {
						teks += `*Tanggal:* ${item.dt_txt}
*Cuaca:* ${item.weather[0].description}
*Temperatur:* ${item.main.temp}°C
*Kelembaban:* ${item.main.humidity}%
*Kecepatan angin:* ${item.wind.speed} m/s

────────────────────\n\n`
					});
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'infocuaca':
			case 'cuaca': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} Yogyakarta`)
				try {
					const {
						data
					} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`)
					if (data.cod !== 200) return m.reply(data.message)
					const teks = `*乂 WEATHER INFO*

• *Lokasi* : ${data.name}
• *Country* : ${data.sys.country}
• *Cuaca* : ${kapital(data.weather[0].description)}
• *Suhu saat ini* : ${data.main.temp}
• *Suhu tertinggi* : ${data.main.temp_min}
• *Suhu terendah* : ${data.main.temp_max}
• *Kelembapan* : ${data.main.humidity}
• *Angin* : ${data.wind.speed} km/h
• *Tekanan* : ${data.main.pressure}

> ${bots.footer}`
					const buffer = await getBuffer(`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
					const contentText = {
						text: teks,
						contextInfo: {
							mentionedJid: vreden.ments(teks),
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
							//	showAdAttribution: true,
								containsAutoReply: true,
								title: `${kapital(data.weather[0].description)}`,
								body: `${data.name}`,
								previewType: "PHOTO",
								thumbnail: buffer,
								sourceUrl: "-"
							}
						}
					};
					vreden.sendMessage(m.chat, contentText, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'google': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} Indonesia`);
				try {
					let data = await fetchJson(`https://api.vreden.web.id/api/google?query=${text}`)
					let googlecard = []
					let teks = `*</> GOOGLE ENGINE </>*\n\n`
					let res = data.result.items
					for (let g of res) {
						teks += `- *Title* : ${g.title}\n`;
						teks += `- *Link* : ${g.link}\n`;
						teks += `- *Snippet* : ${g.snippet}\n\n────────────────────\n\n`;
					}
					let jmlh = data.sugest.length
					for (let i = 0; i < jmlh; i++) {
						googlecard.push({
							header: 'Search Google:',
							title: data.sugest[i],
							id: '.google ' + data.sugest[i]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search Other 🔎',\n  sections: [\n    {\n      title: 'Telusuri Pencarian Terkait Topik',\n      highlight_label: 'Google Engine Dev',\n      rows: ${JSON.stringify(googlecard)}\n    }\n  ]\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: "https://files.catbox.moe/81fktb.jpg"
					}, button, teks, `- *Count Display:* 10\n- *Total Result:* ${data.result.searchInformation.formattedTotalResults}\n- *Fetch Data:* ${data.result.searchInformation.formattedSearchTime} ms`, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'gempa':
			case 'infogempa': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let gempe = await gempa()
					vreden.sendMessage(m.chat, {
						image: {
							url: gempe.data.imagemap
						},
						caption: `*乂 INFO - GEMPA*\n\nWaktu : ${gempe.data.waktu}\nMagnitude : ${gempe.data.magnitude}\nKedalaman : ${gempe.data.kedalaman}\nKoordinat : ${gempe.data.lintang_bujur}\nLokasi : ${gempe.data.wilayah}\nDirasakan : ${gempe.data.dirasakan}\n\nData Berdasarkan: https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'get': {
				if (!/^https?:\/\//.test(text)) return m.warning('*Masukan URL nya!*\n\nContoh:\n.get https://api.vreden.web.id/api/ytmp3?url=https://youtube.com/watch?v=YBnxAP6qst4');
				try {

					const data = await axios.get(text);
					const contentType = data.headers["content-type"];

					if (contentType.startsWith('image/')) {
						vreden.sendMessage(m.chat, {
							image: {
								url: text
							},
							caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
						}, {
							quoted: m
						});
					} else if (contentType.startsWith('video/')) {
						vreden.sendMessage(m.chat, {
							video: {
								url: text
							},
							caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
						}, {
							quoted: m
						});
					} else if (contentType.startsWith('audio/')) {
						vreden.sendMessage(m.chat, {
							audio: {
								url: text
							},
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						});
					} else {
						m.sendForward(util.format(data.data))
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"Save File\",\"id\":\".get2 ${text}\"}`
						}]
						vreden.sendButtonText(m.chat, button, "*Ingin menyimpan?*", bots.footer, m)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'get2': {
				if (!/^https?:\/\//.test(text)) return m.warning('*Masukan URL nya!*\n\nContoh:\n.get https://api.vreden.web.id/api/ytmp3?url=https://youtube.com/watch?v=YBnxAP6qst4');
				const saveFileToDisk = async (url, outputPath) => {
					try {
						const mime = require('mime-types');
						const response = await axios.get(url, {
							responseType: 'arraybuffer'
						});
						const contentType = response.headers['content-type'];
						const ext = mime.extension(contentType);
						const filePath = outputPath + (ext ? `.${ext}` : '');

						return new Promise((resolve, reject) => {
							fs.writeFile(filePath, response.data, (err) => {
								if (err) {
									reject(err);
								} else {
									resolve({
										file: filePath,
										ext: ext,
										mime: contentType
									});
								}
							});
						});
					} catch (error) {
						throw error;
					}
				};

				try {
					const buffer = await saveFileToDisk(text, path.join(__dirname, 'tmp/get-data'));
					await sleep(2000);
					vreden.sendMessage(m.chat, {
						document: fs.readFileSync(buffer.file),
						mimetype: buffer.mime,
						fileName: "get-data." + buffer.ext
					}, {
						quoted: m
					});

					fs.unlinkSync(buffer.file);
				} catch (error) {
					console.error('Gagal menyimpan atau mengirim file:', error);
				}
			}
			break
			case 'whois': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} link`)
				if (budy.match(`/|https|http|:`)) return m.warning(`Masukan domain saja\n\n*Contoh:*\n\n.whois google.com`)
				async function whois(url) {
					try {
						const {
							data: html
						} = await axios.get('https://who.is/whois/' + url);
						const $ = cheerio.load(html);

						const data = $('.queryResponseBodyRow').map((_, element) => {
							const domain = $(element).find('.col-md-8.queryResponseBodyValue a').text();
							const ip = $(element).find('.col-md-4.queryResponseBodyValue a').text();
							return domain && ip ? {
								domain,
								ip
							} : null;
						}).get();

						const whoisInfo = $('pre').text().trim();

						const expiresOn = $("div:contains('Expires On')").next('.queryResponseBodyValue').text().trim() || null;
						const registeredOn = $("div:contains('Registered On')").next('.queryResponseBodyValue').text().trim() || null;
						const updatedOn = $("div:contains('Updated On')").next('.queryResponseBodyValue').text().trim() || null;

						return {
							domains: data,
							whoisInfo,
							expiresOn,
							registeredOn,
							updatedOn
						};
					} catch (error) {
						console.error('Error fetching data:', error);
						return null;
					}
				}
				try {
					let whos = await whois(text)
					let teks = '*乂 WHOIS DOMAIN*\n\n*Nameserver:*\n'
					for (let hasil of whos.domains) {
						teks += `NS: ${hasil.domain}
IP: ${hasil.ip}

`
					}
					teks += `
────────────────────

*Info Whois:* ${whos.whoisInfo ? whos.whoisInfo : "tadak"}
*Registered:* ${whos.registeredOn ? whos.registeredOn : "-"}
*Updated:* ${whos.updatedOn ? whos.updatedOn : "-"}
*Expired:* ${whos.expiresOn ? whos.expiresOn : "-"}

`
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tempmail': {
				if (!text) return m.warning(`*Example:*\n${prefix + command} create\n\n*Pilih Type Yang Ada:*\n- create\n- message\n- delete`)
				try {
					if (args[0] === "create") {
						vreden.secmail = vreden.secmail ? vreden.secmail : {}
						let data = await fetchJson("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
						let info = data[0].split('@')
						vreden.secmail[m.sender] = [
							info[0],
							info[1]
						]
						m.sendForward(`*乂 TEMPMAIL CREATE*

*Email:*
${data[0]}

*Login:*
${info[0]}

*Domain:*
${info[1]}

_Ketik *${prefix + command} message* Untuk mengecek inbox_`)
					} else if (args[0] === "message") {
						if (!vreden.secmail[m.sender]) return m.reply("Tidak ada email yang terpakai")
						let email = vreden.secmail[m.sender]
						let result = await fetchJson(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email[0]}&domain=${email[1]}`)
						let teks = "*乂 TEMPMAIL INBOX*"
						let jmlh = result.length
						if (jmlh === 0) return m.reply("*KOSONG*" + "\n\n_Ketik *" + prefix + command + " delete* Untuk menghapus email_")
						for (let i = 0; i < jmlh; i++) {
							teks += `

*EMAIL [ ${i + 1} ]*

ID: ${result[i].id}
Dari: ${result[i].from}

Subject: ${result[i].subject}
Date: ${result[i].date}

________________________
`
						}
						m.sendForward(teks)
					} else if (args[0] === "delete") {
						if (!vreden.secmail[m.sender]) return m.reply("Tidak ada email yang terpakai")
						try {
							delete vreden.secmail[m.sender]
							m.sendForward("Email Dihapus!")
						} catch (error) {
							m.reply("Terjadi kesalahan!\n\n" + error)
						}
					} else {
						m.warning(`*Example:*\n${prefix + command} create\n\n*Pilih Type Yang Ada:*\n- create\n- message\n- delete`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'spoiler':
			case 'hidetext':
			case 'readmore':
			case 'selengkapnya': {
				try {
					const more = String.fromCharCode(8206);
					const readMore = more.repeat(4001);
					let [l, r] = text.split('|');
					if (!l) l = '';
					if (!r) r = '';
					await vreden.sendMessage(m.chat, {
						text: l + readMore + r
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pastebin': {
				try {
					const teks = m.quoted ? m.quoted.text : text;
					if (!teks) return m.warning("*Masukan Teks!*")
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					const response = await tools.createPaste(teks.split('|')[0] || '', teks);
					if (response.status === 0) {
						const pesan = `*Pesan Anda berhasil terkirim! 🚀*\n\n*Detail:*\n*Original:* ${response.original}\n*Raw:* ${response.raw}`;
						await vreden.sendMessage(m.chat, {
							text: pesan
						}, {
							quoted: m
						});
					} else {
						await vreden.sendMessage(m.chat, {
							text: 'Pesan Anda gagal terkirim. 🙁'
						}, {
							quoted: m
						});
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pastegg': {
				try {
					const teks = m.quoted ? m.quoted.text : text;
					if (!teks) return m.warning("*Masukan Teks!*")
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					const response = await tools.pasteGG(teks);
					if (response) {
						const pesan = `*Pesan Anda berhasil terkirim! 🚀*\n\n*Detail:*\n*URL:* ${response}`;
						await vreden.sendMessage(m.chat, {
							text: pesan
						}, {
							quoted: m
						});
					} else {
						await vreden.sendMessage(m.chat, {
							text: 'Pesan Anda gagal terkirim. 🙁'
						}, {
							quoted: m
						});
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ipwhois':
			case 'cekip':
			case 'whoisip': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan IP address!*\n\nContoh:\n${prefix + command} 8.8.8.8`)
				try {
					let res = await fetchJson(`https://ipwho.is/${text}?lang=id-ID`)
					if (!res.success) return m.reply(res.message)
					let teks = `*</> IP Whois Tracker </>*

• *IP* : ${res.ip}
• *Type IP* : ${res.type}
• *Benua* : ${res.continent}
• *Negara* : ${res.country} (${res.country_code})
• *Ibukota Negara* : ${res.capital}
• *Wilayah IP* : ${res.region}
• *Kota* : ${res.city}
• *Kode telpon* : +${res.calling_code}
• *Perbatasan* : ${res.borders}
• *Pemilik IP* : ${res.connection.org}
• *Provider* : ${res.connection.isp}
• *Domain* : ${res.connection.domain}
`
					let msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
						'viewOnceMessage': {
							'message': {
								"liveLocationMessage": {
									"degreesLatitude": res.latitude,
									"degreesLongitude": res.longitude,
									"caption": teks,
									"sequenceNumber": "1730253540255001",
									"jpegThumbnail": ""
								}
							}
						}
					}), {
						'userJid': m.chat
					});

					vreden.relayMessage(m.chat, msg.message, {})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekhp':
			case 'spek':
			case 'device': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} iPhone 13`)
				try {
					let data = await gsmarena.search.search(text)
					let teks = '*乂 DEVICE SEACRH*\n\n'
					for (let hasil of data) {
						teks += `*Name:* ${hasil.name}\n*Deskripsi:* ${hasil.description}\n\n─────────────────\n\n`
					}
					if (data.length < 3) {
						vreden.sendMessage(m.chat, {
							image: {
								url: data[0].img
							},
							caption: teks
						}, {
							quoted: m
						})
					}
					if (data.length > 2) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${data[0].name}\",\"id\":\".hpdetail ${data[0].id}\"}`
						}, {
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${data[1].name}\",\"id\":\".hpdetail ${data[1].id}\"}`
						}, {
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${data[2].name}\",\"id\":\".hpdetail ${data[2].id}\"}`
						}]
						vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'hpdetail':
			case 'devicedetail': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} apple_iphone_13_pro_max-11089`)
				try {
					let data = await gsmarena.catalog.getDevice(text)
					let teks = `*乂 DEVICE DETAIL*\n\n*Name:* ${data.name}\n`
					for (let hasil of data.detailSpec) {
						teks += `\n*\`${hasil.category}:\`*\n`
						for (let sila of hasil.specifications) {
							teks += `*${sila.name}:* ${sila.value}\n`
						}
					}
					for (let sil of data.quickSpec) {
						teks += `*\`${sil.name}:\`* ${sil.value}\n`
					}
					await vreden.sendMessage(m.chat, {
						image: {
							url: data.img
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekhost':
			case 'checkhost': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const response = await axios.get('https://check-host.net/check-http', {
						params: {
							'host': text,
							'max_nodes': '15'
						},
						headers: {
							'Accept': 'application/json'
						}
					});
					await sleep(5000)
					const http = await axios.get('https://check-host.net/check-result/' + response.data.request_id, {
						headers: {
							'Accept': 'application/json'
						}
					});
					console.log(http.data)
					let teks = `*乂 CEK HOST WEB*\n\nID: ${response.data.request_id}\n\n`
					for (const [node, results] of Object.entries(http.data)) {
						teks += `*Servers Info*:
- ID Server : ${response.data.nodes[node][4]}
- Country : ${response.data.nodes[node][1]}
- City : ${response.data.nodes[node][2]}
- IP Server : ${response.data.nodes[node][3]}

*HTTP Check*:
- Ping : ${results[0][1].toFixed(4)}s
- Status Code : ${results[0][3]}
- IP Web : ${results[0][4]}
- Result : ${results[0][2]}

────────────────────
`
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'subdo':
			case 'subdomain':
			case 'ceksubdo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
				try {
					let domoi = await axios.get(`https://crt.sh/?q=${text}&output=json`, {
						headers: {
							'Content-Type': 'application/json'
						}
					});
					let dommi = await domoi.data
					let teks = `*乂 SUBDOMAIN CEK*\n\n`
					let t = []
					for (let n of dommi) {
						n.name_value.split("\n").map((v) => t.push(v));
					}
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					for (let x of [...new Set(t.filter((v) => !v.startsWith("*")))]) {
						teks += `*Subdo:* ${x}\n*DNS:* \n`
						let dnns = await dns.promises.resolve4(x).catch(async () => "-")
						var suom
						suom = dnns ? dnns.length : 0
						for (let i = 0; i < suom; i++) {
							teks += `- ${dnns[i] ? dnns[i] : "-"}\n`
						}
						teks += `\n────────────────────\n\n`
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ngl':
			case 'sendngl': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} https://ngl.link/denakhtar1 hallo`)
				if (!budy.match('https://ngl.link/')) return m.warning(`Contoh:\n${prefix + command} https://ngl.link/denakhtar1 hallo`)
				let [usersi, ...message] = text.split(' ');
				let userr = usersi.split('https://ngl.link/')[1]
				message = message.join(' ');
				try {
					let ngl = await axios.post("https://ngl.link/api/submit",
						`username=${userr}&question=${message}&deviceId=18d7b980-ac6a-4878-906e-087dfec6ea1b&gameSlug=&referrer=`
					);
					m.sendForward(`*Pesan terkirim 🤓*

ID: ${ngl.data.questionId}
Region: ${ngl.data.userRegion}
`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dns':
			case 'cekdns':
			case 'dnsrecord': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							'x-apikey': 'd8d56420a997b7372501df999e2fa9b6226c5864ccf509bf142c9f618fdca90c'
						}
					};
					let domain = await fetchJson(`https://www.virustotal.com/api/v3/domains/${text}/subdomains?limit=100`, options)
					let teks = `*乂 DOMAIN DNS CEK*\n\n`;
					for (let x of domain.data) {
						teks += `*Sub:* ${x.id}
*Type:* ${x.type}
*DNS Record:*\n\n`
						for (let p of x.attributes.last_dns_records) {
							teks += `- *Type:* ${p.type}
- *TTL:* ${p.ttl}
- *Value:* ${p.value}\n\n`;
						}
						teks += `\n────────────────────\n\n`
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekweb': {
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n${prefix + command} google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})

				axios.get(`https://api.hackertarget.com/pagelinks/?q=${text}`)
					.then(async response => {
						const pageLinks = response.data;

						const dnsResponse = await axios.get(`https://api.hackertarget.com/dnslookup/?q=${text}`);
						const dnsData = dnsResponse.data;

						const headerResponse = await axios.get(`https://api.hackertarget.com/httpheaders/?q=${text}`);
						const headerData = headerResponse.data;

						const serverResponse = await axios.get(`https://api.hackertarget.com/httpheaders/?q=${text}`);
						const serverData = serverResponse.data;

						let info = `*乂 DOMAIN CHECK*
            
*Extract Links*: 
${pageLinks.split("\n").map(link => `• ${link}`).join("\n")}

*DNS Recod*:
${dnsData}

*Headers Data*:
${headerData}

*Server Respon*:
${serverData}`;

						m.sendForward(info);
					})
					.catch(error => {
						console.error("Error fetching website info:", error);
						m.reply("Terjadi kesalahan saat mengambil informasi dari website yang dituju.");
					});
			}
			break
			case 'urlscan':
			case 'scanurl': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await axios.get(`https://urlscan.io/api/v1/search/?q=${text}`)
					if (anu.data.total <= 1) return m.warning('Masukan link yang valid/aktif')
					let teks = `乂 DOMAIN CHECKER\n\n`;
					for (let x of anu.data.results) {
						teks += `*visibility:* ${x.task.visibility}
*method:* ${x.task.method}
*country:* ${x.page.country}
*ip:* ${x.page.ip}
*url:* ${x.page.url}
*sub domain:* ${x.page.ptr}\n\n────────────────────\n\n`;
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND CONVERT ]━━━━━━━━━━━━━━━━━//
			case 'emojimix': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.warning(`Contoh:\n${prefix + command} 😅+💩`)
				if (!emoji2) return m.warning(`Contoh:\n${prefix + command} 😅+💩`)
				try {
					let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					for (let res of anu.results) {
						var emj = await getBuffer(res.url)
						let encmedia = await vreden.imgToSticker(m.chat, emj, m, {
							packname: `Made By `,
							author: `V.R.D Official `,
							categories: res.tags
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tts':
			case 'texttosound':
			case 'audio':
			case 'say': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan text nya!*\n\nContoh:\n${prefix+command} Hallo, apa kabar`)
				var lang = text.split("--")[1]
				try {
					if (!lang) lang = 'id'
					long = 'id'

					function tts(text, long = 'id') {
						//console.log(lang, text)
						return new Promise((resolve, reject) => {
							try {
								let tts = gtts(long)
								let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
								tts.save(filePath, text, () => {
									resolve(fs.readFileSync(filePath))
									fs.unlinkSync(filePath)
								})
							} catch (e) {
								reject(e)
							}
						})
					}

					let res
					try {
						res = await tts(text, long)
					} catch (e) {
						m.reply(e + '')
						res = await tts(text)
					} finally {
						if (/texttosound/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						if (/tts/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						if (/audio/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						if (/say/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg',
							ptt: true
						}, {})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'translate':
			case 'tr': {
				if (!text) return m.warning(`*Masukan Input Query!*

Tutorial:
${prefix + command} <kode bahasa> <teks>

Contoh:
${prefix + command} id card message

*Catatan*:
lihat kode bahasa di
${prefix}lisbahasa
`)
				try {
					let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
					translate(teks, {
						to: args[0]
					}).then((res) => {
						vreden.sendText(m.chat, `${res.text}`, m)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
					
			case 'tourl': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!mime) return m.reply(`Kirim Video/Image Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					if (/image|video|audio/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted);
						let anu = await CatBox(media);
						m.reply(`*Link* : ${anu}`);
						await fs.unlinkSync(media);
					} else if (!/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted, quoted.fileName, false);
						let anu = await CatBox(media);
						m.reply(`*Link* : ${anu}`);
						await fs.unlinkSync(media);
					} else {
						m.reply(`Jenis media tidak support`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'tomp4':
			case 'tovid':
			case 'tovideo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Stiker')
				if (!/webp/.test(mime)) return m.warning(`Balas sticker dengan caption *${prefix + command}*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
					let anu = await CatBox(media);
					let webpToMp4 = await webp2mp4File(anu)
					vreden.sendMessage(m.chat, {
						video: {
							url: webpToMp4
						},
						caption: `*🚀 Converted*: ${latensi.toFixed(4)}s`
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'toimage':
			case 'toimg': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/webp/.test(mime)) return m.warning(`Balas sticker dengan caption *${prefix + command}*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted)
					let ran = await getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) throw err
						let buffer = fs.readFileSync(ran)
						vreden.sendMessage(m.chat, {
							image: buffer,
							caption: `*🚀 Converted*: ${latensi.toFixed(4)}s`
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'readvo':
			case 'rvo':
			case 'readviewonce': {
				if (!m.quoted) return m.warning('Reply gambar/video yang ingin Anda lihat')
				if (m.quoted.mtype !== 'viewOnceMessageV2') return m.warning('Ini bukan pesan view-once.')
				try {
					let buffer = await m.quoted.download()
					let type = await getContentType(m.quoted.message)
					if (type == "videoMessage") {
						await vreden.sendMessage(m.chat, {
							video: buffer,
							caption: m.quoted.text,
							mentions: m.quoted.mentionedJid
						}, {
							quoted: m
						});
					} else if (type == "imageMessage") {
						await vreden.sendMessage(m.chat, {
							image: buffer,
							caption: m.quoted.text,
							mentions: m.quoted.mentionedJid
						}, {
							quoted: m
						});
					} else if (type == "audioMessage") {
						await vreden.sendMessage(m.chat, {
							audio: buffer,
							mimetype: 'audio/mpeg',
							ptt: true
						}, {
							quoted: m
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'toptv': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				const {
					toPTT
				} = require('./lib/converter')
				const {
					MessageType
				} = require('@whiskeysockets/baileys')
				let q = m.quoted ? m.quoted : m
				if (!/video|audio/.test(mime)) return m.warning(`Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`)
				try {
					let media = await q.download()
					let dataVideo = {
						ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
					}
					vreden.relayMessage(m.chat, dataVideo, {})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tovn': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!/video/.test(mime) && !/audio/.test(mime)) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				if (!quoted) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await quoted.download()
					let {
						toAudio
					} = require('./lib/converter')
					let audio = await toAudio(media, 'mp4')
					vreden.sendMessage(m.chat, {
						audio,
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tinyurl': {
				if (!text) return m.warning(`*Masukan link nya!*\n\nContoh : ${prefix+command} https://google.com`)
				if (!isUrl(text)) return m.warning(`*Masukan link nya!*\n\nContoh : ${prefix+command} https://google.com`)
				try {
					let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
					let data = tiny.data
					m.sendForward(data)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'toaudio':
			case 'tomp3': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!/video/.test(mime) && !/audio/.test(mime)) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				if (!quoted) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await quoted.download()
					let {
						toAudio
					} = require('./lib/converter')
					let audio = await toAudio(media, 'mp4')
					vreden.sendMessage(m.chat, {
						audio,
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'resize': {
				if (!q) return m.warning(`*Masukan ukuran P x L!*\n\nContoh:\n${prefix+command} 300x300`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let panjang = q.split('x')[0]
				let lebar = q.split('x')[1]
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.jpeg')
					exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
						fs.unlinkSync(media)
						if (err) return m.reply(`Err: ${err}`)
						let buffer453 = fs.readFileSync(ran)
						await vreden.sendMessage(m.chat, {
							mimetype: 'image/jpeg',
							image: buffer453,
							caption: `*🍟 Image Resize*`
						}, {
							quoted: fchannel
						})
						fs.unlinkSync(ran)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listbahasa': {
				var clear = ["auto", "isSupported", "getCode"]
				var teks = `*</> TRANSLATE CODE </>*\n\n`
				for (let i in translate.languages) {
					if (!clear.includes(i)) {
						teks += `*${i}*: ${translate.languages[i]}\n`
					}
				}
				m.reply(teks)
			}
			break
			case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
				try {
					let set
					if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await vreden.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							vreden.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: m
							})
							fs.unlinkSync(ran)
						})
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
			case'nobg':
			case'rbg':
			case'removebackground':
		case'removebg':
			case 'remove-bg': {
				if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				let remobg = require('remove.bg')
				let apirnobg = ["ao15v4XFhfzaikvpsRhpkvbC", "W3xExNYJ4tg75uy5tnhSQs3o", "7nBjEE7qxTwd4XMUJdRXTib8"]
				try {
					let apinobg = await pickRandom(apirnobg)
					hmm = await 'remobg-' + getRandom('')
					localFile = await vreden.downloadAndSaveMediaMessage(quoted, hmm)
					outputFile = await './tmp/hremo-' + getRandom('.png')
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					await remobg.removeBackgroundFromImageFile({
						path: localFile,
						apiKey: apinobg,
						size: "regular",
						type: "auto",
						scale: "100%",
						outputFile
					}).then(async result => {
						vreden.sendMessage(m.chat, {
							image: fs.readFileSync(outputFile),
							caption: "*Remove Background 🍟*"
						}, {
							quoted: m
						})
						await fs.unlinkSync(localFile)
						await fs.unlinkSync(outputFile)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND EPHOTO ]━━━━━━━━━━━━━━━━━//
			case 'glitchtext':
			case 'writetext':
			case 'advancedglow':
			case 'typographytext':
			case 'pixelglitch':
			case 'neonglitch':
			case 'flagtext':
			case 'flag3dtext':
			case 'deletingtext':
			case 'blackpinkstyle':
			case 'glowingtext':
			case 'underwatertext':
			case 'logomaker':
			case 'cartoonstyle':
			case 'papercutstyle':
			case 'watercolortext':
			case 'effectclouds':
			case 'blackpinklogo':
			case 'gradienttext':
			case 'summerbeach':
			case 'luxurygold':
			case 'multicoloredneon':
			case 'sandsummer':
			case 'galaxywallpaper':
			case '1917style':
			case 'makingneon':
			case 'royaltext':
			case 'freecreate':
			case 'galaxystyle':
			case 'lighteffects': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan text nya!*\n\nContoh:\n${prefix + command} vreden`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let link
				if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
				if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
				if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
				if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
				if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
				if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
				if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
				if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
				if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
				if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
				if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
				if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
				if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
				if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
				if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
				if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
				if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
				if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
				if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
				if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
				if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
				if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
				if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
				if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
				if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
				if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
				if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
				if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
				if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
				if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
				try {
					let photo = await tools.ephoto(link, q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: photo
						},
						caption: `ePhoto360 Maker`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ytcomment': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Contoh : ${prefix+command} hello world`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let avatar
					try {
						avatar = await vreden.profilePictureUrl(m.sender, "image")
					} catch {
						avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
					}
					let buffer = await getBuffer(`https://some-random-api.com/canvas/misc/youtube-comment?comment=${encodeURIComponent(text)}&avatar=${encodeURIComponent(avatar)}&username=${m.pushName}`)
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: `*YouTube Comment 🍟*`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'carbon':
			case 'karbon': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				if (m.quoted) {
					tulisan = m.quoted.text
				} else {
					tulisan = text
				}
				if (!tulisan) return m.warning(`Contoh : ${prefix+command} vreden`)
				try {
					let buffer = await tools.CarbonifyV1(tulisan)
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: `*Carbon Text ✨*`
					}, {
						quoted: m
					})
				} catch (error) {
					try {
						let buffer = await tools.CarbonifyV2(tulisan)
						await vreden.sendMessage(m.chat, {
							image: buffer,
							caption: `*Carbon Api ✨*`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break		
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND ISLAMIC ]━━━━━━━━━━━━━━━━━//
			case 'kisahnabi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`)
				try {
					let nabi = await fetchJson(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/refs/heads/master/data/kisahNabi/${text}.json`)
					var kisah = `_*Kisah Nabi*_
Nama Nabi : ${nabi.name}
Hari Kelahiran : ${nabi.thn_kelahiran}
Umur : ${nabi.usia}
Asal : ${nabi.tmp}

*Cerita* :
${nabi.description}`
					m.reply(kisah)
				} catch (error) {
					await m.reply("*Masukan nama nabi yang valid!*")
				}
			}
			break
			case 'asmaulhusna': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let asmaul = await fetchJson(`https://www.vreden.web.id/database/islamic/AsmaulHusna.json`)
					let husna = await pickRandom(asmaul.result)
					let teks = `*Random Asmaul Husna*

Asmaul Husna Ke : ${husna.number}
Teks Arab : ${husna.arab}
Teks Latin : ${husna.latin}
Translate Indonesia : ${husna.translate_id}
Translate Inggris : ${husna.translate_en}`
					m.reply(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'asmaulhusna2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let asmaul = await fetchJson(`https://www.vreden.web.id/database/islamic/AsmaulHusna.json`)
					let husna = asmaul.result[text - 1]
					let teks = `*AsmaulHusna Ke ${husna.number}*

Teks Arab : ${husna.arab}
Teks Latin : ${husna.latin}
Translate Indonesia : ${husna.translate_id}
Translate Inggris : ${husna.translate_en}`
					m.reply(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listsurah':
			case 'listsurat': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let teks = `*</> AL QUR'AN SURAH </>*

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
					m.reply(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'randomquran': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let surah = await fetchJson(`https://www.vreden.web.id/database/islamic/quranaudio.json`)
					let quran = await pickRandom(surah)
					let teks = `*乂 ${quran.asma.id.short} (${quran.asma.ar.short})*

*Type*: ${quran.type}
*ID Translate*: ${quran.asma.translation.id}
*Bismillah*: ${quran.preBismillah ? "pakai" : "tak pakai"}
*Jumlah Ayat*: ${quran.ayatCount}
*Type*: ${quran.type}
*Tafsir*: ${quran.tafsir}

_Loading Audio..._`
					await m.reply(teks)
					await vreden.sendMessage(m.chat, {
						audio: {
							url: quran.audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'quranaudio':
			case 'alquranaudio': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan nomor surah!*\n\nTutorial:\n${prefix + command} <angka>\n\nContoh:\n${prefix + command} 1\n\n_Liat angka surah quran_\n_di command listsurah_`)
				try {
					let surah = await fetchJson(`https://www.vreden.web.id/database/islamic/quranaudio.json`)
					let quran = await surah[text - 1]
					let teks = `*乂 ${quran.asma.id.short} (${quran.asma.ar.short})*

*Type*: ${quran.type}
*ID Translate*: ${quran.asma.translation.id}
*Bismillah*: ${quran.preBismillah ? "pakai" : "tak pakai"}
*Jumlah Ayat*: ${quran.ayatCount}
*Type*: ${quran.type}
*Tafsir*: ${quran.tafsir}

_Loading Audio..._`
					await m.reply(teks)
					await vreden.sendMessage(m.chat, {
						audio: {
							url: quran.audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'jadwalsholat':
			case 'sholat': {
				if (!text) return m.warning(`*Masukan wilayahnya!*\n\nTutorial:\n${prefix + command} <wilayah>\n\nContoh:\n${prefix + command} Pontianak`)
				try {
					const iddae = await internet.findKodeDaerah(text)
					const res = await internet.jadwalSholat(iddae.kode_daerah)
					m.sendForward(`*乂 JADWAL - SHOLAT*\n\n${Object.entries(res).map(([name, data]) => `- *${name}* : ${data}`).join('\n').trim()}\n\n> ${bots.footer}`)
				} catch (error) {
					m.reply(`Masukan Daerah Yang Valid`)
				}
			}
			break		
			case 'quotesislamic': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const islamic = await fetchJson(`https://www.vreden.web.id/database/random/quotesislamic.json`)
					const quotesislamic = await pickRandom(islamic)
					m.reply(`${quotesislamic}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'faktaunik': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const fakta = await fetchJson(`https://www.vreden.web.id/database/random/faktaunix.json`)
					const faktaunik = await pickRandom(fakta)
					m.reply(`*Taukah Kamu?*\n\n${faktaunik}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND OWNER ]━━━━━━━━━━━━━━━━━//
			case'tester': {
				let button = [{
								"name": "single_select",
								"buttonParamsJson": `{\"title\":\"MENU\",\"sections\":[{\"title\":\"MENU BOT ${bots.nameCall.toUpperCase()} OFFICIAL\",\"highlight_label\":\"Bot WhatsApp\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"}]}]}`
							},
							{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"quick_reply\",\"id\":\".mute on\"}`
							},
							{
								"name": "cta_url",
								"buttonParamsJson": `{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}`
							},
							{
								"name": "cta_call",
								"buttonParamsJson": `{\"display_text\":\"call\",\"id\":\"message\"}`
							},
							{
								"name": "cta_copy",
								"buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}`
							},
							{
								"name": "cta_reminder",
								"buttonParamsJson": `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}`
							},
							{
								"name": "cta_cancel_reminder",
								"buttonParamsJson": `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}`
							},
							{
								"name": "address_message",
								"buttonParamsJson": `{\"display_text\":\"address_message\",\"id\":\"message\"}`
							},
							{
								"name": "send_location",
								"buttonParamsJson": ""
							}]
				vreden.sendButtonText(m.chat, button, "tes", bots.footer, m)
			
			}
			break
			case 'restart': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				m.reply("Restarting...")
				await sleep(3000)
				process.exit("1")
			}
			break
			case 'autobio': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.autoBio) return m.reply("Udh on")
					setting.general.autoBio = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autobio berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.autoBio) return m.reply("Udh off")
					setting.general.autoBio = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autobio berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'prefix': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.prefix) return m.reply("Udh on")
					setting.general.prefix = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Prefix berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.prefix) return m.reply("Udh off")
					setting.general.prefix = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Prefix berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'gconly':
			case 'gruponly': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.grupOnly) return m.reply("Udh on")
					setting.general.grupOnly = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					setting.general.privateOnly = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Gruponly berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.grupOnly) return m.reply("Udh off")
					setting.general.grupOnly = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Gruponly berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'pconly': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.privateOnly) return m.reply("Udh on")
					setting.general.privateOnly = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					setting.general.grupOnly = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("PConly berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.privateOnly) return m.reply("Udh off")
					setting.general.privateOnly = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("PConly berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'autobackup': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.autoBackup) return m.reply("Udh on")
					setting.general.autoBackup = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autobackup berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.autoBackup) return m.reply("Udh off")
					setting.general.autoBackup = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autobackup berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'anticall': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.antiCall) return m.reply("Udh on")
					setting.general.antiCall = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Anticall berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.antiCall) return m.reply("Udh off")
					setting.general.antiCall = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Anticall berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'autorespond': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.autoRespond) return m.reply("Udh on")
					setting.general.autoRespond = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autorespond berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.autoRespond) return m.reply("Udh off")
					setting.general.autoRespond = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autorespond berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'autoblok':
			case 'autoblok212': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.autoBlock212) return m.reply("Udh on")
					setting.general.autoBlock212 = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autoblok berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.autoBlock212) return m.reply("Udh off")
					setting.general.autoBlock212 = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autoblok berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'onlyregister':
			case 'onlyregis':
			case 'registeronly': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.onlyRegister) return m.reply("Udh on")
					setting.general.onlyRegister = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("onlyRegister berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.onlyRegister) return m.reply("Udh off")
					setting.general.onlyRegister = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("onlyRegister berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'regisnotif':
			case 'notifregis':
			case 'registernotif':
			case 'notifregister': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.notifRegister) return m.reply("Udh on")
					setting.general.notifRegister = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("notifRegister berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.notifRegister) return m.reply("Udh off")
					setting.general.notifRegister = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("notifRegister berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'autoread': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.autoRead) return m.reply("Udh on")
					setting.general.autoRead = true
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autoread berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (!setting.general.autoRead) return m.reply("Udh off")
					setting.general.autoRead = false
					fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
					m.reply("Autoread berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
			}
			break
			case 'setcmd':
			case 'addcmd': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!m.quoted) return m.warning('*Reply chat sticker!*')
				if (!m.quoted.fileSha256) return m.warning('*Masukan file atau stiker untuk pemicu command*')
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} .menu`)
				let hash = m.quoted.fileSha256.toString('base64')
				if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.warning('Command set ini di kunci')
				db.data.sticker[hash] = {
					text,
					mentionedJid: m.mentionedJid,
					creator: m.sender,
					at: +new Date,
					locked: false,
				}
				m.reply(`*Sticker di tandai sebagai command ${text}!*`)
			}
			break
			case 'delcmd': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let hash = m.quoted.fileSha256.toString('base64')
				if (!hash) return m.warning('*Reply chat stiker!*')
				if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.warning('Command set ini di kunci')
				delete db.data.sticker[hash]
				m.reply(`*Sticker command dihapus!*`)
			}
			break
			case 'savefile': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} ./lib/scraper.js`)
				if (!text.includes("./")) return m.warning(`*• Contoh* : ${prefix + command} ./package.json`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} ./lib/scraper.js`)
				if (!quoted) return m.warning('Mana File nya?')
				let media = await vreden.downloadMediaMessage(quoted)
				fs.writeFileSync(`${text}`, media)
				m.reply(`Sukses Menambahkan file\nCek dengan cara $ ls`)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
				for (let i of anulistg) {
					let metadata = await vreden.groupMetadata(i)
					teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
				}
				vreden.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'listpc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
				let teks = `*Personal Chat*
Total: ${anulistg.length} Chat\n\n`
				for (let i of anulistg) {
					teks += `*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n──────────────\n\n`
				}
				vreden.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'joingc':
			case 'join': {
				if (!isCreator) return m.warning(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
				if (!text) return m.warning(`Kirim perintah ${prefix + command} _linkgrup_`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return m.warning(mess.error.input)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let result = args[0].split('https://chat.whatsapp.com/')[1]
				await vreden.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'getinfogc':
			case 'getinfogrup':
			case 'getgc': {
				if (!text) return m.warning(`Kirim perintah ${prefix + command} _linkgrup_`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return m.warning(mess.error.input)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1]
					let inpo = await vreden.groupGetInviteInfo(result)
					let teks = `*乂 GRUP LINK INFO*

*ID:* ${inpo.id}
*Name:* ${inpo.subject}
*Owner:* ${inpo.owner}
*Kirim Pesan:* ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}
*Persetujuan Admin:* ${inpo.joinApprovalMode ? 'Yes' : "No"}
*Member Add Mode:* ${inpo.memberAddMode ? 'Yes' : "No"}
*Desk:*
${inpo.desc}

*Anggota Teratas:*
`
					for (let x of inpo.participants) {
						teks += `
- @${x.id.split('@')[0]}`
					}
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"ID Group\",\"id\":\"${inpo.id}\",\"copy_code\":\"${inpo.id}\"}`
					}]
					vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
				} catch (error) {
					m.reply(mess.error.input)
				}
			}
			break
			case 'inspect':
			case 'getch':
			case 'getinfochannel':
			case 'getchid': {
				if (!text) return m.warning(`Kirim perintah ${prefix + command} _linkchannel_`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return m.warning(mess.error.input)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})

				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1]
					let data = await vreden.newsletterMetadata("invite", result)
					let teks = `*乂 NEWSLETTER INFO*

*Name:* ${data.name}
*ID*: ${data.id}
*Status*: ${data.state}
*Dibuat Pada*: ${formatDate(data.creation_time)}
*Subscribers*: ${data.subscribers}
*Meta Verify*: ${data.verification}
*React Emoji:* ${data.reaction_codes}
*Description*:
${data.description}

`
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"ID Channel\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
					}]
					vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
				} catch (error) {
					m.reply(mess.error.input)
				}
			}
			break
			case 'leavegc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				m.reply("Bayyy")
				await vreden.groupLeave(m.chat)
			}
			break
			case 'public': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				vreden.public = true
				m.reply('Sukses Change To Public Mode')
			}
			break
			case 'self': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				vreden.public = false
				m.reply('Sukses Change To Self Mode')
			}
			break
			case 'wl':
			case 'whitelist': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (owner.number.includes(users)) return m.warning('*Owner di kecualikan!*')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users yang valid!*\n\nContoh:\n${prefix + command} @0`)
					if (usersdb[users].whitelist) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Whitelist Sebelumnya`, m)
					usersdb[users].whitelist = true
					vreden.sendTextWithMentions(m.chat, `Succes whitelist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Whitelist`)
				}
			}
			break
			case 'unwhite':
			case 'unwhitelist': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (owner.number.includes(users)) return m.warning('*Owner di kecualikan!*')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users yang valid!*\n\nContoh:\n${prefix + command} @0`)
					if (!usersdb[users].whitelist) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Whitelist`, m)
					usersdb[users].whitelist = false
					vreden.sendTextWithMentions(m.chat, `Succes Unwhitelist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Un-whitelist`)
				}
			}
			break
			case 'listwl':
			case 'listwhitelist': {
				let whitelist = []
				for (const user in usersdb) {
					if (usersdb[user].whitelist) {
						whitelist.push(user);
					}
				}
				let txt = `------------ » *WHITELIST* « ------------\nTotal: *${whitelist.length}* Ditandai\n\n`
				for (let blck of whitelist) {
					txt += `*»* @${blck.split('@')[0]}\n`
				}
				vreden.sendTextWithMentions(m.chat, txt, m)
			}
			break
			case 'bl':
			case 'blacklist':
			case 'tandai': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (owner.number.includes(users)) return m.warning('*Owner di kecualikan!*')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users yang valid!*\n\nContoh:\n${prefix + command} @0`)
					if (usersdb[users].blacklist) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Blacklist Sebelumnya`, m)
					usersdb[users].blacklist = true
					vreden.sendTextWithMentions(m.chat, `Succes blacklist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di blacklist`)
				}
			}
			break
			case 'unblack':
			case 'unblacklist': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (owner.number.includes(users)) return m.warning('*Owner di kecualikan!*')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users yang valid!*\n\nContoh:\n${prefix + command} @0`)
					if (!usersdb[users].blacklist) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Blacklist`, m)
					usersdb[users].blacklist = false
					vreden.sendTextWithMentions(m.chat, `Succes Unblacklist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Un-blacklist`)
				}
			}
			break
			case 'listbl':
			case 'listblacklist': {
				let blacklist = []
				for (const user in usersdb) {
					if (usersdb[user].blacklist) {
						blacklist.push(user);
					}
				}
				let txt = `------------ » *BLACKLIST* « ------------\nTotal: *${blacklist.length}* Ditandai\n\n`
				for (let blck of blacklist) {
					txt += `*»* @${blck.split('@')[0]}\n`
				}
				vreden.sendTextWithMentions(m.chat, txt, m)
			}
			break
			case 'listban':
			case 'listbanned': {
				let banned = []
				for (const user in usersdb) {
					if (usersdb[user].banned) {
						banned.push(user);
					}
				}
				let txt = `------------ » *BANNED* « ------------\nTotal: *${banned.length}* Di-banned\n\n`
				for (let blk of banned) {
					txt += `*»:* @${blk.split('@')[0]}\n`
				}
				vreden.sendTextWithMentions(m.chat, txt, m)
			}
			break
			case 'ban':
			case 'banned': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (owner.number.includes(users)) return m.warning('*Owner di kecualikan!*')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users yang valid!*\n\nContoh:\n${prefix + command} @0`)
					if (usersdb[users].banned) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Banned Sebelumnya`, m)
					usersdb[users].banned = true
					vreden.sendTextWithMentions(m.chat, `Succes banned @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Banned`)
				}
			}
			break
			case 'unban':
			case 'unbanned': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (owner.number.includes(users)) return m.warning('*Owner di kecualikan!*')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users yang valid!*\n\nContoh:\n${prefix + command} @0`)
					if (!usersdb[users].banned) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Banned`, m)
					usersdb[users].banned = false
					vreden.sendTextWithMentions(m.chat, `Succes Unbanned @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Un-Banned`)
				}
			}
			break
			case 'gfl':
			case 'gantifile': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text.includes("./")) return m.warning(`*• Contoh* : ${prefix + command} ./package.json`)
				let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
				if (!files.includes(m.quoted.fileName)) return reply("File not found")
				let media = await downloadContentFromMessage(m.quoted, "document")
				let buffer = Buffer.from([])
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(text, buffer)
				m.reply(`Mengupload...`)
				await sleep(2000)
				m.reply(`Berhasil mengganti file ${q}`)
			}
			break
			case 'addfun':
			case 'addfunction': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana function nya bang?');
				let data = await addFunc("vreden.js", text)
				m.reply(data.message)
			}
			break
			case 'listcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				const code = fs.readFileSync("./vreden.js", "utf8")
				var regex = /case\s+'([^']+)':/g;
				var matches = [];
				var match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				let teks = `*Total Case*: ${matches.length} \n\n`
				matches.forEach(function(x) {
					teks += "  ◦  " + x + "\n"
				})
				m.reply(teks)
			}
			break
			case 'addcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana case nya bang?');
				let data = await addCase("vreden.js", text)
				m.reply(data.message)
			}
			break
			case 'delcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana case nya bang?');
				let data = await dellCase("vreden.js", text)
				m.reply(data.message)
			}
			break
			case 'getcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana function nya bang?');
				let data = await getCase(text)
				m.reply(data)
			}
			break
			case 'block':
			case 'blok': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Masukkan nomor target!`)
				let blok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				vreden.updateBlockStatus(blok, 'block')
				m.reply(`Sukses block @${blok.split('@')[0]}`)
			}
			break
			case 'unblock':
			case 'unblok': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Masukkan nomor target!`)
				let unblok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				vreden.updateBlockStatus(unblok, 'unblock')
				m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
			}
			break
			case 'listblock':
			case 'listblok': {
				let listblok = await vreden.fetchBlocklist()
				m.reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'report': {
				this.report = this.report ? this.report : {}
				let roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (roof) return m.warning("Kamu Sedang Berkomunikasi Dengan Owner")
				if (m.isGroup) return m.warning('Fitur Khusus Di private chat!')
				if (!text) return m.warning(`Kirim Perintah ${prefix + command} pesan\n\nContoh :\n${prefix + command} bang ytmp3 error\n`)
				var yoi = `\n\nDari: ${usernomor}\nPukul: ${time}\n\n*Contents of the report*\n${text}`
				let id = m.sender
				this.report[id] = {
					id,
					a: m.sender,
					b: owner.nomor,
					state: 'WAITING'
				}
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Tolak Report\",\"id\":\".tolakreport\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Balas Report\",\"id\":\".balasreport\"}`
				}]
				vreden.sendButtonText(owner.nomor, button, `*USER REPORTED*\n` + yoi, bots.footer, m)
				vreden.sendTextWithMentions(m.chat, `📦 *REPORT - BOT*\n\n- *Name* : @${m.sender.split("@")[0]}\n- *Waktu* : ${time}\n\n*REPORT* :\n${text}\n\n_Pesan Telah Dikirimkan_\n> ${bots.footer}`, m)
			}
			break
			case 'balasreport': {
				let roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada laporan")
				find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
				let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find.b = m.sender
				find.state = 'CHATTING'
				this.report[find.id] = {
					...find
				}
				await vreden.sendMessage(other, {
					text: `Report Kamu Telah Dikonfirmasi Team, Sekarang Kamu Bisa Chat Dengan Team Melalui Bot\n\n*NOTE :*\nJika ingin berhenti dari CS center, silahkan ketik .stopreport`,
					mentions: [m.sender]
				})
				vreden.sendMessage(m.chat, {
					text: `_Berhasil Menerima Report!_\n\n*NOTE :*\nJika ingin berhenti dari CS center, silahkan ketik .stopreport`
				})
			}
			break
			case 'tolakreport': {
				let roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada laporan")
				let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
				vreden.sendMessage(other, {
					text: `_Uppsss... Team Kami Menolak Laporan Kamu_`,
					mentions: [m.sender]
				})
				m.reply("Report Ditolak ✅")
				delete this.report[roof.id]
			}
			break
			case 'stopreport': {
				find = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (!find) return m.warning("Belum ada laporan")
				const to = find.a == m.sender ? find.b : find.a
				vreden.sendMessage(to, {
					text: `_Team Kami Mengakhiri Chat!_\n\n> Terimakasih~`,
					mentions: [m.sender]
				})
				await m.reply("Chat Klien Di Putus!")
				delete this.report[find.id]
			}
			break
			case 'request': {
				if (!q) return m.warning(`Contoh: ${prefix+command} min tambahin fitur tiktok download`)
				if (text.length > 200) return m.warning('Maksimal 200 Karakter!')
				try {
					vreden.sendTextWithMentions(m.chat, `📦 *REQUEST - BOT*\n\n- *Name* : @${m.sender.split("@")[0]}\n- *Waktu* : ${time}\n\n*REQUEST* :\n${text}\n\n_Pesan Telah Dikirimkan_\n> ${bots.footer}`, m)
					await vreden.sendText(owner.nomor, `📦 *REQUEST FITUR*\n\n- *Dari* : ${m.sender.split("@")[0]}\n\n${text}\n\n> ${bots.footer}`, fbot)
				} catch (e) {
					m.reply('Terjadi Kesalahan')
				}
			}
			break
			case 'sampah': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let all = await fs.readdirSync('./tmp')
				var teks = `JUMLAH SAMPAH SYSTEM\n\n`
				teks += `Total : ${all.length} Sampah\n\n`
				teks += all.map(o => `${o}\n`).join("");
				m.reply(teks)
			}
			break
			case 'delsampah': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join('./tmp')
				fs.readdir(directoryPath, async function(err, filteredArray) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					chatEdit([teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah"])
					await filteredArray.forEach(function(file) {
						if (file !== "nomedia.js") {
							fs.unlinkSync(`./tmp/${file}`)
						}
					});
				});
			}
			break
			case 'clearsesi': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join(bots.session)
				fs.readdir(directoryPath, async function(err, filteredArray) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					var teks = `Terdeteksi ${filteredArray.length} file sesi\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					chatEdit([teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah"])
					await filteredArray.forEach(function(file) {
						if (file !== "creds.json") {
							fs.unlinkSync(directoryPath + `/${file}`)
						}
					});
				});
			}
			break
			case 'clearsesi2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join(bots.session2)
				fs.readdir(directoryPath, async function(err, filteredArray) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					var teks = `Terdeteksi ${filteredArray.length} file sesi\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					chatEdit([teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah"])
					await filteredArray.forEach(function(file) {
						if (file !== "creds.json") {
							fs.unlinkSync(directoryPath + `/${file}`)
						}
					});
				});
			}
			break
			case 'sampah2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let alll = await fs.readdirSync('./')
				var teks = `JUMLAH SAMPAH SYSTEM\n\n`
				teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
				teks += fl.filter(v => v.endsWith("mp3")).map(o => `${o}\n`).join("");
				m.reply(teks)
			}
			break
			case 'delsampah2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join('./')
				fs.readdir(directoryPath, async function(err, files) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
					var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					chatEdit([teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah"])
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./${file}`)
					});
				});
			}
			break
			case 'clearallgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				for (let i of anulistg) {
					let metadata = await vreden.groupMetadata(i)
					await vreden.chatModify({
						delete: true,
						lastMessages: [{
							key: m.key,
							messageTimestamp: m.messageTimestamp
						}]
					}, metadata.id)
				}
				m.reply('Menghapus Semua Pesan Grup...')
			}
			break
			case 'clearallpc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
				for (let i of anulistg) {
					await vreden.chatModify({
						delete: true,
						lastMessages: [{
							key: m.key,
							messageTimestamp: m.messageTimestamp
						}]
					}, i)
				}
				m.reply('Menghapus Semua Pesan Chat...')
			}
			break
			case 'pppanjang':
			case 'setppbot2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!quoted) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				var {
					img
				} = await generateProfilePicture(media)
				await vreden.query({
        			tag: 'iq',
        			attrs: {
        				target: botNumber,
        				to: "@s.whatsapp.net",
        				type: 'set',
        				xmlns: 'w:profile:picture'
        			},
        			content: [{
        				tag: 'picture',
        				attrs: { type: 'image' },
        				content: img
        			}]
        		})
				m.reply("Done!!!")
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!quoted) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				await vreden.updateProfilePicture(botNumber, {
					url: media
				}).catch((err) => fs.unlinkSync(media))
				m.reply("Done")
			}
			break
			case 'antidelete': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.antiDelete) return m.reply(`Udah aktif`)
					setting.general.antiDelete = true
					m.reply('Successfully Activate antidelete In This bot')
				} else if (args[0] === "off") {
					if (!setting.general.antiDelete) return m.reply(`Udah nonaktif`)
					setting.general.antiDelete = false
					m.reply('Successfully Disabling antidelete In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
			}
			break
			case 'autosholat': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.autoSholat) return m.reply(`Udah aktif`)
					setting.general.autoSholat = true
					m.reply('Successfully Activate autosholat In This bot')
				} else if (args[0] === "off") {
					if (!setting.general.autoSholat) return m.reply(`Udah nonaktif`)
					setting.general.autoSholat = false
					m.reply('Successfully Disabling autosholat In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
			}
			break
			case 'audioowner': 
			case 'vnowner': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.audioOwner) return m.reply(`Udah aktif`)
					setting.general.audioOwner = true
					m.reply('Successfully Activate audio owner In This bot')
				} else if (args[0] === "off") {
					if (!setting.general.audioOwner) return m.reply(`Udah nonaktif`)
					setting.general.audioOwner = false
					m.reply('Successfully Disabling audio owner In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
			}
			break
			case 'audiomenu': 
			case 'vnmenu': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.audioMenu) return m.reply(`Udah aktif`)
					setting.general.audioMenu = true
					m.reply('Successfully Activate audio menu In This bot')
				} else if (args[0] === "off") {
					if (!setting.general.audioMenu) return m.reply(`Udah nonaktif`)
					setting.general.audioMenu = false
					m.reply('Successfully Disabling audio menu In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
			}
			break
			case 'antionce':
			case 'antivo':
			case 'antiviewonce': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.general.antiViewOnce) return m.reply(`Udah aktif`)
					setting.general.antiViewOnce = true
					m.reply('Successfully Activate Anti view once In This bot')
				} else if (args[0] === "off") {
					if (!setting.general.antiViewOnce) return m.reply(`Udah nonaktif`)
					setting.general.antiViewOnce = false
					m.reply('Successfully Disabling Anti view once In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, bots.footer, m)
				}
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
			}
			break
			case 'addowner': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} @0`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					if (users) {
						setting.owner.number.push(users)
						fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
						m.reply(`Sukses`)
					} else {
						m.reply(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} @0`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'delowner': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} @0`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					if (users) {
						if (!setting.owner.number.includes(users)) return m.warning(`Dia bukan owner`)
						setting.owner.number.splice(owner.number.indexOf(users, 1))
						fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
						m.reply(`Sukses`)
					} else {
						m.reply(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} @0`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addprem':
			case 'addpremium': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nTutorial:\n${prefix + command} <users|waktu>\n\nContoh:\n${prefix + command} @0|1d`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				if (owner.number.includes(nomor)) return m.reply("*Owner bot tidak dapat premium!*")
				let premium = await cd.isPremium(usersdb, nomor)
				if (premium) return m.reply("*Users tersebut sudah masuk daftar premium*")
				let users = await vreden.onWhatsApp(nomor)
				if (users.length < 1) return m.warning(`*Tag/reply/input nomor dengan benar!*\n\nTutorial:\n${prefix + command} <users|waktu>\n\nContoh:\n${prefix + command} @0|1d`)
				let expired = text.split("|")[1]
				if (!expired) return m.warning(`*Masukan expired date!*\n\nTutorial:\n${prefix + command} <users|waktu>\n\nContoh:\n${prefix + command} @0|1d`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let addprem = await cd.addPrem(usersdb, users[0].jid, expired)
				const contentText = {
					text: addprem,
					contextInfo: {
						mentionedJid: vreden.ments(addprem),
						externalAdReply: {
							title: `PREMIUM USER 💳`,
							previewType: "PHOTO",
							thumbnailUrl: `https://files.catbox.moe/2gzvqw.jpg`,
							sourceUrl: links.website
						}
					}
				};
				return vreden.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break
			case 'delprem':
			case 'delpremium': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nTutorial:\n${prefix + command} <users>\n\nContoh:\n${prefix + command} @0`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				let premium = await cd.isPremium(usersdb, nomor)
				if (!premium) return m.reply("*Users tersebut bukan users premium!*")
				let delprem = await cd.delPrem(usersdb, nomor)
				m.reply(delprem)
			}
			break
			case 'addsewa': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!args[0]) return m.warning(`*Penggunaan salah!*\n\nTutorial:\n${prefix + command} <linkgc> <expired>\n\nContoh:\n${prefix + command} https://chat.whatsapp.com/link 30d`)
				if (!isUrl(args[0])) return m.warning(`*Input link yang benar!*\n\nTutorial:\n${prefix + command} <linkgc> <expired>\n\nContoh:\n${prefix + command} https://chat.whatsapp.com/link 30d`)
				if (!args[1]) return m.warning(`*Input expired yang benar!*\n\nTutorial:\n${prefix + command} <linkgc> <expired>\n\nContoh:\n${prefix + command} https://chat.whatsapp.com/link 30d`)
				let url = args[0].split('https://chat.whatsapp.com/')[1]
				let inspect = await vreden.groupGetInviteInfo(url)
				let data
				let waktu
				let grupJoin = (await vreden.groupFetchAllParticipating())[inspect.id]
				if (!grupJoin) {
					data = await vreden.groupAcceptInvite(url)
					waktu = args[1]
				} else {
					data = inspect.id
					waktu = args[1]
				}
				if (!data) return m.reply("*Link invalid atau group private!*")
				if (cd.isSewa(chatsdb, data)) return m.reply("*Bot udah disewakan di grup itu!*")
				let sewa = await cd.addSewa(chatsdb, data, waktu)
				const contentText = {
					text: sewa,
					contextInfo: {
						mentionedJid: vreden.ments(sewa),
						externalAdReply: {
							title: `GROUP SEWA 💫`,
							previewType: "PHOTO",
							thumbnailUrl: `https://files.catbox.moe/slr1qi.jpg`,
							sourceUrl: links.website
						}
					}
				};
				return vreden.sendMessage(data, contentText, {
					quoted: m,
				});
			}
			break
			case 'delsewa': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isSewa) return m.warning("*Bot tidak disewakan di group ini!*")
				let delsewa = await cd.delSewa(chatsdb, m.chat)
				m.reply(delsewa)
			}
			break
			case 'addc':
			case 'addcoin':
			case 'addcoins':
			case 'addkoin': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan nomor dan nominal!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (owner.number.includes(users)) return m.warning('Owner sudah kaya raya')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users dengan benar!*`)
				if (!args[1]) return m.warning(`*Masukkan nominal nya!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`*Nominal harus berupa angka!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				usersdb[users].coins += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up coins sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'kurcoin':
			case 'kurcoins':
			case 'kurkoin': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan nomor dan nominal!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users dengan benar!*`)
				if (!args[1]) return m.warning(`*Masukkan nominal nya!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`*Nominal harus berupa angka!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].coins
				if (anu < args[1] || anu == 'undefined') return m.warning(`Coins @${users.split("@")[0]} Tidak Mencukupi Untuk Dikurang Sebesar Rp ${args[1]}\nKetik ${prefix}coins @${users.split("@")[0]}, untuk mengecek coins target!`)
				usersdb[users].coins -= parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses kurang coins sebesar ${args[1]} dari @${users.split("@")[0]}`, m)
			}
			break
			case 'addb':
			case 'adduang':
			case 'addbalance':
			case 'addbal': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan nomor dan nominal!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (owner.number.includes(users)) return m.warning('Owner sudah kaya raya')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users dengan benar!*`)
				if (!args[1]) return m.warning(`*Masukkan nominal nya!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`*Nominal harus berupa angka!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				usersdb[users].saldo += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up saldo sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'kuruang':
			case 'kurbalance':
			case 'kurbal': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan nomor dan nominal!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users dengan benar!*`)
				if (!args[1]) return m.warning(`*Masukkan nominal nya!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`*Nominal harus berupa angka!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].saldo
				if (anu < args[1] || anu == 'undefined') return m.warning(`Saldo @${users.split("@")[0]} Tidak Mencukupi Untuk Dikurang Sebesar Rp ${args[1]}\nKetik ${prefix}saldo @${users.split("@")[0]}, untuk mengecek Saldo target!`)
				usersdb[users].saldo -= parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses kurang saldo sebesar ${args[1]} dari @${users.split("@")[0]}`, m)
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan nomor dan nominal!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (owner.number.includes(users)) return m.warning('Owner sudah kaya raya')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users dengan benar!*`)
				if (!args[1]) return m.warning(`*Masukkan nominal nya!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`*Nominal harus berupa angka!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				usersdb[users].limit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'addglimit':
			case 'addgamelimit': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan nomor dan nominal!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (owner.number.includes(users)) return m.warning('Owner sudah kaya raya')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Masukan users dengan benar!*`)
				if (!args[1]) return m.warning(`*Masukkan nominal nya!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`*Nominal harus berupa angka!*\n\nContoh:\n${prefix+command} @6287824695047 2000`)
				usersdb[users].glimit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up game limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'bcimage':
			case 'bcimg': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Reply foto dengan caption ${prefix + command} Tes`)
				if (!/image/.test(mime)) return m.warning(`Reply foto dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					let txt = `「 BROADCAST 」\n\n${text}`
					vreden.sendMessage(apaan, {
						image: buffer,
						caption: txt
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcvideo':
			case 'bcvid': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Reply video dengan caption ${prefix + command} Tes`)
				if (!/video/.test(mime)) return m.warning(`Reply video dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					let txt = `「 BROADCAST 」\n\n${text}`
					vreden.sendMessage(apaan, {
						video: buffer,
						caption: txt,
						mimetype: 'video/mp4',
						duration: 909090909
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcaudio':
			case 'bcaud': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!/audio/.test(mime)) return m.warning(`Reply audio dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					vreden.sendMessage(apaan, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: false,
						duration: 909090909
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcvn': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!/audio/.test(mime)) return m.warning(`Reply audio dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					vreden.sendMessage(apaan, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: true,
						duration: 909090909
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcstiker':
			case 'bcstik':
			case 'bcsticker': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!/webp/.test(mime)) return m.warning(`Reply stiker dengan caption ${prefix + command}`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					vreden.sendMessage(apaan, {
						sticker: {
							url: media
						}
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bc':
			case 'broadcast': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Contoh:\n${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let todd = await vreden.reSize(`${mediaPath.thumbnail}`, 300, 300)
				m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 5} detik`)
				let button = [{
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\"}`
				}]
				for (let xnxx of anu) {
					await sleep(5000)
					if (/image/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonImage(xnxx, media, button, `*｢ BOARDCAST ｣*\n\n${text}\n`, bots.footer, fhalo)
					} else if (/video/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonVideo(xnxx, media, button, `*｢ BOARDCAST ｣*\n\n${text}\n`, bots.footer, fhalo)
					} else {
						vreden.sendButtonText(xnxx, button, `*｢ BOARDCAST ｣*\n\n${text}\n`, bots.footer, fhalo)
					}
				}
				m.reply("*Sukses Boardcast All Chat ✅*")
			}
			break
			case 'bcgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
				let getGroups = await vreden.groupFetchAllParticipating()
				let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
				let anu = groups.map((v) => v.id)
				m.reply(`Mengirim Broadcast Ke ${anu.length} Group\nWaktu Selesai ${anu.length * 5} detik`)
				let button = [{
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\"}`
				}]
				for (let xnxx of anu) {
					await sleep(5000)
					if (/image/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonImage(xnxx, media, button, `*｢ BOARDCAST GRUP ｣*\n\n${text}\n`, bots.footer, fhalo)
					} else if (/video/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonVideo(xnxx, media, button, `*｢ BOARDCAST GRUP ｣*\n\n${text}\n`, bots.footer, fhalo)
					} else {
						vreden.sendButtonText(xnxx, button, `*｢ BOARDCAST GRUP ｣*\n\n${text}\n`, bots.footer, fhalo)
					}
				}
				m.reply("*Sukses Boardcast Grup ✅*")
			}
			break
			case 'bcsewa': {
				let sewa = await cd.listSewa(chatsdb)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Contoh:\n${prefix + command} Tes`)
				for (let i = 0; i < sewa.length; i++) {
					await vreden.sendMessage(sewa[i], {
						text: text
					})
					await sleep(3000)
				}
				m.reply(`Sukses bc ke ${sewa.length}`)
			}
			break
			case 'delchat': {
				var teks = q ? q : m.chat
				await vreden.chatModify({
					delete: true,
					lastMessages: [{
						key: m.key,
						messageTimestamp: m.messageTimestamp
					}]
				}, teks)
				m.reply('Sukses!')
			}
			break
			case 'set': {
				let [subcmd, ...teks] = text.split(' ')
				teks = teks.join(" ")
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				switch (subcmd) {
					case "botname": {
						if (!teks) return m.reply(`*Masukan nama bot!*\n\nContoh:\n${prefix + command} ${subcmd} YandexBot`)
						setting.bots.nameFull = teks
						m.reply("*Nama bot di ubahh!*")
					}
					break
					case "ainame": {
						if (!teks) return m.reply(`*Masukan nama ai!*\n\nContoh:\n${prefix + command} ${subcmd} google asisten`)
						setting.bots.nameCall = teks
						m.reply("*Nama ai di ubahh!*")
					}
					break
					case "footer": {
						if (!teks) return m.reply(`*Masukan footer text!*\n\nContoh:\n${prefix + command} ${subcmd} © by komtolodon`)
						setting.bots.footer = teks
						m.reply("*Footer text di ubahh!*")
					}
					break
					case "stylemenu": {
						if (!teks) return m.reply(`*Masukan style menu!*\n\nContoh:\n${prefix + command} ${subcmd} v1`)
						setting.bots.style = teks
						m.reply("*Theme menu di ubah!*")
					}
					break
					case "menu": {
						if (!teks) return m.warning(`*Masukan text menu!*\n\n*Contoh:*\n${prefix+command} ${subcmd} ------------ » *BOT INFO* « ------------

*☏  Bot Name :* @botname
*♙  Prefix :* [ @prefix ]
*₪  Jam :* @jam
*▨  Total Fitur:* @totalfitur Fitur
*⚿  Total Error:* 4 Fitur
*♗  Your Device :* @device\n\n\n*Function:*\n- @botname (nama bot)\n- @prefix (prefix bot)\n- @jam (waktu WIB)\n- @totalfitur (Total Case)\n- @device (Get User Device)\n- @ucapan (Ucapan Salam)\n- @nomor (User Nombor)\n- @pushname (nama user)`)
						setting.bots.menu = teks
						m.reply("*Menu text diubahh!*")
					}
					break
					case "welcometype": {
						if (!teks) return m.reply(`*Masukan style welcome!*\n\nContoh:\n${prefix + command} ${subcmd} v1`)
						setting.bots.welcomeType = teks
						m.reply("*welcome type diubahh!*")
					}
					break
					case "idsaluran": {
						if (!teks) return m.reply(`*Masukan ID saluran!*\n\nContoh:\n${prefix + command} ${subcmd} 123@newsletter`)
						setting.bots.idsaluran = teks
						m.reply("*id channel diubahh!*")
					}
					break
					case "namasaluran": {
						if (!teks) return m.reply(`*Masukan nama saluran!*\n\nContoh:\n${prefix + command} ${subcmd} Bot Info`)
						setting.bots.namasaluran = teks
						m.reply("*nama channel diubahh!*")
					}
					break
					case "panel": {
						if (!teks) return m.reply(`*Masukan link panel!*\n\nContoh:\n${prefix + command} ${subcmd} https://panel.com`)
						setting.ptero.links = teks
						m.reply("*petro link diubahh!*")
					}
					break
					case "pltc": {
						if (!teks) return m.reply(`*Masukan pltc panel!*\n\nContoh:\n${prefix + command} ${subcmd} pltc_yjtbkrgvi`)
						setting.ptero.pltc = teks
						m.reply("*petro pltc diubahh!*")
					}
					break
					case "plta": {
						if (!teks) return m.reply(`*Masukan plta panel!*\n\nContoh:\n${prefix + command} ${subcmd} plta_uvrgkit6jifr`)
						setting.ptero.plta = teks
						m.reply("*petro plta diubahh!*")
					}
					break
					case "nets": {
						if (!teks) return m.reply(`*Masukan nets panel!*\n\nContoh:\n${prefix + command} ${subcmd} 5`)
						setting.ptero.nets = teks
						m.reply("*petro nets diubahh!*")
					}
					break
					case "eggs": {
						if (!teks) return m.reply(`*Masukan eggs panel!*\n\nContoh:\n${prefix + command} ${subcmd} 15`)
						setting.ptero.eggs = teks
						m.reply("*petro eggs diubahh!*")
					}
					break
					case "location": {
						if (!teks) return m.reply(`*Masukan location panel!*\n\nContoh:\n${prefix + command} ${subcmd} 1`)
						setting.ptero.location = teks
						m.reply("*petro location diubahh!*")
					}
					break
					case "skizo": {
						if (!teks) return m.reply(`*Masukan skizo key!*\n\nContoh:\n${prefix + command} ${subcmd} 666`)
						setting.apikey.skizo = teks
						m.reply("*Apikey skizo diubahh!*")
					}
					break
					case "group": {
						if (!teks) return m.reply(`*Masukan link grup!*\n\nContoh:\n${prefix + command} ${subcmd} https://chat.whatsapp.com`)
						setting.links.group = teks
						m.reply("*Link group diubahh!*")
					}
					break
					case "website": {
						if (!teks) return m.reply(`*Masukan link website!*\n\nContoh:\n${prefix + command} ${subcmd} https://google.com`)
						setting.links.website = teks
						m.reply("*Link website diubahh!*")
					}
					break
					case "channel": {
						if (!teks) return m.reply(`*Masukan link channel!*\n\nContoh:\n${prefix + command} ${subcmd} https//whatsapp.com/channel/`)
						setting.links.channel = teks
						m.reply("*Link channel diubahh!*")
					}
					break
					case 'thumbnail': {
						if (/image/.test(mime)) {
							let media = await vreden.downloadAndSaveMediaMessage(quoted)
							let url = await CatBox(media)
							setting.mediaPath.thumbnail = url
							m.reply(`*Thumbnail diubah ke*\n${url}`)
							fs.unlinkSync(media)
						} else {
							if (!teks) return m.reply(`*Reply image atau enter link!*\n\nTutorial:\n${prefix + command} <link image>\n\nContoh:\n${prefix + command} https://example.com/image.jpg`)
							setting.mediaPath.thumbnail = teks
							m.reply(`*Thumbnail diubah ke*\n${teks}`)
						}
					}
					break
					case 'donasi': {
						if (/image/.test(mime)) {
							let media = await vreden.downloadAndSaveMediaMessage(quoted)
							let url = await CatBox(media)
							setting.mediaPath.donasi = url
							m.reply(`*Donasi image diubah ke*\n${url}`)
							fs.unlinkSync(media)
						} else {
							if (!teks) return m.reply(`*Reply image atau enter link!*\n\nTutorial:\n${prefix + command} <link image>\n\nContoh:\n${prefix + command} https://example.com/image.jpg`)
							setting.mediaPath.donasi = teks
							m.reply(`*Donasi image diubah ke*\n${teks}`)
						}
					}
					break
					case 'vnmenu': {
						if (/audio/.test(mime)) {
							let media = await vreden.downloadAndSaveMediaMessage(quoted)
							let url = await CatBox(media)
							setting.mediaPath.audioMenu = url
							m.reply(`*Musical menu diubah ke*\n${url}`)
							fs.unlinkSync(media)
						} else {
							if (!teks) return m.reply(`*Masukan link atau reply audio!*`)
							setting.mediaPath.audioMenu = teks
							m.reply(`*Musical menu diubah ke*\n${teks}`)
						}
					}
					break
					case 'vnowner': {
						if (/audio/.test(mime)) {
							let media = await vreden.downloadAndSaveMediaMessage(quoted)
							let url = await Catbox(media)
							setting.mediaPath.audioOwner = url
							m.reply(`*Musical owner diubah ke*\n${url}`)
							fs.unlinkSync(media)
						} else {
							if (!teks) return m.reply(`*Masukan link atau reply audio!*`)
							setting.mediaPath.audioOwner = teks
							m.reply(`*Musical owner diubah ke*\n${teks}`)
						}
					}
					break
					default:
						m.sendForward(`*</> SETTINGS CHANGE </>*

*Pilih options*:
- botname
- ainame
- footer
- stylemenu
- menu
- welcometype
- idsaluran
- namasaluran
- panel
- pltc
- plta
- nets
- eggs
- location
- skizo
- group
- website
- channel
- donasi
- thumbnail
- vnowner
- vnmenu

*Contoh*:
${prefix + command} botname yandexbot

`)
				}
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND STORAGE ]━━━━━━━━━━━━━━━━━//
			case 'addstiker':
			case 'addsticker':
			case 'addstik': {
				if (!/webp/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				mediaMsg.sticker.push(`${text}`)
				fs.writeFileSync(`./database/file/${text}.webp`, media)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))
				m.reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
			}
			break
			case 'delstiker':
			case 'delsticker':
			case 'delstik': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!mediaMsg.sticker.includes(text)) return m.warning(`Sticker dengan nama ${text} tidak ditemukan!`)

				try {
					fs.unlinkSync(`./database/file/${text}.webp`)
				} catch (err) {
					return m.warning(`Terjadi kesalahan saat menghapus file sticker ${text}.webp`)
				}

				mediaMsg.sticker = mediaMsg.sticker.filter(stik => stik !== text)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))

				m.reply(`Sukses Menghapus Sticker ${text}\nCek dengan cara ${prefix}liststik`)
			}
			break
			case 'liststik':
			case 'liststiker':
			case 'liststc': {
				teks = '*STICKER LIST :*\n\n'
				for (let awokwkwk of mediaMsg.sticker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${mediaMsg.sticker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
				m.reply(teks)
				break
			}
			case 'addfoto':
			case 'addimage':
			case 'addphoto':
			case 'addimg': {
				if (!/image/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				mediaMsg.image.push(`${text}`)
				fs.writeFileSync(`./database/file/${text}.jpg`, media)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))
				m.reply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
			}
			break
			case 'delfoto':
			case 'delimage':
			case 'delphoto':
			case 'delimg': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!mediaMsg.image.includes(text)) return m.warning(`Image dengan nama ${text} tidak ditemukan!`)
				try {
					fs.unlinkSync(`./database/file/${text}.jpg`)
				} catch (err) {
					return m.warning(`Terjadi kesalahan saat menghapus file image ${text}.jpg`)
				}
				mediaMsg.image = mediaMsg.image.filter(img => img !== text)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))

				m.reply(`Sukses Menghapus Image ${text}\nCek dengan cara ${prefix}listimg`)
			}
			break
			case 'listimage':
			case 'imagelist':
			case 'listimg': {
				teks = '*IMAGE LIST :*\n\n'
				for (let awokwkwk of mediaMsg.image) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${mediaMsg.image.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
				m.reply(teks)
				break
			}
			case 'addvideo':
			case 'addvidio':
			case 'addvid': {
				if (!/video/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if ((quoted.msg || quoted).seconds > 31) return m.warning('Maksimal 30 detik')
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				mediaMsg.video.push(`${text}`)
				fs.writeFileSync(`./database/file/${text}.mp4`, media)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))
				m.reply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
			}
			break
			case 'delvideo':
			case 'delvid': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!mediaMsg.video.includes(text)) return m.sendForward('Video tersebut tidak ada!')
				let anu = mediaMsg.video.indexOf(text)
				mediaMsg.video.splice(anu, 1)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))
				fs.unlinkSync(`./database/file/${text}.mp4`)
				m.sendForward('Berhasil Dihapus')
			}
			break
			case 'videolist':
			case 'listvidio':
			case 'listvid':
			case 'listvideo': {
				teks = '*VIDEO LIST :*\n\n'
				for (let awokwkwk of mediaMsg.video) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${mediaMsg.video.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
				m.reply(teks)
				break
			}
			case 'addaud':
			case 'addaudio':
			case 'addvn': {
				if (!/audio/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if ((quoted.msg || quoted).seconds > 31) return m.warning('Maksimal 30 detik')
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				mediaMsg.audio.push(`${text}`)
				fs.writeFileSync(`./database/file/${text}.mp3`, media)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))
				m.reply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
			}
			break
			case 'delvn':
			case 'delaudio':
			case 'delaud': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!mediaMsg.audio.includes(text)) return m.sendForward('Vn tersebut tidak ada!')
				let anu = mediaMsg.audio.indexOf(text)
				mediaMsg.audio.splice(anu, 1)
				fs.writeFileSync('./database/media.json', JSON.stringify(mediaMsg))
				fs.unlinkSync(`./database/file/${text}.mp3`)
				m.sendForward('Berhasil Dihapus')
			}
			break
			case 'listvn':
			case 'listaudio': {
				teks = '*AUDIO LIST :*\n\n'
				for (let awokwkwk of mediaMsg.audio) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${mediaMsg.audio.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
				m.reply(teks)
			}
			break
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND STICKER ]━━━━━━━━━━━━━━━━━//
				case'brat': {
 try{
 if (!text) return m.reply(`Contoh: ${command} Nanda Gntng`)
 if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)
 let res = await fetch(`https://api.siputzx.my.id/api/m/brat?text=${text}`)
 let buffer = await res.buffer()
 await vreden.imgToSticker(m.chat, buffer, m, {
 packname: `Made By `,
 author: `V.R.D Official ` })
 }catch (error) {
					await m.errorReport(util.format(error), command)
				}
}
break

case 'bratvid':
case 'bratvideo':
case 'bratgift':
try {
if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
 if(!text) return m.reply(`Mana teks nya? contoh ${prefix+command} Rafyy Sikma Skibidi`)
 if (text.length > 250) throw "Maksimal 250 Huruf!";
 const words = text.split(" ");
 const dir = path.join(process.cwd(), "lib");
 if (!fs.existsSync(dir)) fs.mkdirSync(dir);

 const frames = [];
 for (let i = 0; i < words.length; i++) {
 const teks = words.slice(0, i + 1).join(" ");
 const data = await fetch(`https://rainsz-stext.hf.space/?text=${encodeURIComponent(teks)}`).then(res => res.buffer());
 const filePath = path.join(dir, `frame${i}.mp4`);
 fs.writeFileSync(filePath, data);
 frames.push(filePath);
frames.push(filePath);
frames.push(filePath);
 }

 const fileList = path.join(dir, "filelist.txt");
 fs.writeFileSync(
 fileList,
 frames.map((file, i) => `file '${file}'\nduration ${i === frames.length - 1 ? 10 : 0.2}`).join("\n")
 );

 const output = path.join(dir, "brat.mp4");
 execSync(`ffmpeg -y -f concat -safe 0 -i ${fileList} -vf "fps=60" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${output}`);
 await vreden.imgToSticker(m.chat ,output , m,{ packname: `stiker maker: ${setting.bots.nameFull}✨\n\ningin sewabot?chat no di bawah`,
 author: `\n owner nomor💂: ${ownnomor}`
 });
 frames.forEach(f => fs.existsSync(f) && fs.unlinkSync(f));
 [fileList, output].forEach(f => fs.existsSync(f) && fs.unlinkSync(f));
 } catch(_) {
 m.reply("Error");
 console.error(_)
 }
break

			case'bratvid2': {
 if (!text) return m.reply(`Contoh: ${prefix+command} hai`)
 if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)

 const words = text.split(" ")
 const tempDir = path.join(process.cwd(), 'lib')
 if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
 const framePaths = []

 try {
 for (let i = 0; i < words.length; i++) {
 const currentText = words.slice(0, i + 1).join(" ")

 const res = await axios.get(
 `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(currentText)}`,
 { responseType: "arraybuffer" }
 ).catch((e) => e.response)

 const framePath = path.join(tempDir, `frame${i}.mp4`)
 fs.writeFileSync(framePath, res.data)
 framePaths.push(framePath)
 }

 const fileListPath = path.join(tempDir, "filelist.txt")
 let fileListContent = ""

 for (let i = 0; i < framePaths.length; i++) {
 fileListContent += `file '${framePaths[i]}'\n`
 fileListContent += `duration 0.7\n`
 }

 fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
 fileListContent += `duration 2\n`

 fs.writeFileSync(fileListPath, fileListContent)
 const outputVideoPath = path.join(tempDir, "output.mp4")
 execSync(
 `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
 )

 await vreden.vidToSticker(m.chat, outputVideoPath, m, {
 packname: 'Made by',
 author: `V.R.D Official `
 })

 framePaths.forEach((frame) => {
 if (fs.existsSync(frame)) fs.unlinkSync(frame)
 })
 if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
 if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
 } catch (e) {
 console.error(e)
 m.reply('Terjadi kesalahan')
 }
}
break

case'smeme':
			case 'stickmeme':
			case 'stikmeme':
			case 'stickermeme':
			case 'stikermeme': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					if (!/webp/.test(mime) && /image/.test(mime)) {
						await vreden.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						atas = text.split('|')[0] ? text.split('|')[0] : '-'
						bawah = text.split('|')[1] ? text.split('|')[1] : '-'
						media = await vreden.downloadAndSaveMediaMessage(quoted)
						mem = await tmpFiles(media)
						let smemee = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
						var smeme = await getBuffer(smemee)
						await vreden.imgToSticker(m.chat, smeme, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${bots.nameFull}\n${ownnomor}`
						})
					} else {
						m.reply(`*Kirim/reply fotonya!*\n\nTutorial:\n${prefix + command} <text atas|text bawah>\n\nContoh:\n${prefix + command} makan|dulu`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ttp': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.length > 20) return m.warning("Maksimal 20 karakter")
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const ttp = require('./lib/text2picture')
					let tpp = await ttp.ttp(text)
					var ttpp = await getBuffer(tpp[0].url)
					await vreden.imgToSticker(m.chat, ttpp, m, {
						packname: `Made By `,
						author: `V.R.D Official `
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'patrick':
			case 'doge':
			case 'popoci':
			case 'sponsbob':
			case 'awoawo':
			case 'dino-kuning':
			case 'kucing':
			case 'meow':
			case 'manusia-lidi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let rdmstik = await fetchJson(`https://www.vreden.web.id/database/sticker/${command}.json`)
					let result = await pickRandom(rdmstik)
					let dino = await getBuffer(result)
					vreden.imgToSticker(m.chat, dino, m, {
						packname: `Made By `,
						author: `V.R.D Official `
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'qckode':
			case 'qcwarna':
			case 'qccode': {
				m.warning(`Contoh: ${prefix}qc pink hallo\n\n*List Warna*\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
			}
			break
			case 'qc': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`);
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} pink hallo\n\n*List Warna*:\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
				let [color, ...message] = text.split(' ');
				message = message.join(' ');
				let backgroundColor;

				switch (color) {
					case 'pink':
						backgroundColor = '#f68ac9';
						break;
					case 'biru':
						backgroundColor = '#6cace4';
						break;
					case 'merah':
						backgroundColor = '#f44336';
						break;
					case 'hijau':
						backgroundColor = '#4caf50';
						break;
					case 'kuning':
						backgroundColor = '#ffeb3b';
						break;
					case 'ungu':
						backgroundColor = '#9c27b0';
						break;
					case 'birutua':
						backgroundColor = '#0d47a1';
						break;
					case 'birumuda':
						backgroundColor = '#03a9f4';
						break;
					case 'abu':
						backgroundColor = '#9e9e9e';
						break;
					case 'orange':
						backgroundColor = '#ff9800';
						break;
					case 'hitam':
						backgroundColor = '#000000';
						break;
					case 'putih':
						backgroundColor = '#ffffff';
						break;
					case 'teal':
						backgroundColor = '#008080';
						break;
					case 'merahmuda':
						backgroundColor = '#FFC0CB';
						break;
					case 'cokelat':
						backgroundColor = '#A52A2A';
						break; // Added break
					case 'salmon':
						backgroundColor = '#FFA07A';
						break;
					case 'magenta':
						backgroundColor = '#FF00FF';
						break;
					case 'tan':
						backgroundColor = '#D2B48C';
						break;
					case 'wheat':
						backgroundColor = '#F5DEB3';
						break;
					case 'deeppink':
						backgroundColor = '#FF1493';
						break;
					case 'api':
						backgroundColor = '#B22222';
						break;
					case 'birulangit':
						backgroundColor = '#00BFFF';
						break;
					case 'jingga':
						backgroundColor = '#FF7F50';
						break;
					case 'birulangitcerah':
						backgroundColor = '#1E90FF';
						break;
					case 'hotpink':
						backgroundColor = '#FF69B4';
						break;
					case 'birumudalangit':
						backgroundColor = '#87CEEB';
						break;
					case 'hijaulaut':
						backgroundColor = '#20B2AA';
						break;
					case 'merahtua':
						backgroundColor = '#8B0000';
						break;
					case 'oranyemerah':
						backgroundColor = '#FF4500';
						break;
					case 'cyan':
						backgroundColor = '#48D1CC';
						break;
					case 'ungutua':
						backgroundColor = '#BA55D3';
						break;
					case 'hijaulumut':
						backgroundColor = '#00FF7F';
						break;
					case 'hijaugelap':
						backgroundColor = '#008000';
						break;
					case 'birulaut':
						backgroundColor = '#191970';
						break;
					case 'oranyetua':
						backgroundColor = '#FF8C00';
						break;
					case 'ungukehitaman':
						backgroundColor = '#9400D3';
						break;
					case 'fuchsia':
						backgroundColor = '#FF00FF';
						break;
					case 'magentagelap':
						backgroundColor = '#8B008B';
						break;
					case 'abu-abutua':
						backgroundColor = '#696969';
						break;
					case 'peachpuff':
						backgroundColor = '#FFDAB9';
						break;
					case 'hijautua':
						backgroundColor = '#BDB76B';
						break;
					case 'merahgelap':
						backgroundColor = '#DC143C';
						break;
					case 'goldenrod':
						backgroundColor = '#DAA520';
						break;
					case 'emas':
						backgroundColor = '#FFD700';
						break;
					case 'perak':
						backgroundColor = '#C0C0C0';
						break;
					default:
						backgroundColor = '#ffffff'
						message = text
				}

				try {
					avatar = await vreden.profilePictureUrl(m.sender, "image");
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
				}

				const json = {
					type: "quote",
					format: "png",
					backgroundColor,
					width: 700,
					height: 580,
					scale: 2,
					messages: [{
						entities: [],
						avatar: true,
						from: {
							id: 1,
							name: m.pushName,
							photo: {
								url: avatar
							}
						},
						text: message,
						"m.replyMessage": {}
					}],
				};

				try {
					const res = await axios.post("https://quotly.netorare.codes/generate", json, {
						headers: {
							"Content-Type": "application/json"
						},
					});
					const qc = Buffer.from(res.data.result.image, "base64");
					await vreden.imgToSticker(m.chat, qc, m, {
						packname: `Made By `,
						author: `V.R.D Official `
					});
				} catch (error) {
					console.error("Error generating QC v1:", error);
					try {
						const data = await axios.post("https://bot.lyo.su/quote/generate", json, {
							headers: {
								"Content-Type": "application/json"
							},
						});
						const qc = Buffer.from(data.data.result.image, "base64");
						await vreden.imgToSticker(m.chat, qc, m, {
							packname: `Made By `,
							author: `V.R.D Official `
						});
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'stiker':
			case 'sticker':
			case 's':
			case 'stickergif':
			case 'sgif': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Balas Video/Image Dengan Caption ${prefix + command}`)
				try {
					if (quoted.isAnimated === true) {
						var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
						let anu = await CatBox(media);
						let webpToMp4 = await webp2mp4File(anu)
						let buffer = await getBuffer(webpToMp4)
						await vreden.vidToSticker(m.chat, buffer, m, {
							packname: `Made By `,
							author: `V.R.D Official `
						})
						await fs.unlinkSync(media)
					} else if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted, +new Date * 1)
						await vreden.imgToSticker(m.chat, media, m, {
							packname: `Made By `,
							author: `V.R.D Official `
						})
						await fs.unlinkSync(media)
					} else if (/video/.test(mime)) {
						if ((quoted.msg || quoted).seconds > 11) return m.warning('Maksimal 10 detik!')
						let media = await vreden.downloadAndSaveMediaMessage(quoted, +new Date * 1)
						await vreden.vidToSticker(m.chat, media, m, {
							packname: `Made By `,
							author: `V.R.D Official `
						})
						await fs.unlinkSync(media)
					} else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm':
			case 'wm': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
				if (!text) return m.warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
				let [t1, t2] = text.split`|`
				let teks1 = t1 ? t1 : ""
				let teks2 = t2 ? t2 : ""
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					if (m.quoted.isAnimated === true) {
						var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
						let anu = await CatBox(media);
						let webpToMp4 = await webp2mp4File(anu)
						let buffer = await getBuffer(webpToMp4)
						vreden.vidToSticker(m.chat, buffer, m, {
							packname: `${teks1}`,
							author: `${teks2}`
						})
					} else if (/image/.test(mime)) {
						let media = await quoted.download()
						vreden.imgToSticker(m.chat, media, m, {
							packname: `${teks1}`,
							author: `${teks2}`
						})
					} else if (/video/.test(mime)) {
						if ((quoted.msg || quoted).seconds > 11) return m.warning('Maksimal 10 detik!')
						let media = await quoted.download()
						vreden.vidToSticker(m.chat, media, m, {
							packname: `${teks1}`,
							author: `${teks2}`
						})
					} else {
						m.reply(`*Kirim/reply fotonya!*\n\nTutorial:\n${prefix + command} <packname|author>\n\nContoh:\n${prefix + command} by|yaya`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'stikersearch':
			case 'stiksearch':
			case 'searchstik':
			case 'caristicker':
			case 'caristiker': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\nContoh:\n${prefix+command} dino kuning`)
				try {
					let anu = await internet.stickerSearch(text)
					for (let stik of anu.sticker) {
						var stk = await getBuffer(stik)
						await vreden.imgToSticker(m.chat, stk, m, {
							packname: `Made By `,
							author: `V.R.D Official `
						})
						await sleep(3000)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND STALKER ]━━━━━━━━━━━━━━━━━//
		case'ffstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan ID nya!*\n\nContoh:\n${prefix+command} 12345678`)
				if (isNaN(text)) return m.warning(`ID harus berupa angka!`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let epep = await axios.get("https://api.vreden.web.id/api/ffstalk?id=" + text)
					let data = epep.data.result
					let teks = `
━━━━━━━━━━━━━━━━━━━━
🎮 *ACCOUNT INFORMATION*
━━━━━━━━━━━━━━━━━━━━
👤 *Nickname*: ${data.account.name}
🆔 *Account ID*: ${data.account.id}
⭐ *Level*: ${data.account.level}
🎯 *XP*: ${data.account.xp}
🌍 *Region*: ${data.account.region}
👍 *Likes*: ${data.account.like}
📝 *Bio*: ${data.account.bio}
🕒 *Account Created*: ${data.account.create_time}
🕒 *Last Login*: ${data.account.last_login}
🏆 *Honor Score*: ${data.account.honor_score}
💎 *Booyah Pass*: ${data.account.booyah_pass}
🎖 *Booyah Pass Badge*: ${data.account.booyah_pass_badge}
🔥 *BR Rank Points*: ${data.account.BR_points}
💥 *CS Rank Points*: ${data.account.CS_points}

━━━━━━━━━━━━━━━━
🐾 *PET INFORMATION*
━━━━━━━━━━━━━━━━
🐕 *Name*: ${data.pet_info.name}
🦴 *Level*: ${data.pet_info.level}
🎯 *XP*: ${data.pet_info.xp}

━━━━━━━━━━━━━━━━━
🏰 *GUILD INFORMATION*
━━━━━━━━━━━━━━━━━
👑 *Guild Name*: ${data.guild.name}
🆔 *Guild ID*: ${data.guild.id}
📈 *Level*: ${data.guild.level}
👥 *Members*: ${data.guild.member}/${data.guild.capacity}
`
				vreden.sendMessage(m.chat, { image: { url: data.image }, caption: teks }, { quoted: m })
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
case 'ffstalk2': {
    if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
    if (!q) return m.warning(`*Masukan ID nya!*\n\nContoh:\n${prefix+command} 12345678`)
    if (isNaN(text)) return m.warning(`ID harus berupa angka!`)
    await vreden.sendMessage(m.chat, {
        react: {
            text: "⏱️",
            key: m.key,
        }
    })
    try {
        let epep = await axios.get("https://api.vreden.web.id/api/ffstalk?id=" + text)
        let data = epep.data.result
        let teks = `
━━━━━━━━━━━━━━━━━━━━
🎮 *ACCOUNT INFORMATION*
━━━━━━━━━━━━━━━━━━━━
👤 *Nickname*: ${data.account.name}
🆔 *Account ID*: ${data.account.id}
⭐ *Level*: ${data.account.level}
🎯 *XP*: ${data.account.xp}
🌍 *Region*: ${data.account.region}
👍 *Likes*: ${data.account.like}
📝 *Bio*: ${data.account.bio}
🕒 *Account Created*: ${data.account.create_time}
🕒 *Last Login*: ${data.account.last_login}
🏆 *Honor Score*: ${data.account.honor_score}
💎 *Booyah Pass*: ${data.account.booyah_pass}
🎖 *Booyah Pass Badge*: ${data.account.booyah_pass_badge}
🔥 *BR Rank Points*: ${data.account.BR_points}
💥 *CS Rank Points*: ${data.account.CS_points}

━━━━━━━━━━━━━━━━
🐾 *PET INFORMATION*
━━━━━━━━━━━━━━━━
🐕 *Name*: ${data.pet_info.name}
🦴 *Level*: ${data.pet_info.level}
🎯 *XP*: ${data.pet_info.xp}

━━━━━━━━━━━━━━━━━
🏰 *GUILD INFORMATION*
━━━━━━━━━━━━━━━━━
👑 *Guild Name*: ${data.guild.name}
🆔 *Guild ID*: ${data.guild.id}
📈 *Level*: ${data.guild.level}
👥 *Members*: ${data.guild.member}/${data.guild.capacity}
`
        
        let catalogData = {
            image: { url: data.image },
            title: `${data.account.name} - Level ${data.account.level}`,
            price: "0",
        }
        
        await vreden.sendButtonCatalog(m.chat, catalogData, [], teks, "Free Fire Stalker Result", m)
    } catch (error) {
        await m.errorReport(util.format(error), command)
    }
}
break
			case 'mlstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix+command} idgame idserver`)
				if (!args[0]) return m.warning(`ID harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
				if (!args[1]) return m.warning(`ID Zone harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let emel = await stalk.ml(args[0], args[1])
					m.sendForward(`ID : ${args[0]}
ID Zone : ${args[1]}
Nickname : ${emel.userName}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'githubstalk':
			case 'ghstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} vreden`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let data = await fetchJson(`https://api.github.com/users/${text}`)
					if (data.login) {
						vreden.sendMessage(m.chat, {
							image: {
								url: data.avatar_url
							},
							caption: `*\`乂 GITHUB - STALK\`*\n\n*ID :* ${data.id}\n*Nickname :* ${data.login}\n*Fullname :* ${data.name}\n*Repository :* ${data.public_repos}\n*Followers :* ${data.followers}\n*Following :* ${data.following}\n*Site Admin :* ${data.site_admin ? "Admin" : 'Pengguna'}\n*Company :* ${data.company}\n*Blog Web :* ${data.blog}\n*Create At :* ${data.created_at}\n*Update At :* ${data.updated_at}\n*Location :* ${data.location}\n*Bio :*\n${data.bio}\n`
						}, {
							quoted: m
						})
					} else {
						m.reply("Username tersebut tidak ditemukan")
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case'igstalk': {
if (!text) return m.reply(`Masukan nickname\n\nContoh:\n${prefix+command} vreden`)
    await vreden.sendMessage(m.chat, {
        react: {
            text: "⏱️",
            key: m.key,
        }
    })
    try {
        const { result } = (await axios.get(`https://api.vreden.web.id/api/igstalk?query=${text}`)).data
        vreden.sendMessage(m.chat, {
            image: {
                url: result.image
            },
            caption: `*INSTA STALKER*\n\n*Nickname :* ${result.user.username}\n*Fullname :* ${result.user.full_name}\n*Postingan :* ${result.user.media_count}\n*Followers :* ${result.user.follower_count}\n*Following :* ${result.user.following_count}\n*Jenis Akun:* ${result.user.is_business ? "Bisnis" : 'Pribadi'}\n*Bio :*\n${result.user.biography}`
        }, {
            quoted: m
        })
    } catch (error) {
        m.reply("*Username gadak!*")
    }
}
break
			case 'igstalk2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} ariyopratama`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anuu = await fetchJson(`https://api.vreden.web.id/api/igstalk?query=${text}`)
					const anu = anuu.result
					const nick = anu.result.user.username
					const nama = anu.result.user.full_name
					const post = await tools.convertAngka(anu.result.user.media_count)
					const foll = await tools.convertAngka(anu.result.user.follower_count)
					const foli = await tools.convertAngka(anu.result.user.following_count)
					const bio = anu.result.user.biography
					const jenis = anu.result.user.is_business
					vreden.sendMessage(m.chat, {
						image: {
							url: anu.result.user.hd_profile_pic_url_info.url
						},
						caption: `*\`乂 INSTA - STALK\`*\n\n*Nickname :* ${nick}\n*Fullname :* ${nama}\n*Postingan :* ${post}\n*Followers :* ${foll}\n*Following :* ${foli}\n*Jenis Akun:* ${jenis ? "Bisnis" : 'Pribadi'}\n*Bio :*\n${bio}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case'ttstalk':
			case 'tiktokstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} ariyopratama`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await fetchJson(`https://api.vreden.web.id/api/tiktokStalk?query=${text}`)
					let post = await tools.convertAngka(result.result.stats.videoCount)
					let follwer = await tools.convertAngka(result.result.stats.followerCount)
					let follwing = await tools.convertAngka(result.result.stats.followingCount)
					let likes = await tools.convertAngka(result.result.stats.heartCount)
					let fien = await tools.convertAngka(result.result.stats.friendCount)
					vreden.sendMessage(m.chat, {
						image: {
							url: result.result.image
						},
						caption: `*\`乂 TIKTOK - STALK\`*\n\n*Nickname :* ${result.result.user.nickname}\n*Username :* ${result.result.user.uniqueId}\n*Postingan :* ${post}\n*Pengikut :* ${follwer}\n*Mengikuti :* ${follwing}\n*Suka :* ${likes}\n*Teman :* ${fien}\n*Bio :* \n${result.result.user.signature}`
					}, {
						quoted: m
					})
				} catch (error) {
					m.reply("*User name tidak ditemukan!*")
				}
			}
			break
			case 'ttstalk2':
			case 'tiktokstalk2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} ariyopratama`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await fetchJson(`https://api.vreden.web.id/api/tiktokStalk?query=${text}`)
					let post = await tools.convertAngka(result.result.stats.videoCount)
					let follwer = await tools.convertAngka(result.result.stats.followerCount)
					let follwing = await tools.convertAngka(result.result.stats.followingCount)
					let likes = await tools.convertAngka(result.result.stats.heartCount)
					let fien = await tools.convertAngka(result.result.stats.friendCount)
					vreden.sendMessage(m.chat, {
						image: {
							url: result.result.user.avatarLarger
						},
						caption: `*\`乂 TIKTOK - STALK\`*\n\n*Nickname :* ${result.result.user.nickname}\n*Username :* ${result.result.user.uniqueId}\n*Postingan :* ${post}\n*Pengikut :* ${follwer}\n*Mengikuti :* ${follwing}\n*Suka :* ${likes}\n*Teman :* ${fien}\n*Bio :* \n${result.result.user.signature}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
				
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND BALANCE ]━━━━━━━━━━━━━━━━━//
			case'limit':
 case 'me':
 case 'saldo':
			case 'balance':
			case 'ceklimit':
			case 'cekbalance': {
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
					var rank = pangkat(users)
					const creator = [owner.nomor, ...owner.number].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users)
					const premium = creator ? true : cd.isPremium(usersdb, users)
					let teks = `*乂 ACCOUNT - USERS*

*General Info*:
*🦅 Name*: ${usersdb[users].nama}
*💫 Status*: ${creator ? "Owner" : premium ? "VIP Users" : "Free Users"}
*🛡️ Rank*: ${rank.rank} (${usersdb[users].rank})
*📈 Level*: ${usersdb[users].level}
*⚡ EXP*: ${usersdb[users].exp}/2500

*Count Info*:
*🎫 Limits*: ${premium ? "∞" : usersdb[users].limit}
*🎟️Game Limits*: ${premium ? "∞" : usersdb[users].glimit}
*💰 Saldo*: ${usersdb[users].saldo}
*🪙 Coins*: ${usersdb[users].coins}
`
					try {
						avatar = await vreden.profilePictureUrl(users, "image")
					} catch {
						avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
					}
					const nomor = PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
					let button = [
 { buttonId: `${prefix}mingguan`, buttonText: { displayText: 'Mingguan' }, type: 1 },
 { buttonId: `${prefix}bulanan`, buttonText: { displayText: 'Bulanan' }, type: 1 }
 ]
 const apiUrl = 'https://editor.vreden.web.id/rank'
 const params = new URLSearchParams({
 background: "https://files.catbox.moe/ygjgsy.jpg",
 rankId: rank.id,
 profile: avatar,
 currentExp: usersdb[users].exp,
 maxExp: 2500,
 maxColor: '#FFFFFF',
 strokeColor: '#000000',
 currentColor: '#FF0000',
 expColor: '#FFFFFF',
 expNumberColor: '#000000',
 levelColor: '#FFD700',
 name: usersdb[users].nama,
 nameColor: '#FFFFFF',
 users: nomor,
 rank: rank.name.toLowerCase(),
 rankColor: '#FFD700',
 balance: usersdb[users].saldo,
 limit: usersdb[users].limit,
 level: usersdb[users].level
 }).toString()
					vreden.sendButtonMediaV2(m.chat, { image: { url: `${apiUrl}?${params}` }}, button, teks, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
			case'topglobal': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let users = Object.entries(usersdb).map(([key, value]) => {
						return {
							...value,
							jid: key
						}
					})

					function sort(property, ascending = true) {
						if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
						else return (...args) => args[ascending & 1] - args[!ascending & 1]
					}

					function enumGetKey(a) {
						return a.jid
					}

					function toNumber(property, _default = 0) {
						if (property) return (a, i, b) => {
							return {
								...b[i],
								[property]: a[property] === undefined ? _default : a[property]
							}
						}
						else return a => a === undefined ? _default : a
					}
					let sortedRank = users.map(toNumber('rank')).sort(sort('rank'))
					let usersRank = sortedRank.map(enumGetKey)
					let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedRank.length)
					let nel = args[0] && args[0].length > 0 ? Math.min(3, Math.max(parseInt(args[0]), 3)) : Math.min(3, sortedRank.length)
					let member = participants
					let txt = `
• *GLOBAL RANK TOP ${len}👑* •
Kamu: *${usersRank.indexOf(m.sender) + 1}* dari *${usersRank.length}*

${sortedRank.slice(0, len).map(({ jid, rank }, i) => `${i + 1}. ${member.some(p => jid === p.jid) ? `(${vreden.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n- *Rank:* ${pangkat(jid).rank}\n- *Rank Points:* ${usersdb[jid].rank}\n- *Level:* ${usersdb[jid].level}`).join`\n\n`}

`
					let button = [
 { buttonId: `${prefix}gamemenu`, buttonText: { displayText: 'Menu Game' }, type: 1 },
 { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'Kembali Menu' }, type: 1 }
 ]
 const apiUrl = 'https://editor.vreden.web.id/topglobal';
 const params = new URLSearchParams({
 background: 'https://files.catbox.moe/2fmjiu.jpg',
 rank1: pangkat(sortedRank[0].jid).name.toLowerCase(),
 rank2: pangkat(sortedRank[1].jid).name.toLowerCase(),
 rank3: pangkat(sortedRank[2].jid).name.toLowerCase(),
 point1: usersdb[sortedRank[0].jid].rank,
 point2: usersdb[sortedRank[1].jid].rank,
 point3: usersdb[sortedRank[2].jid].rank,
 users1: PhoneNumber('+' + sortedRank[0].jid.split("@")[0]).getNumber('international'),
 users2: PhoneNumber('+' + sortedRank[1].jid.split("@")[0]).getNumber('international'),
 users3: PhoneNumber('+' + sortedRank[2].jid.split("@")[0]).getNumber('international'),
 rankid1: pangkat(sortedRank[0].jid).id,
 rankid2: pangkat(sortedRank[1].jid).id,
 rankid3: pangkat(sortedRank[2].jid).id,
 profile1: await vreden.profilePictureUrl(sortedRank[0].jid, "image").then(img => img).catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
 profile2: await vreden.profilePictureUrl(sortedRank[1].jid, "image").then(img => img).catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
 profile3: await vreden.profilePictureUrl(sortedRank[2].jid, "image").then(img => img).catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
 }).toString();
 vreden.sendButtonMediaV2(m.chat, { image: { url: `${apiUrl}?${params}` }}, button, txt, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'transfer':
			case 'tf': {
				if (!text) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !args[0]) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				if (!args[1]) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				if (isNaN(args[1])) return m.warning(`*Nominal gak valid!*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].saldo
				if (anu < args[1] || anu == 'undefined') return m.warning(`Saldo Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}saldo, untuk mengecek Saldo mu!`)
				usersdb[m.sender].saldo -= parseInt(args[1])
				usersdb[users].saldo += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses transfer saldo sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'transferlimit':
			case 'tflimit': {
				if (!text) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !args[0]) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				if (!args[1]) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				if (isNaN(args[1])) return m.warning(`*Nominal gak valid!*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].limit
				if (anu < args[1] || anu == 'undefined') return m.warning(`Limit Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}limit, untuk mengecek Limit mu!`)
				usersdb[m.sender].limit -= parseInt(args[1])
				usersdb[users].limit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses transfer limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'tfgamelimit':
			case 'transfergamelimit':
			case 'tfglimit': {
				if (!text) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !args[0]) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				if (!args[1]) return m.warning(`*Tag dan masukkan angka!*\n\nTutorial:\n${prefix + command} <@tag> <nominal>\n\nContoh:\n${prefix + command} @6287824695047 10`)
				if (isNaN(args[1])) return m.warning(`*Nominal gak valid!*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].glimit
				if (anu < args[1] || anu == 'undefined') return m.warning(`Game Limit Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}limit, untuk mengecek Game Limit mu!`)
				usersdb[m.sender].glimit -= parseInt(args[1])
				usersdb[users].glimit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses transfer Game Limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			
			case 'buylimit': {
				if (!text) return m.warning(`*Masukan nominal!*\n\nTutorial:\n${prefix + command} <nominal>\n\nContoh:\n${prefix + command} 10\n\n*Catatan*:\n1 limit = 250 saldo`)
				if (isNaN(text)) return m.warning(`*Nominal gak valid!*\n\nTutorial:\n${prefix + command} <nominal>\n\nContoh:\n${prefix + command} 10\n\n*Catatan*:\n1 game limit = 250 saldo`)
				let jumlah = Number(parseInt(text) * 250)
				if (usersdb[m.sender].saldo < jumlah) return m.warning(`*Saldo tidak cukup*`)
				usersdb[m.sender].saldo -= parseInt(jumlah)
				usersdb[m.sender].limit += parseInt(text)
				m.reply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Saldo : Rp ${usersdb[m.sender].saldo}\nSisa Limit : ${usersdb[m.sender].limit}`)
			}
			break
			case 'buygamelimit':
			case 'buyglimit': {
				if (!text) return m.warning(`*Masukan nominal!*\n\nTutorial:\n${prefix + command} <nominal>\n\nContoh:\n${prefix + command} 10\n\n*Catatan*:\n1 limit = 250 saldo`)
				if (isNaN(text)) return m.warning(`*Nominal gak valid!*\n\nTutorial:\n${prefix + command} <nominal>\n\nContoh:\n${prefix + command} 10\n\n*Catatan*:\n1 game limit = 250 saldo`)
				let jumlah = Number(parseInt(text) * 250)
				if (usersdb[m.sender].saldo < jumlah) return m.warning(`*Saldo tidak cukup*`)
				usersdb[m.sender].saldo -= parseInt(jumlah)
				usersdb[m.sender].glimit += parseInt(text)
				m.reply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Saldo : Rp ${usersdb[m.sender].saldo}\nSisa Game Limit : ${usersdb[m.sender].glimit}`)
			}
			break
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND ANONYMOUS ]━━━━━━━━━━━━━━━━━//
			case 'anonymouschat': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"start\",\"id\":\"${prefix}start\"}`
				}]
				vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nWelcome! click start untuk mencari teman chat`, bots.footer, m);
			}
			break
			case 'keluar':
			case 'leave': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let room = Object.values(this.anonymous).find(room => room.check(m.sender))
					if (!room) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"start\",\"id\":\"${prefix}start\"}`
						}]
						return vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nKamu belum mulai chat`, bots.footer, m);
					}
					m.reply('Berhasil keluar dari anonymous chat')
					let other = room.other(m.sender)
					if (other) await vreden.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
					delete this.anonymous[room.id]
					break
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'mulai':
			case 'start': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"keluar\",\"id\":\"${prefix}keluar\"}`
						}]
						return vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nKamu masih didalam sesi anonymous, klik keluar`, bots.footer, m);
					}
					let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
					if (room) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"skip\",\"id\":\"${prefix}skip\"}`
						}, {
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"stop\",\"id\":\"${prefix}stop\"}`
						}]
						vreden.sendButtonText(room.a, button, `*</> ANONYMOUS CHAT </>*\n\nBerhasil menemukan partner`, bots.footer, m);
						room.b = m.sender
						room.state = 'CHATTING'
						vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nBerhasil menemukan partner`, bots.footer, m);
					} else {
						let id = +new Date
						this.anonymous[id] = {
							id,
							a: m.sender,
							b: '',
							state: 'WAITING',
							check: function(who = '') {
								return [this.a, this.b].includes(who)
							},
							other: function(who = '') {
								return who === this.a ? this.b : who === this.b ? this.a : ''
							},
						}
						m.reply(`*Mencari teman 🔎*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'next':
			case 'lanjut': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let isRoom = Object.values(this.anonymous).find(room => room.check(m.sender))
					if (!isRoom) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"start\",\"id\":\"${prefix}start\"}`
						}]
						return vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nKamu belum mulai chat`, bots.footer, m);
					}
					let other = isRoom.other(m.sender)
					if (other) await vreden.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
					delete this.anonymous[isRoom.id]
					let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
					if (room) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"skip\",\"id\":\"${prefix}skip\"}`
						}, {
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"stop\",\"id\":\"${prefix}stop\"}`
						}]
						vreden.sendButtonText(room.a, button, `*</> ANONYMOUS CHAT </>*\n\nBerhasil menemukan partner`, bots.footer, m);
						room.b = m.sender
						room.state = 'CHATTING'
						vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nBerhasil menemukan partner`, bots.footer, m);
					} else {
						let id = +new Date
						this.anonymous[id] = {
							id,
							a: m.sender,
							b: '',
							state: 'WAITING',
							check: function(who = '') {
								return [this.a, this.b].includes(who)
							},
							other: function(who = '') {
								return who === this.a ? this.b : who === this.b ? this.a : ''
							},
						}
						m.reply(`*Mencari teman 🔎*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'sendprofile':
			case 'sendprofil': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let isRoom = Object.values(this.anonymous).find(room => room.check(m.sender))
					if (!isRoom) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"start\",\"id\":\"${prefix}start\"}`
						}]
						return vreden.sendButtonText(m.chat, button, `*</> ANONYMOUS CHAT </>*\n\nKamu belum mulai chat`, bots.footer, m);
					} else {
						let mous = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
						var partnerJID = mous.other(m.sender)
						var res = await vreden.sendContact(partnerJID, [m.sender.split("@")[0]])
						vreden.sendMessage(m.chat, {
							text: '✅ Berhasil mengirim profil ke teman chat anda!'
						}, {
							quoted: m
						})
						vreden.sendMessage(partnerJID, {
							text: '👨👩 Teman chat kamu memberikan kontak profil nya!'
						}, {
							quoted: res
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case'menfess': {
				this.menfes = this.menfes ? this.menfes : {}
			 let roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (roof) return m.warning("Kamu masih berada dalam sesi menfess")
				if (m.isGroup) return m.warning('Fitur Khusus Di private chat!')
				if (!text) return m.warning(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${m.pushName}|628xxx|Menfes nih\n`)
				if (!text.includes('|')) return m.warning(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${m.pushName}|6292818802718|Menfes nih\n`)
				let [namaNya, nomorNya, pesanNya] = text.split`|`
				if (nomorNya.startsWith('0')) return m.warning(`Awali dengan 62\n\nContoh :\n${prefix + command} ${m.pushName}|628xxx|Menfes nih\n`)
				if (isNaN(nomorNya)) return m.warning(`Nomor Salah, Perhatikan Pemakaian\n\nContoh :\n${prefix + command} ${m.pushName}|628xxx|Menfes nih\n`)
				var yoi = `*Hi ada menfess nih buat kamu*\n\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan klik *balasmenfess* -- Untuk menerima menfess/confess\nSilahkan klik *tolakmenfess* -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
				let id = m.sender
				this.menfes[id] = {
					id,
					a: m.sender,
					b: nomorNya + "@s.whatsapp.net",
					state: 'WAITING'
				}
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Tolak Menfess\",\"id\":\".tolakmenfes\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Balas Menfess\",\"id\":\".balasmenfes\"}`
				}]
				vreden.sendButtonText(nomorNya + '@s.whatsapp.net', button, yoi, bots.footer, fhalo)
				m.reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
			}
			break

case'balasmenfess':
			case 'balasmenfes': {
		let	roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada sesi menfess")
				find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find.b = m.sender
				find.state = 'CHATTING'
				this.menfes[find.id] = {
					...find
				}
				await vreden.sendMessage(other, {
					text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`,
					mentions: [m.sender]
				})
				vreden.sendMessage(m.chat, {
					text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
				})
			}
			break

case'tolakmenfess':
			case 'tolakmenfes': {
			let	roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada sesi menfess")
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
				vreden.sendMessage(other, {
					text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`,
					mentions: [m.sender]
				})
				m.reply("Menfess berhasil di tolak 🤚")
				delete this.menfes[roof.id]
			}
			break
			case 'stopconfess':
			case 'stopmenfess': {
				find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (!find) return m.warning("Belum ada sesi menfess")
				const to = find.a == m.sender ? find.b : find.a
				vreden.sendMessage(to, {
					text: `_Teman chat telah menghentikan menfess ini_`,
					mentions: [m.sender]
				})
				await m.reply("menfess di stop")
				delete this.menfes[find.id]
			}
			break
			
			//━━━━━━━━━━━━━━━[ CASE COMMAND STORE ]━━━━━━━━━━━━━━━━━//
			case 'jpm': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text.includes("|")) return m.warning(`*Masukan input yang benar!*\n\nTutorial:\n${prefix + command} <text|jeda>\n\nContoh:\n${prefix + command} sell nokos|5000\n\n*Catatan*:\ngunakan foto jika ingin\nsekalian JPM dengan image.\n1 detik delay = 1000 jeda`)
				try {
					let getGroups = await vreden.groupFetchAllParticipating()
					let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
					let anu = groups.map((v) => v.id)
					let detik = `${text.split('|')[1] / 1000}`
					m.reply(`*</> JPM NOTAG START </>*\n\nTotal: ${anu.length} Group\nSelesai: ${anu.length * detik} detik`)
					let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${links.channel}\",\"merchant_url\":\"${links.channel}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${links.website}\",\"merchant_url\":\"${links.website}\"}`
						}
					]
					for (let id of anu) {
						await sleep(text.split('|')[1])
						if (/image/.test(mime)) {
							media = await quoted.download()
							vreden.sendButtonImage(id, media, button, `${text.split('|')[0]}\n`, bots.footer, fhalo)
						} else {
							vreden.sendButtonText(id, button, `${text.split('|')[0]}\n`, bots.footer, fhalo)
						}
					}
					m.reply("*[ ✓ ]* JPM Tanpa tag terkirim")
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'jpm2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text.includes("|")) return m.warning(`*Masukan input yang benar!*\n\nTutorial:\n${prefix + command} <text|jeda>\n\nContoh:\n${prefix + command} sell nokos|5000\n\n*Catatan*:\ngunakan foto jika ingin\nsekalian JPM dengan image.\n1 detik delay = 1000 jeda`)
				try {
					let getGroups = await vreden.groupFetchAllParticipating()
					let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
					let anu = groups.map((v) => v.id)
					let detik = `${text.split('|')[1] / 1000}`
					m.reply(`*</> JPM TAG START </>*\n\nTotal: ${anu.length} Group\nSelesai: ${anu.length * detik} detik`)
					let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Channel Links\",\"url\":\"${links.channel}\",\"merchant_url\":\"${links.channel}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Website Links\",\"url\":\"${links.website}\",\"merchant_url\":\"${links.website}\"}`
						}
					]
					for (let id of anu) {
						await sleep(text.split('|')[1])
						let jpdata = await vreden.groupMetadata(id)
						let participanh = await jpdata.participants
						if (/image/.test(mime)) {
							media = await quoted.download()
							const uploadFile = {
								upload: vreden.waUploadToServer
							};
							var imageMessage = await prepareWAMessageMedia({
									image: media,
								},
								uploadFile,
							);
							let msg = generateWAMessageFromContent(id, {
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: participanh.map(a => a.id),
										forwardingScore: 9999999,
										isForwarded: true,
										forwardedNewsletterMessageInfo: {
											newsletterJid: bots.idsaluran,
											newsletterName: `${bots.namasaluran}`,
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: vreden.decodeJid(vreden.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: text.split('|')[0]
									}),
									footer: proto.Message.InteractiveMessage.footer.create({
										text: bots.footer
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: "",
										imageMessage: imageMessage.imageMessage,
										hasMediaAttachment: true
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: button,
									})
								})
							}, {
								quoted: fhalo
							})

							vreden.relayMessage(id, msg.message, {
								messageId: msg.key.id
							})
						} else {
							let msg = generateWAMessageFromContent(id, {
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: participanh.map(a => a.id),
										forwardingScore: 9999999,
										isForwarded: true,
										forwardedNewsletterMessageInfo: {
											newsletterJid: bots.idsaluran,
											newsletterName: `${bots.namasaluran}`,
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: vreden.decodeJid(vreden.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: text.split('|')[0]
									}),
									footer: proto.Message.InteractiveMessage.footer.create({
										text: bots.footer
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: "",
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: button,
									})
								})
							}, {
								quoted: fhalo
							})

							await vreden.relayMessage(id, msg.message, {
								messageId: msg.key.id
							})
						}
					}
					m.reply("*[ ✓ ]* JPM Hidetag terkirim")
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'otp':
			case 'nokos': {
			switch (args[0]) {
			    case 'balance': {
			    try {
			    let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=${args[0]}`)
			    if (!response.status) return m.reply(response.data.msg)
			    let country = []
			    let teks = `*OTP BALANCE ⚡*

*Status* : true
*Your Coins* : ${isCreator ? "unlimited" : usersdb[m.sender].coins}
*Saldo OTP* : Rp ${ribuan(response.balance)}
*Tags* : ${args[0]}
`
let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"Country List 🛒\",\"id\":\"${prefix + command} country\"}`
			}]
			        vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
			    } catch (error) {
			        await m.errorReport(util.format(error), command)
			    }
			    }
			    break
			    case 'country': {
			    try {
			    let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=services`)
			    if (!response.status) return m.reply(response.data.msg)
			    const countries = response.data.map(item => item.country);
			    const uniqueCountries = [...new Set(countries)];
			    let teks = `*OTP COUNTRY ⚡*

*Action* : get_country
*Tags* : country
*Length* : ${uniqueCountries.length} negara
`
			    let cardcount = []
			    for (let i of uniqueCountries) {
			    cardcount.push({
			        header: `Negara : ${i}`,
    			    title: `Get services country ${i}`,
    			    id: `${prefix + command} services ${i}`
			    })
			    }
			    let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n\"title\": \"Country Select 🛍️\",\n\"sections\": [\n{\n\"title\": \"Pilih country untuk otp dan operators\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(cardcount)}\n}\n]\n}`
					}]
					vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
			    } catch (error) {
			        await m.errorReport(util.format(error), command)
			    }
			    }
			    break
			    case 'services': {
                let country = args[1] ? args[1] : "indonesia";
                try {
                let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=${args[0]}&country=${country}`);
                if (!response.status) return m.reply(response.data.msg);
                // pake function cmd text 
                response.data.sort((a, b) => a.name.localeCompare(b.name));

                let teks = `*OTP SERVICES ⚡*

*Action* : services
*Negara* : ${country}
*Length* : ${response.data.length} apk
*Tags* : services
`;

                let cardcount = [];
                for (let i of response.data) {
                    cardcount.push({
                        header: `Name : ${i.name}`,
                        title: `Price : Rp ${ribuan(i.price)}`,
                        description: `Stock : ${i.tersedia}\nStatus : ${i.status == 1 ? "Ready" : i.status}`,
                        id: `${prefix + command} eaa4ee777d5839f97f4c2 ${i.id} ${country} ${i.price}`
                    });
                }
                let button = [{
                    "name": "single_select",
                    "buttonParamsJson": `{\n\"title\": \"Service Select 🛍️\",\n\"sections\": [\n{\n\"title\": \"Pilih service untuk otp dan operators\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(cardcount)}\n}\n]\n}`
                }];
        
                    vreden.sendButtonText(m.chat, button, teks, bots.footer, m);
                } catch (error) {
                    await m.errorReport(util.format(error), command);
                }
                }
                break;
			    case 'eaa4ee777d5839f97f4c2': {
			    if (!args[1]) return m.reply("*Masukan ID services!*")
			    if (!args[2]) return m.reply("*Masukan country!*")
			    if (!args[3]) return m.reply("*Session tidak ada, harap mulai dari awal!*")
			    if (isNaN(args[3])) return m.reply("*Session tidak ada, harap mulai dari awal!*")
			    try {
			    if (!isCreator) {
			        let price = Number(args[3]) + Number(1000)
			        if (usersdb[m.sender].coins < price) return m.reply(`*BUY NOKOS ⚡*

*Action* : order
*Price* : Rp ${ribuan(args[3])}
*Fee Coins* : 1000
*Total* : ${price} Coins
*Status* : gagal
*Message* :
Coins tidak cukup
`)
			        usersdb[m.sender].coins -= price
			    }
			    let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=order&service=${args[1]}&operator=any&country=${args[2]}`)
			    if (!response.status) return m.reply(response.data.msg)
			    let teks = `*BUY NOKOS ⚡*

*Action* : order
*ID* : ${response.data.id}
*Number* : ${response.data.number}
*Operator* : ${response.data.operator}
*Service* : ${response.data.service_name} (${response.data.service_id})
*Price* : Rp ${ribuan(args[3])}
*Status* : Pending

*NOTE* :
klik Ready untuk penerimaan OTP
klik Cancel untuk pembatalan OTP
`
			    let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "Status Order ✨",
  "sections": [
    {
      "title": "klik opsi untuk management pesanan",
      "highlight_label": "Bot WhatsApp",
      "rows": [
        {
          "header": "Ready OTP",
          "title": "Beritahu bahwa akan kirim OTP",
          "id": "${prefix + command} set_status ${response.data.id} 1"
        },
        {
          "header": "Cancel Nokos",
          "title": "Terjadi masalah? batalkan pesanan",
          "id": "${prefix + command} set_status ${response.data.id} 2"
        }
      ]
    }
  ]
}`
				}]
					vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
			    } catch (error) {
			        await m.errorReport(util.format(error), command)
			    }
			    }
			    break
			    case 'set_status': {
			    if (!args[1]) return m.reply("*Masukan ID orderan!*")
			    if (!args[2]) return m.reply("*Masukan ID status!*")
			    try {
			    let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=${args[0]}&id=${args[1]}&status=${args[2]}`)
			    console.log(response)
			    if (response.status == "false") return m.reply(response)
			    let teks = `*STATUS ORDER ⚡*

*Action* : status
*ID* : ${response.data.id}
*Number* : ${response.data.number}
*Service* : ${response.data.service_name}
*Message* :
${response.msg}

`
let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "Status Order ✨",
  "sections": [
    {
      "title": "klik opsi untuk management pesanan",
      "highlight_label": "Bot WhatsApp",
      "rows": [
        {
          "header": "Cek Status",
          "title": "Gak ada notif? klik ini",
          "id": "${prefix + command} status ${response.data.id}"
        },
        {
          "header": "Aktive Order",
          "title": "Lihat order yang aktif",
          "id": "${prefix + command} active_order"
        },
        {
          "header": "Resend SMS",
          "title": "Pengiriman ulang OTP",
          "id": "${prefix + command} set_status ${response.data.id} 3"
        },
        {
          "header": "Cancel Nokos",
          "title": "Terjadi masalah? batalkan pesanan",
          "id": "${prefix + command} set_status ${response.data.id} 2"
        }
      ]
    }
  ]
}`
				}]
					vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
				if (args[2] == 1 || args[2] == 3) {
				let sms
				do {
				sms = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=status&id=${args[1]}`)
				} while (sms.data.status !== "Success")
				m.reply(`*Status* : ${sms.data.status}
				*SMS* :
				${sms.data.sms}
				`)
				}
			    } catch (error) {
			        await m.errorReport(util.format(error), command)
			    }
			    }
			    break
			    case 'status': {
			    if (!args[1]) return m.reply("*Masukan ID orderan!*")
			    try {
			    let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=status&id=${args[1]}`)
			    if (!response.status) return m.reply(response.data.msg)
			    m.reply(`*STATUS ORDER ⚡*

ID : ${response.data.id}
Status : ${response.data.status}
Number : ${response.data.number}
SMS : ${response.data.sms}
Service : ${response.data.service_name}
`)
			    } catch (error) {
			        await m.errorReport(util.format(error), command)
			    }
			    }
			    break
			    case 'active_order': {
			    try {
			    let response = await fetchJson(`https://virtusim.com/api/json.php?api_key=${apikey.otpku}&action=active_order`)
			    if (response.status == "false") return m.reply(response.msg)
			    let teks = `*STATUS ORDER ⚡*\n\n`
			    for (let i of response.data) {
			    teks += `ID : ${i.id}
Status : ${i.status}
Number : ${i.number}
OTP : ${i.otp}
SMS : ${i.sms}
Service : ${i.service_name}

`
			    }
			    m.reply(teks)
			    } catch (error) {
			        await m.errorReport(util.format(error), command)
			    }
			    }
			    break
			default:
let teks = `*BUY NOKOS ⚡*

Virtual number OTP
Tersedia beberapa negara
Tersedia berbagai apk

`
let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "Select Opsi ✨",
  "sections": [
    {
      "title": "klik opsi untuk management nokos",
      "highlight_label": "Bot WhatsApp",
      "rows": [
        {
          "header": "Country",
          "title": "Pilih negara nokos",
          "id": "${prefix + command} country"
        },
        {
          "header": "Service",
          "title": "Lihat layanan OTP yang diberikan",
          "id": "${prefix + command} services"
        },
        {
          "header": "Balance",
          "title": "Cek saldo nokos dan koins kamu",
          "id": "${prefix + command} balance"
        },
        {
          "header": "Active Order",
          "title": "Lihat pesanan sebelumnya",
          "id": "${prefix + command} active_order"
        }
      ]
    }
  ]
}`
				}]
					vreden.sendButtonText(m.chat, button, teks, bots.footer, m)
			}
			}
			break
			case 'list':
			case 'store': {
				try {
					const keys = Object.keys(chatsdb[m.chat].liststore);
					if (keys.length === 0) return m.warning(`*List store belum di set!*`)
					let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
					const result = [];
					const list = [];
					keys.forEach(key => {
						result.push({
							key: key
						});
						list.push({
							header: kapital(key) + " 🛒",
							title: "klik to show product",
							id: key
						})
					});
					for (let i of result) {
						teks += `- ${i.key.toUpperCase()}\n`
					}
					teks += `\n_Klik untuk melihat_\n_store produknya_`
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n\"title\": \"Store List🛍️\",\n\"sections\": [\n{\n\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(list)}\n}\n]\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://files.catbox.moe/2vgaag.jpg`
					}, button, teks, bots.footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dellist': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				try {
					const keys = Object.keys(chatsdb[m.chat].liststore);
					if (keys.length === 0) return m.warning(`*List store belum di set!*`)
					if (!text) return m.warning(`*Masukan key nya!*\n\nTutorial:\n${prefix + command} <key>\n\nContoh:\n${prefix + command} halo`)
					if (!chatsdb[m.chat].liststore[text]) return m.warning(`Maaf, untuk key *${text}* belum terdaftar di group ini`)
					delete chatsdb[m.chat].liststore[text]
					m.reply(`Sukses delete list message dengan key *${q}*`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addlist': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return m.warning(`*Penggunaan salah!*\n\nTutorial:\n${prefix + command} <key|response>\n\nContoh:\n${prefix + command} hallo|hallo juga`)
				if (chatsdb[m.chat].liststore[args1]) return m.warning(`List respon dengan key : *${args1}* sudah ada di group ini.`)
				try {
					if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else {
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'updatelist':
			case 'update': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return m.warning(`*Penggunaan salah!*\n\nTutorial:\n${prefix + command} <key|response>\n\nContoh:\n${prefix + command} hallo|hallo juga`)
				if (!chatsdb[m.chat].liststore[args1]) return m.warning(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
				try {
					if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else {
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tambah': {
				if (!text.includes('+')) return m.warning(`*Masukan angka!*\n\nTutorial:\n${prefix + command} <angka> + <angka>\n\nContoh:\n${prefix + command} 6+3`)
				try {
					arg = args.join(' ')
					atas = arg.split('+')[0]
					bawah = arg.split('+')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one + nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kurang': {
				if (!text.includes('-')) return m.warning(`*Masukan angka!*\n\nTutorial:\n${prefix + command} <angka> - <angka>\n\nContoh:\n${prefix + command} 6-3`)
				try {
					arg = args.join(' ')
					atas = arg.split('-')[0]
					bawah = arg.split('-')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one - nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kali': {
				if (!text.includes('*')) return m.warning(`*Masukan angka!*\n\nTutorial:\n${prefix + command} <angka> * <angka>\n\nContoh:\n${prefix + command} 6*3`)
				try {
					arg = args.join(' ')
					atas = arg.split('*')[0]
					bawah = arg.split('*')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one * nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bagi': {
				if (!text.includes('/')) return m.warning(`*Masukan angka!*\n\nTutorial:\n${prefix + command} <angka> / <angka>\n\nContoh:\n${prefix + command} 6/3`)
				try {
					arg = args.join(' ')
					atas = arg.split('/')[0]
					bawah = arg.split('/')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one / nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'setproses':
			case 'setp': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`*Masukan text nya!*\n\nTutorial:\n${prefix + command} <text proses>\n\nContoh:\n${prefix + command} pesanan di proses ya @user\n\nFunction Text:\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
				chatsdb[m.chat].setproses = text
				m.reply(`✅ Done set proses!`)
			}
			break
			case 'delsetproses':
			case 'delsetp': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setproses) return m.warning(`*Set proses tidak ada sebelumnya!*`)
				chatsdb[m.chat].setproses = false
				m.reply(`Sukses delete set proses`)
			}
			break
			case 'setdone': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`*Masukan text nya!*\n\nTutorial:\n${prefix + command} <text done>\n\nContoh:\n${prefix + command} Done @user\n\nFunction Text:\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
				chatsdb[m.chat].setdone = text
				m.reply(`Sukses set done!`)
			}
			break
			case 'delsetdone':
			case 'delsetd': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setdone) return m.warning(`*Set done tidak ada sebelumnya!*`)
				chatsdb[m.chat].setdone = false
				m.reply(`Sukses delete set done`)
			}
			break
			//━━━━━━━━━━━━━━━[ CASE COMMAND QUOTES ]━━━━━━━━━━━━━━━━━//
			//━━━━━━━━━━━━━━━[ CASE COMMAND BUGS ]━━━━━━━━━━━━━━━━━//
			//━━━━━━━━━━━━━━━[ CASE COMMAND BUGS HARD ]━━━━━━━━━━━━━━━━━//
            //━━━━━━━━━━━━━━━[ CASE COMMAND CECAN ]━━━━━━━━━━━━━━━━━//
            //━━━━━━━━━━━━━━━[ case'toghibli':
			case 'jadighibli': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await tmpFiles(media)
					vreden.sendMessage(m.chat, {
						image: {
							url: `https://fgsi1-restapi.hf.space/api/ai/toGhibli?apikey=fgsiapi-ccb4d1c-6d&url=${encodeURIComponent(anu)}`
						},
						caption: 'Done Jadi Ghibli Ayangg >///<'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
 FUN / GABUT ]━━━━━━━━━━━━━━━━━//
            	//━━━━━━━━━━━━━━━[ CASE COMMAND NSFW ]━━━━━━━━━━━━━━━━━//
            	//━━━━━━━━━━━━━━━[ CASE COMMAND RANDOM ]━━━━━━━━━━━━━━━━━//
            	//━━━━━━━━━━━━━━━[ CASE COMMAND ASUPAN ]━━━━━━━━━━━━━━━━━//		
			default:
				//━━━━━━━━━━━━━━━[ TEBAKBOM LOGIC ]━━━━━━━━━━━━━━━━━//
				if (petakbom[m.sender]) {
					let pilih = "🌀",
						bomb = "💣";

					if (!/^(10|[1-9])$/.test(body)) return !0;

					const index = parseInt(body) - 1;
					const currentPetak = petakbom[m.sender].petak[index];

					switch (currentPetak) {
						case 1:
							return !0; // Sudah dipilih
						case 2:
							petakbom[m.sender].board[index] = bomb;
							petakbom[m.sender].pick++;
							petakbom[m.sender].bomb--;
							petakbom[m.sender].nyawa.pop();

							let brd = petakbom[m.sender].board;
							if (petakbom[m.sender].nyawa.length < 1) {
								await vreden.sendMessage(m.chat, {
									text: `*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\n*Terpilih :* ${petakbom[m.sender].pick}\n\n🤣 Padahal gampang`,
									edit: petakbom[m.sender].chat.key
								});
								delete petakbom[m.sender];
							} else {
								await vreden.sendMessage(m.chat, {
									text: `*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa nyawa: ${petakbom[m.sender].nyawa}`,
									edit: petakbom[m.sender].chat.key
								});
							}
							return !0;

						case 0:
							petakbom[m.sender].petak[index] = 1;
							petakbom[m.sender].board[index] = pilih;
							petakbom[m.sender].pick++;
							petakbom[m.sender].lolos--;

							let brdLolos = petakbom[m.sender].board;
							if (petakbom[m.sender].lolos < 1) {
								await vreden.sendMessage(m.chat, {
									text: `*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brdLolos.slice(0, 3).join("")}\n${brdLolos.slice(3, 6).join("")}\n${brdLolos.slice(6).join("")}\n\n*Terpilih :* ${petakbom[m.sender].pick}\n*Sisa nyawa :* ${petakbom[m.sender].nyawa}\n*Bomb :* ${petakbom[m.sender].bomb}\n*Hadiah Saldo :* Rp. 2500`,
									edit: petakbom[m.sender].chat.key
								});
								usersdb[m.sender].saldo += 2500;
								delete petakbom[m.sender];
							} else {
								await vreden.sendMessage(m.chat, {
									text: `*PILIH ANGKA*\n\n${brdLolos.slice(0, 3).join("")}\n${brdLolos.slice(3, 6).join("")}\n${brdLolos.slice(6).join("")}\n\nTerpilih : ${petakbom[m.sender].pick}\nSisa nyawa : ${petakbom[m.sender].nyawa}\nBomb : ${petakbom[m.sender].bomb}`,
									edit: petakbom[m.sender].chat.key
								});
							}
							break;
					}
				}

				//━━━━━━━━━━━━━━━[ SUIT LOGIC ]━━━━━━━━━━━━━━━━━//
				this.suit = this.suit || {};
				let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender));

				if (roof) {
					let win = '';
					let tie = false;

					if (m.sender === roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && m.isGroup && roof.status === 'wait') {
						if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
							m.sendMentions(`@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`);
							delete this.suit[roof.id];
							return true;
						}

						roof.status = 'play';
						roof.asal = m.chat;
						clearTimeout(roof.waktu);

						m.sendMentions(`Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing. Klik https://wa.me/${botNumber.split`@`[0]}`);

						if (!roof.pilih) {
							vreden.sendMessage(roof.p, {
								text: `Silahkan pilih \n\nBatu\nKertas\nGunting`
							});
						}
						if (!roof.pilih2) {
							vreden.sendMessage(roof.p2, {
								text: `Silahkan pilih \n\nBatu\nKertas\nGunting`
							});
						}

						roof.waktu_milih = setTimeout(() => {
							if (!roof.pilih && !roof.pilih2) {
								m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`);
							} else if (!roof.pilih || !roof.pilih2) {
								win = !roof.pilih ? roof.p2 : roof.p;
								m.sendMentions(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`);
							}
							delete this.suit[roof.id];
						}, roof.timeout);
					}

					let jwb = m.sender === roof.p;
					let jwb2 = m.sender === roof.p2;
					let reg = /^(gunting|batu|kertas)/i;

					if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
						roof.pilih = reg.exec(budy.toLowerCase())[0];
						roof.text = budy;
						m.reply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
						if (!roof.pilih2) {
							vreden.sendMessage(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0);
						}
					}

					if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
						roof.pilih2 = reg.exec(budy.toLowerCase())[0];
						roof.text2 = budy;
						m.reply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`);
						if (!roof.pilih) {
							vreden.sendMessage(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0);
						}
					}

					if (roof.pilih && roof.pilih2) {
						clearTimeout(roof.waktu_milih);
						let stage = roof.pilih;
						let stage2 = roof.pilih2;

						if (/batu/i.test(stage) && /gunting/i.test(stage2)) win = roof.p;
						else if (/batu/i.test(stage) && /kertas/i.test(stage2)) win = roof.p2;
						else if (/gunting/i.test(stage) && /kertas/i.test(stage2)) win = roof.p;
						else if (/gunting/i.test(stage) && /batu/i.test(stage2)) win = roof.p2;
						else if (/kertas/i.test(stage) && /batu/i.test(stage2)) win = roof.p;
						else if (/kertas/i.test(stage) && /gunting/i.test(stage2)) win = roof.p2;
						else if (stage === stage2) tie = true;

						vreden.sendMessage(roof.asal, {
							text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p === win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 === win ? ` Menang \n` : ` Kalah \n`}`.trim()
						}, m, {
							mentions: [roof.p, roof.p2]
						});

						delete this.suit[roof.id];
					}
				}

				//━━━━━━━━━━━━━━━[ TICTA TOE LOGIC ]━━━━━━━━━━━━━━━━━//
				this.game = this.game || {};

				let room = Object.values(this.game).find(room =>
					room.id &&
					room.game &&
					room.state &&
					room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) &&
					room.state === 'PLAYING'
				);

				if (room) {
					let ok;
					let isWin = false;
					let isTie = false;
					let isSurrender = false;

					if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return;

					isSurrender = !/^[1-9]$/.test(budy);

					if (m.sender !== room.game.currentTurn) {
						if (!isSurrender) return true;
					}

					if (!isSurrender && (ok = room.game.turn(m.sender === room.game.playerO, parseInt(budy) - 1)) < 1) {
						m.reply({
							'-3': 'Game telah berakhir',
							'-2': 'Invalid',
							'-1': 'Posisi Invalid',
							0: 'Posisi Invalid',
						} [ok]);
						return true;
					}

					if (m.sender === room.game.winner) {
						isWin = true;
					} else if (room.game.board === 511) {
						isTie = true;
					}

					let arr = room.game.render().map(v => {
						return {
							X: '❌',
							O: '⭕',
							1: '1️⃣',
							2: '2️⃣',
							3: '3️⃣',
							4: '4️⃣',
							5: '5️⃣',
							6: '6️⃣',
							7: '7️⃣',
							8: '8️⃣',
							9: '9️⃣',
						} [v];
					});

					if (isSurrender) {
						room.game._currentTurn = m.sender === room.game.playerX;
						isWin = true;
					}

					let winner = isSurrender ? room.game.currentTurn : room.game.winner;
					let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} Selamat Untukmu🎊🎊!` : isTie ? `Sesi Game Telah Berakhir` : `Ketik *nyerah* untuk menyerah dan mengakui kekalahan`}
`;

					if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat) {
						room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat;
					}

					if (room.x !== room.o) {
						await vreden.sendText(room.x, str, m, {
							mentions: parseMention(str)
						});
					}

					await vreden.sendText(room.o, str, m, {
						mentions: parseMention(str)
					});

					if (isTie || isWin) {
						delete this.game[room.id];
					}
				}

				//━━━━━━━━━━━━━━━[ CASINO LOGIC ]━━━━━━━━━━━━━━━━━//
				if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
					var casinoo = setCasino(`${m.chat}`);

					if (m.sender === `${casinoo.Y}`) {
						if (body.toLowerCase() === 'n') {
							vreden.sendMessage(m.chat, {
								text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`,
								mentions: [casinoo.Y]
							}, {
								quoted: m
							});
							return deleteCasino(m.chat);
						}

						if (body.toLowerCase() === 'y') {
							var angka1 = await randomNomor(10, 20);
							var angka2 = await randomNomor(10, 20);
							let starGame;

							if (angka1 > angka2) {
								starGame = `🎰 Casino Game 💰\n\n• @${casinoo.Z} --> ${angka1} 👑\n• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈\n\nPemenangnya adalah [ @${casinoo.Z} ]\nMendapatkan: Rp ${Number(casinoo.nominal)}`;
								usersdb[`${casinoo.Z}@s.whatsapp.net`].saldo += Number(casinoo.nominal);
								usersdb[`${casinoo.Y}`].saldo -= Number(casinoo.nominal);
							} else if (angka1 < angka2) {
								starGame = `🎰 Casino Game 💰\n\n• @${casinoo.Z} --> ${angka1} 🥈\n• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑\n\nPemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]\nMendapatkan: Rp ${Number(casinoo.nominal)}`;
								usersdb[`${casinoo.Y}`].saldo += Number(casinoo.nominal);
								usersdb[`${casinoo.Z}@s.whatsapp.net`].saldo -= Number(casinoo.nominal);
							} else {
								starGame = `🎰 Casino Game 💰\n\n• @${casinoo.Z} --> ${angka1} 📍\n• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍\n\nGames Draw, Tidak Ada Pemenang`;
							}

							vreden.sendMessage(m.chat, {
								text: starGame,
								mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]
							}, {
								quoted: m
							});

							deleteCasino(m.chat);
						}
					}
				}

				//━━━━━━━━━━━━━━━[ FAMILY100 LOGIC ]━━━━━━━━━━━━━━━━━//
				if (`family100${m.chat}` in _family100 && !isCmd) {
					kuis = true;
					let room = _family100[`family100${m.chat}`];
					let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
					let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy);

					if (!isSurender) {
						let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks);

						if (index === -1 || room.terjawab[index]) return true; // Menghindari indeks yang tidak valid
						room.terjawab[index] = m.sender;
					}

					let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;
					let caption = `
Jawablah Pertanyaan Berikut:\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa jawaban terdapat spasi)` : ''}
${isWin ? `Semua jawaban terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim();

					vreden.sendTextWithMentions(m.chat, caption, m)
						.then(mes => {
							room.pesan = mes; // Memperbaiki penamaan variabel
						}).catch(_ => _);

					if (isWin || isSurender) delete _family100[`family100${m.chat}`];
				}

				//━━━━━━━━━━━━━━━[ TEBAK GAME LOGIC ]━━━━━━━━━━━━━━━━━//
				if (tebakgame[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakgame[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakgame[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakgame[m.chat][3])
							delete tebakgame[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakhero[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakhero[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakhero[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Hero", tebakhero[m.chat][2], `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakhero[m.chat][3])
							delete tebakhero[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakff[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakff[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakff[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Free Fire", tebakff[m.chat][2], `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakff[m.chat][3])
							delete tebakff[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
						jawaban = json.title.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakkabupaten[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Kabupaten", tebakkabupaten[m.chat][2], `\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakkabupaten[m.chat][3])
							delete tebakkabupaten[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
						jawaban = json.name.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakjkt48[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakjkt48[m.chat][3])
							delete tebakjkt48[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakhewan[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakhewan[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
						jawaban = json.title.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakhewan[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Hewan", tebakhewan[m.chat][2], `\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakhewan[m.chat][3])
							delete tebakhewan[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakml[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakml[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
						jawaban = json.title.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakml[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Sound ML", tebakml[m.chat][2], `\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakml[m.chat][3])
							delete tebakml[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakchara[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakchara[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
						jawaban = json.name.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakchara[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Anime", tebakchara[m.chat][2], `\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakchara[m.chat][3])
							delete tebakchara[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebaklogo[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebaklogo[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebaklogo[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Logo", tebaklogo[m.chat][2], `\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮`)
							clearTimeout(tebaklogo[m.chat][3])
							delete tebaklogo[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakaplikasi[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Aplikasi", tebakaplikasi[m.chat][2], `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakaplikasi[m.chat][3])
							delete tebakaplikasi[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakgambar[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakgambar[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakgambar[m.chat][3])
							delete tebakgambar[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakkata[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkata[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakkata[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakkata[m.chat][3])
							delete tebakkata[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (asahotak[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == asahotak[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += asahotak[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
							clearTimeout(asahotak[m.chat][3])
							delete asahotak[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += lengkapikalimat[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
							clearTimeout(lengkapikalimat[m.chat][3])
							delete lengkapikalimat[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakbendera[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
						jawaban = json.name.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakbendera[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakbendera[m.chat][3])
							delete tebakbendera[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (caklontong[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == caklontong[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += caklontong[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
							clearTimeout(caklontong[m.chat][3])
							delete caklontong[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (susunkata[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == susunkata[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += susunkata[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
							clearTimeout(susunkata[m.chat][3])
							delete susunkata[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakkalimat[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakkalimat[m.chat][3])
							delete tebakkalimat[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (siapaaku[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == siapaaku[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += siapaaku[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
							clearTimeout(siapaaku[m.chat][3])
							delete siapaaku[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tekateki[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tekateki[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tekateki[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
							clearTimeout(tekateki[m.chat][3])
							delete tekateki[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebakkimia[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
						jawaban = json.unsur.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebakkimia[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
							clearTimeout(tebakkimia[m.chat][3])
							delete tebakkimia[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebaklirik[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebaklirik[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
							clearTimeout(tebaklirik[m.chat][3])
							delete tebaklirik[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}
				if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (budy.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += tebaktebakan[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
							clearTimeout(tebaktebakan[m.chat][3])
							delete tebaktebakan[m.chat]
						} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
							m.reply(`Ayokk dikit lagii 😖`)
						else vreden.sendMessage(m.chat, {
							react: {
								text: "❌",
								key: m.key,
							}
						})
					}
				}

				if (kuisioner[m.chat] && !isCmd) {
					let jwbn = ["A", "B", "C", "a", "b", "c"]
					if (jwbn.includes(body)) {
						let json = JSON.parse(JSON.stringify(kuisioner[m.chat][1]))
						jawaban = json.correctAnswer.toLowerCase().trim()
						if (body.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += kuisioner[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Quizioner", kuisioner[m.chat][2], `\n\nKirim perintah .kuisioner\nuntuk bermain lagi 🎮`)
							clearTimeout(kuisioner[m.chat][3])
							delete kuisioner[m.chat]
						} else {
							clearTimeout(kuisioner[m.chat][3])
							delete kuisioner[m.chat]
							let rk = await randomNomor(40)
							usersdb[m.sender].rank -= rk
							return vreden.sendMessage(m.chat, {
								text: `_Jawaban Salah_😏\n\n*- ${rk} Points Rank*`
							}, {
								quoted: fchannel
							})
						}
					}
				}

				if (mathgame[m.chat] && !isCmd) {
					let jwbn = ["A", "B", "C", "a", "b", "c"]
					if (jwbn.includes(body)) {
						let json = mathgame[m.chat][1]
						jawaban = json.toLowerCase().trim()
						if (body.toLowerCase() == jawaban) {
							usersdb[m.sender].saldo += mathgame[m.chat][2]
							usersdb[m.sender].rank += await randomNomor(40)
							JawabanBenar("Math Game", mathgame[m.chat][2], `\n\nKirim perintah .math\nuntuk bermain lagi 🎮`)
							clearTimeout(mathgame[m.chat][3])
							delete mathgame[m.chat]
						} else {
							clearTimeout(mathgame[m.chat][3])
							delete mathgame[m.chat]
							let rk = await randomNomor(40)
							usersdb[m.sender].rank -= rk
							return vreden.sendMessage(m.chat, {
								text: `_Jawaban Salah_😏\n\n*- ${rk} Points Rank*`
							}, {
								quoted: fchannel
							})
						}
					}
				}
				//━━━━━━━━━━━━━━━[ RPG LOGIC ]━━━━━━━━━━━━━━━━━//
				if (pirates[m.sender] && !isCmd) {
					if (body.toLowerCase() == "serang") {
						if (pirates[m.sender][1] === "kargo") poink = 40
						if (pirates[m.sender][1] === "pesiar") poink = 60
						if (pirates[m.sender][1] === "nelayan") poink = 20
						if (pirates[m.sender][1] === "perang") poink = 80
						if (pirates[m.sender][1] === "tanker") poink = 40
						if (pirates[m.sender][1] === "kontainer") poink = 40
						if (pirates[m.sender][1] === "feri") poink = 30
						let poinkru = pirates[m.sender][2] / 2
						let point = poink + poinkru
						let pon = poink / 2
						let duit = `${point}00000`
						let cekk = 60
						if (point < cekk) {
							chatEdit(["Memulai Penyerangan!🏴‍☠️", "Kapten Kapal Berhasil Disandera!", `Pembajakan Berhasil!\nMengambil Alih Kapal!🏴‍☠️`])
							rpgdb[m.sender].darahkapal -= 20
							rpgdb[m.sender].kayu += poink
							rpgdb[m.sender].kain += pon
							usersdb[m.sender].saldo += parseInt(duit)
							await sleep(5000)
							let teks = `*🏴‍☠️DESTINASI SAMPAI🏴‍☠️*\n\n📍 ${pirates[m.sender][3]}\n*Reward Perjalanan:*\n- Uang: ${duit} (Tebusan)\n- Kayu: ${poink} (Rombak Kapal)\n- Kain: ${pon} (Rombak Layar)\n\n`
							await vreden.sendMessage(m.chat, {
								text: teks,
								contextInfo: {
									mentionedJid: [m.sender],
									forwardingScore: 9999,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: bots.idsaluran,
										serverMessageId: null,
										newsletterName: `${bots.namasaluran}`
									},
									externalAdReply: {
										title: "PIRATE ADVENTURE",
										body: 'Sail across the ocean and go on adventures',
										thumbnailUrl: "https://telegra.ph/file/929e089ce3e77a38c398b.jpg",
										sourceUrl: "-",
										mediaType: 1,
										renderLargerThumbnail: true
									}
								}
							}, {
								quoted: m
							})
						} else {
							m.sendForward('Kamu Kalah Battle, Kapal Kamu Mengalami Kerusakan Parah!')
							rpgdb[m.sender].darahkapal = 0
							await sleep(5000)
							m.reply('Kamu Telah Sampai Ke Tujuan, Kamu Tidak Memperoleh Reward Karena Kalah Battle')
						}
						clearTimeout(pirates[m.sender][4])
						delete pirates[m.sender]
					}
				}

				//━━━━━━━━━━━━━━━[ RPG LEVEL UP ]━━━━━━━━━━━━━━━━━//
				if (usersdb[m.sender].exp > 2500) {
					try {
						avatar = await vreden.profilePictureUrl(m.sender, "image")
					} catch {
						avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
					}
					usersdb[m.sender].exp = 0
					usersdb[m.sender].level += 1
					await sleep(1000)
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${owner.nomor.split("@")[0]}&text=Halo👋\"}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://api.vreden.web.id/api/levelup?background=https://pomf2.lain.la/f/6mtxnwrm.jpg&name=${encodeURIComponent(usernomor)}&level=${usersdb[m.sender].level - 1}&levelup=${usersdb[m.sender].level}&avatar=${encodeURIComponent(avatar)}`
					}, button, `*🎉 C O N G R A T S 🎉*\n\n*${usersdb[m.sender].level - 1}* *➔* *${usersdb[m.sender].level}*\n\n• 🧬Level Sebelumnya : ${usersdb[m.sender].level - 1}\n• 🧬Level Baru : ${usersdb[m.sender].level}\n• Pada Jam : ${new Date().toLocaleString("id-ID")}\n\n\n*Note:*\n_Semakin sering berinteraksi_\n_dengan bot semakin_\n_tinggi level kamu_`, bots.footer, m)
				}

				if (usersdb[m.sender].rank < 1) {
					usersdb[m.sender].rank = 0
				}

				//━━━━━━━━━━━━━━━[ AUTO DOWNLOADER ]━━━━━━━━━━━━━━━━━//
				if (chatsdb[m.chat].autodl && !isCmd) {
					const igPattern = /(https?:\/\/(?:www\.)?instagram\.[a-z\.]{2,6}\/[\w\-\.]+(\/[^\s]*)?)/g;
					const tikPattern = /(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/g;
					const ytPattern = /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/;

					const igLinks = (budy.trim()).match(igPattern);
					const tikLinks = (budy.trim()).match(tikPattern);
					const ytLinks = (budy.trim()).match(ytPattern);

					if (ytLinks) {
						m.reply(`*「 YT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`);
						YouTubeMp3(ytLinks[0])
					}

					if (tikLinks && !chatsdb[m.chat].antilinktt) {
						m.reply(`*「 TT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`);
						TikTokMp4(tikLinks[0]);
					}

					if (igLinks) {
						m.reply(`*「 IG LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`);
						InstagramMp4(igLinks[0]);
					}
				}

				//━━━━━━━━━━━━━━━[ GET MEDIA DATABASE ]━━━━━━━━━━━━━━━━━//
				for (let stik of stickerMsg) {
					if (budy === stik) {
						let result = fs.readFileSync(`./database/file/${stik}.webp`)
						await vreden.imgToSticker(m.chat, result, m, {
							packname: `Made By `,
							author: `V.R.D Official `
						})
					}
				}
				for (let audio of audioMsg) {
					if (budy === audio) {
						let result = fs.readFileSync(`./database/file/${audio}.mp3`)
						vreden.sendAudio(m.chat, result, m, true)
					}
				}
				for (let img of imageMsg) {
					if (budy === img) {
						let result = fs.readFileSync(`./database/file/${img}.jpg`)
						vreden.sendImage(m.chat, result, '', m)
					}
				}
				for (let video of videoMsg) {
					if (budy === video) {
						let result = fs.readFileSync(`./database/file/${video}.mp4`)
						vreden.sendVideo(m.chat, result, false, "", m)
					}
				}

				//━━━━━━━━━━━━━━━[ STORE MESSAGE ]━━━━━━━━━━━━━━━━━//
				if (m.isGroup && chatsdb[m.chat].liststore[body]) {
					let teks = chatsdb[m.chat].liststore[body].response
					if (chatsdb[m.chat].liststore[body].img) {
						vreden.sendMessage(m.chat, {
							image: {
								url: chatsdb[m.chat].liststore[body].img
							},
							caption: teks
						}, {
							quoted: m
						})
					} else if (chatsdb[m.chat].liststore[body].video) {
						vreden.sendMessage(m.chat, {
							video: {
								url: chatsdb[m.chat].liststore[body].video
							},
							caption: teks
						}, {
							quoted: m
						})
					} else {
						const contentText = {
							text: teks,
							contextInfo: {
								mentionedJid: vreden.ments(teks),
								forwardingScore: 9999999,
								isForwarded: true,
								externalAdReply: {
							//		showAdAttribution: true,
									containsAutoReply: true,
									title: `Store List 🛍️`,
									body: bots.footer,
									previewType: "PHOTO",
									thumbnailUrl: `https://files.catbox.moe/efmk6g.jpg`,
									sourceUrl: links.website
								}
							}
						};
						vreden.sendMessage(m.chat, contentText, {
							quoted: m,
						});
					}
				}

				//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//
				if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
					let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
					let {
						text,
						mentionedJid
					} = hash
					let messages = await generateWAMessage(m.chat, {
						text: text,
						mentions: mentionedJid
					}, {
						userJid: vreden.user.id,
						quoted: m.quoted && m.quoted.fakeObj
					})
					messages.key.fromMe = areJidsSameUser(m.sender, vreden.user.id)
					messages.key.id = m.key.id
					messages.pushName = m.pushName
					if (m.isGroup) messages.participant = m.sender
					let msg = {
						...chatUpdate,
						messages: [proto.WebMessageInfo.fromObject(messages)],
						type: 'append'
					}
					vreden.ev.emit('messages.upsert', msg)
				}

				//━━━━━━━━━━━━━━━[ AFK FUNCTION ]━━━━━━━━━━━━━━━━━//
				if (m.isGroup) {
					let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
					for (let jid of mentionUser) {
						let user = usersdb[jid];
						if (!user) continue;

						let afkTime = user.afkTime;
						if (!afkTime || afkTime < 0) continue;

						let reason = user.afkReason || '';
						m.reply(`
Jangan tag, dia sedang AFK

*Alasan*: ${reason ? reason : 'tanpa alasan'}
*Selama*: ${clockString(Date.now() - afkTime)}
`.trim());
					}

					let currentUser = usersdb[m.sender];
					if (currentUser.afkTime > -1) {
						vreden.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah berhenti AFK

*Alasan*: ${currentUser.afkReason ? currentUser.afkReason : 'gak ada'}
*Selama*: ${clockString(Date.now() - currentUser.afkTime)}`);
						currentUser.afkTime = -1;
						currentUser.afkReason = '';
					}
				}

				//━━━━━━━━━━━━━━━[ BUDY FUNCTION ]━━━━━━━━━━━━━━━━━//
				if (budy && !m.isNewsletter) {
					console.log('\x1b[1;31m~\x1b[1;37m>', `[\x1b[1;32m ${vreden.user.name} \x1b[1;37m]`, time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(m.pushName), 'in', chalk.green(groupName ? groupName : 'Private Chat'), 'args :', chalk.green(text.length));

					//First Chat
					if (!m.isGroup && isCmd && !m.key.fromMe) {
						usersdb[m.sender].pctime = new Date().getTime()
					}
					if (!m.isGroup && !isCmd && !m.key.fromMe) {
						const lastInteraction = new Date().getTime() - usersdb[m.sender].pctime;
						if (lastInteraction > 21600000) {
							usersdb[m.sender].pctime = new Date().getTime();
							let button = [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Menu\",\"id\":\".menu\"}`
								},
								{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Ping\",\"id\":\".ping\"}`
								}
							];
							vreden.sendButtonText(m.chat, button, `*Welcome ${usernomor}👋*\n\nAda yang bisa dibantu kak?`, bots.footer, m);
						}
					}

					if (vreden.autoai) {
						if (vreden.autoai[m.sender] && m.quoted && (m.quoted.sender === botNumber) && !m.key.fromMe && !isCmd) {
							try {
								vreden.chatgpt = vreden.chatgpt || {}
								vreden.chatgpt[m.sender] = vreden.chatgpt[m.sender] || []
								if (/image|video|audio|text\/plain|text\/x-c|text\/x-c\+|text\/x-python|text\/x-java-source|application\/x-httpd-php|application\/x-sql|text\/html|text\/javascript|application\/javascript|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|application\/pdf|application\/rtf|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.template|application\/x-hwp|application\/x-hwpx|application\/vnd\.google-apps\.document|text\/csv|text\/tab-separated-values|application\/vnd\.ms-excel|application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet|application\/vnd\.google-apps\.spreadsheet/.test(mime)) {
									let media = quoted.fileName ? (await vreden.downloadAndSaveMediaMessage(quoted, quoted.fileName, false)) : (await vreden.downloadAndSaveMediaMessage(quoted))
									let files = await google.uploadToGemini(media, mime.replace("application/javascript", "text/javascript"))
									let data = [{
											fileData: {
												mimeType: files.mimeType,
												fileUri: files.uri
											}
										}, {
											text: budy
									}]
									vreden.chatgpt[m.sender].push({
										role: "user",
										parts: data
									})
									let gpt = await google.gemini(vreden.chatgpt[m.sender])
									vreden.chatgpt[m.sender].push({
							        	role: "model",
							        	parts: [{
					        				text: gpt.text
					        			}]
					        		})
									if (!gpt.isCode) {
										m.sendForward(gpt.text)
									} else {
										let button = []
										for (let i = 0; i < gpt.sniplength; i++) {
											button.push({
												"name": "cta_copy",
												"buttonParamsJson": `{
  display_text: "Salin Code ${i + 1}",
  id: "123456789",
  copy_code: "${gpt.snipheet[i]}"
}`
											})
										}
										await vreden.sendButtonDocument(m.chat, {
											document: fs.readFileSync('./media/file.pdf'),
											mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
											fileLength: 10000000000,
											jpegThumbnail: (await getBuffer("https://files.catbox.moe/40bxn6.jpg")),
											fileName: `ChatGPT 2.5`,
										}, button, gpt.text, bots.footer, m)
									}
								} else if (!mime) {
									vreden.chatgpt[m.sender].push({
										role: "user",
										parts: [{
											text: budy
										}]
									})
									let gpt = await google.gemini(vreden.chatgpt[m.sender])
									vreden.chatgpt[m.sender].push({
								        role: "model",
							        	parts: [{
							        		text: gpt.text
								        }]
							        })
									if (!gpt.isCode) {
										m.sendForward(gpt.text)
									} else {
										let button = []
										for (let i = 0; i < gpt.sniplength; i++) {
											button.push({
												"name": "cta_copy",
												"buttonParamsJson": `{
  display_text: "Salin Code ${i + 1}",
  id: "123456789",
  copy_code: "${gpt.snipheet[i]}"
}`
											})
										}
										await vreden.sendButtonDocument(m.chat, {
											document: fs.readFileSync('./media/file.pdf'),
											mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
											fileLength: 10000000000,
											jpegThumbnail: (await getBuffer("https://files.catbox.moe/40bxn6.jpg")),
											fileName: `ChatGPT 2.5`,
										}, button, gpt.text, bots.footer, m)
									}
								}
							} catch (error) {
								await m.errorReport(util.format(error), command)
							}
						}
					}

					//Auto Respond 
					if (general.autoRespond && !m.isGroup && !m.key.fromMe && !isCmd) {
						try {
							let response = await fetchJson(`https://api.vreden.web.id/api/qioo?query=${encodeURIComponent(budy)}&username=${m.sender}`);
							let chatAi = response.result

							if (response.command.status) {
								vreden.appenTextMessage(response.command.cmd, chatUpdate)
								await sleep(1000)
								m.sendForward("Okee wet 🥰")
							} else {
								m.sendForward(chatAi)
							}
						} catch (error) {
							console.log(error)
						}
					}

					//Auto Ai Private Message 
					if (chatsdb[m.chat].autoaipc && !m.isGroup && !m.key.fromMe && !isCmd) {
						try {
							let response = await fetchJson(`https://api.vreden.web.id/api/qioo?query=${encodeURIComponent(budy)}&username=${m.sender}`);
							let chatAi = response.result

							if (response.command.status) {
								vreden.appenTextMessage(response.command.cmd, chatUpdate)
								await sleep(1000)
								m.sendForward("Okee wet 🥰")
							} else {
								m.sendForward(chatAi)
							}
						} catch (error) {
							console.log(error)
						}
					}

					//Auto Ai Group 
					if (chatsdb[m.chat].autoaigc && m.isGroup && !m.key.fromMe && !isCmd) {
						try {
							let response = await fetchJson(`https://api.vreden.web.id/api/qioo?query=${encodeURIComponent(budy)}&username=${m.sender}`);
							let chatAi = response.result

							if (response.command.status) {
								vreden.appenTextMessage(response.command.cmd, chatUpdate)
								await sleep(1000)
								m.sendForward("Okee wet 🥰")
							} else {
								m.sendForward(chatAi)
							}
						} catch (error) {
							console.log(error)
						}
					}
				}

				//━━━━━━━━━━━━━━━[ PLUGIN ]━━━━━━━━━━━━━━━━━//
				if (global.help.includes(command)) {
					for (const handler of global.handlers) {
						if (handler.command && handler.command.includes(command)) {
							if (handler.owner && !isCreator) return m.tolak(mess.OnlyOwner)
							if (handler.premium && !isPremium) return m.tolak(mess.OnlyPrem)
							if (handler.banned && !isBan) return m.danger(`Akun Anda Telah Dibanned!!`)
							if (handler.group && !m.isGroup) {
								return m.warning(mess.OnlyGrup)
							} else if (handler.botAdmin && !isBotAdmins) {
								return m.tolak(mess.BotAdmin)
							} else if (handler.admin && !isAdmins) {
								return m.tolak(mess.GrupAdmin)
							}
							if (handler.private && m.isGroup) return m.warning('Fitur Khusus Di private chat!')
							if (handler.register && !usersdb[m.sender].daftar) return m.warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
							let datahandler = {
								isCmd,
								prefix,
								botNumber,
								isCreator,
								body,
								text,
								args,
								command,
								vreden,
								isPremium,
								isBan,
								isAdmins,
								isBotAdmins,
								quoted,
								rpgdb,
								chatsdb,
								usersdb,
								ownnomor,
								usernomor,
								fbot,
								repPy,
								fconver,
								fhalo,
								fchannel,
								chatUpdate,
								setting,
								pangkat
							};
							await handler(m, datahandler);
							break;
						}
					}
				}

				//━━━━━━━━━━━━━━━[ REGISTER LOGIC ]━━━━━━━━━━━━━━━━━//
				if (verifyNumber[m.sender]) {
					if (`${budy}` === `${verifyNumber[m.sender][1]}`) {
						var angka = await randomNomor(1000, 9999)
						const serialUser = `Player - ${angka}`
						usersdb[m.sender].nama = serialUser
						m.sendForward(`------------ » *VERIFY AKUN* « ------------\n\n📦 *User Info*\n- Name : ${usersdb[m.sender].nama}\n- ID : ${m.sender.split('@')[0]}\n\n🎁 *Bonus Verifikasi*\n- + Rp 5000\n- + 20 Limit\n\n> ${bots.footer}`)
						usersdb[m.sender].saldo += 5000
						usersdb[m.sender].limit += 20
						usersdb[m.sender].daftar = true
						if (general.notifRegister) {
							vreden.sendMessage(bots.idsaluran, {
								text: "```" + `Notification Register

Nama : ${serialUser}
Asal : -
Umur : -
Tag : @${m.sender.split("@")[0]}

Registered via ${verifyNumber[m.sender][3]}` + "```",
								contextInfo: {
									mentionedJid: [m.sender],
									forwardingScore: 9999999,
									isForwarded: true,
									externalAdReply: {
									//	showAdAttribution: true,
										containsAutoReply: true,
										title: `System Notification`,
										body: `${date} ${jam}`,
										previewType: "PHOTO",
										thumbnailUrl: verifyNumber[m.sender][2],
										sourceUrl: links.instagram
									}
								}
							})
						}
						clearTimeout(verifyNumber[m.sender][4])
						delete verifyNumber[m.sender]
					}
				}

				//━━━━━━━━━━━━━━━[ MENFESS LOGIC ]━━━━━━━━━━━━━━━━━//
				if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
					this.menfes = this.menfes ? this.menfes : {}
					let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(budy)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(budy)) return
						find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
						let other = find.a == m.sender ? find.b : find.a
						await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								participant: other
							}
						} : {})
					}
				}

				//━━━━━━━━━━━━━━━[ REPORT LOGIC ]━━━━━━━━━━━━━━━━━//
				if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
					this.report = this.report ? this.report : {}
					let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(budy)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(budy)) return
						find = Object.values(this.report).find(menpes => [menpes.a, menpes.b].includes(m.sender))
						let other = find.a == m.sender ? find.b : find.a
						await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								participant: other
							}
						} : {})
					}
				}

				//━━━━━━━━━━━━━━━[ ANONYMOUS LOGIC ]━━━━━━━━━━━━━━━━━//
				if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(budy)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(budy)) return
						let other = [room.a, room.b].find(user => user !== m.sender)
						m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								forwardingScore: 0,
								isForwarded: true,
								participant: other
							}
						} : {})
					}
				}

		}

		//━━━━━━━━━━━━━━━[ COMMAND TANPA PREFIX ]━━━━━━━━━━━━━━━━━//
		switch (commandNoprefix) {
			case 'proses': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!m.quoted) return m.warning('Reply pesanan yang akan proses')
				let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
				let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
				if (chatsdb[m.chat].setproses) {
					const getTextP = chatsdb[m.chat].setproses
					var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
					vreden.sendTextWithMentions(m.chat, anunya, m)
				} else {
					vreden.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
				}
			}
			break
			case 'done': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!m.quoted) return m.warning('Reply pesanan yang telah di proses')
				let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
				let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
				if (chatsdb[m.chat].setdone) {
					const getTextD = chatsdb[m.chat].setdone
					var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
					vreden.sendTextWithMentions(m.chat, anunya, m)
				} else {
					vreden.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
				}
			}
			break
			
			case'>': {
				if (!isCreator) return
				if (!text) return m.reply("*Invalid eval function!*")
				let lines = text.split('\n');
				lines[lines.length - 1] = 'return ' + lines[lines.length - 1];
				let evaleds = lines.join('\n');
				try {
					let evaled = await eval(`(async () => { \n${text.match("return") ? text : evaleds}\n })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(util.format(err))
				}
			}
			break
			
			case '=>': {
				if (!isCreator) return;
				if (!text) return m.reply("*Invalid eval function!*")

				function Return(sul) {
					let sat = JSON.stringify(sul, null, 2);
					let bang = util.format(sat);
					if (sat === undefined) {
						bang = util.format(sul);
					}
					return bang;
				}
				try {
					(async () => {
						try {
							const result = await eval(`(async () => { ${text.match("return") ? "\n" : "\nreturn"} ${text}\n })()`)
							m.reply(Return(result));
						} catch (e) {
							m.reply(util.format(e));
						}
					})();
				} catch (e) {
					m.reply(util.format(e));
				}
			}
			break
			
			case'>': {
				if (!isCreator) return
				if (!text) return m.reply("*Invalid eval function!*")
				let lines = text.split('\n');
				lines[lines.length - 1] = 'return ' + lines[lines.length - 1];
				let evaleds = lines.join('\n');
				try {
					let evaled = await eval(`(async () => { \n${text.match("return") ? text : evaleds}\n })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(util.format(err))
				}
			}
			break
			
			case '$': {
				if (!isCreator) return
				if (!text) return m.reply("*Invalid exec function!*")
				if (text == "rm -rf *") return m.reply("*Sistem menolak code ini!*")
				if (text.includes("vreden.js")) return m.reply("*Sistem menolak code ini!*")
				exec(text, (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
			break
		}

	} catch (error) {
		console.log(chalk.yellow.bold("[ ERROR ] vreden.js :\n") + chalk.redBright(util.format(error)))
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})