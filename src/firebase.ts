import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc, query, orderBy, getDocs, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FeedbackType } from "./types";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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

/**
 * Guarda el feedback del usuario en Firestore y actualiza el estado del código de acceso usado.
 *
 * @param data - Objeto con los detalles del feedback:
 *  - name: Nombre del usuario.
 *  - email: (Opcional) Correo electrónico.
 *  - phone: (Opcional) Teléfono.
 *  - testimony: Testimonio o comentario.
 *  - rating: Calificación (ej: 1-5).
 *  - image: (Opcional) Archivo de imagen.
 *  - codeUsed: Código de acceso usado.
 *
 * @returns Promesa que se resuelve al guardar el feedback y actualizar el código.
 *
 * @remarks
 * - Si se proporciona una imagen, se sube a Firebase Storage y su URL se guarda.
 * - El feedback se almacena en la colección "feedback".
 * - El estado del código de acceso se actualiza a inactivo en "AccessCodes".
 */
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