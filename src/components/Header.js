import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-grey1'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-6 text-left mt-3'>
                            <h3 className='bold text-orange'>
                                <img style={{ height: 50 }} src='/images/logo/logo.png' />{' '}
                                THE TALK
                            </h3>
                        </div>
                        <div className='col-md-6 text-right mt-4'>
                            <ul className="list-inline title text-white">
                                <li className="list-inline-item">
                                    <Link className="text-white" to="">
                                        หน้าหลัก
                                    </Link>
                                </li>
                                <li className="list-inline-item">|</li>
                                <li className="list-inline-item">
                                    <Link className="text-white" to="/playground">
                                        ทดลองจำแนกข้อความ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Header;