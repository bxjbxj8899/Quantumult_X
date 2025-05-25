// 获取响应正文
let body = $response.body;
let obj = JSON.parse(body);

// 假设API响应中包含商品ID字段（需根据实际API调整）
let productId = obj.data?.productId || obj.data?.wareId; // 商品ID可能在不同字段
if (productId) {
    // 生成京粉App链接（链接格式需确认）
    let jfLink = `jingfenapp://item/${productId}`; // 示例格式，可能需要调整为实际京粉链接
    // 修改响应中的链接字段（字段名需根据API调整）
    obj.data.link = jfLink; // 假设link是跳转字段
}

// 将修改后的响应返回
body = JSON.stringify(obj);
$done({ body });