import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';
import './BrandSection.css';

function BrandSection({ fetchData, data, loading, error }) {
  const [brandIcons, setBrandIcons] = useState([]);
  const [loadingState, setLoading] = useState(true); // Define loading state
  const [errorState, setError] = useState(null); // Define error state

  useEffect(() => {
    async function fetchBrandIcons() {
      try {
        const response = await fetch('http://localhost:3001/api/v1/companies');

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Construct complete image URLs by prepending the base URL
        const baseUrl = ''; // Leave baseUrl empty to use the same domain as your React app
        const brandIconsWithUrls = data.map((brand) => ({
          ...brand,
          icon_url: baseUrl + '/icon/' + brand.icon_url, // Adjust the path as needed
        }));


        setBrandIcons(brandIconsWithUrls);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    // Call the fetchBrandIcons function here
    fetchBrandIcons();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <section className="brand-container">
      <div className="brand-header">
        <p className='rectangle-icon'></p>
        You will be in good company
      </div>
      <h2>Trusted by Leading Brands</h2>
      <div className="brand-cards">
        {brandIcons.map((brand, index) => {
          console.log(brand.icon_url); // Add this line to check the URLs
          return (
            <div key={index} className="brand-card">
              <img
                src={brand.icon_url}
                alt={`Brand ${index}`}
                className="brand-icon"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  fetchData,
})(BrandSection);
