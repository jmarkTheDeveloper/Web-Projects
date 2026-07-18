import os
import sys
import subprocess

# Auto-install dependencies if missing on startup
required_packages = ["flask", "flask-cors", "yt-dlp"]
for pkg in required_packages:
    try:
        __import__(pkg.replace("-", "_"))
    except ImportError:
        print(f"Installing missing dependency: {pkg}...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", pkg])

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import yt_dlp

app = Flask(__name__)
CORS(app)

# Temp storage folder for downloads before serving to client
DOWNLOAD_DIR = os.path.join(os.path.expanduser("~"), "Downloads", "GameVaultMusic")
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def is_ffmpeg_available():
    try:
        subprocess.run(["ffmpeg", "-version"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return True
    except FileNotFoundError:
        return False

@app.route('/api/info', methods=['GET'])
def get_video_info():
    url = request.args.get('url')
    if not url:
        return jsonify({"error": "Missing URL parameter"}), 400
    
    try:
        ydl_opts = {
            'skip_download': True,
            'quiet': True,
            'no_warnings': True
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            return jsonify({
                "title": info.get('title'),
                "duration": info.get('duration'),
                "thumbnail": info.get('thumbnail'),
                "uploader": info.get('uploader')
            })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/download', methods=['POST'])
def download():
    data = request.json or {}
    url = data.get('url')
    format_type = data.get('format', 'mp3') # 'mp3' or 'mp4'
    
    if not url:
        return jsonify({"error": "Missing URL parameter"}), 400

    try:
        # Save template pattern: replace problematic characters in names
        outtmpl = os.path.join(DOWNLOAD_DIR, '%(title)s.%(ext)s')
        
        ydl_opts = {
            'outtmpl': outtmpl,
            'restrictfilenames': True,
            'quiet': True,
            'no_warnings': True
        }

        # Apply format rules
        if format_type == 'mp3':
            ffmpeg_available = is_ffmpeg_available()
            if ffmpeg_available:
                ydl_opts.update({
                    'format': 'bestaudio/best',
                    'postprocessors': [{
                        'key': 'FFmpegExtractAudio',
                        'preferredcodec': 'mp3',
                        'preferredquality': '192',
                    }]
                })
            else:
                # If FFmpeg is missing, download raw audio format (usually .m4a or .webm) without postprocessing
                ydl_opts.update({
                    'format': 'bestaudio[ext=m4a]/bestaudio/best'
                })
        else:
            # Video + Audio combined, preferring mp4 format
            ydl_opts.update({
                'format': 'best[ext=mp4]/best'
            })

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            filename = ydl.prepare_filename(info)
            
            # Adjust filename extension if postprocessors renamed it (e.g. to .mp3)
            if format_type == 'mp3':
                if is_ffmpeg_available():
                    filename = os.path.splitext(filename)[0] + '.mp3'
                else:
                    # Rename the file extension to .mp3 manually, or let it download in original format.
                    # Rerouting to original format is safer if rename could cause codecs issues,
                    # but let's check what format actually exists.
                    pass

            # Search in case the filename differs slightly due to special characters
            actual_file = None
            if os.path.exists(filename):
                actual_file = filename
            else:
                base_name = os.path.splitext(os.path.basename(filename))[0]
                for file in os.listdir(DOWNLOAD_DIR):
                    if file.startswith(base_name):
                        actual_file = os.path.join(DOWNLOAD_DIR, file)
                        break

            if actual_file and os.path.exists(actual_file):
                # Return the file as attachment so the browser downloads it naturally
                return send_file(actual_file, as_attachment=True, download_name=os.path.basename(actual_file))
            else:
                return jsonify({"error": "Downloaded file could not be found on server disk."}), 500
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("\n" + "="*50)
    print("🎵 GAMEVAULT LOCAL DOWNLOADER SERVER")
    print("="*50)
    print("🌍 Running on http://localhost:5000")
    print(f"📂 Temp cache folder: {DOWNLOAD_DIR}")
    print("="*50 + "\n")
    app.run(port=5000, debug=True)
