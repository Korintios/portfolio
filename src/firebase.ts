import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc, query, orderBy, getDocs, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FeedbackType } from "./types";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

/**
 * Verifica si un código de acceso es válido.
 * @param code - El código de acceso (ej: "ABC123")
 * @returns `true` si es válido y activo, `false` si no existe o está desactivado
 */
export async function validateAccessCode(code: string): Promise<boolean> {
  if (!code) return false;

  const codeRef = doc(db, "AccessCodes", code);
  const snapshot = await getDoc(codeRef);

  if (!snapshot.exists()) return false;

  const data = snapshot.data();
  return data.active === true;
}


/**
 * Obtiene todos los testimonios ordenados por fecha de creación.
 * @returns Array de objetos de feedback
 */
export async function getFeedback(): Promise<FeedbackType[]> {
  const feedbackRef = collection(db, "feedback");
  const q = query(feedbackRef, orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data
    } as FeedbackType;
  });
}

export async function saveFeedback(data: {
  name: string;
  email?: string;
  phone?: string;
  testimony: string;
  rating: number;
  image?: File;
  codeUsed: string;
}) {
  let imageUrl = "";

  if (data.image) {
    const storageRef = ref(storage, `feedback-images/${Date.now()}-${data.image.name}`);
    await uploadBytes(storageRef, data.image);
    imageUrl = await getDownloadURL(storageRef);
  }

  const feedbackRef = collection(db, "feedback");
  await addDoc(feedbackRef, {
    name: data.name,
    email: data.email || "",
    phone: data.phone || "",
    testimony: data.testimony,
    rating: data.rating,
    imageUrl,
    codeUsed: data.codeUsed,
    createdAt: serverTimestamp()
  });

  const codeRef = doc(db, "AccessCodes", data.codeUsed);
  await updateDoc(codeRef, {
    active: false,
    usedAt: serverTimestamp()
  });

  console.log("Feedback guardado con éxito");
}

export default { app, analytics };