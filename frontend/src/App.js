import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [url, setUrl] = useState('');
    const [isConverting, setIsConverting] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const [fileType, setFileType] = useState('mp3');

    const handleDownload = async () => {
        setDownloaded(false);
        setIsConverting(true);
        if (fileType === 'mp3') {
            await axios.post('/download', { url: url })
                .then(response => {
                    console.log(response.data);
                    return response.data;
                })
                .catch(error => console.error("Error converting:", error));
        } else {
            await axios.post('/download-video', { url: url })
                .then(response => {
                    console.log(response.data);
                    return response.data;
                })
                .catch(error => console.error("Error downloading video:", error));
        }
        setIsConverting(false);
        setDownloaded(true);
    }

    const handleClear = async () => {
        setDownloaded(false);
        setIsConverting(false);
        await axios.post('/clear')
            .then(response => console.log(response.data))
            .catch(error => console.error("Error clearing:", error));
    }
    
    return (
        <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center', 
                marginBottom: '30px',
                color: '#e53935'
            }}>
                YouTube Converter
            </h1>
            
            <div style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <input 
                        type="text" 
                        placeholder="Enter YouTube URL" 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)} 
                        style={{
                            padding: '10px 15px', 
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            fontSize: '16px'
                        }}
                    />
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '15px', 
                        marginBottom: '10px',
                        width: '100%', 
                        justifyContent: 'center' 
                    }}>
                        <label style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '5px',
                            cursor: 'pointer' 
                        }}>
                            <input 
                                type="radio" 
                                name="fileType" 
                                value="mp3" 
                                checked={fileType === 'mp3'} 
                                onChange={() => setFileType('mp3')} 
                            />
                            MP3 (Audio)
                        </label>
                        <label style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '5px',
                            cursor: 'pointer' 
                        }}>
                            <input 
                                type="radio" 
                                name="fileType" 
                                value="mp4" 
                                checked={fileType === 'mp4'} 
                                onChange={() => setFileType('mp4')} 
                            />
                            MP4 (Video)
                        </label>
                    </div>
                    
                    <button 
                        onClick={handleDownload} 
                        disabled={isConverting || !url} 
                        style={{
                            backgroundColor: isConverting ? '#9e9e9e' : '#e53935', 
                            color: 'white', 
                            padding: '10px 20px', 
                            borderRadius: '5px',
                            border: 'none',
                            cursor: isConverting || !url ? 'not-allowed' : 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        {isConverting ? 'Processing...' : fileType === 'mp3' ? 'Convert to MP3' : 'Download MP4'}
                    </button>
                    
                    {isConverting && 
                        <p style={{ color: '#2196f3', fontWeight: 'bold' }}>
                            {fileType === 'mp3' ? 'Converting your video to MP3...' : 'Downloading your MP4 video...'}
                        </p>
                    }
                    
                    {downloaded && 
                        <p style={{ color: '#4caf50', fontWeight: 'bold' }}>
                            Success! Your {fileType.toUpperCase()} file is ready in the downloads folder.
                        </p>
                    }
                </div>
            </div>
            
            <button 
                onClick={handleClear} 
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#757575',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Clear Downloads
            </button>
        </div>
    );
}

export default App;