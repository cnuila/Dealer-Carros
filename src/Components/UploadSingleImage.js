import React, { Component } from 'react';
import { storage } from "../firebase"

export default class SingleImageUploadComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null,
            VIN:props.VIN
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
        storage.ref(this.VIN/this.file);
    }

    upload(e) {
        e.preventDefault()
        
    }

    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img  className="my-3" width="250px" src={this.state.file} alt='' />;
        }
        return (
            <form>
                <div className=" form-group mx-5 shadow-xlcontent-center md:mx-56 md:w-2/5">
                    {imgPreview}
                </div>
                
                <div className="form-group  preview content-center md:mx-24 md:w-2/5">
                    <input type="file" className="text-gray-200 md:mx-48 md:w-2/5"  onChange={this.uploadSingleFile} />
                </div>
               {/*<button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Upload</button> */} 
            </form >
        )
    }
}