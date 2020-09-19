import React, { Component } from "react";

class InfoCarro extends Component {
    render() {
        return (
            <div>
                <div class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
                    <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
                        <h2 class="text-4xl text-center font-hairline md:leading-loose text-grey md:mt-8 mb-4">Question!</h2>
                        <p class="text-xl leading-normal mb-8 text-center">
                            Are you enjoying Tailwind CSS?
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default InfoCarro;