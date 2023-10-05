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
        setBrandIcons(data);
        setLoading(false); // Set loading to false when data is fetched successfully
      } catch (error) {
        setError(error); // Set the error state in case of an error
        setLoading(false); // Set loading to false on error
      }
    }

    fetchBrandIcons();
  }, [fetchData]);

  if (loadingState) {
    return <div>Loading...</div>; // Use loadingState instead of loading
  }

  if (errorState) {
    return <div>Error: {errorState.message}</div>; // Use errorState instead of error
  }

  return (
    <section className="brand-container">
      <div className="brand-header">
        <p className='rectangle-icon'></p>
        You will be in good company
      </div>
      <h2>Trusted by Leading Brands</h2>
      <div className="brand-cards">
        {brandIcons.map((brand, index) => (
          <div key={index} className="brand-card">
            <img
              src={brand.slug}
              alt={brand.name}
              className="brand-icon"
            />
          </div>
        ))}
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
