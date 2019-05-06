import React, { Component } from "react";
import { timestampToDateTime } from '../common/commonFunc';

class CommentItem extends Component {

    render() {
        const { topic, num, author, content, timestamp } = this.props;
        return (
            <div className='d-flex justify-content-center mb-3'>
                <div className='col-md-11 border bg-grey1 text-white'>
                    <div className='row'>
                        <div className='col-md-3 border'>
                            <div className='d-flex justify-content-center my-2'>
                                <img className='p-1 border' style={{ height: 120, width: 115 }} src='/images/logo/user.png' alt="user icon"/>
                            </div>
                            <div className="text-center">
                                {author}
                            </div>
                            <div className="mb-4 text-center">
                                {timestampToDateTime(timestamp)}
                            </div>
                        </div>
                        <div className='col-md-9 border'>
                            {num > 0 ?
                                (<div className='my-1 title'>ความคิดเห็นที่ {num}</div>) :
                                (<h4 className='my-1 text-orange'>{topic}</h4>)}
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem;