import {createStore} from 'redux';
import reducer from './reducer.js'

let store = createStore(reducer)

export default store
/*
    store만들기

    1. store.js 파일 생성

    import {createStore} from 'redux' -- 스토어를 만들어주는 훅 import
    let store = createStore() --스토어 생성
    createStore(reducer) -- store의 값을 갱신, 바꿔줄 함수를 매개변수로 넣어준다

    store을 사용할 수 있게 export default store을 해준다
*/ 
