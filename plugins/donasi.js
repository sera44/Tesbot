import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let name = await conn.getName(m.sender) 

let rts = `❏ –––––『 𝐃𝐎𝐍𝐀𝐒𝐈 』––––– ❏`
let tsr =`⫹⫺ ᴅᴏɴᴀsɪ • ᴘᴜʟsᴀ ⫹⫺
⏣ ᴛᴇʟᴋᴏᴍsᴇʟ: [ 0882007157628 ]
⏣ sᴍᴀʀᴛғʀᴇɴ: [ - ]
⏣ ᴛʀɪ: [ - ]

⫹⫺ ᴅᴏɴᴀsɪ • ɴᴏɴ ᴘᴜʟsᴀ ⫹⫺
⏣ ᴅᴀɴᴀ: [ ᴄʜᴀᴛ ᴀᴅᴍɪɴ ] 
⏣ ᴏᴠᴏ: [ ᴄʜᴀᴛ ᴀᴅᴍɪɴ ]
⏣ ɢᴏᴘᴀʏ: [ ᴄʜᴀᴛ ᴀᴅᴍɪɴ ]

𝚃𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑 𝙱𝚊𝚐𝚒 𝚈𝚐 𝙱𝚎𝚛𝚍𝚘𝚗𝚊𝚜𝚒 😁

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩`

  await conn.sendButton(m.chat, rts, tsr, pu, [['𝐒ᴇᴡᴀ', '.sewa'], ['𝐎ᴡɴᴇʀ', '.owner'], ['𝐌ᴇɴᴜ', '.menu']], m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: "tautanwa",
    mediaType: "tautanwa",
    description: sig,
    title: `Hay Kak, Mau Donasi Kah?`,
    body: bottime,
    thumbnail: fp,
    sourceUrl: sig
     }}
  })

          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler