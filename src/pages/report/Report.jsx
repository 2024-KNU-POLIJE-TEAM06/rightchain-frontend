import React, { useState, useRef } from 'react';
import * as S from './Report.style';

const Report = () => {
  const [formState, setFormState] = useState({
    form: {
      title: '',
      type: '',
      otherType: '',
      content: '',
      file: '',
    },
    error: '',
  });

  const { form, error } = formState;
  const { title, type, otherType, content, file } = form;

  const titleRef = useRef(null);
  const typeRef = useRef(null);
  const otherTypeRef = useRef(null);
  const contentRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  const onClickSubmit = () => {
    let newError = '';
    if (!title) {
      titleRef.current.focus();
      newError = 'Title is required';
    } else if (!type) {
      typeRef.current.focus();
      newError = 'Type is required';
    } else if (type === 'other' && !otherType) {
      otherTypeRef.current.focus();
      newError = 'Type is required';
    } else if (!content) {
      contentRef.current.focus();
      newError = 'Content is required';
    } else {
      localStorage.setItem('report', JSON.stringify(form));
    }

    setFormState(prevState => ({
      ...prevState,
      error: newError,
    }));
  };

  return (
    <S.Wrapper>
      <S.InputTitle
        name="title"
        value={title}
        placeholder="Title"
        onChange={handleChange}
        ref={titleRef}
      />
      <S.InputType
        name="type"
        value={type}
        onChange={handleChange}
        ref={typeRef}
      >
        <option value="" disabled>
          Select Violation Type
        </option>
        <option value="discrimination">Discrimination</option>{' '}
        <option value="harassment">Harassment</option>{' '}
        <option value="privacy_violation">Privacy Violation</option>{' '}
        <option value="freedom_of_speech">Freedom of Speech Violation</option>{' '}
        <option value="property_rights">Property Rights Violation</option>{' '}
        <option value="other">Other</option>
      </S.InputType>
      {type === 'other' && (
        <S.InputOtherType
          name="otherType"
          value={otherType}
          placeholder="Other Type"
          onChange={handleChange}
          ref={otherTypeRef}
        />
      )}
      <S.InputContent
        name="content"
        value={content}
        placeholder="Content"
        onChange={handleChange}
        ref={contentRef}
      />
      <S.InputFile
        name="file"
        value={file}
        type="file"
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <S.ButtonSubmit onClick={onClickSubmit}>Submit</S.ButtonSubmit>
    </S.Wrapper>
  );
};

export default Report;
