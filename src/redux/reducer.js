let initialstate = { contact_List: [], keyword: "" };

function reducer(state = initialstate, action) {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_CONTACT':
            state.contact_List.push(
                {
                    name: payload.name,
                    phoneNum: payload.phoneNum
                })
            break
        case 'SEARCH_BY_NAME':
            state.keyword = payload.keyword
            break  
    }
    return { ...state }
}

export default reducer
/*
    reducer 함수 만들기 (store의 값을 갱신, 업데이트 해줄 reducer함수)

    reducer는 state(값), action 을 매개변수로 갖는다.

    state의 초기값으로 contact_List이름의 빈 배열을 만들어준다.
*/
