import React, { useState } from 'react'
import './Table.css'
import { Checkbox } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import setting from '../../assets/images/setting-2-svgrepo-com 1.svg';
import menu from '../../assets/images/menu-vertical.svg'
export default function TableC() {
    const initialCheckboxes = [
        { id: 1, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 2, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 3, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 4, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },
        { id: 5, label: 'افضل دكتور...', checked: false, created: 'مند 5 ساعة', condtion: false },

        // Add more checkboxes as needed
    ];

    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAllChange = () => {
        const allChecked = checkboxes.every((checkbox) => checkbox.checked);
        const updatedCheckboxes = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: !allChecked,
        }));
        setCheckboxes(updatedCheckboxes);
    };
    return (
        <div className='table-c mt-5'>
            <div className='d-flex '>
                <div className='col-1'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleSelectAllChange} checked={checkboxes.every((checkbox) => checkbox.checked)} />
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 col-3'><p>الاسم</p></div>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>الحالة</p></div>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>تم انشاءه</p></div>
                <div className='col-4'>
                    <LazyLoadImage src={setting} className='img d-block text-end me-auto ' />
                </div>
            </div>
            {checkboxes.map(item => {
                return (
                    <div className='d-flex border-bottom mt-3'>
                        <div className='col-1'>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckboxChange(item.id)} checked={item.checked} />
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 col-3 '><p>{item.label}</p></div>
                        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>{item.condtion ? <p>not empty</p> : <p className='condtion w-50 text-center'>فارغ</p>}</p></div>
                        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2'><p>{item.created}</p></div>
                        <div className='col-4'>
                            <LazyLoadImage src={menu} className='img d-block text-end me-auto ' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

