export default function checkComputed(vm) {
    const {computed} = vm
    const noObject = typeof vm.computed !== 'object'
    const noProp = !Object.keys(computed).length
    if (!computed || noObject || noProp) {
        console.warn('没有computed属性或computed属性不是object')
        return
    }
    return true
}