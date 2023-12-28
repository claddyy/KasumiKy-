// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function clean(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const cleanContent = content.replace(/\s+/g, ' ');
        fs.writeFileSync(filePath, cleanContent);
        console.log("Work done!")
    } catch (err) {
        console.error(err);
    }
}
clean('tisst.txt');