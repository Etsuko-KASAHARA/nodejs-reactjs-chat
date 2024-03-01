const express = require("express"); //express runs out http server
const cors = require("cors");//cors enables to run the server from any other origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;   //requestbodyからusenameをとる
  

try {
  const r = await axios.post(
    "https://api.chatengine.io/users/",
    { username: username, secret: username, first_name: username},
    { headers: { "Private-Key": "4a93b34e-410a-427f-aa42-2fdfdf7e56a5" } }
  );
  return res.status(r.status).json(r.data);
} catch (e) {
  return res.status(e.response.status).json(e.response.data);
}
});
//return dataか、エラー
//post and authehnticate → return fake usename and password



app.listen(3001);//run in port 3001