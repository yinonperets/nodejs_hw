const fs = require('fs');
const {
    mkdir,
    readdir,
    writeFile,
    rmdir,
    unlink
} = require('fs/promises');


const users = [{
    name: "yinon",
    last: "perets"
}, {
    name: "yossi",
    last: "perets"
}, {
    name: "yarin",
    last: "perets"
}];

const removeFilesAndFolders = async () => {
    try {
        const users = await mkdir(`${__dirname}/users`);
        users.forEach(async (user) => await unlink(`${__dirname}/users/${user}`));
        await rmdir(`${__dirname}/users`);

    } catch (err) {
        console.log(err.message);
    }
};

const makeAndRemoveFilesAndFolder = async () => {
    try {
        const isExists = fs.existsSync(`${__dirname}/users`);
        if (isExists) return removeFilesAndFolders();
        await mkdir(`${ __dirname }/users`);
        for (let i = 0; i < 4; i++) {
            await writeFile(
            `${__dirname}/users/${users[i].name} ${users[i].last}.txt`,
            `The username is: ${users[i].name} ${users[i].last}`
            );
        };
    } catch (err) {
        console.log(err.message);
    }

};
makeAndRemoveFilesAndFolder()


const setTimeoutOfusers = setTimeout(async () => {
await removeFilesAndFolders();
}, 8000);
