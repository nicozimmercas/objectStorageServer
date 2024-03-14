//extern imports

const express = require("express");
//intern imports
const sObject = require("./sObject");

const app = express();
const PORT = 4312;

app.use(express.json());

var dataStorage = [];

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get("/:prid/:id", async (req, res) => {
    const {prid, id } = req.params;
    let oObject = dataStorage.find(e=> e.projectid==prid && e.id == id)
    if (oObject==undefined) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write("{}");
        res.end();
        return
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(oObject.get()));
    res.end();
});

app.put("/:prid/:id", async (req, res) => {
    const {prid, id } = req.params;
    const data  = req.body;
    let oObject = dataStorage.find(e=> e.projectid==prid && e.id == id)
    if (oObject==undefined) {
        oObject = new sObject(prid,id)
        dataStorage.push(oObject)
    }
    oObject.set(data)
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(oObject.get()));
    res.end();
});

app.patch("/:prid/:id", async (req, res) => {
    const {prid, id } = req.params;
    const data  = req.body;
    let oObject = dataStorage.find(e=> e.projectid==prid && e.id == id)
    if (oObject==undefined) {
        oObject = new sObject(prid,id)
        dataStorage.push(oObject)
    }
    for (let key of Object.keys(data)) {
        oObject.data[key] = data[key]
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(oObject.get()));
    res.end();
});

app.post("/:prid/:id", async (req, res) => {
    const {prid, id } = req.params;
    const data  = req.body;
    let oObject = dataStorage.find(e=> e.projectid==prid && e.id == id)
    if (oObject==undefined) {
        oObject = new sObject(prid,id)
        dataStorage.push(oObject)
    }
    oObject.set(data)
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(oObject.get()));
    res.end();
});

app.delete("/:prid/:id", async (req, res) => {
    const {prid, id } = req.params;
    dataStorage = dataStorage.filter (e=> !(e.projectid == prid && e.id == id))
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write("{}")
    res.end();
});