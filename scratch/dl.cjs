const https = require('https');
const fs = require('fs');
const url = 'https://drive.google.com/uc?export=download&id=1uotnWkVf3UpSVC_V2Bpdc2gzGROLq4NJ';

https.get(url, res => {
    const loc = res.headers.location;
    if (loc) {
        https.get(loc, res2 => {
            let filename = 'power_bi_proof.pdf'; // default
            const cd = res2.headers['content-disposition'];
            if (cd) {
                const match = cd.match(/filename="([^"]+)"/);
                if (match) {
                    filename = match[1];
                }
            }
            console.log('Downloading file:', filename);
            const dest = 'public/certificates/' + filename;
            const f = fs.createWriteStream(dest);
            res2.pipe(f);
            f.on('finish', () => {
                console.log('Downloaded to ' + dest);
                fs.writeFileSync('scratch/download_res.txt', filename);
            });
        });
    } else {
        console.log('No redirect location found');
    }
});
