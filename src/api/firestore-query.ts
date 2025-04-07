import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase-manager';

const getCities = async () => {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());

  return cityList;
}

export {
  getCities
}
