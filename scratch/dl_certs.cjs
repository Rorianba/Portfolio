const https = require('https');
const fs = require('fs');
const url = 'https://drive.google.com/uc?export=download&id=1Rs9XNuhxVkVIIVrD2VjGQg8tA78bdrSM';

https.get(url, res => {
    const loc = res.headers.location;
    if (loc) {
        https.get(loc, res2 => {
            let filename = 'certs.zip'; // default
            const cd = res2.headers['content-disposition'];
            if (cd) {
                const match = cd.match(/filename="([^"]+)"/);
                if (match) {
                    filename = match[1];
                }
            }
            console.log('Downloading file:', filename);
            const dest = 'scratch/' + filename;
            const f = fs.createWriteStream(dest);
            res2.pipe(f);
            f.on('finish', () => {
                console.log('Downloaded to ' + dest);
            });
        });
    } else {
        console.log('No redirect location found');
        // Sometimes Google Drive serves the file directly or asks for a virus scan confirmation
        if (res.headers['content-type'] && res.headers['content-type'].includes('text/html')) {
            console.log('It returned HTML (probably a virus scan warning because the file is too large).');
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                const match = body.match(/href="(\/uc\?export=download&amp;confirm=[^"]+)"/);
                if(match) {
                    let confirmUrl = 'https://drive.google.com' + match[1].replace(/&amp;/g, '&');
                    console.log('Confirm URL:', confirmUrl);
                    https.get(confirmUrl, res3 => {
                        let filename = 'certs.zip';
                        const cd = res3.headers['content-disposition'];
                        if (cd) {
                            const m2 = cd.match(/filename="([^"]+)"/);
                            if (m2) filename = m2[1];
                        }
                        const dest = 'scratch/' + filename;
                        const f = fs.createWriteStream(dest);
                        res3.pipe(f);
                        f.on('finish', () => console.log('Downloaded to ' + dest));
                    });
                }
            });
        } else {
            const dest = 'scratch/certs.zip';
            const f = fs.createWriteStream(dest);
            res.pipe(f);
            f.on('finish', () => console.log('Downloaded to ' + dest));
        }
    }
});
