const cheerio = require("cheerio")
const axios = require("axios")

let handler = async (m, { vreden, args, command, prefix }) => {
	let teks;
	if (args.length >= 1) {
		teks = args.slice(0).join(" ");
	} else if (m.quoted && m.quoted.text) {
		teks = m.quoted.text;
	} else {
		return m.reply(`Penggunaan:\n${prefix+command} <nama>\n\nContoh:\n${prefix+command} keqing`)
	}
	await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})

let data = await displayCharacterDetails(teks)
m.reply(data)

}
handler.help = ["build_gi"];
handler.tags = ["anime"];
handler.command = ["build_gi"]
handler.group = true;

module.exports = handler;

async function genshin(name) {
    try {
        const { data } = await axios.get(`https://genshin.gg/characters/${name}/`);
        
        const $ = cheerio.load(data);
        
        const characterName = $('h1.character-name').text();
        if (!characterName) {
            return `Maaf '${name}' bukan nama karakter yang valid.`;
        }
        
        const element = $('.character-element').attr('alt');
        const weaponType = $('.character-path-icon').attr('alt');
        const role = $('.character-role').text();
        
        const upgradeMaterials = [];
        $('.character-materials-item').each((i, elem) => {
            const materialName = $(elem).find('.character-materials-name').text();
            upgradeMaterials.push(materialName);
        });
        
        const bestWeapons = [];
        $('.character-build-weapon').each((i, elem) => {
            const weaponName = $(elem).find('.character-build-weapon-name').text();
            bestWeapons.push(weaponName);
        });
        
        const bestArtifacts = [];
        $('.character-build-weapon-content').each((i, elem) => {
            const artifactName = $(elem).find('.character-build-weapon-name').text();
            const artifactSetCount = $(elem).find('.character-build-weapon-count').text();
            bestArtifacts.push({ name: artifactName, setCount: artifactSetCount });
        });

        const bestStats = {};
        $('.character-stats-item').each((i, elem) => {
            const statType = $(elem).find('b').text().replace(':', '');
            const statValue = $(elem).text().replace(statType + ': ', '');
            bestStats[statType] = statValue;
        });

        const bestTeams = [];
        $('.character-team').each((i, elem) => {
            const teamName = $(elem).find('.character-team-name').text();
            const teamMembers = [];
            $(elem).find('.character-portrait').each((j, memberElem) => {
                const memberName = $(memberElem).find('.character-icon').attr('alt');
                const memberElement = $(memberElem).find('.character-type').attr('alt');
                teamMembers.push({ name: memberName, element: memberElement });
            });
            bestTeams.push({ teamName, teamMembers });
        });

        const talents = [];
        $('#talents .character-skill').each((i, elem) => {
            const talentTitle = $(elem).find('.character-skill-title').text();
            const talentName = $(elem).find('.character-skill-name').text();
            const talentDescription = $(elem).find('.character-skill-description').text();
            talents.push({ title: talentTitle, name: talentName, description: talentDescription });
        });

        const passives = [];
        $('#passives .character-skill').each((i, elem) => {
            const passiveTitle = $(elem).find('.character-skill-title').text();
            const passiveName = $(elem).find('.character-skill-name').text();
            const passiveDescription = $(elem).find('.character-skill-description').text();
            passives.push({ title: passiveTitle, name: passiveName, description: passiveDescription });
        });

        const constellations = [];
        $('#constellations .character-skill').each((i, elem) => {
            const constellationTitle = $(elem).find('.character-skill-title').text();
            const constellationName = $(elem).find('.character-skill-name').text();
            const constellationDescription = $(elem).find('.character-skill-description').text();
            constellations.push({ title: constellationTitle, name: constellationName, description: constellationDescription });
        });

        const ascensionCosts = [];
        $('#ascension .rt-tbody .rt-tr-group').each((i, elem) => {
            const rank = $(elem).find('.rt-td').eq(0).text().trim();
            const level = $(elem).find('.rt-td').eq(1).text().trim();
            const cost = $(elem).find('.rt-td').eq(2).text().trim();
            const materials = [];

            $(elem).find('.rt-td').slice(3).each((j, materialElem) => {
                const materialName = $(materialElem).text().trim();
                const materialCount = $(materialElem).find('.table-image-count').text().trim();
                if (materialName) {
                    materials.push({ name: materialName, count: materialCount });
                }
            });

            ascensionCosts.push({ rank, level, cost, materials });
        });

        return {
            characterName,
            element,
            weaponType,
            role,
            upgradeMaterials,
            bestWeapons,
            bestArtifacts,
            bestStats,
            bestTeams,
            talents,
            passives,
            constellations,
            ascensionCosts
        };
    } catch (error) {
        console.error(error);
        return `Error: Terjadi masalah saat mengambil data untuk karakter '${name}'.`;
    }
}

async function displayCharacterDetails(name) {
    const characterData = await genshin(name);
    
    if (!characterData || typeof characterData === 'string') {
        return characterData; 
    }

    let result = `Detail Karakter "${characterData.characterName}"\n`;
    result += '-'.repeat(40) + '\n';

    result += `Elemen: ${characterData.element}\n`;
    result += `Tipe Senjata: ${characterData.weaponType}\n`;
    result += `Peran: ${characterData.role}\n`;
    result += '-'.repeat(40) + '\n';

    result += 'Bahan Upgrade:\n';
    characterData.upgradeMaterials.forEach(material => {
        result += `- ${material}\n`;
    });
    result += '-'.repeat(40) + '\n';

    result += 'Senjata Terbaik:\n';
    characterData.bestWeapons.forEach(weapon => {
        result += `- ${weapon}\n`;
    });
    result += '-'.repeat(40) + '\n';

    result += 'Artefak Terbaik:\n';
    characterData.bestArtifacts.forEach(artifact => {
        result += `- ${artifact.name} (${artifact.setCount})\n`;
    });
    result += '-'.repeat(40) + '\n';

    result += 'Statistik Terbaik:\n';
    for (const [statType, statValue] of Object.entries(characterData.bestStats)) {
        result += `- ${statType}: ${statValue}\n`;
    }
    result += '-'.repeat(40) + '\n';

    result += 'Tim Terbaik:\n';
    characterData.bestTeams.forEach(team => {
        result += `${team.teamName}:\n`;
        team.teamMembers.forEach(member => {
            result += `- ${member.name} (${member.element})\n`;
        });
    });
    result += '-'.repeat(40) + '\n';

    result += 'Talenta:\n';
    characterData.talents.forEach(talent => {
        result += `- ${talent.title}: ${talent.name}\n  ${talent.description}\n`;
    });
    result += '-'.repeat(40) + '\n';

    result += 'Pasif:\n';
    characterData.passives.forEach(passive => {
        result += `- ${passive.title}: ${passive.name}\n  ${passive.description}\n`;
    });
    result += '-'.repeat(40) + '\n';

    result += 'Konstelasi:\n';
    characterData.constellations.forEach(constellation => {
        result += `- ${constellation.title}: ${constellation.name}\n  ${constellation.description}\n`;
    });
    result += '-'.repeat(40) + '\n';

    result += 'Biaya Ascension:\n';
    characterData.ascensionCosts.forEach(ascension => {
        result += `Peringkat: ${ascension.rank}, Level: ${ascension.level}, Biaya: ${ascension.cost}\n  Bahan: \n`;
        ascension.materials.forEach(material => {
            result += `- ${material.name} x${material.count}\n`;
        });
    });
    result += '-'.repeat(40) + '\n';

    return result;
}