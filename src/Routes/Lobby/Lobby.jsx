import React from "react";
import "./Lobby.scss";
import InputText from "../../Components/Input/InputText/InputText";
import InputDropdown from "../../Components/Input/InputDropdown/InputDropdown";

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
                    <InputText /> 
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
