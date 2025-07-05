// // sendMessage.ts
// import { db } from './firebaseConfig';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function sendMessage({ name, email, subject, message }: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
      <div>
        <h1>Hello {name}</h1>
        <p>Your message: {message}</p>
        <p>Subject: {subject}</p>
        <p>Email: {email}</p>
      </div>
    

    return { success: true };
  } catch (error) {
    console.error("Error sending message: ", error);
    return { success: false, error };
  }
}