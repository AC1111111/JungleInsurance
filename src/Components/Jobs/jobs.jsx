import React, { useState } from "react";
import { Component } from "react";
import DiscordService from "../../services/DiscordService";


function Jobs() {

    const [formData, setFormData] = useState({
        data: {
            Position: "",
            Reason: "",
            Skills: ""
        },
        error: {}
    })

    const Send = DiscordService();

    const setData = (name, value) => {
        setFormData({
            data: {
                ...formData.data,
                [name]: value
            },
            error: {}
        });
    }

    const discordPost = () => {
        const toSend = Object.entries(formData.data).map((d) => `${d[0]}: ${d[1]}`).join("\n");
        Send(toSend);
    }

    return (
        <div>
            <h2>
                We're always looking for new people to help us sca-satisfy customers
            </h2>
            <div className="col d-flex justify-content-center">
                <div className="card border-primary" style={{ width: 600, height: 1000}}>
                    <div className="card-header">Your Application</div>
                    <div className="card-body">
                        <h4 className="card-title">Tell us about yourself</h4>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            discordPost();
                        }}>
                            <fieldset>
                                <div>
                                    <label for="Position" className="form-label mt-4">What do you want to work as?</label>
                                    <input type="text" className="form-control" name="Position" aria-describedby="PosHelp" placeholder="Enter desired position"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div>
                                    <label for="Reason" className="form-label mt-4">Why do you want that job?</label>
                                    <input type="text" className="form-control" name="Reason" aria-describedby="ReasonHelp" placeholder="Enter a reason"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div>
                                    <label for="Skills" className="form-label mt-4">what skills do you bring to the table?</label>
                                    <input type="text" className="form-control" name="Skills" aria-describedby="SkillsHelp" placeholder="Give us the sauce"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                    <div>
                                        <label for="Gambling Addiction" className="form-label mt-4">Are you a gambling addict?</label>
                                        <select multiple="" className="form-select" name="Gambling Addiction"
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setData(name, value);
                                            }}>
                                            <option>Yes</option>
                                            <option>No</option>
                                            <option>Maybe</option>
                                            <option>Recovering</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label for="Main" className="form-label mt-4">What character do you main?</label>
                                    <input type="text" className="form-control" name="Main" aria-describedby="MainHelp" placeholder="It better not be someone cringe"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div>
                                    <label for="MenuItem" className="form-label mt-4">If you were one thing on the McDonald's menu what would it be? Also, why?</label>
                                    <input type="text" className="form-control" name="Menu Item" aria-describedby="MenuItemHelp" placeholder="I'm not sure why they're asking this"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div>
                                    <label for="ClientHelp" className="form-label mt-4">if a client needs help, what will you do?</label>
                                    <input type="text" className="form-control" name="What they would do to help a client" aria-describedby="ClientHelpHelp" placeholder="I would start throwing out Karate chops and shit frfr ong"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div>
                                    <label for="ActivityLevel" className="form-label mt-4">Are you active in the server?</label>
                                    <select multiple="" className="form-select" name="Activity Level"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }}>
                                        <option>Talk there everyday for atleast 20 minutes</option>
                                        <option>Check in everyday</option>
                                        <option>Fairly active but not everyday</option>
                                        <option>Moderately active</option>
                                        <option>Check in once a month</option>
                                        <option>Lurker</option>
                                        <option>I don't know how I got here dawg</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="Username" className="form-label mt-4">Discord username</label>
                                    <input type="text" className="form-control" name="Username" aria-describedby="UsernameHelp" placeholder="EpikDiscordUser69420"
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                            </fieldset>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <h2>We'll get back to you if and when you're hired</h2>
        </div>
    );
}

export default Jobs;