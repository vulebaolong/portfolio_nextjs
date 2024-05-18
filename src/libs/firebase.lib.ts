// Import the functions you need from the SDKs you need
import { generateId } from "@/helpers/function.helper";
import { initializeApp } from "firebase/app";
import {
   deleteObject,
   getStorage,
   ref,
   uploadBytesResumable
} from "firebase/storage";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAd4n3mMdrUwYUExE3JMPWWEYGLH7HtfdM",
   authDomain: "portfolio-eb551.firebaseapp.com",
   projectId: "portfolio-eb551",
   storageBucket: "portfolio-eb551.appspot.com",
   messagingSenderId: "436666007607",
   appId: "1:436666007607:web:a9083bcbfe1511b8bebfb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadWithFirebase = async (file: File, folder: string) => {
   try {
      const originalname = file.name;

      const extName = originalname.substring(originalname.lastIndexOf(".") + 1);
      const mainName = `${generateId(10)}.${extName}`;
      const finalName = folder ? `${folder}/${mainName}` : mainName;

      const storageRef = ref(storage, finalName);

      const snapshot = await uploadBytesResumable(storageRef, await file.arrayBuffer(), {
         contentType: file.type,
      });

      return snapshot.metadata.name;
   } catch (error: any) {
      toast.error(error.message);
   }
};
export const deleteWithFirebase = async (name: string, folder: string) => {
   try {
      const desertRef = ref(storage, `${folder}/${name}`);
      await deleteObject(desertRef);
      return true;
   } catch (error: any) {
      toast.error(error.message);
      return false;
   }
};
