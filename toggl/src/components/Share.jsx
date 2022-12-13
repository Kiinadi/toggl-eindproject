import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import Icon from '../img/fotoicon.png'

const Share = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleAdd = async (e) => {
/* Geen default in formulier */
        e.preventDefault()
        setLoading(true)

/* Waardes uit input velden opgehaald */
        const { titelShare, inhoudShare } = e.target.elements
        const fotoShare = e.target.elements.file.files[0]

        try {
/* Een id voor de input aanmaken*/
            const date = new Date().getTime();
            const storageRef = ref(storage, `${date}`);
            // verander date naar iets unieks + date, nu is er wel een risico dat 2 man tegelijkertijd iets upload.

/* Uploading the file to firebase storage and then getting the downloadURL and then setting the
downloadURL to the firestore database. */
            await uploadBytesResumable(storageRef, fotoShare).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await setDoc(doc(db, "fotoShares", `${date}`), {
                            id: `${date}`,
                            titel: titelShare.value, 
                            inhoud: inhoudShare.value,
                            photoURL: downloadURL
                        });
                    } catch (error) {
                        setError(true)
                    }
                })
            })
/* Als error niet inladen */
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }


   /* form html */
    return (
        <div>
            <h1>Post Share</h1>
            <form onSubmit={handleAdd}>
                    <div className='kader'>
                <input required type="text" name='titelShare' placeholder='Titel...' className='titelShare'/>
                <input required type="text" name='inhoudShare' placeholder='Type hier je bericht...' className='inhoudShare'/>
               <label className='icon'>
                <img src={Icon}/>
                <input required type="file" id='file' accept='image/png, image/jpeg'/>
                </label>
                </div>

                <div className='kaderButton'>
                <button disabled={loading} type="submit" className='submitButton'>Post</button>
                {loading && <span>Je share is aan het uploaden...</span>}
                {error && <span>Er is iets misgegaan!</span>}
                </div>
            </form>
            
           
        </div>
    )
}

export default Share