const { getTime } = require("./myfunc")
const fs = require("fs")

function kapital(str) {
	return str
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Mengubah huruf pertama setiap kata menjadi kapital
		.join(' ');
}

function hitungmundur(tanggal, bulan, tahun) {
	let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
	let now = Date.now();
	let distance = from - now;
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit '
}

const isEmoji = (emo) => {
	let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
	let regexEmoji = new RegExp(emoji_ranges, 'gi');
	return emo.match(regexEmoji)
}

async function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}

function addFunc(namaFile, text) {
    const funcBaru = `${text}`;

    return new Promise((resolve, reject) => {
        fs.readFile(namaFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Terjadi kesalahan saat membaca file:', err);
                return reject({
                    status: false,
                    message: err.message
                });
            }

            const posisiAwalFunc = data.indexOf("const waktuHabis = (jawaban) => {");
            if (posisiAwalFunc !== -1) {
                const kodeBaruLengkap = data.slice(0, posisiAwalFunc) + '\n' + funcBaru + '\n' + data.slice(posisiAwalFunc);
                fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat menulis file:', err);
                        return reject({
                            status: false,
                            message: err.message
                        });
                    }
                    resolve({
                        status: true,
                        message: "Berhasil menambahkan func baru!"
                    });
                });
            } else {
                resolve({
                    status: false,
                    message: "Func tidak ditemukan"
                });
            }
        });
    });
}

function addCase(namaFile, text) {
    const caseBaru = `${text}`;

    return new Promise((resolve, reject) => {
        fs.readFile(namaFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Terjadi kesalahan saat membaca file:', err);
                return reject({
                    status: false,
                    message: err.message
                });
            }

            const posisiAwalCase = data.indexOf("case 'gimage':");
            if (posisiAwalCase !== -1) {
                const kodeBaruLengkap = data.slice(0, posisiAwalCase) + '\n' + caseBaru + '\n' + data.slice(posisiAwalCase);
                fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat menulis file:', err);
                        return reject({
                            status: false,
                            message: err.message
                        });
                    }
                    resolve({
                        status: true,
                        message: "Berhasil menambahkan case baru!"
                    });
                });
            } else {
                resolve({
                    status: false,
                    message: "Case gimage tidak ditemukan"
                });
            }
        });
    });
}

function dellCase(filePath, caseNameToRemove) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				console.error('Terjadi kesalahan:', err);
				return reject({
					status: false,
					message: err.message
				});
			}

			const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
			if (!regex.test(data)) {
				return resolve({
					status: false,
					message: "case tidak ditemukan"
				});
			}

			const modifiedData = data.replace(regex, '');

			fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
				if (err) {
					console.error('Terjadi kesalahan saat menulis file:', err);
					return reject({
						status: false,
						message: err.message
					});
				}

				resolve({
					status: true,
					message: `Teks dari case '${caseNameToRemove}' telah dihapus dari file.`
				});
			});
		});
	});
}

const getCase = (cases) => {
    const data = fs.readFileSync("./vreden.js").toString();
    const caseMatch = data.split('case \'' + cases + '\'');

    if (caseMatch.length > 1) {
        return "case" + `'${cases}'` + caseMatch[1].split("break")[0] + "break";
    }
    
    return "Case tidak ditemukan!"
};

