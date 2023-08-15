# recoil cheat sheet

1. atom
1.1. atom 선언하기
`const recoilState = atom({key, default})`
1.1.1. set으로 상태 조작 (콜백 함수 형태로, 불변성을 지키며)
`setState((prev) => {..prev,newState})`
1.2. 사용하기
`const [state, setState] = userRecoilState(keyOfState)` 
key는 quote 없이 쓰기
1.2.1 따로 쓸경우
`const state = useRecoilValue(keyOfState)`
`const setState = useSetRecoilState(keyOfState)`
2.selector 
2.1. selector 선언
`const recoilSelector = selector({key, get, set})`
2.1.1 selector의 get 메서드 선언 
```js
get: ({get}) => {
const recoilAtom = get(recoilAtom) // 해당 atom의 get 함수임
return recoilAtom.function() 
}
```
