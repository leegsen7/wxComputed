let uid = 0

class Dep {
    constructor() {
        this.subs = []
        this.did = ++uid
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    depend() {
        // Compile初始化也会触发get方法，但此时Dep.target为null
        // 触发Watcher里面的getVMVal时，Dep.target有值，是Watcher的当前实例
        // Watcher line 42
        if (Dep.target) {
            // Watcher addDep执行
            Dep.target.addDep(this)
        }
    }
    notify() {
        this.subs.forEach(sub => sub.update())
    }
}

Dep.target = null

export default Dep
