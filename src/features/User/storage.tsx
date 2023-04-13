import { doc, setDoc, getDoc } from 'firebase/firestore';
import { PlanType } from './Userslice';
import db from '../../firebase';
import { NavigateFunction } from 'react-router-dom';

export const addData = (
  email: string,
  data: PlanType,
  navigate: NavigateFunction
) => {
  const dbRef = doc(db, 'users', email);
  setDoc(dbRef, data)
    .then((docRef) => {
      console.log(docRef, 'has been added successfully');
      navigate('/signup/paymentPicker');
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};
