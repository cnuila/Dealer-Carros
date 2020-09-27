import React, {Component} from 'react';


class UploadImages extends Component{
    constructor(props){
        super(props)
        this.state = {
            file:null
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            file:URL.createObjectURL(event.target.files[0])
        })
    }

    


    
render(){
        return(
            <div class="container">
                <section class="max-w-sm rounded overflow-hidden shadow-lg">
                    <form>
                        <div class="row">
                            <div class="px-6 py-4">
                                <div class="hidden">
                                    <span>+<i/></span>
                                </div>
                                <input className="hidden" type="file" multiple id="add-new-photo" name="images[]"/>

                                
                            </div>
                        </div>
                    </form> 
                </section>
      </div>
        );
    }

}



export default UploadImages;