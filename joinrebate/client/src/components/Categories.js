import React, { useState, useEffect } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories and products from your API
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await fetch('/api/categories');
        const categoriesData = await categoriesResponse.json();

        // Fetch products
        const productsResponse = await fetch('/api/products');
        const productsData = await productsResponse.json();

        // Calculate product counts for each category
        const categoriesWithCount = categoriesData.map(category => ({
          ...category,
          productCount: productsData.filter(product => product.category_id === category.id).length
        }));

        setCategories(categoriesWithCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="widget widget_categories">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href="#">{category.name}<span>{category.productCount}</span></a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
