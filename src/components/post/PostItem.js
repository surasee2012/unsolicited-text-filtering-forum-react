import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PostItem extends Component {

    render() {
        return (
            <div>
                <Link className='d-flex justify-content-center text-white' to='/post'>
                    <div className='col-md-7 bg-grey1 border'>
                        <div className='row'>
                            <div className='p-1 border border-top-0 border-bottom-0'>
                                <img style={{ height: 25 }} src='/images/logo/post icon.png' />
                            </div>
                            <div className='p-1 border border-top-0 border-bottom-0 border-right-0'>
                                สอบถามการเรียนต่อมหาลัย
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 py-1 bg-grey1 border'>
                        <div className='text-center'>Surasee</div>
                    </div>
                    <div className='col-md-2 py-1 bg-grey1 border'>
                        <div className='text-center'>1/2/2019 21:32</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PostItem;