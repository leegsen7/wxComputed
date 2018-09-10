import Dep from './Dep'

export default function initObserve(vm) {
    defineProperty(vm.data)

}

function defineProperty(data) {
    if (typeof data === 'object' && data !== null) {
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
            defineProperty(value)
        })
    }
}
