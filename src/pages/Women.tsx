import React from 'react'
import HomeNavBar from '../components/HomeNavBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import ItemCatalog from '../components/ItemCatalog'
import ItemCard from '../components/ItemCard'
export default function Women() {
  return (
    <div>
        <HomeNavBar/>
        <Carousel/>
        <div>
          <ItemCatalog/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <ItemCard
            title="White shirt "
            imageUrl="/images/women.jpeg"
            price={29.99}
            description={" "}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/women.jpeg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="White shirt "
            imageUrl="/images/women.jpeg"
            price={29.99}
            description={" "}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/women.jpeg"
            price={29.99}
            description={""}
          />
        </div>
      </div>

        <Footer/>
    </div>
  )
}
