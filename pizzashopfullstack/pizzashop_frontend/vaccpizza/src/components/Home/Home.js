import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import {useState} from 'react';


export default function Home() {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese_pizza',
            toppings: ['mozzarella cheese', 'sauce'],
            image: 'https://images.unsplash.com/photo-1571207133905-e63101f15248?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            price: 9.99,
        },
        {
            id: '2',
            name: 'Lombo',
            slug: 'lombo',
            toppings: ['cheese', 'vegetable', 'mussarella'],
            image: 'https://images.unsplash.com/photo-1598346763242-7fbe5769efd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            price: 12.99,
        },
        {
            id: '3',
            name: 'Meat',
            slug: 'meat',
            toppings: ['meat', 'cheese', 'spice'],
            image: 'https://images.unsplash.com/photo-1523982440192-e61efd063acb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=816&q=80',
            price: 10.99,
        },
        {
            id: '4',
            name: 'Ham',
            slug: 'ham',
            toppings: ['ham', 'cheese'],
            image: 'https://images.unsplash.com/photo-1595378833483-c995dbe4d74f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            price: 6.99,
        },
        {
            id: '5',
            name: 'Sun Dried Tomato',
            slug: 'sun_dried_tomato',
            toppings: ['Sun dried tomato' , 'cheese', 'sausage'],
            image: 'https://images.unsplash.com/photo-1528137973883-41b75386f217?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
            price: 14.99,
        },
        {
            id: '6',
            name: 'Endive',
            slug: 'Endive',
            toppings: ['endive', 'tomato', 'buffalo cheese', 'cheese'],
            image: 'https://images.unsplash.com/photo-1594307736500-bb4f4d51f03e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            price: 19.99,
        },
    ]

    const [keyword, setKeyword] = useState('');

    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)

    )

    const onInputChange = (e) =>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }
    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or topping..." className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ? 
                (
                    <div className={styles.nopeContainer}>Sorry :( ...there is no pizza or topping with that.</div>                     
                )
                :
                (
                filteredPizzas.map(pizza => {
                    return(
                        <div className={styles.pizzaItem} key={pizza.id}>
                            <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}>
                                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                            </a></Link>
                            <div className={styles.pizzaText}>
                                <p className={styles.pizzaHeader}>{pizza.name}</p>
                                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                <p className={styles.pizzaPrice}>${pizza.price}</p>
                            </div>
                        </div>    
                    )
                })
                    )}
            </div>
        </div>)}