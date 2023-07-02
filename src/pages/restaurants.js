import React, { useEffect, useState } from 'react';
import { EnhancedTable, _data } from '../utils/table';

const RestaurantsPage = () => {
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)',
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)',
    },
    {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
    },
  ];

  const endpoint = 'restaurant/test';
  const method = 'get';
  const params = {};
  const queryParams = {};

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await _data(endpoint, method, params, queryParams);
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <EnhancedTable data={data} headCells={headCells} />
    </div>
  );
};

export default RestaurantsPage;
