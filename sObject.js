class sObject {

    set(data) {
        this.data = data
    }
    get() {
        return this.data
    }

  constructor(projectid, id) {
    this.projectid = projectid
    this.id = id;
    this.data = {};
  }
  
}

module.exports =  sObject;
