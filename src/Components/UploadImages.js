import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
    borrar(e){
        e.preventDefault()
        this.fileObj.prototype.pop();
    }

    render() {
        return (
            <form>
                <div className=" form-group content-center max-w-lg mx-5 md:mx-64 border-black  align-middle" >
                    {(this.fileArray || []).map(url => (
                        <img src={url} width="300px" alt="..." />
                    ))}
                    {/*este div es donde se ponen las fotos */}
                </div>
                <div className="form-group  preview content-center md:mx-24 md:w-2/5">
                    <input type="file" className="form-control  text-gray-200 preview content-center md:mx-48 md:w-2/5" onChange={this.uploadMultipleFiles} multiple />
                </div>
                {/*este boton te podria servir para lo de guardar */}
                <button type="button " className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
                </form>
        )
    }
}