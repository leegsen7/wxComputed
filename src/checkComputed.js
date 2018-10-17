export default function checkComputed({computed}) {
    const noObject = computed === null || typeof computed !== 'object'
    const noProp = !Object.keys(computed).length
    if (!computed || noObject || noProp) {
        console.warn('没有computed属性或computed属性不是object')
        return
    }
    return true
}