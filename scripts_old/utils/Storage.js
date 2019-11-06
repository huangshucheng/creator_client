var Storage = {
    set(key, value){
        cc.sys.localStorage.setItem(key,JSON.stringify(value));
    },

    get(key){
        return JSON.parse(cc.sys.localStorage.getItem(key,JSON.stringify(key)));
    },

    remove(key){
        cc.sys.localStorage.removeItem(key);
    },
}

module.exports = Storage;