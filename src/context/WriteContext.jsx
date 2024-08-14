import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../api/axios';

const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    content: '',
    reportType: '',
    files: [[]],
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onChangeForm = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onChangeCategory = categoryName => {
    setForm(prev => ({ ...prev, reportType: categoryName }));
  };

  const onChangeFile = (e, index) => {
    const file = e.target.files[0];
    const fileURL = file ? URL.createObjectURL(file) : null;

    setForm(prev => {
      const updatedFiles = [...prev.files];
      updatedFiles[index] = { file, fileURL };

      if (updatedFiles.length < 3 && file) {
        updatedFiles.push({ file: null, fileURL: null });
      }

      return { ...prev, files: updatedFiles };
    });
  };

  const resetForm = () => {
    form.files.forEach(fileObj => {
      if (fileObj.fileURL) {
        URL.revokeObjectURL(fileObj.fileURL);
      }
    });
    setForm({
      title: '',
      content: '',
      reportType: '',
      files: [{ file: null, fileURL: null }], // Reset to one empty file input
    });
  };

  const validateForm = () => {
    if (!form.title) {
      setErrorMessage('Please enter title');
      return false;
    }
    if (!form.content) {
      setErrorMessage('Please enter content');
      return false;
    }
    if (!form.reportType) {
      setErrorMessage('Please select category');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    const postForm = {
      title: form.title,
      content: form.content,
      reportType: form.reportType.toUpperCase(),
      filesId: [],
    };

    try {
      const response = await api.post('/reports', postForm);
      if (response.status === 201) {
        navigate(`/each-report?id=${response.data.reportId}`);
      } else {
        setErrorMessage('Failed to submit the report.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        setErrorMessage(
          error.response.data.error || 'Error submitting the form.',
        );
      } else {
        console.error('Error submitting form:', error.message);
        setErrorMessage('Error submitting the form.');
      }
    }
  };

  const writeValue = useMemo(
    () => ({
      form,
      errorMessage,
      onChangeForm,
      onChangeCategory,
      onChangeFile,
      resetForm,
      validateForm,
      submitForm,
    }),
    [form, errorMessage],
  );

  return (
    <WriteContext.Provider value={writeValue}>{children}</WriteContext.Provider>
  );
};

WriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useWrite = () => useContext(WriteContext);
