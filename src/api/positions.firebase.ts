import { onValue, ref } from "firebase/database";
import { database } from "./firebase-manager";
import { Position, Category } from "@/interfaces/firebase.interface";

const subscribeToPositions = ( setPositions: (data: any) => void ) => {
  try {
    const myRef = ref(database, 'positions');

    onValue(myRef, (snapshot) => {
      const data = snapshot.val();
      const posList: Position[] = [];

      if (!data) {
        console.log("Empty reference positions");
      }

      // Convert the position data to list of positions
      for (let posKey in data) {
        const posData: Position = data[posKey];
        const categories: Category[] = [];

        for (let cat in posData.categories) {
          categories.push({
            name: cat,
            count: posData.categories[cat].count
          });
        }

        const position: Position = {
          id: posKey,
          categories,
          joint_angles: posData.joint_angles || "",
          last_updated: posData.last_updated || 0
        }

        posList.push(position);
      }

      setPositions(posList);
    })
  } catch (err) {
    console.error("Error at: ", err)
  }
};

export {
  subscribeToPositions
}
