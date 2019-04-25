import React from "react";
import { Link } from 'react-router-dom';

const PostHeader = () => {

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='col-md-9' />
                <Link className='col-md-2 text-white bg-grey1 border' to='/newpost'>
                        <div className='p-1 text-center title'>
                            ตั้งกระทู้ใหม่
                        </div>
                </Link>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='col-md-7 bg-grey1 border'>
                    <div className='p-1 text-center text-white title'>กระทู้</div>
                </div>
                <div className='col-md-2 bg-grey1 border'>
                    <div className='pt-1 text-center text-white title'>ผู้เขียน</div>
                </div>
                <div className='col-md-2 bg-grey1 border'>
                    <div className='pt-1 text-center text-white title'>การสนทนาล่าสุด</div>
                </div>
            </div>
        </div>
    )
}

export default PostHeader;