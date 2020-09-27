import React, {Component} from 'react';


class UploadImages extends Component{

    
render(){
        return(
            <div className='bg-gray-100'>
                <input type="file"/>
                <button >Upload Test</button>
            </div>
        );
    }

}



export default UploadImages;