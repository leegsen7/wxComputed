import Watcher from './Watcher'

export default function initComputed(vm) {
    const computedMap = {}
    for (const key in vm.computed) {
        const fn = vm.computed[key]
        if (typeof fn !== 'function') {
            console.warn(`${key} prop not a function in computed!!!`)
            break
        }
        Object.defineProperty(vm.data, key, {
            set: function _computedSetter() {},
            get: (function () {
                const watcher = new Watcher(vm, fn, () => {
                    vm.setData({
                        [key]: watcher.value,
                    })
                })
                // 为了在调试面板appData中显示此属性
                vm.data[key] = watcher.value
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
