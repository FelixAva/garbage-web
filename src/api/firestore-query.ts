import { collection, getDocs, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { firestore } from './firebase-manager';
import {
  Category,
  Count,
  Position
} from "@/interfaces/firebase.interface";

const getCities = async () => {
  const citiesCol = collection(firestore, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());

  return cityList;
}

export async function createCategory(): Promise<void> {
  const categoryRef = doc(collection(firestore, "categories"), "cat1");

  const category: Category = {
    name: "Plastic"
  };

  await setDoc(categoryRef, category);

  const count: Count = {
    counter: 10,
    date: new Date()
  };

  await addDoc(collection(categoryRef, "counting"), count);

  const position: Position = {
    id_position: "pos1",
    joint_angles: "90,45,30"
  };

  await addDoc(collection(categoryRef, "positions"), position);

  console.log("Category created with counting and positions.");
}

export async function getCategoriesWithCounts(): Promise<void> {
  const catSnap = await getDocs(collection(firestore, "categories"));

  for (const cat of catSnap.docs) {
    console.log(`Category: ${cat.data().name}`);

    const countSnap = await getDocs(collection(cat.ref, "counting"));
    countSnap.forEach(doc => {
      const data = doc.data();
      console.log(`→ Count: ${data.counter}, Date: ${data.date.toDate()}`);
    });
  }
}


export {
  getCities
}
