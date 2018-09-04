import Watcher from './Watcher'

export default function initComputed(vm) {
    const computedMap = {}
    for (const key in vm.computed) {
        const fn = vm.computed[key]
        let value = null
        Object.defineProperty(vm.data, key, {
            set: function _computedSetter(newValue) {
                value = newValue
            },
            get: (function () {
                const watcher = new Watcher(vm, fn, () => {
                    vm.setData({
                        [key]: watcher.value,
                    })
                })
                return function _computedGetter() {
                    watcher.depend()
                    return watcher.value
                }
            })(),
        })
        computedMap[key] = vm.data[key]
    }
    vm.setData(computedMap)
}
