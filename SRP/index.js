import fs from "fs";

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  // save(filename) {
  //   fs.writeFileSync(filename, this.toString());
  // }

  // load(filename) {
  //   //
  // }

  // loadFromUrl(filename) {
  //   //
  // }
  /*This violates Single Responsibility principle as we have more than one responsibility. 
  We need to add a separate class for this called PersistanceManager.*/
}

Journal.count = 0;

class PersistanceManager {
  save(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry("I cried today.");
j.addEntry("I ate a bug.");
console.log(j.toString());

let p = new PersistanceManager();
let filename = "journal.txt";
p.save(j, filename);

/* 
Dont create god object (i.e.) object that has multiple resposibility
It is an Anti pattern and opposite to SRP(Single Responsibility Principle).
*/
