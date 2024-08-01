import React, { useState, useRef } from 'react';
import * as S from './Report.style';

const Report = () => {
  const [formState, setFormState] = useState({
    title: '',
    type: '',
    otherType: '',
    content: '',
    file: null,
  });
  const [error, setError] = useState('');

  const inputRefs = {
    title: useRef(null),
    type: useRef(null),
    otherType: useRef(null),
    content: useRef(null),
  };

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const { title, type, otherType, content } = formState;
    if (!title) {
      inputRefs.title.current.focus();
      return 'Title is required';
    }
    if (!type) {
      inputRefs.type.current.focus();
      return 'Type is required';
    }
    if (type === 'other' && !otherType) {
      inputRefs.otherType.current.focus();
      return 'Other Type is required';
    }
    if (!content) {
      inputRefs.content.current.focus();
      return 'Content is required';
    }
    return '';
  };

  const onClickSubmit = () => {
    const newError = validateForm();
    if (newError) {
      setError(newError);
    } else {
      localStorage.setItem('report', JSON.stringify(formState));
      setError(''); // 성공적으로 제출했을 때 에러 메시지 초기화
      // 추가적인 제출 로직을 여기에 추가할 수 있습니다.
    }
  };

  return (
    <S.Wrapper>
      <S.InputTitle
        name="title"
        value={formState.title}
        placeholder="Title"
        onChange={handleChange}
        ref={inputRefs.title}
      />
      <S.InputType
        name="type"
        value={formState.type}
        onChange={handleChange}
        ref={inputRefs.type}
      >
        <option value="" disabled>
          Select Violation Type
        </option>
        <option value="discrimination">Discrimination</option>
        <option value="harassment">Harassment</option>
        <option value="privacy_violation">Privacy Violation</option>
        <option value="freedom_of_speech">Freedom of Speech Violation</option>
        <option value="property_rights">Property Rights Violation</option>
        <option value="other">Other</option>
      </S.InputType>
      {formState.type === 'other' && (
        <S.InputOtherType
          name="otherType"
          value={formState.otherType}
          placeholder="Other Type"
          onChange={handleChange}
          ref={inputRefs.otherType}
        />
      )}
      <S.InputContent
        name="content"
        value={formState.content}
        placeholder="Content"
        onChange={handleChange}
        ref={inputRefs.content}
      />
      <S.InputFile name="file" type="file" onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <S.ButtonSubmit onClick={onClickSubmit}>Submit</S.ButtonSubmit>
    </S.Wrapper>
  );
};

export default Report;
