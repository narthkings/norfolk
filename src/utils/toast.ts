import toast from 'react-hot-toast';

export const SuccessToast = (message: string) => {
  return toast.success(message);
};

export const ErrorToast = (message: string) => {
  return toast.error(message);
};