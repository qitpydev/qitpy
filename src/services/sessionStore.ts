const sessionStore = {
    setItem: (name, object) => {
        sessionStorage.setItem(name, JSON.stringify(object));
    },
    getItem: (name) => {
        const tempStr = sessionStorage.getItem(name) || null;
        return tempStr ? JSON.parse(tempStr) : tempStr;
    },
    removeItem: (name) => {
        sessionStorage.removeItem(name);
    }
};

export default sessionStore;
