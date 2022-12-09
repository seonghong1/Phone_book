import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  // useSelector()  --store의 값을 갖고오는 함수
  const {contact_List, keyword} = useSelector((state)=>state)
  const [fillteredList, setFillteredList] = useState([])
  
  useEffect(()=>{
    //키워드값이 입력되었을때
    if(keyword !== ""){
      //item = contact_list의 각각의 요소
      let book = contact_List.filter((item)=>item.name.includes(keyword))
      setFillteredList(book);
    }else{//평소상태, 키워드값이 입력이 안되었을때
      setFillteredList(contact_List)
    }
    
},[keyword, contact_List])

  return (
    <div>
        <SearchBox />
       
        {fillteredList.map((item)=>{
                //props를 이용해서 ContactItem에 이름,번호 값 전달
          return <ContactItem name={item.name} phoneNum={item.phoneNum}/>
        })}
        
    </div>
  )
}

export default ContactList