const fs = require('fs');
const venom = require('venom-bot');
module.exports={
//ddd
 async initSession(sessionName) {
  const session = "Bodegamix"
  const client = await venom.create(
      sessionName,
      (base64Qr, asciiQR, attempts) => {
          session.state = "QRCODE";
          session.qrcode = base64Qr;
          session.ascii_qr = asciiQR;
          console.log("new qrcode updated - session.state: " + session.state);
      },
      (statusFind) => {
          session.status = statusFind;
          console.log("session.status: " + session.status);
      },
      {
          headless: true,
          devtools: false,
          useChrome: false,
          debug: false,
          logQR: false,
          browserArgs: [
              '--log-level=3',
              '--no-default-browser-check',
              '--disable-site-isolation-trials',
              '--no-experiments',
              '--ignore-gpu-blacklist',
              '--ignore-certificate-errors',
              '--ignore-certificate-errors-spki-list',
              '--disable-gpu',
              '--disable-extensions',
              '--disable-default-apps',
              '--enable-features=NetworkService',
              '--disable-setuid-sandbox',
              '--no-sandbox',

              '--disable-webgl',
              '--disable-threaded-animation',
              '--disable-threaded-scrolling',
              '--disable-in-process-stack-traces',
              '--disable-histogram-customizer',
              '--disable-gl-extensions',
              '--disable-composited-antialiasing',
              '--disable-canvas-aa',
              '--disable-3d-apis',
              '--disable-accelerated-2d-canvas',
              '--disable-accelerated-jpeg-decoding',
              '--disable-accelerated-mjpeg-decode',
              '--disable-app-list-dismiss-on-blur',
              '--disable-accelerated-video-decode',
          ],
          refreshQR: 15000,
          autoClose: 60 * 60 * 24 * 365,
          disableSpins: true
      }
  );
  return client;
}

}










// // O segundo parâmetro create () é o retorno de chamada QR
// venom.create('sessionMarketing', (base64Qr, asciiQR) => {

// // Para registrar o QR no terminal
//   //console.log(asciiQR);
 

// // Para escrevê-lo em outro lugar em um arquivo
//   exportQR(base64Qr, 'qrcode.png');
// });
 
// // Writes QR in specified path
// function exportQR(qrCode, path) {
//   qrCode = qrCode.replace('data:image/png;base64,', '');
//   const imageBuffer = Buffer.from(qrCode, 'base64');
 

// // Cria o arquivo 'qrcode.png'
//   fs.writeFileSync(path, imageBuffer);
// }