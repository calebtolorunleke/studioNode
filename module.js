// const os = require('os')

// console.log(os.homedir())
// console.log(os.platform())


// const laptopInfo = {
//     release: os.release(),
//     type: os.type(),
//     freememory: os.freemem(),
//     totalMemory: os.totalmem(),
//     uptime: os.uptime()



// }
// console.log(laptopInfo)

// Reading a file
// 3 parameters - path, encoding

const fs = require('fs')
// fs.readFile('./doc.txt', utf - 8, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.writeFile('./doc2.txt', 'writing another content 2', () => {
//     console.log('file writing another content')
// })


// deleting a file - unlink(path, call back function)
// if (fs.existsSync('./doc/txt')) {
//     fs.unlink('./doc.txt', (err) => {
//         if (err) {
//             console.log(err)

//         }
//         console.log('file deleted')
//     })
// }

// creating a folder or directory 
// mkdir 
fs.mkdir('./utility', (err) => {
    if (err) {
        console.log(err)
    }
    else (console.log('folder created'))
})

if (!fs.existsSync('./utility')) {
    fs.mkdir('./utility', (err) => {
        if (err) {
            console.log(err)
        }
        else (console.log('folder created'))
    })
}