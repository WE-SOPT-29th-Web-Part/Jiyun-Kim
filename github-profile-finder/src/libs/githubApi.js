import axios from 'axios';


export const callUserData = async (user) => {
    try {
        //서버에 있는 데이터를 받아오는 방법
        //서버 통신이 필요하다. 서버 통신에는 받아오는데 시간이 걸린다 => 비동기다
        //비동기 처리를 하기 위한 방법 => async await
        //axios는 서버 통신을 도와주는 툴
        const {data} = await axios.get(`https://api.github.com/users/${user}`);
        return await data;
    } catch(err) {
        console.log(err);
        return null;
    }
}
