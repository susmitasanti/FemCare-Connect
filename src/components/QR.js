import React from 'react'
import QRCode from 'qrcode.react'

function QR(props) {
    const url = "http://192.168.0.100:3000/Tracker"
  return (
    <div>
      <QRCode value={url}/>
    </div>
  )
}

export default QR






