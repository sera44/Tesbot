// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htjava} *💌 Nama* : 𝐌𝐚𝐫𝐬𝐚𝐧𝐝𝐢
${htjava} *♂️ Gender* : Pria
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : PRIVATE
${htjava} *🎨 Umur* : PRIVATE
${htjava} *🧮 Kelas* : PRIVATE
${htjava} *🧩 Hobby* : MAIN HAPE
${htjava} *💬 Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *🗺️ Tinggal* : PRIVATE 
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendButton(m.chat, teksbio, biooo, ppown, [["Sewa Bot", "/sewa"], ["Menu", "/menu"]], m)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
