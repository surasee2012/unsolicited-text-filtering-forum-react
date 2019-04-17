import React, { Component } from "react";

class PostItem extends Component {

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 border'>
                        <img style={{ height: 25 }} src='/images/logo/post icon.png' />
                    </div>
                    <div className='col-md-7 py-1 border'>
                        <div className='text-white'>สอบถามการเรียนต่อมหาลัย</div>
                    </div>
                    <div className='col-md-2 py-1 border'>
                        <div className='text-center text-white'>Surasee</div>
                    </div>
                    <div className='col-md-2 py-1 border'>
                        <div className='text-center text-white'>1/2/2019 21:32</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;