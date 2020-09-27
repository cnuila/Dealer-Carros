import React, {Component} from 'react';
//import $ from jQuery;

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
/*   
    JS
$(document).ready(function() {
  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<span class=\"pip\">" +
            "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
            "<br/><span class=\"remove\">Remove image</span>" +
            "</span>").insertAfter("#files");
          $(".remove").click(function(){
            $(this).parent(".pip").remove();
          });


          });
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API")
  }
});   */
    


    
render(){
        return(
            <div class="field" align="left">
                <h3>Seleccione las imagenes del vehiculo</h3>
                <input type="file" id="files" name="files[]" multiple />
        ]   </div>
        );
    }

}



export default UploadImages;