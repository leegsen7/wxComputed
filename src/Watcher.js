import Dep from './Dep'

let uid = 0

class ComputedWatcher {
    constructor(vm, fn, cb) {
        this.vm = vm
        this.fn = fn
        this.cb = cb
        this.wid = ++uid
        this.depIdMap = {}
        this.value = this.getValue()
        this.dep = new Dep()
    }
    getValue() {
        Dep.target = this
        const value = this.fn.call(this.vm)
        Dep.target = null
        return value
    }
    update() {
        this.value = this.getValue()
        typeof this.cb === 'function' && this.cb.call(this.vm)
        this.dep.notify()
    }
    addDep(dep) {
        if (!this.depIdMap.hasOwnProperty(dep.did)) {
            dep.addSub(this)
            this.depIdMap[dep.did] = dep
        }
    }
    // 收集引用computed的依赖
    depend() {
        this.dep.depend()
    }
}

export default ComputedWatcher
