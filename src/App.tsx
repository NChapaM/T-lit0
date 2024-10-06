import React, { useState } from 'react'
import { Send, Image, HelpCircle, Calendar } from 'lucide-react'
import ContentCard from './components/ContentCard'
import Chat from './components/Chat'

function App() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])

  const handleSendMessage = async (message: string) => {
    const newMessages = [...messages, { role: 'user', content: message }]
    setMessages(newMessages)

    // Aquí iría la lógica para conectarse a Azure OpenAI
    // Por ahora, simularemos una respuesta
    setTimeout(() => {
      setMessages([...newMessages, { role: 'assistant', content: 'Esta es una respuesta simulada de Azure OpenAI.' }])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar con tarjetas de contenido */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Consejos de Prompts</h2>
        <ContentCard
          icon={<Image className="w-6 h-6" />}
          title="Crea una Imagen"
          description="Genera imágenes únicas con IA"
        />
        <ContentCard
          icon={<HelpCircle className="w-6 h-6" />}
          title="Consultar un Incidente"
          description="Obtén ayuda sobre problemas específicos"
        />
        <ContentCard
          icon={<Calendar className="w-6 h-6" />}
          title="Calendario de Pagos"
          description="Revisa tus próximos pagos"
        />
      </div>

      {/* Chat principal */}
      <div className="flex-1 p-4">
        <Chat messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}

export default App