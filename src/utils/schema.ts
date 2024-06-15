import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const CustomerSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dob: Yup.string().required('Date of birth is required'),
  membership: Yup.string().required('Membership is required'),
  paymentMethod: Yup.string().required('Payment Method is required'),
});

// create admin
export const newMemberSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  adminRole: Yup.string().required('Role is required'),
  password: Yup.string().required('Password is required'),
});

export const addToGroupCustomer = Yup.object().shape({
  groupId: Yup.string().required('Select a group'),
});
export const addNewGroup = Yup.object().shape({
  groupName: Yup.string().required('Enter a group name'),
});

