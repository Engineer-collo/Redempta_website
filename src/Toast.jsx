// src/components/Toast.js
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toast functions
export const showSuccessToast = (message) =>
  toast.success(message, {
    className: 'bg-green-100 text-green-800 border border-green-300 rounded p-4',
    bodyClassName: 'text-sm',
    progressClassName: 'bg-green-500',
  });

export const showErrorToast = (message) =>
  toast.error(message, {
    className: 'bg-red-100 text-red-800 border border-red-300 rounded p-4',
    bodyClassName: 'text-sm',
    progressClassName: 'bg-red-500',
  });

export const showInfoToast = (message) =>
  toast.info(message, {
    className: 'bg-blue-100 text-blue-800 border border-blue-300 rounded p-4',
    bodyClassName: 'text-sm',
    progressClassName: 'bg-blue-500',
  });

export const showWarningToast = (message) =>
  toast.warn(message, {
    className: 'bg-yellow-100 text-yellow-800 border border-yellow-300 rounded p-4',
    bodyClassName: 'text-sm',
    progressClassName: 'bg-yellow-500',
  });

// Toast container
export const ToastContainerWrapper = () => (
  <ToastContainer position="top-center" autoClose={2000} />
);