import { db } from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";
//collection ref
const colRef = collection(db, "findCommunities");
//getting collection data
let communities = [];
getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      communities.push({ ...doc.data(), id: doc.id });
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log(communities);
export default communities;
