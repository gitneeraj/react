import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import * as moment from 'moment';

const startDate = moment().subtract(30, 'days');
const endDate = moment();

export const renderDateRangePicker = ({
    handleDatepickerEvent,
    children
  }) => (
    <div className="form-group">
        <DateRangePicker startDate={startDate} endDate={endDate} onApply={handleDatepickerEvent}>            
            {children}
        </DateRangePicker>
    </div>
  );