const totalFitur = () => {
	var mytext = fs.readFileSync("./vreden.js").toString()
	var numUpper = (mytext.match(/case '/g) || []).length;
	return numUpper
}

function randomNomor(min, max = null) {
	if (max !== null) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.floor(Math.random() * min) + 1
	}
}

function pangkat(idrole) {
	var levelRole = global.db.data.users[idrole].rank
	var role = {
		rank: 'Bronze I',
		name: 'Bronze',
		id: 1
	}
	if (levelRole <= 1000) {
		role = {
			rank: 'Bronze I',
			name: 'Bronze',
			id: 1
		}
	} else if (levelRole <= 1100) {
		role = {
			rank: 'Bronze II',
			name: 'Bronze',
			id: 2
		}
	} else if (levelRole <= 1200) {
		role = {
			rank: 'Bronze III',
			name: 'Bronze',
			id: 3
		}
	} else if (levelRole <= 1300) {
		role = {
			rank: 'Silver I',
			name: 'Silver',
			id: 1
		}
	} else if (levelRole <= 1400) {
		role = {
			rank: 'Silver II',
			name: 'Silver',
			id: 2
		}
	} else if (levelRole <= 1500) {
		role = {
			rank: 'Silver III',
			name: 'Silver',
			id: 3
		}
	} else if (levelRole <= 1600) {
		role = {
			rank: 'Gold I',
			name: 'Gold',
			id: 1
		}
	} else if (levelRole <= 1725) {
		role = {
			rank: 'Gold II',
			name: 'Gold',
			id: 2
		}
	} else if (levelRole <= 1850) {
		role = {
			rank: 'Gold III',
			name: 'Gold',
			id: 3
		}
	} else if (levelRole <= 1975) {
		role = {
			rank: 'Gold IV',
			name: 'Gold',
			id: 4
		}
	} else if (levelRole <= 2100) {
		role = {
			rank: 'Platinum I',
			name: 'Platinum',
			id: 1
		}
	} else if (levelRole <= 2225) {
		role = {
			rank: 'Platinum II',
			name: 'Platinum',
			id: 2
		}
	} else if (levelRole <= 2350) {
		role = {
			rank: 'Platinum III',
			name: 'Platinum',
			id: 3
		}
	} else if (levelRole <= 2475) {
		role = {
			rank: 'Platinum IV',
			name: 'Platinum',
			id: 4
		}
	} else if (levelRole <= 2600) {
		role = {
			rank: 'Diamond I',
			name: 'Diamond',
			id: 1
		}
	} else if (levelRole <= 2750) {
		role = {
			rank: 'Diamond II',
			name: 'Diamond',
			id: 2
		}
	} else if (levelRole <= 2900) {
		role = {
			rank: 'Diamond III',
			name: 'Diamond',
			id: 3
		}
	} else if (levelRole <= 3050) {
		role = {
			rank: 'Diamond IV',
			name: 'Diamond',
			id: 4
		}
	} else if (levelRole <= 3200) {
		role = {
			rank: 'Heroic',
			name: 'Heroic',
			id: 0
		}
	} else if (levelRole <= 3500) {
		role = {
			rank: 'Heroic ✩',
			name: 'Heroic',
			id: 1
		}
	} else if (levelRole <= 4000) {
		role = {
			rank: 'Heroic ✩✩',
			name: 'Heroic',
			id: 2
		}
	} else if (levelRole <= 4350) {
		role = {
			rank: 'Heroic ✩✩✩',
			name: 'Heroic',
			id: 3
		}
	} else if (levelRole <= 5050) {
		role = {
			rank: 'Master ✯',
			name: 'Master',
			id: 1
		}
	} else if (levelRole <= 5400) {
		role = {
			rank: 'Master ✯✯',
			name: 'Master',
			id: 2
		}
	} else if (levelRole <= 6500) {
		role = {
			rank: 'Master ✯✯✯',
			name: 'Master',
			id: 3
		}
	} else if (levelRole <= 7150) {
		role = {
			rank: 'GrandMaster',
			name: 'GrandMaster',
			id: 0
		}
	} else if (levelRole <= 7700) {
		role = {
			rank: 'GrandMaster ✩',
			name: 'GrandMaster',
			id: 1
		}
	} else if (levelRole <= 9100) {
		role = {
			rank: 'GrandMaster ✩✩',
			name: 'GrandMaster',
			id: 2
		}
	} else if (levelRole <= 10800) {
		role = {
			rank: 'GrandMaster ✩✩✩',
			name: 'GrandMaster',
			id: 3
		}
	} else if (levelRole <= 99999999999999999999999999999) {
		role = {
			rank: 'GrandMaster ✩✩✩✩',
			name: 'GrandMaster',
			id: 4
		}
	}
	return role
}

module.exports = {
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
}