import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import Client from '../../services/client'
import { context } from "../../context";
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton,
} from "./styles";

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('');
    const ctx = useContext(context)

    async function getUserData() {
        try{
            const response = await Client.get(`/${searchedValue}`, {
                params: {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                      }
                }
            })
            const repos = await Client.get((`/${searchedValue}/repos`))
            ctx.setRepos(repos);
            ctx.setUserData(response.data);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)}/>

                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
};

export default Header;
