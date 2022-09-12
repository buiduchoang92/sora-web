
export default function createStorage(key: string, storeName: string) {
    const storeType = storeName === 'localStorage' ? localStorage : sessionStorage
    // const store = JSON.parse(storeType.getItem(key) || '') ?? {}
    const store = storeType.getItem(key) ? JSON.parse(storeType.getItem(key) || '') : {}
    const save = () => {
        storeType.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key: string) {
            return store[key]
        },
        set(key : string, value: string) {
            store[key] = value
            save()
        },
        remove(key: string) {
            delete store[key]
            storeType.removeItem(key)
            save()
        },
    }
    return storage
}