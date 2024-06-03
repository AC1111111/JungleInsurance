import React from "react";
import axios from "axios";

function DiscordService() {
    const Send = async(data) => {
        const body = {
            content: "New Application",
            tts: false,
            color: "white",
            embeds: [{
                title: "Candidate Profile",
                description: data
            }]
        }
        try {
            const data = await axios.post("https://discord.com/api/webhooks/1246852482122911744/_ohQ5oW7jwCg8rVOBoN_NYBgHtyjHzimUgS2ha0T-AmUkbgBw5wj_K_OsfHGXBgZzz9G", body);
            console.log(data)
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        Send
    )
}

export default DiscordService