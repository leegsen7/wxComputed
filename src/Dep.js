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
        // Watcher getValue方法执行时Dep.target有值
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
