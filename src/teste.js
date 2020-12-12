const fs = require('fs');
const venom = require('venom-bot');

 

// O segundo parâmetro create () é o retorno de chamada QR
venom.create('sessionMarketing', (base64Qr, asciiQR) => {

// Para registrar o QR no terminal
  //console.log(asciiQR);
 

// Para escrevê-lo em outro lugar em um arquivo
  exportQR(base64Qr, 'qrcode.png');
});
 
// Writes QR in specified path
function exportQR(qrCode, path) {
  qrCode = qrCode.replace('data:image/png;base64,', '');
  const imageBuffer = Buffer.from(qrCode, 'base64');
 

// Cria o arquivo 'qrcode.png'
  fs.writeFileSync(path, imageBuffer);
}