import React from 'react';
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaWrapperLeft}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>${pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                </div>
                <div className={styles.otherPizzasWrapper}>
                    {otherPizzas.map(otherpizza => {
                            return(
                                <div className={styles.otherPizzas} key={otherpizza.id}>
                                    <Link href={"/" + otherpizza.slug}><a>
                                    <img src={otherpizza.image} alt={otherpizza.name} />
                                    <p>{otherpizza.name}</p>
                                    </a></Link>
                                </div>    
                            )})}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
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
            toppings: ['Sun dried tomato', 'cheese', 'sausage'],
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

    const paths = pizzas.map(pizza => ({
        params: {slug:`${pizza.slug}`}
    }));
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }) => {
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
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
        }
    };
}