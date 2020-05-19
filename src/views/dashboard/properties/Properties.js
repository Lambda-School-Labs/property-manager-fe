// React
import React from 'react';
// MUI
import Divider from '@material-ui/core/Divider';
// Icons
import AddIcon from '@material-ui/icons/Add';
// Components
import PropTable from './PropTable';
import IconButton from '../../../components/UI/IconButton';
import Searchbar from '../../../components/Searchbar/Searchbar';

export default function PropertyList() {
  return (
    <div className="properties">
      <div className="dashboardHeader">
        <h1>Properties</h1>
        <Searchbar />
      </div>
      <Divider />
      <br />
      <IconButton
        url="/dashboard/properties/add"
        icon={<AddIcon />}
        text="Add New"
      />
      <PropTable />
    </div>
  );
}
