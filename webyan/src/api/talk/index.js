import request from "../../utils/request";

export const OpenAIStream = async (apiUrl, apiKey, model, messagesToSend, messages) => {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    console.log('apiUrl', apiUrl)
    // apiUrl = "http://10.110.232.63:7863/chat/chat/";
//        apiUrl = "http://chengxiai.top:7862/chat/chat/";
//        apiUrl = "http://127.0.0.1:8000/bar";
    apiUrl = "http://120.55.181.128:80/bar"
    console.log("###########################1###########################");
    const data = {
        'model_name': model,
        'messages': messagesToSend,
    }
    let res = await request.post(apiUrl, {
        method: 'post',
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    }).then(response => {
        console.log("###################################################");
        console.log(response);
        // 检查响应是否有效
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const reader = response.body.getReader();
        let result = '';
        return reader.read().then(function processChunk({ done, value }) {
            // 当数据块可用时
            if (value) {
//                    result += JSON.parse(new TextDecoder('utf-8').decode(value))["result"];
//                    result += JSON.parse(new TextDecoder('utf-8').decode(value))["text"];
                result += new TextDecoder('utf-8').decode(value);
                // setMessages(
                //     [
                //         ...messages,
                //         {content: result, role: 'assistant'}
                //     ]
                // );
            }
            if (done) {
                console.log('Download complete.');
                return result;
            } else {
                return reader.read().then(processChunk);
            }
        });
    }).then(data => {
        console.log('Complete data:', data);
        return data;
    })
        .catch(error => {
            console.error('Error:', error);
        });
    let answer = res;
    const textEncoder = new TextEncoder();
    const textUint8Array = textEncoder.encode(answer);
    const textStream = new ReadableStream({
        start(controller) {
            // 将 Uint8Array 写入到控制器
            controller.enqueue(textUint8Array);
            // 关闭流
            controller.close();
        },
    });
    return textStream;
};
// export const OpenAIStream = async () = {
//     method:'post',


// }
