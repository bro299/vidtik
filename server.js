const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;  // Port bisa diatur sesuai dengan variabel lingkungan Vercel

app.use(express.static('public'));
app.use(express.json());

const API_KEY = process.env.RAPIDAPI_KEY;  // Mengambil kunci API RapidAPI dari variabel lingkungan

app.post('/download', async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
            params: { url },
            headers: {
                'X-RapidAPI-Key': "171d319d15msha4bbbddf76401cdp1e3bc1jsn18202c89e037",
                'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
            }
        });
        const videoUrl = response.data.data.play;
        res.json({ videoUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error downloading video' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
