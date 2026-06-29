import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export type EnquiryStatus = "new" | "contacted" | "quoted" | "confirmed" | "archived";

export interface Enquiry {
  id?: string;
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  message: string;
  source: "contact" | "events" | "menu-pdf";
  status: EnquiryStatus;
  createdAt?: Timestamp | null;
}

const COLLECTION_NAME = "enquiries";

export async function submitEnquiry(
  data: Omit<Enquiry, "id" | "status" | "createdAt">
): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...data,
    status: "new" as EnquiryStatus,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function fetchEnquiries(): Promise<Enquiry[]> {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as Enquiry[];
}

export async function updateEnquiryStatus(
  id: string,
  status: EnquiryStatus
): Promise<void> {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, { status });
}

export async function deleteEnquiry(id: string): Promise<void> {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
}
