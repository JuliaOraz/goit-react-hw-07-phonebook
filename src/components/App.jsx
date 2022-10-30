import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PhoneBook } from 'components/PhoneBook';

export const App = () => {
  return (
    <>
      <PhoneBook />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
