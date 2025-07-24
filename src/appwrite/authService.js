import { appwrite } from "./client";

export const authService = {

    async createAccount(email,password,name){
        try {
            const user = await appwrite.account.create(
                appwrite.ID.unique(),
                email,
                password,
                name
            )
            if(user){
                const userCopy = {
                    $id: user.$id,
                    email: user.email,
                    name: user.name
                }
                // TODO : dispatch this 'userCopy' in redux store from react component
                return {user, userCopy};
            }
        } catch (error) {
            console.log(error);
        }
    },

    async loginAccount(email, password){
        try {
            const loginedUser = await appwrite.account.createEmailPasswordSession(email, password);
            if(loginedUser){
                const currentUser = await appwrite.account.get();
                const setUser = {
                    $id: currentUser.$id,
                    email: currentUser.email,
                    name: currentUser.name,
                }
                // TODO : dispatch this 'currentUserCopy' in redux store from react component
                return {loginedUser, currentUser};
            }
        } catch (error) {
            console.log(error);
        }
    },

    async logoutAccount(){
        try {
            const user = await appwrite.account.get();
            return await appwrite.account.deleteSession('current');
        } catch (error) {
            console.log(error);
        }
    },

    async getCurrentUser(){
        try {
            const currentUser = await appwrite.account.get();
            const currentUserCopy = {
                $id: currentUser.$id,
                email: currentUser.email,
                name: currentUser.name,
            }
            return currentUserCopy;
        } catch (error) {
            console.log(error);
        }
    }
}
