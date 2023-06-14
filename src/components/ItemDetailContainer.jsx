import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
        const [item, setItems] = useState({});
        const {id} = useParams();

        useEffect(()=> {
            const db = getFirestore();
            const docRef = doc(db, "items", id)
            getDoc(docRef).then(resultado => {
                if (resultado.exists()) {
                    setItems ({id:resultado.id, ...resultado.data()});
                } else {
                    console.log("Error! no hay productos")
                }
            });
        },[id]);

    return(
        <div> 
            <ItemDetail producto= {item}/>
        </div>
    )
}

export default ItemDetailContainer;