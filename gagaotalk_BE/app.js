const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const userjson = path.join(__dirname, '../', '/gagaotalk', '/src', '/component' ,'/data', '/user.json');
const chatjson = path.join(__dirname, '../', '/gagaotalk', '/src', '/component' ,'/data', '/chatroom.json');
app.set('port', process.env.PORT || 8080);

app.post('/addUser', async (req, res) => {
    try {
        const info = req.body;
        const currentUserData = JSON.parse(await fs.readFile(userjson, 'utf-8'));
        let newUser={"id":info.id,"name":info.name,"profile":info.profile}

        currentUserData.push(newUser);

        await fs.writeFile(userjson, JSON.stringify(currentUserData, null, 2), 'utf-8');

        const currentChatRoomData = JSON.parse(await fs.readFile(chatjson, 'utf-8'));
        if (!currentChatRoomData[0].participant.includes(info.name)){
            currentChatRoomData[0].participant.push(info.name);
        }

        await fs.writeFile(chatjson, JSON.stringify(currentChatRoomData, null, 2), 'utf-8');

        return res.json({ success: true, message: 'Data added successfully' });
    } catch (error) {
        console.error('Error writing to JSON file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
});

app.post('/addMsg', async (req, res) => {
    try{
        const msg = req.body;
        const currentChatRoomData = JSON.parse(await fs.readFile(chatjson, 'utf-8'));

        const chatRoomId = msg.id
        const content = msg.content.trim();

        let id = null;

        for(let chatroom of currentChatRoomData){
            if(chatroom.id === chatRoomId){
                id = chatRoomId*100000 + chatroom.chats.length + 1
            }
        }

        const newMsg = {"id": id,"sender":msg.uid,"chat":content};
        let i = 0;
        for(let chatroom of currentChatRoomData){
            if(parseInt(chatroom.id) === parseInt(chatRoomId)){
                currentChatRoomData[i].chats.push(newMsg);

                if(content.startsWith("#calculate")){
                    const formula = newMsg.chat.split(' ');
                    let result = null;
                    if(formula.length === 2){
                        const calc = (form) => {return new Function('return ' + form)()};
                        result =`${formula[1]}의 계산 결과는 ${calc(formula[1])}입니다.`;
                    }else{
                        result =`잘못된 입력입니다. #calculate 계산식 의 형식을 지켜주세요`;
                    }
                    const botMsg = {"id": id+1,"sender":0,"chat":result};
                    currentChatRoomData[i].chats.push(botMsg);
                }
                await fs.writeFile(chatjson, JSON.stringify(currentChatRoomData, null, 2), 'utf-8');
                return res.json({ success: true, message: 'Data added successfully' });
            }
            i += 1;
        }
    }catch (error) {
        console.error('Error writing to JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
})

app.post('/addChatroom', async (req, res) => {
    try{
        const user = req.body;
        const currentChatRoomData = JSON.parse(await fs.readFile(chatjson, 'utf-8'));

        const id = currentChatRoomData.length + 1;
        const name = user.name;
        const participant = [user.name];
        const chats = [];

        const newChatroom = {"id": id,"name":name,"participant":participant,"chats":chats};

        currentChatRoomData.push(newChatroom);

        await fs.writeFile(chatjson, JSON.stringify(currentChatRoomData, null, 2), 'utf-8');

        return res.json({ success: true, message: 'Data added successfully' });
    } catch (error) {
        console.error('Error writing to JSON file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중')
});