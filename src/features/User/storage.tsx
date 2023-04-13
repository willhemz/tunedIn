import { doc, setDoc, getDoc } from 'firebase/firestore';
import { PlanType, checkPlan, fetchPlan } from './Userslice';
import db from '../../firebase';
import { NavigateFunction } from 'react-router-dom';
import { DispatchFunc } from '../../store';

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

export const getData = async (
  email: string,
  dispatch: DispatchFunc,
  navigate?: NavigateFunction,
  link?: string
) => {
  const docRef = doc(db, 'users', email);
  try {
    const docSnap = await getDoc(docRef);
    dispatch(fetchPlan(docSnap.data() as PlanType));
    dispatch(checkPlan());
    if (link && navigate) navigate(link);
  } catch (error) {
    alert(error);
    console.log(error);
  }
};
