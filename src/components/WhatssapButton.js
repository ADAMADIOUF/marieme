import ReactWhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const WhatsAppButton = () => {
  return (
    <WhatsAppWidget
      phoneNumber='+221775489633'
      message='Bonjour, comment puis-je vous aider ?'
    />
  )
}

export default WhatsAppButton
