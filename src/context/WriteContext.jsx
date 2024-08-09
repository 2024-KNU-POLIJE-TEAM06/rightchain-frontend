import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
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

      // Add a new file input if there's less than 3 and the current one is filled
      if (updatedFiles.length < 3 && file) {
        updatedFiles.push({ file: null, fileURL: null });
      }

      return { ...prev, files: updatedFiles };
    });
  };

  const resetForm = () => {
    form.files.forEach(fileObj => {
      if (fileObj.fileURL) {
        URL.revokeObjectURL(fileObj.fileURL); // Revoke the URL when resetting the form
      }
    });
    setForm({
      title: '',
      content: '',
      category: '',
      files: [{ file: null, fileURL: null }], // Reset to one empty file input
    });
  };

  const onClickSubmit = () => {
    if (!form.title) {
      setErrorMessage('Please enter title');
    } else if (!form.content) {
      setErrorMessage('Please enter content');
    } else if (!form.category) {
      setErrorMessage('Please select category');
    } else if (form.files.every(f => !f.file)) {
      setErrorMessage('Please upload at least one file');
    } else {
      setErrorMessage('');
      console.log(form); // Now the form includes the files array
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
      onClickSubmit,
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
