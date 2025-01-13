import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from "@/components/ui/button"
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  className?: string
  children: React.ReactNode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className, children }) => {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''

  const copyToClipboard = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <div className="relative">
      <SyntaxHighlighter
        style={tomorrow}
        language={language}
        PreTag="div"
      >
        {String(children)}
      </SyntaxHighlighter>
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}

export default CodeBlock

