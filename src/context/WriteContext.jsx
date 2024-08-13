import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    reportId: 0,
    title: '',
    reportType: '',
    date: '2024-08-11',
    author: 'Bongki Hong',
    likes: 0,
    content: '',
    files: [{ file: null, fileURL: null }], // Initialize with one file input
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onChangeForm = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onChangeCategory = categoryName => {
    setForm(prev => ({ ...prev, category: categoryName }));
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
      category: '',
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
    if (!form.category) {
      setErrorMessage('Please select category');
      return false;
    }
    if (form.files.every(f => !f.file)) {
      setErrorMessage('Please upload at least one file');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const submitForm = () => {
    const storedData = localStorage.getItem('reportData');
    const ReportData = storedData ? JSON.parse(storedData) : [];
    form.id = ReportData.length + 1;
    ReportData.push(form);
    localStorage.setItem('reportData', JSON.stringify(ReportData));

    navigate(`/each-report?id=${form.id}`);
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
