import React from "react";
import { Component } from "react";


class Packages extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h2><b>Our affordable packages</b></h2>
                <h4>God knows your broke ass can't afford shit</h4>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "250px" }}>
                        <div class="card-header">Basic</div>
                        <div class="card-body">
                            <h4 class="card-title">2 Goliracoins</h4>
                            <ul class="list-group">
                                <li>Basic Services</li>
                                <li>World's best lawyers if you ever get summoned to court</li>
                            </ul>
                        </div>
                    </div>



                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "250px" }}>
                        <div class="card-header">Premium</div>
                        <div class="card-body">
                            <h4 class="card-title">5 Goliracoins</h4>
                            <ul class="list-group">
                                <li>Everything included in the Basic Package</li>
                                <li>Dental care</li>
                            </ul>
                        </div>
                    </div>



                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "250px" }}>
                        <div class="card-header">Golden Deluxe</div>
                        <div class="card-body">
                            <h4 class="card-title">10 Goliracoins</h4>
                            <ul class="list-group">
                                <li>Everything included in the Premium package</li>
                                <li>Top of the line security to ensure 24/7 protection</li>
                                <li>Offensive security allowing you to sue anyone harassing you</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "250px" }}>
                        <div class="card-header">The Guilty Gear One</div>
                        <div class="card-body">
                            <h4 class="card-title">15 Goliracoins</h4>
                            <ul class="list-group">
                                <li>You want this lil bro. Trust.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Packages;