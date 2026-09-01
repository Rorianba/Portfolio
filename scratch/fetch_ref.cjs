const fs = require('fs');
fetch('https://pradeep-thirumoorthy.github.io/Portfolio/')
  .then(res => res.text())
  .then(html => {
    fs.writeFileSync('ref_html.txt', html);
    const cssMatch = [...html.matchAll(/href="([^"]+\.css)"/g)].map(m => m[1]);
    console.log("CSS files found:", cssMatch);
    
    Promise.all(cssMatch.map(c => {
      const url = c.startsWith('http') ? c : 'https://pradeep-thirumoorthy.github.io' + c;
      return fetch(url).then(res => res.text());
    })).then(cssContents => {
      cssContents.forEach((c, i) => {
        fs.writeFileSync('ref_css_' + i + '.txt', c);
        console.log(`Saved CSS ${i} (Length: ${c.length})`);
      });
    });
  });
