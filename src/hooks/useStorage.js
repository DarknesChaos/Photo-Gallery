import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            // get the percentage value
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            // set the percentage value on pregress bar
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // get the url from firebase storage
            const url = await storageRef.getDownloadURL();
            // get the date and time of the current day
            const createdAt = timestamp();
            // adding the records in firebase database and assign the url and createdAt values
            collectionRef.add({ url, createdAt});
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error };
}

export default useStorage;