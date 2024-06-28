document.getElementById('downloadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const videoUrl = document.getElementById('videoUrl').value;
    try {
        const response = await fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: videoUrl }),
        });
        const data = await response.json();
        if (data.videoUrl) {
            const fileName = `TikTok_Video_${Date.now()}.mp4`;
            document.getElementById('result').innerHTML = `<a href="${data.videoUrl}" download="${fileName}">Download Video</a>`;
        } else {
            document.getElementById('result').textContent = 'Error downloading video';
        }
    } catch (error) {
        document.getElementById('result').textContent = 'Error downloading video';
    }
});
