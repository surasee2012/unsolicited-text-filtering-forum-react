import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PostItem extends Component {

    render() {
        return (
            <div>
                <Link className='d-flex justify-content-center text-white' to='/post'>
                    <div className='col-md-7 bg-grey1 border'>
                        <div className='row'>
                            <div className='ml-1 p-1'>
                                <img style={{ height: 25 }} src='/images/logo/post icon.png' />
                            </div>
                            <div className='p-1'>
                                {this.props.topic}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 py-1 bg-grey1 border'>
                        <div className='text-center'>{this.props.author}</div>
                    </div>
                    <div className='col-md-2 py-1 bg-grey1 border'>
                        <div className='text-center'>{this.props.lastUpdate}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PostItem;