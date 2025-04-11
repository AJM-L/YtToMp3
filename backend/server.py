from flask import Flask, request, jsonify
from flask_cors import CORS
from pytubefix import YouTube
import os
import asyncio
import glob

app = Flask(__name__)
CORS(app)



@app.route('/data')
def get_data():
    return {'message': 'Data from Flask!'}

@app.route('/download', methods=['POST'])
def download():
    try:
        url = request.json['url']
        yt = YouTube(url)
        video = yt.streams.filter(only_audio=True).first()
        title = yt.streams[0].title
        video.download(output_path='./downloads', filename=f"{title}.mp3")
        return jsonify({'message': 'File downloaded!'})
    except Exception as e:
        return jsonify({'message': str(e)})

@app.route('/download-video', methods=['POST'])
def download_video():
    try:
        url = request.json['url']
        yt = YouTube(url)
        video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
        title = yt.streams[0].title
        video.download(output_path='./downloads', filename=f"{title}.mp4")
        return jsonify({'message': 'Video downloaded!'})
    except Exception as e:
        return jsonify({'message': str(e)})

@app.route('/clear', methods=['POST'])
def clear():
    try:
        for file in glob.glob('./downloads/*.mp3'):
            os.remove(file)
        for file in glob.glob('./downloads/*.mp4'):
            os.remove(file)
        return jsonify({'message': 'Downloads folder cleared!'})
    except Exception as e:
        return jsonify({'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)