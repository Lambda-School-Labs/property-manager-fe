import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { Divider } from '@material-ui/core';
import WorkOrderTable from '../../../components/WorkOrders/WorkOrderTable';
import IconButton from '../../../components/UI/IconButton';
import { getWorkOrders } from '../../../store/actions';
import Searchbar from '../../../components/Searchbar/Searchbar';

export default function WorkOrders() {
  const dispatch = useDispatch();
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  useEffect(() => {
    dispatch(getWorkOrders());
  }, [dispatch]);

  return (
    <div className="work-orders">
      <div className="dashboardHeader">
        <h1>Work Orders</h1>
        <Searchbar />
      </div>
      <Divider />
      <IconButton
        url="/dashboard/workorders/add"
        icon={<AddIcon />}
        text="Add New"
      />
      <WorkOrderTable workOrderList={workOrderList} />
    </div>
  );
}
