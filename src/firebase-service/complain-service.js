import { addDoc, collection, query, getDocs, where } from "firebase/firestore"; 
import { firestoreDb } from "../Components/Firebase/Config";

export async function createComplain(complain) {
    return await addDoc(collection(firestoreDb, "complains"), complain);
}

// export async function listComplain(email) {
//     const _query = query(
//       collection(firestoreDb, 'complains'),
//       where('createdBy', '==', email)
//     );
//     const querySnapshot = await getDocs(_query);

//     const list = [];
//     querySnapshot.forEach((doc) =>{
//         list.push(doc.data())
//     });
//     return list;
//   }
// export async function listComplain(email) {
//     let _query;

//     // Check if the user is the admin
//     if (email === "davidvictor297@gmail.com") {
//         // Admin can view all complaints, so no filter is applied
//         _query = query(collection(firestoreDb, 'complains'));
//     } else {
//         // Non-admin users can only view their own complaints
//         _query = query(
//           collection(firestoreDb, 'complains'),
//           where('createdBy', '==', email)
//         );
//     }

//     const querySnapshot = await getDocs(_query);

//     const list = [];
//     querySnapshot.forEach((doc) => {
//         list.push(doc.data());
//     });
//     return list;
// }
export async function listComplain(email) {
    let _query;

    // Check if the user is the admin
    if (email === "davidvictor297@gmail.com") {
        // Admin can view all complaints, so no filter is applied
        _query = query(collection(firestoreDb, 'complains'));
    } else {
        // Non-admin users can only view their own complaints
        _query = query(
          collection(firestoreDb, 'complains'),
          where('createdBy', '==', email)
        );
    }

    const querySnapshot = await getDocs(_query);

    const list = [];
    querySnapshot.forEach((doc) => {
        list.push({
            id: doc.id,       // Include the document ID
            ...doc.data()      // Spread the document data
        });
    });
    return list;
}
