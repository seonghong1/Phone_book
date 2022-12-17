# 📗Phone Book📗

# 사용기술
- React-Redux, Redux
- React-Bootstrap
- Post CSS
- useEffect
- useState
- 
# 간단한 설명
#### Redux를 사용한 전화번호부 입니다. 검색기능을 추가해 저장된 이름으로 찾을 수 있도록 구현했습니다.
##### input에 이름과 전화번호를 입력하고 submit시 dispatch함수가 실행되며 값이 reducer로 전달됩니다.
##### 빈배열(초기값)에 push를 사용하여 연속적으로 값이 추가되게끔 구현하였습니다.
##### 우측 전화번호 리스트에서는 useSelector를 사용해 store에 접근하여 값을 갖고오며 map함수를 사용하여 
##### 배열의 값이 추가될때마다 아이템이 생성되게끔 구현하였습니다. 또한 useState를 사용해 키워드의 값(우측 input에 입력한값)이 있을 경우에는
##### 배열에 filter매서드를 키워드가 포함된 값을, 공백일경우 기존의 배열값을 노출되게끔 기능을 구현하였습니다.
##### 스타일은 post css와 react-bootstrap을 사용하였습니다.
# 느낀점, 알게된점, 나의 생각

