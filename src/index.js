import initObserve from './initObserve'
import initComputed from './initComputed'
import checkComputed from './checkComputed'

export default function _initComputed(vm) {
    if (!checkComputed(vm)) return
    initObserve(vm)
    initComputed(vm)
}