import initObserve from './initObserve'
import initComputed from './initComputed'

export default function _initComputed(vm) {
    initObserve(vm)
    initComputed(vm)
}