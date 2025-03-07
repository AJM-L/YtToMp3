# YouTube to MP3 Converter

A simple, customizable web application that allows you to download YouTube videos as MP3 files. This project combines a React frontend with a Flask backend to provide a clean, user-friendly interface for converting YouTube videos to audio files.

## Project Motivation

I created this project because I wanted a reliable YouTube to MP3 conversion tool that I could customize to my needs. Commercial solutions often come with limitations, ads, or privacy concerns. Building my own tool allowed me to:

- Apply my learning of React and Flask in a practical project
- Create a clean, ad-free interface
- Customize the functionality to my specific requirements
- Control where downloaded files are stored
- Understand the underlying technology behind media conversion

## Features

- Simple, intuitive user interface
- Convert YouTube videos to MP3 format with a single click
- Clear downloads folder with one button
- Visual feedback during conversion process
- Error handling for invalid URLs

## Technologies Used

### Frontend
- React.js
- Axios for API requests
- Modern JavaScript (ES6+)
- Inline CSS for styling

### Backend
- Flask (Python web framework)
- Flask-CORS for cross-origin resource sharing
- PyTubeFix for YouTube video processing
- Python's built-in libraries (os, glob) for file management

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Python](https://www.python.org/) (v3.7 or higher)
- [pip](https://pip.pypa.io/en/stable/installation/) (Python package installer)

## Setup and Installation

### Backend Setup

1. Clone this repository to your local machine
2. Navigate to the backend directory:
   ```
   cd YtToMp3/backend
   ```
3. Create a virtual environment (recommended):
   ```
   python -m venv venv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```
5. Install the required Python packages:
   ```
   pip install flask flask-cors pytubefix
   ```
6. Create a downloads directory if it doesn't exist:
   ```
   mkdir -p downloads
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd ../frontend
   ```
2. Install the required npm packages:
   ```
   npm install
   ```

## Running the Application

### Start the Backend Server

1. From the backend directory with the virtual environment activated:
   ```
   python server.py
   ```
   The Flask server will start on http://localhost:5000

### Start the Frontend Development Server

1. From the frontend directory:
   ```
   npm start
   ```
   The React development server will start on http://localhost:3000

2. Open your browser and navigate to http://localhost:3000

## How to Use

1. Enter a valid YouTube URL in the input field
2. Click the "Convert to MP3" button
3. Wait for the conversion to complete (you'll see a success message)
4. Find your MP3 file in the `backend/downloads` directory
5. Use the "Clear Downloads" button to remove all downloaded MP3 files when needed

## Troubleshooting

- If you encounter issues with PyTubeFix, try updating it to the latest version:
  ```
  pip install --upgrade pytubefix
  ```
- Make sure both the frontend and backend servers are running simultaneously
- Check that port 5000 is not being used by another application
- Ensure you have a stable internet connection for downloading videos

## License

This project is open source and available under the MIT License.

## Acknowledgements

- [PyTubeFix](https://github.com/JuanBindez/pytubefix) for providing the YouTube download functionality
- React and Flask communities for their excellent documentation and resources
