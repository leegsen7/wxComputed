import Dep from './Dep'

export default function initObserve(vm) {
    const {data} = vm
    Object.keys(data).forEach(key => {
        let value = data[key]
        const dep = new Dep()
        Object.defineProperty(data, key, {
            set(newValue) {
                value = newValue
                dep.notify()
            },
            get() {
                dep.depend()
                return value
            },
        })
    })
}
