const fs = require('node:fs/promises');

async function wryte() {
    try {
        await fs.writeFile('tistfile.txt', "I'm not so good, tbh");
        data = await fs.readFile('tistfile.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
wryte();

/*Well readFile is generally faster than writeFile, and therefore
be a bit careful when using them in async code */