import React from "react";
import { Component } from "react";
import banner from "../../assets/Banner.png";
import Packages from "./Packages";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <p style={{textAlign: 'left'}}><h4>Did you know that you have rights? The constitution says you do! And so do we here at Jungle Insurance. <br/><br/>

                    Gooning in the jungle gets dangerous, doesn't it?<br/>

                    For a substantial fee, and we do mean substantial, you and your loved ones can be safe.<br/>

                    Better safe than sorry. That's our motto.<br/><br/>

                    <b>Don't zork outside of the VC but if you do, call us.</b>
                    </h4></p>
                    <img src={banner} alt="Jungle Insurance Banner" width= '100%' height = '100%'/>
                </div>
                <div>
                    <h5>Here's a quick primer to give you an idea about our services</h5>
                    <iframe width="100%" height="720"  src="https://www.youtube.com/embed/rJ0VxnzaVNw" title="Insurance is awesome" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <Packages/>
                </div>
            </div>
        );
    }
}

export default Home;