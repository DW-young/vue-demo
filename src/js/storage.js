export default {
    set(key,val){
        localStorage.setItem(key,JSON.stringify(val));
    },
    get(key) {
        var val = localStorage.getItem(key);        
        try {
            val = JSON.parse(val);
        }finally {
            return val;
        }   
    },
    clear() {
        localStorage.clear();
    }
};