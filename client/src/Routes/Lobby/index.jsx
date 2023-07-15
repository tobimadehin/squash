import React from "react";
import "./Lobby.scss";
import { Textfield } from "../../Components";

const servers = {
    planets : ["Deuteron", "Axton", "Galacticon", "Capricon"],
}

const Lobby = () => {
    return (
        <div class="div-lobby">
            <div class="div-header-lobby">
                SQUASH
            </div>

            <div class="div-card-lobby">
                <div>
                    <div>
                        Enter your username
                    </div>
                    <div>
                        <Textfield />
                    </div>
                </div>

                <div>
                    <div>
                        Choose a planet
                    </div>
                    <div>

                    </div>
                </div>

                <div>
                    <div>
                        Enter your server ID
                    </div>
                    <button class="button">Join</button>
                </div>
            </div>
        </div>
    )}

export default Lobby;
