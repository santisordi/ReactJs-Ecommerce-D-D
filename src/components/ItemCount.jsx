import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock}) => {
        const [items, setItems] = useState(1);
        const [itemStock, setItemStock] = useState(stock);
        const [itemAgregado, setItemAgregado] = useState(false)

        const incrementarStock = () => {
            if (items < itemStock) {
            setItems(items + 1);
            }
        }; 

        const decrementarStock = () => {
            if (items > 1) {
            setItems(items - 1);
            }
        };

        const onAdd = () => {
            if (items <= itemStock){
                setItemStock(itemStock-items);
                setItems(1)
                setItemAgregado(true)
            }
        }

        useEffect(()=> {
            setItemStock(stock);
        }, [stock])

        return (
        <div>
            <div className="container ">
            <div className="row">
                <div className="col">
                    <div className="btn-group"role="group" aria-label="Basic   example">
                        <button type="button" className="btn btn-light"onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light"onClick={incrementarStock}> +</button>
                    </div>
                </div>

            </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="btn-group"role="group" aria-label="Basic example">
                        {itemAgregado ? <Link to= {"/cart"}  className="btn btn-light m-2"> Finalizar compra</Link> : <button type="button" className="btn btn-light m-2" onClick={onAdd}>Agregar al carrito</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
        };

    export default ItemCount;
