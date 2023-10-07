import React from 'react'
import { useProductContext } from '../../context/ProductContext'
import ItemList from '../../components/itemList/ItemList';
import './appHome.css'
import { NavLink } from 'react-router-dom';
import CardsServices from '../../components/cardsServices/CardsServices';
import SvgWorld from '../../components/svg/svgWorld';
import SvgQuality from '../../components/svg/svgQuality';
import SvgOffers from '../../components/svg/SvgOffers';
import SvgSecure from '../../components/svg/SvgSecure';


const AppHome = ({greeting}) => {
    const { data } = useProductContext();
 
    return (
        <>
            <div className='content-img'>
                <h3 className='subtitle-home'>{greeting}</h3>
                <h1 className='title-home'>Mau Store</h1>
                <p className='paragraph-home'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odit iste vero numquam fugiat, soluta libero esse voluptatum molestiae modi.</p>
                <NavLink to='/product'>
                    <button className='btn-home'>SHOW NOW</button>
                </NavLink>
            </div>
       
            <h2 className='title feature'>Feature Products</h2>
            <div className='items-content-grid'>
                {
                data.featureProducts.map(item => (
                    <ItemList key={item.id} {...item} />
                ))
                }
            </div>

            <div className='content-services'>
                <h2 className='title services'>Why Choose Us</h2>
                <div className='items-content-grid content-services'>
                    <CardsServices 
                    title='Worldwide Shipping' 
                    description='We offer worldwide shipping to make our products accessible to customers all over the world.'
                    imagge={<SvgWorld />} />

                    <CardsServices 
                    title='Best Quality' 
                    description='We believe in providing our customers with only the best quality products.'
                    imagge={<SvgQuality />} />

                    <CardsServices 
                    title='Best Offers' 
                    description='We pride ourselves on offering the best deals and discounts to our customers.' 
                    imagge={<SvgOffers />} />

                    <CardsServices 
                    title='Secure Payments' 
                    description='We offer a range of secure payment options to ensure that your transactions are safe and secure'
                    imagge={<SvgSecure />} />
                </div>

            </div>
        </>
    )
}

export default AppHome