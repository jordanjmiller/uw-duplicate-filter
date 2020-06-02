const fs = require('fs');
const neatCsv = require('neat-csv');

let dataArray = '';
let output = 'username,firstName,lastName,studentID,fileName,\n';

// fs.readFile('./BothellData.csv', async (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     dataArray = await neatCsv(data);
//     console.log(dataArray[dataArray.length-1]);
// if (dataArray){
//     for (let i = 0; i < dataArray.length; i++){
//        let returnString = `${dataArray[i]. timestamp},${dataArray[i].username},${dataArray[i].firstName},${dataArray[i].lastName},${dataArray[i].studentID},${dataArray[i].degree},${dataArray[i].degreeTitle},${dataArray[i].photoURL},${dataArray[i].fileName}`;
//        for (let b = 0; b < dataArray.length; b++){
//            if (dataArray[b].username === dataArray[i].username){
//                returnString = `${returnString},${dataArray[b].fileName},`
//                dataArray.splice(b, 1);
//            }
//        }
//        output += `${returnString},\n`
//    }

//     fs.writeFile(`output.csv`, output, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//         });
//     }
// })

fs.readFile('./SeattleData.csv', async (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    dataArray = await neatCsv(data);
    console.log(dataArray[dataArray.length-1]);
if (dataArray){
    for (let i = 0; i < dataArray.length; i++){
        // console.log('dataArray[i]',dataArray[i])
        // console.log('filename: ',dataArray[i].fileName)
       let returnString = `${dataArray[i].username},${dataArray[i].firstName},${dataArray[i].lastName},${dataArray[i].studentID},${dataArray[i].fileName}`;
       for (let b = 0; b < dataArray.length; b++){
           if (b !== i && dataArray[b].username && dataArray[b].username === dataArray[i].username){
               returnString = `${returnString},${dataArray[b].fileName}`
               dataArray.splice(b, 1);
           }
       }
       output += `${returnString}\n`
   }

    fs.writeFile(`output.csv`, output, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
    }
})