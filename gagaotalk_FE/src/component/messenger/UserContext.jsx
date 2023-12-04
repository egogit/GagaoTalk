import React, {createContext, useContext, useState} from "react";
import axios from "axios";
import users from "../data/user.json"

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userId, setUserId] = useState("");

    const register = (id, profile) => {
        if(!id){
            alert("id를 다시 입력해주세요.");
            return false;
        }else{
            for(let user of users){
                if(user.name === id){
                    alert("이미 존재하는 아이디입니다. 기존 계정으로 로그인합니다.");
                    setUserId(id);
                    return true;
                }
            }
            if (!profile){
                alert("사용할 Profile url을 입력해주세요.");
                return false;
            }
            id = id.trim();
            axios.post('http://localhost:8080/addUser',{
                id: users.length + 1,
                name: id,
                profile: profile
            }).then((res) => {
                alert("id가 등록되었습니다.");
                setUserId(id);
            }).catch((err) => {
                console.log(err);
                return false;
            })
            return true;
        }
    }

    const getProfilePic = (id) => {

        let profile = null;
        for(let user of users){
            if(user.id === id){
                profile = user.profile;
                return profile
            }
        }
    }

    const changeIdToName = (id) => {
        let name = null;
        for(let user of users){
            if(user.id === id){
                name = user.name;
                return name;
            }
        }
        return null;
    }

    const changeNameToId = (name) => {
        let id = null;
        for(let user of users){
            if(user.name === name){
                id = user.id;
                return id;
            }
        }
        return null;
    }

    const logout = () => {
        if(!userId){
            alert("오류가 발생했습니다.");
            setUserId("");
        }else{
            setUserId("");
        }
    }

    return(
        <UserContext.Provider value={{userId, register, logout, getProfilePic, changeIdToName, changeNameToId}}>
            {children}
        </UserContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(UserContext);
}