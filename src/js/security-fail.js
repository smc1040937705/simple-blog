// 故意引入安全扫描错误：硬编码密钥
const API_KEY = 'sk-1234567890abcdef';
const password = 'admin123';
const secret = 'my-secret-key';

// 使用硬编码密钥
function connectToAPI() {
  return fetch('https://api.example.com', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
}