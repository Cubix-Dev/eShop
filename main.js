 // Each release needs to be moved to the top directory and be named eShop.sb3
import fs from 'fs/promises'
import { fileFrom } from 'fetch-blob/from.js'
import Htmlifier from '@sheeptester/htmlifier'

const extensionArray = [
"https://cube-enix.github.io/Various%20File%20Hosting/SNConnect/newIndex.js",
"https://utterdonkey.github.io/theme/mod.js"
]

const title = "eShop"

async function main () {
  const html = await new Htmlifier()
    .htmlify({ type: 'file', file: await fileFrom('./eShop.sb3'), options:{fps:60, width:640, extensions:extensionArray, fencing:false, limits:false, title:title, username: "testSubject",turbo:false,includeVM:true, loading:{image:null,progressBar:"DarkOrange"}, zip:false}})
    .then(blob => blob.text())
    await fs.writeFile('./index.html', html)
    console.log("Done.")
}

main()
