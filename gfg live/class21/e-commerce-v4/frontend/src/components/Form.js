import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import styles from "./Form.module.css";

const Form = (props) => {

    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const imageUrlInputRef = useRef();
    const descInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted');
        const newProduct = {
            id: uuid(),
            name: nameInputRef.current.value,
            price: priceInputRef.current.value,
            imageUrl: imageUrlInputRef.current.value,
            desc: descInputRef.current.value
        }

        props.addProduct(newProduct);
    }


  return (
      <form className={styles.product} onSubmit={formSubmitHandler}>
          <h1>This is a Form</h1>
          <div>
            <label htmlFor='name'>Name</label>
            <input type="text" placeholder='Name of the product' id="name" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor='price'>Price</label>
              <input type="number" placeholder='Name of the product' id="price" ref={ priceInputRef } />
          </div>
          <div>
            <label htmlFor='image-url'>Image Url</label>
              <input type="text" placeholder='Name of the product' id="image-url" ref={ imageUrlInputRef} />
          </div>
          <div>
            <label htmlFor='desc'>Desc</label>
            <textarea id="desc" ref={descInputRef}></textarea>
          </div>
            <button>Add+</button>
    </form>
  )
}

export default Form;