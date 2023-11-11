import { useState,useRef } from "react";

function InputSample(){

    // 객체 초기화
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    const nameInput = useRef();

    const onChange = (e) => {
        const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출

        // 불변성 규칙을 지키며 작업
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });

        nameInput.current.focus();
    }

    return (
        <div>
            <input 
                name="name"
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;