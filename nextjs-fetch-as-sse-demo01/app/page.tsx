"use client"
export default function Home() {
  const fetchAsSseClientTest = () => {
    console.log("send")
    const myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRmOGIxNTFiY2Q5MGQ1YjMwMjBlNTNhMzYyZTRiMzA3NTYzMzdhNjEiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ydW1pLWJkYjQzIiwiYXVkIjoicnVtaS1iZGI0MyIsImF1dGhfdGltZSI6MTcxODQyNDE4MywidXNlcl9pZCI6IkNMelA5V3JtQkhVZ1NKQWs5bU9iaWpubGNHTTIiLCJzdWIiOiJDTHpQOVdybUJIVWdTSkFrOW1PYmlqbmxjR00yIiwiaWF0IjoxNzE4NzY5Mzk1LCJleHAiOjE3MTg3NzI5OTUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.A1LDtMst1lAD7pz8-BDdPua766KYHDxB1YVx870hTtAcJ4-hlMCyhA02B94qxjmuuRGNq2I_eVFxKLa4Hd5tlptMQWMFu2fBss-ep0eA1KKlyeJPr72Uha5fzSHuEe0p0yDyS4NZiauWqJgqKuSkX7FIpiJoYtK-YbUgMKiZ589YbV_Bd_nmx5FkWyXJGEqkvX858kKDodKk6c1IKnFBtFs1dgYpbXlauARZ69P17McsNGa7B4V1DtnOdTZ3TKd91x63N6uYgF6DU9D7Iv6lmEOIuubgjb2Ufae85-tjEv6d5GTBblWENqJxn6iUPsytjCFVj5ddYZNs66rkER2bPw");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "ratemyprofessorapi.fly.dev");
    myHeaders.append("Connection", "keep-alive");

    const raw = JSON.stringify({
      "chat_id": "b1822cc3-3e07-484d-95fa-b1e73dc12c6e",
      "message": "which dorm is good ?",
      "image_id": ""
    });

    const url = "https://ratemyprofessorapi.fly.dev/api/v1/chat/send?chat_id=ae9ff8d6-2c5d-4d8d-a05f-26d1b5c32ade&message=which%20dorm%20is%20good%20?&image_id";

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.body!.pipeThrough(new TextDecoderStream()).getReader())
      .then(async (reader) => {
        try {
          while (true) {
            const {value, done} = await reader.read();
            if (done) break;
            console.log('Received', value);
            // 处理接收到的消息
          }
        } catch (error) {
          console.error('Fetch SSE error:', error);
        }
      })
      .catch(error => console.log('error', error));
  }
  return (
    <div>
      <button onClick={fetchAsSseClientTest}>Send</button>

    </div>
  );
}
